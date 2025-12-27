'use client';

import { motion } from 'framer-motion';

export function ParchmentOverlay() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base parchment texture */}
      <div className="absolute inset-0 parchment-background opacity-80" />
      
      {/* Aged paper edges */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gold-muted to-transparent rounded-full blur-xl" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-0 right-0 w-40 h-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2, delay: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-tl from-bronze-muted to-transparent rounded-full blur-xl" />
      </motion.div>
      
      {/* Subtle aging stains */}
      <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-ink-faded rounded-full opacity-5 blur-2xl" />
      <div className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-sage rounded-full opacity-5 blur-2xl" />
      
      {/* Paper grain texture overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
