'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function GoldLeafAccents() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax transforms for different accent elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -180]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating gold leaf fragments */}
      <motion.div
        className="absolute top-20 left-10"
        style={{ y: y1, rotate: rotate1 }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="w-8 h-8 bg-gradient-to-br from-gold to-gold-dark rounded-full opacity-60 blur-sm" />
      </motion.div>

      <motion.div
        className="absolute top-40 right-20"
        style={{ y: y2, rotate: rotate2 }}
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      >
        <div className="w-12 h-12 bg-gradient-to-br from-gold-light to-gold rounded-lg opacity-50 blur-md" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-1/4"
        style={{ y: y3 }}
        animate={{
          opacity: [0.1, 0.4, 0.1],
          x: [-10, 10, -10],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      >
        <div className="w-6 h-6 bg-gradient-to-br from-bronze to-gold rounded-full opacity-40 blur-sm" />
      </motion.div>

      {/* Decorative corner flourishes */}
      <motion.div
        className="absolute top-0 right-0 w-32 h-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, delay: 1 }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M 90 10 Q 80 20 70 10 Q 60 0 50 10 Q 40 20 30 10 Q 20 0 10 10"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
            className="text-gold"
          />
          <circle cx="85" cy="15" r="1" fill="currentColor" className="text-gold" />
          <circle cx="15" cy="15" r="1" fill="currentColor" className="text-gold" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 w-32 h-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, delay: 1.5 }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M 10 90 Q 20 80 30 90 Q 40 100 50 90 Q 60 80 70 90 Q 80 100 90 90"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
            className="text-gold"
          />
          <circle cx="15" cy="85" r="1" fill="currentColor" className="text-gold" />
          <circle cx="85" cy="85" r="1" fill="currentColor" className="text-gold" />
        </svg>
      </motion.div>

      {/* Shimmer effect overlay */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'linear-gradient(45deg, transparent 0%, transparent 100%)',
            'linear-gradient(45deg, transparent 0%, rgba(201, 167, 105, 0.1) 50%, transparent 100%)',
            'linear-gradient(45deg, transparent 0%, transparent 100%)',
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
