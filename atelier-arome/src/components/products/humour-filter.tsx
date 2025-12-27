'use client';

import { cn } from '@/lib/utils';

const humours = [
  { id: 'ALL', name: 'All Humours', color: 'bg-ink text-parchment' },
  { id: 'CALMING', name: 'Calming', color: 'bg-lavender text-ink' },
  { id: 'INVIGORATING', name: 'Invigorating', color: 'bg-eucalyptus text-ink' },
  { id: 'UPLIFTING', name: 'Uplifting', color: 'bg-bergamot text-ink' },
  { id: 'BALANCING', name: 'Balancing', color: 'bg-rosehip text-ink' },
  { id: 'GROUNDING', name: 'Grounding', color: 'bg-bronze text-parchment' },
];

interface HumourFilterProps {
  selectedHumour: string;
  onHumourChange: (humour: string) => void;
}

export function HumourFilter({ selectedHumour, onHumourChange }: HumourFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {humours.map((humour) => (
        <button
          key={humour.id}
          onClick={() => onHumourChange(humour.id)}
          className={cn(
            'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
            'hover:scale-105 hover:shadow-md',
            selectedHumour === humour.id
              ? humour.color + ' ring-2 ring-offset-2 ring-gold'
              : 'bg-parchment-dark text-ink-muted hover:bg-parchment-darker'
          )}
        >
          {humour.name}
        </button>
      ))}
    </div>
  );
}
