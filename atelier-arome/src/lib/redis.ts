import { Redis } from '@upstash/redis';

// Redis client for caching and session management
export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_URL!,
  token: process.env.UPSTASH_REDIS_TOKEN!,
});

// Cache helper functions
export async function getCachedData<T>(
  key: string,
  fetcher: () => Promise<T>,
  ttl: number = 3600
): Promise<T> {
  try {
    const cached = await redis.get<T>(key);
    if (cached) return cached;
  } catch (error) {
    console.warn('Cache read failed:', error);
  }

  const fresh = await fetcher();
  
  try {
    await redis.set(key, fresh, { ex: ttl });
  } catch (error) {
    console.warn('Cache write failed:', error);
  }

  return fresh;
}

// Cache invalidation helper
export async function invalidateCache(pattern: string): Promise<void> {
  try {
    const keys = await redis.keys(pattern);
    if (keys.length > 0) {
      await redis.del(...keys);
    }
  } catch (error) {
    console.warn('Cache invalidation failed:', error);
  }
}

// Rate limiting helper
export async function checkRateLimit(
  key: string,
  limit: number,
  window: number // in seconds
): Promise<{ allowed: boolean; remaining: number; reset: number }> {
  try {
    const result = await redis.eval(
      `
      local key = KEYS[1]
      local limit = tonumber(ARGV[1])
      local window = tonumber(ARGV[2])
      local current = redis.call("INCR", key)
      
      if current == 1 then
        redis.call("EXPIRE", key, window)
      end
      
      local ttl = redis.call("TTL", key)
      local remaining = math.max(0, limit - current)
      
      return {current <= limit and 1 or 0, remaining, ttl}
      `,
      [key],
      [limit.toString(), window.toString()]
    );

    return {
      allowed: result[0] === 1,
      remaining: result[1],
      reset: result[2],
    };
  } catch (error) {
    console.warn('Rate limit check failed:', error);
    return { allowed: true, remaining: limit, reset: window };
  }
}
