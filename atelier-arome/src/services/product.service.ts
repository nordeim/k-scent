import { prisma } from '@/lib/prisma';
import { Prisma, Essence, HumourType, RarityType, SeasonType } from '@prisma/client';
import { redis } from '@/lib/redis';

export interface EssenceFilter {
  humour?: HumourType;
  rarity?: RarityType;
  season?: SeasonType;
  priceMin?: number;
  priceMax?: number;
  inStock?: boolean;
  isFeatured?: boolean;
  search?: string;
}

export interface EssenceSort {
  field: 'price' | 'createdAt' | 'commonName' | 'rarity';
  direction: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T;
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export class ProductService {
  private static readonly CACHE_TTL = 3600; // 1 hour
  private static readonly CACHE_PREFIX = 'essence:';

  static async getAll(options: {
    filter?: EssenceFilter;
    sort?: EssenceSort;
    page?: number;
    limit?: number;
    includeRitualData?: boolean;
  }): Promise<PaginatedResponse<Essence[]>> {
    const {
      filter = {},
      sort = { field: 'createdAt', direction: 'desc' },
      page = 1,
      limit = 12,
      includeRitualData = false,
    } = options;

    const skip = (page - 1) * limit;

    // Build cache key
    const cacheKey = `${this.CACHE_PREFIX}all:${JSON.stringify(options)}`;

    try {
      // Try to get from cache first
      const cached = await redis.get(cacheKey);
      if (cached) {
        return cached as PaginatedResponse<Essence[]>;
      }
    } catch (error) {
      console.warn('Cache read failed:', error);
    }

    // Build where clause
    const where: Prisma.EssenceWhereInput = {
      isActive: true,
      ...(filter.humour && { humour: filter.humour }),
      ...(filter.rarity && { rarity: filter.rarity }),
      ...(filter.season && { season: filter.season }),
      ...(filter.isFeatured && { isFeatured: filter.isFeatured }),
      ...(filter.inStock && { stockQuantity: { gt: 0 } }),
      ...(filter.priceMin !== undefined && { price: { gte: filter.priceMin } }),
      ...(filter.priceMax !== undefined && { price: { lte: filter.priceMax } }),
      ...(filter.search && {
        OR: [
          { commonName: { contains: filter.search, mode: 'insensitive' } },
          { latinName: { contains: filter.search, mode: 'insensitive' } },
          { description: { contains: filter.search, mode: 'insensitive' } },
          { notes: { hasSome: [filter.search] } },
        ],
      }),
    };

    // Build order by clause
    const orderBy: Prisma.EssenceOrderByWithRelationInput = {
      [sort.field]: sort.direction,
    };

    // Fetch data
    const [essences, total] = await Promise.all([
      prisma.essence.findMany({
        where,
        orderBy,
        skip,
        take: limit,
        include: {
          images: { orderBy: { order: 'asc' } },
          ritualMetadata: includeRitualData,
          botanicalInfo: true,
        },
      }),
      prisma.essence.count({ where }),
    ]);

    const response: PaginatedResponse<Essence[]> = {
      data: essences,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };

    // Cache the result
    try {
      await redis.set(cacheKey, response, { ex: this.CACHE_TTL });
    } catch (error) {
      console.warn('Cache write failed:', error);
    }

    return response;
  }

  static async getById(id: string, includeRitualData = false): Promise<Essence | null> {
    const cacheKey = `${this.CACHE_PREFIX}id:${id}:${includeRitualData}`;

    try {
      const cached = await redis.get(cacheKey);
      if (cached) {
        return cached as Essence;
      }
    } catch (error) {
      console.warn('Cache read failed:', error);
    }

    const essence = await prisma.essence.findUnique({
      where: { id, isActive: true },
      include: {
        images: { orderBy: { order: 'asc' } },
        ritualMetadata: includeRitualData,
        botanicalInfo: true,
        alchemicalProcess: { orderBy: { stepNumber: 'asc' } },
        artisanNotes: { orderBy: { createdAt: 'desc' } },
        testimonials: { where: { isApproved: true } },
      },
    });

    if (essence) {
      try {
        await redis.set(cacheKey, essence, { ex: this.CACHE_TTL });
      } catch (error) {
        console.warn('Cache write failed:', error);
      }
    }

    return essence;
  }

  static async getBySlug(slug: string, includeRitualData = false): Promise<Essence | null> {
    const cacheKey = `${this.CACHE_PREFIX}slug:${slug}:${includeRitualData}`;

    try {
      const cached = await redis.get(cacheKey);
      if (cached) {
        return cached as Essence;
      }
    } catch (error) {
      console.warn('Cache read failed:', error);
    }

    const essence = await prisma.essence.findUnique({
      where: { slug, isActive: true },
      include: {
        images: { orderBy: { order: 'asc' } },
        ritualMetadata: includeRitualData,
        botanicalInfo: true,
        alchemicalProcess: { orderBy: { stepNumber: 'asc' } },
        artisanNotes: { orderBy: { createdAt: 'desc' } },
        testimonials: { where: { isApproved: true } },
      },
    });

    if (essence) {
      try {
        await redis.set(cacheKey, essence, { ex: this.CACHE_TTL });
      } catch (error) {
        console.warn('Cache write failed:', error);
      }
    }

    return essence;
  }

  static async getFeatured(limit = 6): Promise<Essence[]> {
    const cacheKey = `${this.CACHE_PREFIX}featured:${limit}`;

    try {
      const cached = await redis.get(cacheKey);
      if (cached) {
        return cached as Essence[];
      }
    } catch (error) {
      console.warn('Cache read failed:', error);
    }

    const essences = await prisma.essence.findMany({
      where: { isActive: true, isFeatured: true },
      orderBy: { createdAt: 'desc' },
      take: limit,
      include: {
        images: { orderBy: { order: 'asc' } },
        botanicalInfo: true,
      },
    });

    try {
      await redis.set(cacheKey, essences, { ex: this.CACHE_TTL });
    } catch (error) {
      console.warn('Cache write failed:', error);
    }

    return essences;
  }

  static async getByHumour(humour: HumourType, limit = 12): Promise<Essence[]> {
    const cacheKey = `${this.CACHE_PREFIX}humour:${humour}:${limit}`;

    try {
      const cached = await redis.get(cacheKey);
      if (cached) {
        return cached as Essence[];
      }
    } catch (error) {
      console.warn('Cache read failed:', error);
    }

    const essences = await prisma.essence.findMany({
      where: { isActive: true, humour },
      orderBy: { createdAt: 'desc' },
      take: limit,
      include: {
        images: { orderBy: { order: 'asc' } },
        botanicalInfo: true,
      },
    });

    try {
      await redis.set(cacheKey, essences, { ex: this.CACHE_TTL });
    } catch (error) {
      console.warn('Cache write failed:', error);
    }

    return essences;
  }

  static async search(query: string, limit = 12): Promise<Essence[]> {
    const cacheKey = `${this.CACHE_PREFIX}search:${query}:${limit}`;

    try {
      const cached = await redis.get(cacheKey);
      if (cached) {
        return cached as Essence[];
      }
    } catch (error) {
      console.warn('Cache read failed:', error);
    }

    const essences = await prisma.essence.findMany({
      where: {
        isActive: true,
        OR: [
          { commonName: { contains: query, mode: 'insensitive' } },
          { latinName: { contains: query, mode: 'insensitive' } },
          { description: { contains: query, mode: 'insensitive' } },
          { notes: { hasSome: [query] } },
        ],
      },
      orderBy: {
        _relevance: {
          fields: ['commonName', 'latinName', 'description'],
          search: query,
          sort: 'desc',
        },
      },
      take: limit,
      include: {
        images: { orderBy: { order: 'asc' } },
        botanicalInfo: true,
      },
    });

    try {
      await redis.set(cacheKey, essences, { ex: this.CACHE_TTL });
    } catch (error) {
      console.warn('Cache write failed:', error);
    }

    return essences;
  }

  static async getRelatedEssences(essenceId: string, limit = 4): Promise<Essence[]> {
    const essence = await this.getById(essenceId);
    if (!essence) return [];

    const related = await prisma.essence.findMany({
      where: {
        id: { not: essenceId },
        isActive: true,
        OR: [
          { humour: essence.humour },
          { rarity: essence.rarity },
          { season: essence.season },
        ],
      },
      orderBy: { createdAt: 'desc' },
      take: limit,
      include: {
        images: { orderBy: { order: 'asc' } },
        botanicalInfo: true,
      },
    });

    return related;
  }

  static async updateStock(essenceId: string, quantityChange: number): Promise<void> {
    await prisma.essence.update({
      where: { id: essenceId },
      data: {
        stockQuantity: {
          increment: quantityChange,
        },
      },
    });

    // Clear cache for this essence
    await this.clearCache(essenceId);
  }

  static async invalidateCache(): Promise<void> {
    try {
      const keys = await redis.keys(`${this.CACHE_PREFIX}*`);
      if (keys.length > 0) {
        await redis.del(...keys);
      }
    } catch (error) {
      console.warn('Cache invalidation failed:', error);
    }
  }

  private static async clearCache(essenceId: string): Promise<void> {
    try {
      // Clear all cache entries that might include this essence
      const keys = await redis.keys(`${this.CACHE_PREFIX}*`);
      await redis.del(...keys);
    } catch (error) {
      console.warn('Cache clear failed:', error);
    }
  }
}

// Type exports for use in components
export type { EssenceFilter, EssenceSort, PaginatedResponse };
