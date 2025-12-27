import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const manuscriptTheme = {
  colors: {
    // Primary Palette - Illuminated Manuscript
    ink: {
      DEFAULT: '#2A2D26',           // Deep manuscript ink
      light: '#4A4D46',             // Lighter ink for secondary text
      muted: '#545752',             // Accessible version for contrast
      faded: '#6A6D66',             // Faded ink for subtle elements
    },
    gold: {
      DEFAULT: '#C9A769',           // Warm gold leaf
      light: '#E8D8B6',             // Light gold for highlights
      dark: '#A98750',              // Dark gold for shadows
      muted: 'rgba(201, 167, 105, 0.3)', // Muted gold for overlays
      text: '#8B7355',              // Accessible gold for text on light
    },
    parchment: {
      DEFAULT: '#FAF8F5',           // Warm parchment base
      dark: '#F5F1EB',              // Slightly darker parchment
      darker: '#E8E4D9',            // Darkest parchment for depth
    },
    
    // Accent Palette - Historical pigments
    bronze: '#9A8C6D',              // Bronze patina
    rose: '#B87D7D',                // Rose madder pigment
    sage: '#7C6354',                // Sage green
    slate: '#7A8C9D',               // Slate blue
    
    // Botanical Accents - Directly from distillation process
    lavender: {
      DEFAULT: '#B8A9C9',           // True lavender from Provence
      light: '#D6CCE0',
      dark: '#8A7DA4',
    },
    eucalyptus: {
      DEFAULT: '#7CB9A0',           // Tasmanian eucalyptus
      light: '#A8D6C0', 
      dark: '#5A8A78',
    },
    bergamot: {
      DEFAULT: '#F5D489',           // Calabrian bergamot
      light: '#F9E6B3',
      dark: '#C8A86C',
    },
    rosehip: {
      DEFAULT: '#E8B4B8',           // Wild rosehip
      light: '#F5D9DC',
      dark: '#B98488',
    },
    
    // Semantic Colors - For UI elements
    error: {
      DEFAULT: '#DC2626',           // Crimson error
      light: '#FECACA',
      dark: '#B91C1C',
    },
    success: {
      DEFAULT: '#16A34A',           // Deep green success
      light: '#BBF7D0',
      dark: '#15803D',
    },
    warning: {
      DEFAULT: '#CA8A04',           // Amber warning
      light: '#FEEB8B',
      dark: '#B45309',
    },
    info: {
      DEFAULT: '#2563EB',           // Deep blue info
      light: '#BFDBFE',
      dark: '#1E40AF',
    },
  },
  typography: {
    fonts: {
      // Renaissance manuscript text (15th century)
      manuscript: {
        display: ['Cormorant Garamond', 'Baskerville', 'serif'],
        body: ['Crimson Pro', 'Garamond Premier Pro', 'serif'],
        ornament: ['Playfair Display SC', 'Hoefler Text', 'serif'],
      },
      
      // Contemporary alchemical notation (21st century)
      alchemical: {
        symbols: ['Adobe Caslon Pro', 'serif'],
        measurements: ['IBM Plex Mono', 'monospace'],
        transitions: ['Great Vibes', 'cursive'], // For ritual transitions
      },
    },
    sizes: {
      // Optical sizing based on manuscript proportions
      xs: 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',     // 12px base
      sm: 'clamp(0.875rem, 0.8rem + 0.35vw, 1rem)',          // 14px base
      base: 'clamp(1rem, 0.95rem + 0.25vw, 1.125rem)',       // 16px base
      lg: 'clamp(1.125rem, 1rem + 0.5vw, 1.25rem)',          // 18px base
      xl: 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',         // 20px base
      '2xl': 'clamp(1.5rem, 1.25rem + 1.25vw, 2rem)',        // 24px base
      '3xl': 'clamp(2rem, 1.5rem + 2.5vw, 3rem)',            // 32px base
      '4xl': 'clamp(2.5rem, 2rem + 2.5vw, 4rem)',            // 40px base
      '5xl': 'clamp(3rem, 2.5rem + 2.5vw, 5rem)',            // 48px base
    },
    lineHeight: {
      manuscript: 1.618,  // Golden ratio for readability
      annotation: 1.333,  // 4:3 ratio for marginalia
      heading: 1.25,      // Tighter for headings
    },
  },
  spacing: {
    // Based on Renaissance manuscript margins - not 8px grid
    '3xs': '0.125rem',    // 2px - hairline space
    '2xs': '0.25rem',     // 4px - fine detail
    xs: '0.5rem',         // 8px - small margin
    sm: '0.75rem',        // 12px - medium margin  
    md: '1rem',           // 16px - standard margin
    lg: '1.5rem',         // 24px - large margin
    xl: '2rem',           // 32px - section margin
    '2xl': '3rem',        // 48px - major section margin
    '3xl': '4rem',        // 64px - page margin
    '4xl': '6rem',        // 96px - dramatic space
    '5xl': '8rem',        // 128px - epic space
    '6xl': '12rem',       // 192px - cinematic space
    
    // Organic spacing for asymmetric layouts
    organic: {
      top: '1.618rem',    // Golden ratio top margin
      right: '1.333rem',  // 4:3 ratio right margin
      bottom: '2.236rem', // sqrt(5) ratio bottom margin
      left: '1rem',       // Standard left margin
    },
  },
  borderRadius: {
    sm: '0.125rem',     // 2px - sharp corners
    md: '0.25rem',      // 4px - slightly rounded
    lg: '0.5rem',       // 8px - standard rounded
    xl: '1rem',         // 16px - soft rounded
    '2xl': '2rem',      // 32px - deeply rounded
    '3xl': '4rem',      // 64px - organic rounded
    full: '9999px',     // Circular
    manuscript: '0.375rem', // Hand-drawn imperfection
  },
  shadows: {
    sm: '0 1px 2px rgba(42, 45, 38, 0.05)',                // Subtle shadow
    md: '0 4px 12px rgba(42, 45, 38, 0.08)',               // Medium shadow
    lg: '0 8px 24px rgba(42, 45, 38, 0.1)',                // Large shadow
    xl: '0 16px 48px rgba(42, 45, 38, 0.12)',              // Extra large shadow
    gold: '0 0 40px rgba(201, 167, 105, 0.2)',             // Gold leaf shimmer
    ritual: '0 0 30px rgba(105, 97, 85, 0.15)',            // Ritual glow
  },
  transitions: {
    micro: '150ms ease',            // Micro-interactions
    fast: '300ms ease',             // Standard interactions
    base: '500ms ease',             // Major transitions
    slow: '800ms ease',             // Deliberate transitions
    bounce: '600ms cubic-bezier(0.34, 1.56, 0.64, 1)', // Bouncy transitions
    ritual: '1200ms cubic-bezier(0.64, 0, 0.35, 1)',    // Ritual transitions
  },
  zIndex: {
    base: 1,                        // Base layer
    elevated: 10,                    // Elevated elements
    sticky: 100,                     // Sticky elements (header)
    overlay: 1000,                   // Overlay elements (dropdowns)
    modal: 2000,                     // Modal dialogs
    toast: 3000,                     // Toast notifications (wax seals)
    ritual: 4000,                    // Ritual elements (floating botanicals)
  },
} as const;

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: manuscriptTheme.colors,
      fontFamily: {
        // Manuscript typography system
        'manuscript-display': manuscriptTheme.typography.fonts.manuscript.display,
        'manuscript-body': manuscriptTheme.typography.fonts.manuscript.body,
        'manuscript-ornament': manuscriptTheme.typography.fonts.manuscript.ornament,
        
        // Alchemical typography system
        'alchemical-symbols': manuscriptTheme.typography.fonts.alchemical.symbols,
        'alchemical-measurements': manuscriptTheme.typography.fonts.alchemical.measurements,
        'alchemical-transitions': manuscriptTheme.typography.fonts.alchemical.transitions,
      },
      fontSize: manuscriptTheme.typography.sizes,
      lineHeight: manuscriptTheme.typography.lineHeight,
      spacing: manuscriptTheme.spacing,
      borderRadius: manuscriptTheme.borderRadius,
      boxShadow: manuscriptTheme.shadows,
      transitionDuration: {
        micro: '150ms',
        fast: '300ms',
        base: '500ms',
        slow: '800ms',
        ritual: '1200ms',
      },
      zIndex: manuscriptTheme.zIndex,
      keyframes: {
        // Manuscript animations
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'fade-out': {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        'slide-in-right': {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
        'slide-out-right': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(100%)' },
        },
        'slide-in-up': {
          from: { transform: 'translateY(100%)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        'scale-in': {
          from: { transform: 'scale(0.95)', opacity: '0' },
          to: { transform: 'scale(1)', opacity: '1' },
        },
        
        // Ritual animations
        'rotate-seal': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'float-botanical': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        'liquid-wave': {
          '0%, 100%': { transform: 'translateY(0) scaleY(1)' },
          '50%': { transform: 'translateY(-10px) scaleY(1.05)' },
        },
        'write-scroll': {
          '0%': { opacity: '0', transform: 'translateX(-100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'wax-seal': {
          '0%': { 
            transform: 'scale(0) rotate(-180deg)',
            opacity: '0',
          },
          '70%': { 
            transform: 'scale(1.1) rotate(10deg)',
          },
          '100%': { 
            transform: 'scale(1) rotate(0deg)',
            opacity: '1',
          },
        },
        'gold-shimmer': {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
        'quill-write': {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        // Manuscript animations
        'fade-in': 'fade-in 0.3s ease-out',
        'fade-out': 'fade-out 0.3s ease-out',
        'slide-in-right': 'slide-in-right 0.5s ease-out',
        'slide-out-right': 'slide-out-right 0.5s ease-out',
        'slide-in-up': 'slide-in-up 0.5s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
        
        // Ritual animations
        'rotate-seal': 'rotate-seal 30s linear infinite',
        'float-botanical': 'float-botanical 6s ease-in-out infinite',
        'liquid-wave': 'liquid-wave 8s ease-in-out infinite',
        'write-scroll': 'write-scroll 2s ease-in-out infinite',
        'wax-seal': 'wax-seal 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'gold-shimmer': 'gold-shimmer 4s ease-in-out infinite',
        'quill-write': 'quill-write 3s ease-out forwards',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    plugin(({ addUtilities }) => {
      // Manuscript-specific utilities
      addUtilities({
        '.manuscript-text': {
          fontFamily: 'var(--font-manuscript-body)',
          lineHeight: manuscriptTheme.typography.lineHeight.manuscript,
          '@supports (font-variation-settings: "opsz")': {
            fontVariationSettings: '"opsz" 24',
            '@media (min-width: 1024px)': {
              fontVariationSettings: '"opsz" 18',
            },
          },
        },
        '.alchemical-text': {
          fontFamily: 'var(--font-alchemical-symbols)',
          fontSize: manuscriptTheme.typography.sizes['2xl'],
        },
        '.ritual-border': {
          border: '1px dashed var(--color-ink-muted)',
          borderRadius: manuscriptTheme.borderRadius.manuscript,
          padding: manuscriptTheme.spacing.md,
        },
        '.parchment-background': {
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundColor: manuscriptTheme.colors.parchment.DEFAULT,
        },
        '.gold-accent': {
          position: 'relative',
          '&:before': {
            content: '""',
            position: 'absolute',
            inset: '0',
            background: `linear-gradient(90deg, transparent, ${manuscriptTheme.colors.gold.muted}, transparent)`,
            opacity: '0.3',
            animation: 'gold-shimmer 4s ease-in-out infinite',
          },
        },
      });
    }),
  ],
};

export default config;
