import { cn } from '@/lib/utils';

interface RarityBadgeProps {
  rarity: string;
  className?: string;
}

const rarityStyles = {
  COMMON: {
    bg: 'bg-parchment-dark',
    text: 'text-ink-muted',
    border: 'border-parchment-darker',
    icon: '◆',
  },
  UNCOMMON: {
    bg: 'bg-sage',
    text: 'text-parchment',
    border: 'border-sage',
    icon: '◆',
  },
  RARE: {
    bg: 'bg-gold',
    text: 'text-ink',
    border: 'border-gold-dark',
    icon: '◆',
  },
  LEGENDARY: {
    bg: 'bg-gradient-to-r from-gold to-bronze',
    text: 'text-ink',
    border: 'border-gold',
    icon: '✦',
  },
};

export function RarityBadge({ rarity, className }: RarityBadgeProps) {
  const style = rarityStyles[rarity as keyof typeof rarityStyles] || rarityStyles.COMMON;
  
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
      <span className="text-gold">{style.icon}</span>
      <span>{rarity.toLowerCase()}</span>
    </div>
  );
}
