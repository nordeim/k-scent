'use client';

import { motion } from 'framer-motion';

const botanicalElements = [
  {
    id: 'lavender-1',
    element: '🌿',
    x: '10%',
    y: '20%',
    delay: 0,
    duration: 6,
  },
  {
    id: 'eucalyptus-1',
    element: '🍃',
    x: '80%',
    y: '30%',
    delay: 1,
    duration: 8,
  },
  {
    id: 'rose-1',
    element: '🌹',
    x: '15%',
    y: '70%',
    delay: 2,
    duration: 7,
  },
  {
    id: 'herb-1',
    element: '🌾',
    x: '75%',
    y: '60%',
    delay: 0.5,
    duration: 9,
  },
  {
    id: 'flower-1',
    element: '🌸',
    x: '45%',
    y: '15%',
    delay: 1.5,
    duration: 5,
  },
  {
    id: 'leaf-1',
    element: '🍂',
    x: '30%',
    y: '85%',
    delay: 2.5,
    duration: 10,
  },
];

export function FloatingBotanicals() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {botanicalElements.map((botanical) => (
        <motion.div
          key={botanical.id}
          className="absolute text-2xl md:text-3xl opacity-20"
          style={{
            left: botanical.x,
            top: botanical.y,
          }}
          initial={{
            y: 0,
            rotate: 0,
            opacity: 0,
          }}
          animate={{
            y: [-20, 20, -20],
            rotate: [-5, 5, -5],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: botanical.duration,
            delay: botanical.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {botanical.element}
        </motion.div>
      ))}
    </div>
  );
}
