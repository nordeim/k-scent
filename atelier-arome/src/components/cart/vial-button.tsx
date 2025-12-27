'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { useVialStore } from '@/stores/vial.store';
import { cn } from '@/lib/utils';

export function VialButton() {
  const itemCount = useVialStore((state) => state.getItemCount());
  const isVialOpen = useVialStore((state) => state.isOpen);
  const toggleVial = useVialStore((state) => state.toggleVial);

  return (
    <motion.button
      onClick={toggleVial}
      className={cn(
        'relative p-2 rounded-full transition-all duration-200',
        'hover:bg-parchment-dark',
        isVialOpen && 'bg-parchment-dark'
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Vial (${itemCount} items)`}
    >
      <ShoppingBag className="h-6 w-6 text-ink" />
      
      {/* Item count badge */}
      {itemCount > 0 && (
        <motion.div
          className="absolute -top-1 -right-1 bg-gold text-ink text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 500, damping: 15 }}
        >
          {itemCount > 99 ? '99+' : itemCount}
        </motion.div>
      )}

      {/* Liquid level indicator */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gold to-transparent rounded-b-full"
        animate={{
          height: itemCount > 0 ? `${Math.min(itemCount * 10, 80)}%` : '0%',
        }}
        transition={{ duration: 0.5 }}
        style={{ opacity: 0.3 }}
      />
    </motion.button>
  );
}
