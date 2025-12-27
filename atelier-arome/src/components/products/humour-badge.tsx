import { cn } from '@/lib/utils';

interface HumourBadgeProps {
  humour: string;
  className?: string;
}

const humourStyles = {
  CALMING: {
    bg: 'bg-lavender',
    text: 'text-ink',
    border: 'border-lavender-dark',
    icon: '🌿',
  },
  INVIGORATING: {
    bg: 'bg-eucalyptus',
    text: 'text-ink',
    border: 'border-eucalyptus-dark',
    icon: '⚡',
  },
  UPLIFTING: {
    bg: 'bg-bergamot',
    text: 'text-ink',
    border: 'border-bergamot-dark',
    icon: '☀️',
  },
  BALANCING: {
    bg: 'bg-rosehip',
    text: 'text-ink',
    border: 'border-rosehip-dark',
    icon: '⚖️',
  },
  GROUNDING: {
    bg: 'bg-bronze',
    text: 'text-parchment',
    border: 'border-bronze',
    icon: '🌱',
  },
};

export function HumourBadge({ humour, className }: HumourBadgeProps) {
  const style = humourStyles[humour as keyof typeof humourStyles] || humourStyles.CALMING;
  
  return (
    <div
      className={cn(
        'inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium',
        'border',
        style.bg,
        style.text,
        style.border,
        className
      )}
    >
      <span>{style.icon}</span>
      <span>{humour.toLowerCase()}</span>
    </div>
  );
}
