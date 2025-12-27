'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AtelierSeal } from '@/components/decorative/atelier-seal';
import { VialButton } from '@/components/cart/vial-button';
import { VialDrawer } from '@/components/cart/vial-drawer';
import { QuillScrollIndicator } from '@/components/ritual/quill-scroll-indicator';

const navigationItems = [
  {
    name: 'Compendium',
    href: '/compendium',
    description: 'Explore our botanical collection',
  },
  {
    name: 'Atelier',
    href: '/atelier',
    description: 'Our alchemical process',
  },
  {
    name: 'Correspondence',
    href: '/correspondence',
    description: 'Newsletter & insights',
  },
  {
    name: 'About',
    href: '/about',
    description: 'Our story & philosophy',
  },
];

export function ManuscriptHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-sticky transition-all duration-300',
          'parchment-background',
          isScrolled && 'shadow-lg backdrop-blur-sm'
        )}
      >
        <div className="container-manuscript">
          <div className="flex items-center justify-between py-4">
            {/* Atelier Seal */}
            <Link href="/" className="flex items-center space-x-3">
              <AtelierSeal size="sm" />
              <div className="hidden sm:block">
                <h1 className="font-manuscript-display text-xl font-semibold text-ink">
                  Atelier Arôme
                </h1>
                <p className="text-sm text-ink-muted">
                  Artisanal Alchemy
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'relative font-manuscript-body text-base transition-colors duration-200',
                    'hover:text-gold',
                    pathname === item.href
                      ? 'text-gold'
                      : 'text-ink'
                  )}
                >
                  {item.name}
                  {pathname === item.href && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <button
                className="p-2 text-ink hover:text-gold transition-colors duration-200"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
              
              <VialButton />

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden p-2 text-ink hover:text-gold transition-colors duration-200"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Quill Scroll Indicator */}
          <QuillScrollIndicator />
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-overlay parchment-background">
          <div className="container-manuscript pt-24">
            <nav className="flex flex-col space-y-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    'group flex flex-col space-y-1 px-4 py-3 rounded-lg transition-all duration-200',
                    pathname === item.href
                      ? 'bg-gold-muted text-gold'
                      : 'text-ink hover:bg-parchment-dark'
                  )}
                >
                  <span className="font-manuscript-display text-xl">
                    {item.name}
                  </span>
                  <span className="text-sm text-ink-muted">
                    {item.description}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Vial Drawer */}
      <VialDrawer />
    </>
  );
}
