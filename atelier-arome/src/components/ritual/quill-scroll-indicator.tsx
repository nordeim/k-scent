'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function QuillScrollIndicator() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  // Transform scroll progress to various animations
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const quillRotation = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div ref={containerRef} className="absolute bottom-0 left-0 right-0">
      {/* Progress bar */}
      <motion.div
        className="h-0.5 bg-gold origin-left"
        style={{ scaleX, opacity }}
      />

      {/* Quill indicator */}
      <motion.div
        className="absolute -top-2 right-4"
        style={{ opacity, rotate: quillRotation }}
      >
        <div className="text-gold text-lg">✒️</div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="absolute -top-1 left-0 w-full flex justify-between px-4"
        style={{ opacity }}
      >
        <div className="text-ink-muted text-xs">solve</div>
        <div className="text-ink-muted text-xs">coagula</div>
      </motion.div>
    </div>
  );
}
