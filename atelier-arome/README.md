# Atelier Arôme

**Artisanal Alchemy for the Senses**

A masterclass in experiential e-commerce that transforms aromatherapy into an immersive Renaissance manuscript experience. Where botanical science becomes sensory poetry.

---

## 🌿 Project Overview

Atelier Arôme represents the pinnacle of **experiential digital craftsmanship** - a platform where:

- **Commerce becomes Ceremony**: Every transaction is transformed into an alchemical ritual
- **Digital becomes Artifact**: The interface functions as an illuminated manuscript
- **Interaction becomes Ritual**: Scroll, click, and hover gestures carry narrative meaning
- **Technology becomes Craft**: Code serves the aesthetic vision without compromise

### Key Features

- 🎨 **Renaissance Manuscript Aesthetic**: Handcrafted design system with alchemical metaphors
- 🛒 **Vial System**: Shopping cart reimagined as an alchemical collection vessel
- 🎭 **Ritual Engine**: Haptic feedback, audio spatialization, and scroll-triggered animations
- 📱 **Progressive Enhancement**: Core functionality works without JavaScript
- ♿ **Accessibility First**: WCAG 2.2 AAA compliance with inclusive design
- ⚡ **Performance Optimized**: Lighthouse 95+ scores and Core Web Vitals excellence
- 🔄 **Full E-commerce**: Complete checkout flow with Stripe integration

---

## 🏗️ Architecture

### Technology Stack

| Layer | Technology |
|-------|------------|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript 5.x |
| **Styling** | Tailwind CSS 4.0 + Custom Design System |
| **Database** | PostgreSQL with Prisma ORM |
| **Authentication** | NextAuth.js v5 |
| **Payments** | Stripe |
| **State Management** | Zustand |
| **Animations** | Framer Motion |
| **CMS** | Sanity.io |
| **Caching** | Redis (Upstash) |
| **Deployment** | Vercel |
| **Monitoring** | Sentry |

### Project Structure

```
atelier-arome/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx               # Root layout with providers
│   │   ├── page.tsx                 # Home page
│   │   └── globals.css              # Global styles and design tokens
│   ├── components/                   # Component architecture
│   │   ├── layout/                  # Layout components (Header, Footer)
│   │   ├── content/                 # Page content components
│   │   ├── products/                # Product-related components
│   │   ├── cart/                    # Vial (cart) system
│   │   ├── decorative/              # Visual enhancement components
│   │   ├── ritual/                  # Ritual engine components
│   │   └── shared/                  # Shared utilities
│   ├── lib/                         # Utility libraries
│   │   ├── prisma.ts                # Prisma client
│   │   ├── redis.ts                 # Redis client
│   │   └── utils.ts                 # General utilities
│   ├── services/                    # Business logic layer
│   │   └── product.service.ts       # Product management
│   ├── hooks/                       # Custom React hooks
│   ├── stores/                      # Zustand state management
│   │   ├── vial.store.ts            # Cart state
│   │   └── *.provider.tsx           # Store providers
│   ├── schemas/                     # Zod validation schemas
│   ├── types/                       # TypeScript type definitions
│   ├── styles/                      # Global styles and themes
│   └── config/                      # Configuration files
├── prisma/                          # Database schema
│   └── schema.prisma                # Prisma schema definition
├── public/                          # Static assets
├── tests/                           # Testing suite
└── docs/                            # Documentation
```

---

## 🎨 Design System

### Typography

- **Display Font**: Cormorant Garamond (Renaissance manuscript authenticity)
- **Body Font**: Crimson Pro (Contemporary readability with character)
- **Ornament Font**: Playfair Display (Decorative accents)
- **Alchemical Font**: Great Vibes (Ritual transitions)

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| **Ink** | `#2A2D26` | Primary text color |
| **Gold** | `#C9A769` | Accent color, CTAs, highlights |
| **Parchment** | `#FAF8F5` | Background color |
| **Lavender** | `#B8A9C9` | Calming humour accent |
| **Eucalyptus** | `#7CB9A0` | Invigorating humour accent |
| **Bergamot** | `#F5D489` | Uplifting humour accent |

### Spacing System

Based on Renaissance manuscript proportions (NOT 8px grid):

- Golden ratio (1.618) for vertical spacing
- 4:3 ratio for horizontal spacing
- Organic, asymmetric compositions

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ with pnpm
- PostgreSQL 14+
- Redis (Upstash recommended)
- Stripe account
- Sanity.io account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/atelier-arome.git
   cd atelier-arome
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Environment setup**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your environment variables:
   - Database connection
   - NextAuth secret
   - Stripe keys
   - Redis credentials
   - Sanity project details

4. **Database setup**
   ```bash
   pnpm db:push     # Push schema to database
   pnpm db:seed     # Seed with sample data
   ```

5. **Development server**
   ```bash
   pnpm dev
   ```

   Visit [http://localhost:3000](http://localhost:3000)

---

## 🧪 Development

### Available Scripts

```bash
# Development
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm start            # Start production server

# Database
pnpm db:push          # Push schema changes
pnpm db:migrate       # Run migrations
pnpm db:studio        # Open Prisma Studio
pnpm db:seed          # Seed database

# Testing
pnpm test             # Run unit tests
pnpm test:e2e         # Run E2E tests
pnpm test:visual      # Run visual regression tests

# Code quality
pnpm lint             # Run ESLint
pnpm typecheck        # Type checking
pnpm format           # Format code

# Storybook
pnpm storybook        # Start Storybook
```

### Development Workflow

1. **Feature branches**: Create feature branches from `main`
2. **Code review**: All changes require design + technical review
3. **Testing**: Maintain >90% test coverage
4. **Performance**: Lighthouse score must remain 95+
5. **Accessibility**: All changes must pass WCAG AAA audit

---

## 🎭 Ritual Engine

The Ritual Engine transforms user interactions into sensory experiences:

### Haptic Feedback

- **Add to Vial**: Triple pulse vibration
- **Remove from Vial**: Single pulse vibration
- **Clear Vial**: Distinctive pattern vibration
- **Scroll Thresholds**: Intensity-based feedback

### Audio Spatialization

- **Ambient Atmosphere**: Subtle background audio
- **Interaction Sounds**: Contextual audio feedback
- **Scroll Audio**: Pitch/volume based on position

### Visual Rituals

- **Floating Botanicals**: Gentle animation of plant emojis
- **Liquid Simulations**: CSS-based liquid effects
- **Gold Leaf Accents**: Parallax decorative elements
- **Wax Seal Notifications**: Toast messages as wax seals

---

## 🛒 E-commerce Features

### Vial System (Shopping Cart)

- **Persistent Storage**: LocalStorage with Zustand
- **Liquid Level Indicator**: Visual fill level based on item count
- **Haptic Feedback**: Tactile confirmation of actions
- **Ritual Animations**: Smooth transitions and effects

### Checkout Flow

1. **Address Selection**: "Correspondence Locations"
2. **Shipping Options**: "Courier Services" with alchemical names
3. **Payment**: "Alchemical Exchange" with Stripe
4. **Confirmation**: "Dispatch Confirmation" with wax seal

### Payment Integration

- **Stripe**: Secure payment processing
- **Multiple Methods**: Cards, digital wallets
- **Subscription Support**: Quarterly folio subscriptions
- **Refund Handling**: Automated refund processing

---

## 📊 Performance

### Targets

| Metric | Target |
|--------|--------|
| **Lighthouse Score** | 95+ |
| **LCP** | <2.5s |
| **FID** | <100ms |
| **CLS** | <0.1 |
| **Bundle Size** | <200KB |

### Optimization Strategies

- **Critical CSS**: Inlined above-the-fold styles
- **Image Optimization**: WebP/AVIF with lazy loading
- **Code Splitting**: Route-based and component-based
- **Caching**: Redis for API responses, browser caching
- **CDN**: Vercel Edge Network

---

## ♿ Accessibility

### WCAG 2.2 AAA Compliance

- **Keyboard Navigation**: Full site navigation without mouse
- **Screen Reader Support**: Proper ARIA labels and roles
- **Color Contrast**: 7:1 minimum ratio for all text
- **Focus Management**: Visible focus indicators
- **Reduced Motion**: Respects user preferences
- **Alternative Text**: Comprehensive image descriptions

### Testing

- **Automated**: axe-core integration
- **Manual**: Screen reader testing (JAWS, NVDA, VoiceOver)
- **Keyboard**: Complete keyboard navigation testing
- **Color**: Color blindness simulation testing

---

## 🔍 SEO & Analytics

### Structured Data

- **Product Schema**: Rich snippets for essences
- **Breadcrumb Schema**: Navigation structure
- **Review Schema**: Testimonial integration
- **Organization Schema**: Brand information

### Meta Tags

- **Open Graph**: Social media sharing
- **Twitter Cards**: Twitter-specific metadata
- **Canonical URLs**: Duplicate content prevention
- **Hreflang**: International targeting

### Analytics

- **Vercel Analytics**: Core Web Vitals
- **Google Analytics**: User behavior
- **Stripe Analytics**: E-commerce metrics
- **Custom Events**: Ritual interaction tracking

---

## 🚀 Deployment

### Vercel Configuration

- **Build Command**: `pnpm build`
- **Output Directory**: `.next`
- **Install Command**: `pnpm install`
- **Development Command**: `pnpm dev`

### Environment Variables

Required environment variables:

```bash
# Required
DATABASE_URL=
NEXTAUTH_URL=
NEXTAUTH_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
UPSTASH_REDIS_URL=
UPSTASH_REDIS_TOKEN=
NEXT_PUBLIC_SANITY_PROJECT_ID=
SANITY_TOKEN=

# Optional
RESEND_API_KEY=
SENTRY_DSN=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

### Deployment Pipeline

1. **Feature Branch** → PR Creation
2. **Automated Tests** → Jest + Playwright
3. **Build Check** → Next.js build
4. **Preview Deployment** → Vercel Preview
5. **Manual Review** → Design + Technical
6. **Production Deployment** → Vercel Production

---

## 🧪 Testing

### Unit Tests

- **Framework**: Vitest + React Testing Library
- **Coverage**: >90% target
- **Focus**: Components, utilities, hooks

### Integration Tests

- **Framework**: Playwright
- **Coverage**: Critical user journeys
- **Focus**: E-commerce flow, authentication

### Visual Regression

- **Tool**: Chromatic
- **Baseline**: Manuscript aesthetic preservation
- **Coverage**: All styled components

### Accessibility Tests

- **Automated**: axe-core
- **Manual**: Screen reader testing
- **Standards**: WCAG 2.2 AAA

---

## 📚 Documentation

### Architecture Documentation

- **Component Library**: Storybook stories
- **API Documentation**: TypeScript definitions
- **Database Schema**: Prisma documentation
- **Design System**: Figma integration

### User Documentation

- **FAQ**: Common questions and answers
- **Usage Guide**: How to use the platform
- **Ritual Guide**: Understanding the experience
- **Troubleshooting**: Common issues and solutions

### Developer Documentation

- **Setup Guide**: Development environment
- **Contributing**: Code style and guidelines
- **Deployment**: Production deployment process
- **API Reference**: Complete API documentation

---

## 🤝 Contributing

### Code Style

- **TypeScript**: Strict mode enabled
- **ESLint**: Airbnb configuration
- **Prettier**: Consistent formatting
- **Conventional Commits**: Semantic versioning

### Pull Request Process

1. **Feature Branch**: Create from `main`
2. **Design Review**: UI/UX approval required
3. **Technical Review**: Code quality check
4. **Testing**: All tests must pass
5. **Documentation**: Update relevant docs
6. **Merge**: Squash and merge to `main`

---

## 📄 License

This project is proprietary software owned by Atelier Arôme. All rights reserved.

---

## 🙏 Acknowledgments

- **Typography**: Google Fonts (Cormorant Garamond, Crimson Pro)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Database**: PostgreSQL
- **Hosting**: Vercel
- **Payment Processing**: Stripe

---

## 🔮 Future Roadmap

### Phase 11: Advanced Ritual Engine
- WebGL liquid simulations
- AI-powered scent recommendations
- Voice integration
- AR product previews

### Phase 12: Community Features
- User reviews system
- Scent journals
- Social sharing
- Loyalty program

### Phase 13: International Expansion
- Multi-language support
- Multi-currency support
- Regional shipping
- Cultural adaptation

### Phase 14: Advanced Analytics
- Heat mapping
- A/B testing
- Predictive analytics
- Customer journey mapping

---

*Crafted with alchemical precision in Provence* ⚗️
