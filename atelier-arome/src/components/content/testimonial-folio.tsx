'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: '1',
    quote: 'The Provence Lavender has transformed my evening ritual. The purity is unmatched—I can sense the dawn harvest in every drop.',
    author: 'Isabelle Moreau',
    title: 'Aromatherapist, Paris',
    rating: 5,
    folioEntry: 'XXIV',
  },
  {
    id: '2',
    quote: 'As a master perfumer, I have encountered countless essences. Atelier Arôme\'s Tasmanian Eucalyptus achieves a clarity that borders on the transcendent.',
    author: 'Henrik Bergström',
    title: 'Master Perfumer, Grasse',
    rating: 5,
    folioEntry: 'XXV',
  },
  {
    id: '3',
    quote: 'The alchemical process is evident in every essence. These are not merely oils—they are liquid poetry, captured at the moment of perfect expression.',
    author: 'Dr. Elena Rossi',
    title: 'Botanical Researcher, Florence',
    rating: 5,
    folioEntry: 'XXVI',
  },
];

export function TestimonialFolio() {
  return (
    <section className="py-20 parchment-background">
      <div className="container-manuscript">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-manuscript-display text-4xl md:text-5xl font-bold text-ink mb-6">
            Patron <span className="text-gold">Testimonials</span>
          </h2>
          <p className="text-lg text-ink-muted max-w-3xl mx-auto leading-relaxed">
            From aromatherapists to master perfumers, our patrons share their 
            experiences with our handcrafted botanical essences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialEntry key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialEntry({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const isIlluminated = index === 0; // First testimonial gets illuminated styling

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className={cn(
        'manuscript-card relative',
        isIlluminated && 'border-gold shadow-lg'
      )}
    >
      {/* Illuminated initial for first testimonial */}
      {isIlluminated && (
        <div className="absolute -top-4 -left-4 w-16 h-16 bg-gold rounded-full flex items-center justify-center text-2xl font-bold text-ink border-2 border-gold-dark">
          {testimonial.quote.charAt(0)}
        </div>
      )}

      {/* Rating Stars */}
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-gold text-gold" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="mb-6">
        <p className="text-ink leading-relaxed italic">
          "{testimonial.quote}"
        </p>
      </blockquote>

      {/* Attribution */}
      <div className="border-t border-parchment-dark pt-4">
        <cite className="font-manuscript-display font-semibold text-ink block">
          {testimonial.author}
        </cite>
        <span className="text-sm text-ink-muted">
          {testimonial.title}
        </span>
      </div>

      {/* Folio Reference */}
      <div className="mt-4 text-right">
        <span className="text-xs text-ink-muted font-mono">
          Folio {testimonial.folioEntry}
        </span>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-2 right-2 text-gold text-xs opacity-50">❧</div>
      <div className="absolute bottom-2 left-2 text-gold text-xs opacity-50">❧</div>
    </motion.div>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
