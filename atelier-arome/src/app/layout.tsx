import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond, Crimson_Pro, Playfair_Display, Great_Vibes } from 'next/font/google';
import './globals.css';
import { ManuscriptProviders } from '@/components/shared/manuscript-providers';

// Typography system - Renaissance manuscript pairing
const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant-garamond',
  display: 'swap',
});

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-crimson-pro',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair-display',
  display: 'swap',
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-great-vibes',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Atelier Arôme | Artisanal Alchemy for the Senses',
    template: '%s | Atelier Arôme',
  },
  description: 'Aromatherapy elevated to artisanal alchemy. Handcrafted botanical essences from our atelier, where ancient wisdom meets modern sensibility.',
  keywords: [
    'aromatherapy',
    'essential oils',
    'botanical essences',
    'artisanal',
    'alchemy',
    'handcrafted',
    'natural perfumes',
    'lavender',
    'eucalyptus',
    'bergamot',
  ],
  authors: [
    {
      name: 'Master Perfumer',
      url: 'https://atelier-arome.com',
    },
  ],
  creator: 'Atelier Arôme',
  publisher: 'Atelier Arôme',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'Atelier Arôme | Artisanal Alchemy for the Senses',
    description: 'Where botanical science becomes sensory poetry. Experience our handcrafted aromatic compounds.',
    url: '/',
    siteName: 'Atelier Arôme',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Atelier Arôme - Artisanal Alchemy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atelier Arôme | Artisanal Alchemy for the Senses',
    description: 'Where botanical science becomes sensory poetry.',
    images: ['/twitter-image.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
      },
    ],
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`
        ${cormorantGaramond.variable} 
        ${crimsonPro.variable} 
        ${playfairDisplay.variable} 
        ${greatVibes.variable}
      `}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Crimson+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Great+Vibes&display=swap"
          as="style"
        />
      </head>
      <body className="font-manuscript-body text-ink bg-parchment antialiased">
        <ManuscriptProviders>
          {children}
        </ManuscriptProviders>
      </body>
    </html>
  );
}
