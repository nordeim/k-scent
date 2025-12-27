import { cn } from '@/lib/utils';

interface AtelierSealProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeClasses = {
  xs: 'w-6 h-6',
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
  xl: 'w-20 h-20',
};

export function AtelierSeal({ size = 'sm', className }: AtelierSealProps) {
  return (
    <div className={cn('relative', sizeClasses[size], className)}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer circle with decorative border */}
        <circle
          cx="50"
          cy="50"
          r="48"
          stroke="currentColor"
          strokeWidth="1"
          className="text-gold"
        />
        
        {/* Decorative flourishes around the border */}
        <path
          d="M 50 2 L 52 8 L 48 8 Z"
          fill="currentColor"
          className="text-gold"
        />
        <path
          d="M 50 98 L 52 92 L 48 92 Z"
          fill="currentColor"
          className="text-gold"
        />
        <path
          d="M 2 50 L 8 52 L 8 48 Z"
          fill="currentColor"
          className="text-gold"
        />
        <path
          d="M 98 50 L 92 52 L 92 48 Z"
          fill="currentColor"
          className="text-gold"
        />
        
        {/* Inner decorative ring */}
        <circle
          cx="50"
          cy="50"
          r="42"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="3 3"
          className="text-gold-muted"
        />
        
        {/* Central alchemical symbol */}
        <g transform="translate(50, 50)" className="text-ink">
          {/* Alchemical vessel (alembic) */}
          <path
            d="M -15 -8 L -15 -15 L -12 -15 L -12 -12 L -8 -12 L -8 -15 L 8 -15 L 8 -12 L 12 -12 L 12 -15 L 15 -15 L 15 -8"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Vessel neck */}
          <rect
            x="-3"
            y="-15"
            width="6"
            height="8"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            rx="1"
          />
          
          {/* Vessel base */}
          <path
            d="M -20 8 L -20 12 L -16 12 L -16 15 L 16 15 L 16 12 L 20 12 L 20 8"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Alchemical flame */}
          <path
            d="M -8 15 L -8 20 L -6 18 L -4 20 L -2 18 L 0 20 L 2 18 L 4 20 L 6 18 L 8 20 L 8 15"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Central "A" initial */}
          <text
            x="0"
            y="5"
            textAnchor="middle"
            dominantBaseline="middle"
            className="font-manuscript-display text-lg font-bold fill-current"
          >
            A
          </text>
        </g>
        
        {/* Decorative dots */}
        <circle cx="25" cy="25" r="1" fill="currentColor" className="text-gold-muted" />
        <circle cx="75" cy="25" r="1" fill="currentColor" className="text-gold-muted" />
        <circle cx="25" cy="75" r="1" fill="currentColor" className="text-gold-muted" />
        <circle cx="75" cy="75" r="1" fill="currentColor" className="text-gold-muted" />
      </svg>
      
      {/* Subtle animation for the seal */}
      <div className="absolute inset-0 rounded-full border border-gold-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
    </div>
  );
}
