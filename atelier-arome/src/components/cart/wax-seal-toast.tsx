'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

interface WaxSealToastProps {
  message: string;
  type?: ToastType;
  duration?: number;
  onDismiss?: () => void;
}

export function WaxSealToast({
  message,
  type = 'success',
  duration = 3000,
  onDismiss,
}: WaxSealToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onDismiss?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onDismiss]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-5 w-5" />;
      case 'error':
        return <XCircle className="h-5 w-5" />;
      case 'warning':
        return <AlertCircle className="h-5 w-5" />;
      default:
        return <CheckCircle className="h-5 w-5" />;
    }
  };

  const getColors = () => {
    switch (type) {
      case 'success':
        return {
          bg: 'bg-success',
          text: 'text-parchment',
          border: 'border-success-dark',
        };
      case 'error':
        return {
          bg: 'bg-error',
          text: 'text-parchment',
          border: 'border-error-dark',
        };
      case 'warning':
        return {
          bg: 'bg-warning',
          text: 'text-ink',
          border: 'border-warning-dark',
        };
      default:
        return {
          bg: 'bg-info',
          text: 'text-parchment',
          border: 'border-info-dark',
        };
    }
  };

  const colors = getColors();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-4 right-4 z-toast"
          initial={{ opacity: 0, y: -20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.8 }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 25,
          }}
        >
          {/* Wax Seal Container */}
          <div className="relative">
            {/* Toast Message */}
            <div
              className={cn(
                'relative px-4 py-3 rounded-lg shadow-lg border',
                'flex items-center space-x-3',
                colors.bg,
                colors.text,
                colors.border
              )}
            >
              <div className="flex-shrink-0">{getIcon()}</div>
              <div className="flex-1">
                <p className="font-medium">{message}</p>
              </div>
            </div>

            {/* Wax Seal Decoration */}
            <motion.div
              className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-gold to-gold-dark rounded-full shadow-lg"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: 'spring',
                stiffness: 500,
                damping: 15,
                delay: 0.2,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4 h-4 bg-gold-light rounded-full opacity-60" />
              </div>
              
              {/* Wax drip effect */}
              <motion.div
                className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-3 bg-gold-dark rounded-full"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                  delay: 0.4,
                }}
              />
            </motion.div>

            {/* Seal impression */}
            <motion.div
              className="absolute -top-1 -left-1 w-6 h-6 border-2 border-gold-dark rounded-full opacity-30"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 20,
                delay: 0.3,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-bold text-gold-dark">A</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Toast manager for multiple toasts
export function useWaxSealToast() {
  const [toasts, setToasts] = useState<Array<{ id: string; message: string; type: ToastType }>>([]);

  const showToast = (message: string, type: ToastType = 'success') => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, message, type }]);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return {
    showToast,
    toasts: toasts.map((toast) => (
      <WaxSealToast
        key={toast.id}
        message={toast.message}
        type={toast.type}
        onDismiss={() => dismissToast(toast.id)}
      />
    )),
  };
}
