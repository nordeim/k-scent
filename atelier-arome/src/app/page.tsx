import { ManuscriptHero } from '@/components/content/manuscript-hero';
import { EssenceCompendium } from '@/components/products/essence-compendium';
import { AlchemyProcess } from '@/components/content/alchemy-process';
import { TestimonialFolio } from '@/components/content/testimonial-folio';
import { NewsletterCorrespondence } from '@/components/content/newsletter-correspondence';
import { ManuscriptFooter } from '@/components/layout/manuscript-footer';

export default function HomePage() {
  return (
    <div className="min-h-screen parchment-background">
      <main>
        <ManuscriptHero />
        <EssenceCompendium />
        <AlchemyProcess />
        <TestimonialFolio />
        <NewsletterCorrespondence />
      </main>
      <ManuscriptFooter />
    </div>
  );
}
