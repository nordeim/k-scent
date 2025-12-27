'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ParchmentOverlay } from '@/components/decorative/parchment-overlay';
import { GoldLeafAccents } from '@/components/decorative/gold-leaf-accents';
import { FloatingBotanicals } from '@/components/ritual/floating-botanicals';

export function ManuscriptHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    // Trigger ritual animations on mount
    if (typeof window !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate([50]); // Subtle haptic feedback
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <ParchmentOverlay />
      <GoldLeafAccents />
      <FloatingBotanicals />

      <motion.div
        className="relative z-10 text-center px-4"
        style={{ opacity, scale, y }}
      >
        {/* Main heading with illuminated initial */}
        <div className="mb-8">
          <h1 className="font-manuscript-display text-5xl md:text-7xl lg:text-8xl font-bold text-ink mb-4">
            <span className="relative inline-block">
              <span className="relative z-10">A</span>
              <span className="absolute -inset-4 text-gold text-6xl md:text-8xl lg:text-9xl opacity-20">
                A
              </span>
            </span>
            <span className="ml-2">telier</span>
            <br />
            <span className="text-gold">Arôme</span>
          </h1>
          
          <div className="text-lg md:text-xl text-ink-muted font-manuscript-body italic mb-6">
            Artisanal Alchemy for the Senses
          </div>
        </div>

        {/* Subtitle with manuscript styling */}
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg md:text-xl text-ink leading-relaxed mb-6">
            Where botanical science becomes sensory poetry. Each essence is 
            crafted through time-honored alchemical processes, transforming raw 
            botanicals into aromatic compounds of extraordinary purity.
          </p>
          
          <p className="text-base text-ink-muted italic">
            From the lavender fields of Provence to the eucalyptus groves of 
            Tasmania, we source only the finest botanicals for our artisanal 
            collection.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/compendium"
            className="manuscript-button manuscript-button--primary group"
          >
            <span>Explore the Compendium</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
          
          <Link
            href="/atelier"
            className="manuscript-button manuscript-button--ghost group"
          >
            <span>Discover Our Process</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Scroll indicator with alchemical symbol */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <div className="text-gold text-2xl mb-2">⚗</div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <ArrowDown className="h-6 w-6 text-ink-muted" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-gold-muted text-6xl opacity-50">
        ✦
      </div>
      <div className="absolute bottom-20 right-10 text-gold-muted text-6xl opacity-50">
        ✦
      </div>
      
      {/* Manuscript border decoration */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
    </section>
  );
}
