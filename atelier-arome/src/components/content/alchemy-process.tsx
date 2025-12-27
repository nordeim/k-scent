'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const processSteps = [
  {
    number: 'I',
    title: 'Botanical Sourcing',
    description: 'We journey to the world\'s finest growing regions, from the lavender fields of Provence to the eucalyptus groves of Tasmania.',
    icon: '🌿',
  },
  {
    number: 'II',
    title: 'Alchemical Preparation',
    description: 'Each botanical is carefully prepared according to ancient alchemical principles, honoring the natural rhythms and lunar cycles.',
    icon: '⚗️',
  },
  {
    number: 'III',
    title: 'Sacred Distillation',
    description: 'Using traditional copper alembics, we perform slow distillation that preserves the complete aromatic profile of each essence.',
    icon: '🔥',
  },
  {
    number: 'IV',
    title: 'Maturation & Bottling',
    description: 'The essences rest in dark glass vessels, allowing their complex aromatic compounds to fully develop before bottling.',
    icon: '🍯',
  },
];

export function AlchemyProcess() {
  return (
    <section className="py-20 bg-parchment-dark">
      <div className="container-manuscript">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-manuscript-display text-4xl md:text-5xl font-bold text-ink mb-6">
            The <span className="text-gold">Alchemical</span> Process
          </h2>
          <p className="text-lg text-ink-muted max-w-3xl mx-auto leading-relaxed">
            Four sacred stages transform raw botanicals into aromatic essences of 
            extraordinary purity, following principles passed down through generations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {processSteps.map((step, index) => (
            <ProcessStep key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ step, index }: { step: typeof processSteps[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative"
    >
      <div className="manuscript-card p-8">
        <div className="flex items-start space-x-6">
          {/* Step Number */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-2xl font-bold text-ink">
              {step.number}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="text-4xl mb-4">{step.icon}</div>
            <h3 className="font-manuscript-display text-2xl font-semibold text-ink mb-4">
              {step.title}
            </h3>
            <p className="text-ink-muted leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-2 -right-2 text-gold text-2xl opacity-50">✦</div>
      <div className="absolute -bottom-2 -left-2 text-gold text-2xl opacity-50">✦</div>
    </motion.div>
  );
}
