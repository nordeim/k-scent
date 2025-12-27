import Link from 'next/link';
import { Instagram, Twitter, Mail, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AtelierSeal } from '@/components/decorative/atelier-seal';

const footerSections = [
  {
    title: 'Compendium',
    items: [
      { name: 'All Essences', href: '/compendium' },
      { name: 'Lavender Collection', href: '/compendium?humour=calming' },
      { name: 'Eucalyptus Collection', href: '/compendium?humour=invigorating' },
      { name: 'Bergamot Collection', href: '/compendium?humour=uplifting' },
    ],
  },
  {
    title: 'Atelier',
    items: [
      { name: 'Our Process', href: '/atelier' },
      { name: 'Botanical Sourcing', href: '/atelier/sourcing' },
      { name: 'Distillation Method', href: '/atelier/distillation' },
      { name: 'Quality Assurance', href: '/atelier/quality' },
    ],
  },
  {
    title: 'Correspondence',
    items: [
      { name: 'Newsletter', href: '/correspondence' },
      { name: 'Journal', href: '/journal' },
      { name: 'Testimonials', href: '/testimonials' },
      { name: 'FAQ', href: '/faq' },
    ],
  },
  {
    title: 'About',
    items: [
      { name: 'Our Story', href: '/about' },
      { name: 'Master Perfumer', href: '/about/perfumer' },
      { name: 'Sustainability', href: '/about/sustainability' },
      { name: 'Contact', href: '/contact' },
    ],
  },
];

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/atelierarome',
    icon: Instagram,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/atelierarome',
    icon: Twitter,
  },
  {
    name: 'Email',
    href: 'mailto:correspondence@atelierarome.com',
    icon: Mail,
  },
];

export function ManuscriptFooter() {
  return (
    <footer className="parchment-background border-t border-parchment-dark">
      <div className="container-manuscript py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <AtelierSeal size="md" />
              <div>
                <h3 className="font-manuscript-display text-xl font-semibold text-ink">
                  Atelier Arôme
                </h3>
                <p className="text-sm text-ink-muted">
                  Artisanal Alchemy for the Senses
                </p>
              </div>
            </Link>
            
            <p className="text-sm text-ink-muted leading-relaxed mb-6">
              Where botanical science becomes sensory poetry. Each essence is 
              crafted through time-honored alchemical processes, transforming 
              raw botanicals into aromatic compounds of extraordinary purity.
            </p>

            <div className="flex items-center space-x-2 text-sm text-ink-muted">
              <MapPin className="h-4 w-4" />
              <span>Grasse, Provence</span>
            </div>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-manuscript-display text-lg font-semibold text-ink mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-ink-muted hover:text-gold transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="border-t border-parchment-dark pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-muted hover:text-gold transition-colors duration-200"
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            <div className="text-center md:text-right">
              <p className="text-sm text-ink-muted">
                © {new Date().getFullYear()} Atelier Arôme. All rights reserved.
              </p>
              <p className="text-xs text-ink-faded mt-1">
                Handcrafted with alchemical precision in Provence
              </p>
            </div>
          </div>
        </div>

        {/* Alchemical Symbol Footer */}
        <div className="mt-8 pt-8 border-t border-parchment-dark text-center">
          <div className="inline-flex items-center justify-center space-x-4 text-ink-muted">
            <span className="alchemical-text">⚗</span>
            <span className="text-sm">solve et coagula</span>
            <span className="alchemical-text">⚗</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
