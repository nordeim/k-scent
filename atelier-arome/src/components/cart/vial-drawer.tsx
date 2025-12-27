'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Minus, Plus, Trash2 } from 'lucide-react';
import { useVialStore } from '@/stores/vial.store';
import { cn } from '@/lib/utils';
import { formatPrice } from '@/lib/utils';
import { WaxSealToast } from './wax-seal-toast';

export function VialDrawer() {
  const {
    isOpen,
    items,
    subtotal,
    itemCount,
    closeVial,
    removeItem,
    updateQuantity,
    clearVial,
  } = useVialStore();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleCheckout = () => {
    // Navigate to checkout page
    window.location.href = '/checkout';
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-ink bg-opacity-50 z-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeVial}
          />

          {/* Drawer */}
          <motion.div
            className="fixed right-0 top-0 h-full w-full max-w-md bg-parchment shadow-2xl z-modal flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-parchment-dark">
              <div>
                <h2 className="font-manuscript-display text-2xl font-semibold text-ink">
                  Your Vial
                </h2>
                <p className="text-sm text-ink-muted">
                  {itemCount} {itemCount === 1 ? 'essence' : 'essences'}
                </p>
              </div>
              
              <button
                onClick={closeVial}
                className="p-2 text-ink-muted hover:text-ink transition-colors rounded-full hover:bg-parchment-dark"
                aria-label="Close vial"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Vial Contents */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="text-center py-16">
                  <ShoppingBag className="h-16 w-16 text-ink-muted mx-auto mb-4" />
                  <h3 className="font-manuscript-display text-xl text-ink mb-2">
                    Your vial is empty
                  </h3>
                  <p className="text-ink-muted mb-6">
                    Discover our collection of handcrafted essences.
                  </p>
                  <button
                    onClick={closeVial}
                    className="manuscript-button manuscript-button--primary"
                  >
                    Explore Compendium
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center space-x-4 p-4 rounded-lg bg-parchment-dark"
                    >
                      {/* Product Image */}
                      <div className="w-16 h-16 bg-parchment rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">🌿</span>
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-manuscript-display font-semibold text-ink truncate">
                          {item.commonName}
                        </h3>
                        <p className="text-sm text-ink-muted">
                          {item.volumeMl}ml • {formatPrice(item.price)}
                        </p>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-2 mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                            className="p-1 text-ink-muted hover:text-ink transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          
                          <span className="text-sm font-medium text-ink min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 text-ink-muted hover:text-ink transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-ink-muted hover:text-error transition-colors"
                        aria-label="Remove from vial"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-parchment-dark p-6 space-y-4">
                {/* Subtotal */}
                <div className="flex items-center justify-between">
                  <span className="font-manuscript-display text-lg text-ink">
                    Subtotal
                  </span>
                  <span className="font-manuscript-display text-xl font-semibold text-ink">
                    {formatPrice(subtotal)}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={handleCheckout}
                    className="w-full manuscript-button manuscript-button--primary"
                    disabled={items.length === 0}
                  >
                    <span>Proceed to Dispatch</span>
                    <span>→</span>
                  </button>
                  
                  <button
                    onClick={clearVial}
                    className="w-full manuscript-button manuscript-button--ghost"
                  >
                    Clear Vial
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
