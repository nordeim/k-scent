'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingBag, Eye, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { formatPrice } from '@/lib/utils';
import { useVialStore } from '@/stores/vial.store';
import { HumourBadge } from './humour-badge';
import { RarityBadge } from './rarity-badge';

interface Essence {
  id: string;
  folioNumber: string;
  commonName: string;
  latinName: string;
  description: string;
  humour: string;
  rarity: string;
  season: string;
  price: number;
  volumeMl: number;
  stockQuantity: number;
  notes: string[];
  image: string;
}

interface EssenceCardProps {
  essence: Essence;
  className?: string;
}

export function EssenceCard({ essence, className }: EssenceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const addItem = useVialStore((state) => state.addItem);
  const isInVial = useVialStore((state) => 
    state.items.some((item) => item.id === essence.id)
  );

  const handleAddToVial = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(essence);
    
    // Trigger haptic feedback if available
    if ('vibrate' in navigator) {
      navigator.vibrate([50]);
    }
  };

  const isOutOfStock = essence.stockQuantity <= 0;

  return (
    <Link href={`/essence/${essence.id}`}>
      <motion.div
        className={cn(
          'manuscript-card group cursor-pointer',
          'transition-all duration-300',
          isHovered && 'transform -translate-y-2 shadow-lg',
          className
        )}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Card Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="text-xs text-ink-muted font-mono mb-1">
              Folio {essence.folioNumber}
            </div>
            <h3 className="font-manuscript-display text-xl font-semibold text-ink group-hover:text-gold transition-colors">
              {essence.commonName}
            </h3>
            <p className="text-sm text-ink-muted italic">
              {essence.latinName}
            </p>
          </div>
          
          <div className="flex flex-col items-end space-y-2">
            <HumourBadge humour={essence.humour} />
            <RarityBadge rarity={essence.rarity} />
          </div>
        </div>

        {/* Product Image Placeholder */}
        <div className="relative mb-4 aspect-square bg-parchment-dark rounded-lg overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center text-ink-muted">
            <div className="text-center">
              <div className="text-4xl mb-2">🌿</div>
              <div className="text-xs">{essence.commonName}</div>
            </div>
          </div>
          
          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 bg-ink bg-opacity-80 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center space-x-4">
              <button
                className="manuscript-button manuscript-button--ghost text-parchment"
                onClick={(e) => {
                  e.preventDefault();
                  // Quick view functionality
                }}
              >
                <Eye className="h-4 w-4" />
                <span>View</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Description */}
        <p className="text-sm text-ink-muted leading-relaxed mb-4 line-clamp-3">
          {essence.description}
        </p>

        {/* Notes */}
        <div className="flex flex-wrap gap-2 mb-4">
          {essence.notes.map((note, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-parchment-dark rounded-full text-ink-muted"
            >
              {note}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div>
            <div className="font-manuscript-display text-lg font-semibold text-ink">
              {formatPrice(essence.price)}
            </div>
            <div className="text-xs text-ink-muted">
              {essence.volumeMl}ml • {essence.season}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* Stock indicator */}
            <div className={cn(
              'text-xs px-2 py-1 rounded-full',
              isOutOfStock
                ? 'bg-error-light text-error-dark'
                : essence.stockQuantity <= 5
                ? 'bg-warning-light text-warning-dark'
                : 'bg-success-light text-success-dark'
            )}>
              {isOutOfStock
                ? 'Out of Stock'
                : essence.stockQuantity <= 5
                ? `${essence.stockQuantity} left`
                : 'In Stock'}
            </div>

            {/* Add to Vial Button */}
            <button
              onClick={handleAddToVial}
              disabled={isOutOfStock || isInVial}
              className={cn(
                'manuscript-button px-3 py-2',
                isInVial
                  ? 'manuscript-button--ghost opacity-50 cursor-not-allowed'
                  : isOutOfStock
                  ? 'manuscript-button--ghost opacity-50 cursor-not-allowed'
                  : 'manuscript-button--primary'
              )}
              aria-label={isInVial ? 'Already in vial' : 'Add to vial'}
            >
              {isInVial ? (
                <>
                  <Star className="h-4 w-4 fill-current" />
                  <span className="sr-only">In Vial</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="h-4 w-4" />
                  <span className="sr-only">Add to Vial</span>
                </>
              )}
            </button>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
