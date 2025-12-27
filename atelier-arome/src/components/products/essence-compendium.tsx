'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { EssenceCard } from './essence-card';
import { HumourFilter } from './humour-filter';
import { Search } from 'lucide-react';

// Mock data for demonstration
const essences = [
  {
    id: '1',
    folioNumber: 'I',
    commonName: 'Provence Lavender',
    latinName: 'Lavandula × intermedia',
    description: 'Harvested at dawn from the rolling hills of Provence, this exceptional lavender essence captures the pure soul of the Mediterranean.',
    humour: 'CALMING',
    rarity: 'RARE',
    season: 'SUMMER',
    price: 42.00,
    volumeMl: 5,
    stockQuantity: 12,
    notes: ['Floral', 'Herbaceous', 'Sweet'],
    image: '/images/lavender.jpg',
  },
  {
    id: '2',
    folioNumber: 'II',
    commonName: 'Tasmanian Eucalyptus',
    latinName: 'Eucalyptus globulus',
    description: 'Steam-distilled from the blue gum eucalyptus of Tasmania, offering clarity and invigoration with every breath.',
    humour: 'INVIGORATING',
    rarity: 'UNCOMMON',
    season: 'SPRING',
    price: 38.00,
    volumeMl: 5,
    stockQuantity: 8,
    notes: ['Camphoraceous', 'Fresh', 'Cooling'],
    image: '/images/eucalyptus.jpg',
  },
  {
    id: '3',
    folioNumber: 'III',
    commonName: 'Calabrian Bergamot',
    latinName: 'Citrus bergamia',
    description: 'Cold-pressed from the sun-kissed bergamot orchards of Calabria, this essence embodies Italian sunshine.',
    humour: 'UPLIFTING',
    rarity: 'RARE',
    season: 'WINTER',
    price: 45.00,
    volumeMl: 5,
    stockQuantity: 15,
    notes: ['Citrus', 'Floral', 'Bright'],
    image: '/images/bergamot.jpg',
  },
  {
    id: '4',
    folioNumber: 'IV',
    commonName: 'Bulgarian Rose',
    latinName: 'Rosa damascena',
    description: 'The queen of flowers, distilled from petals hand-picked at dawn in the Valley of Roses.',
    humour: 'BALANCING',
    rarity: 'LEGENDARY',
    season: 'SPRING',
    price: 85.00,
    volumeMl: 5,
    stockQuantity: 3,
    notes: ['Floral', 'Rich', 'Romantic'],
    image: '/images/rose.jpg',
  },
  {
    id: '5',
    folioNumber: 'V',
    commonName: 'Sandalwood Mysore',
    latinName: 'Santalum album',
    description: 'Aged for decades, this sacred sandalwood essence offers profound spiritual depth.',
    humour: 'GROUNDING',
    rarity: 'LEGENDARY',
    season: 'AUTUMN',
    price: 120.00,
    volumeMl: 5,
    stockQuantity: 2,
    notes: ['Woody', 'Creamy', 'Sacred'],
    image: '/images/sandalwood.jpg',
  },
  {
    id: '6',
    folioNumber: 'VI',
    commonName: 'Peppermint Supreme',
    latinName: 'Mentha × piperita',
    description: 'Field-distilled peppermint from the English countryside, capturing the essence of morning dew.',
    humour: 'INVIGORATING',
    rarity: 'COMMON',
    season: 'SUMMER',
    price: 32.00,
    volumeMl: 5,
    stockQuantity: 25,
    notes: ['Minty', 'Cooling', 'Fresh'],
    image: '/images/peppermint.jpg',
  },
];

export function EssenceCompendium() {
  const [selectedHumour, setSelectedHumour] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEssences = essences.filter((essence) => {
    const matchesHumour = selectedHumour === 'ALL' || essence.humour === selectedHumour;
    const matchesSearch = searchQuery === '' || 
      essence.commonName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      essence.latinName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      essence.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesHumour && matchesSearch;
  });

  return (
    <section className="py-20 parchment-background">
      <div className="container-manuscript">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-manuscript-display text-4xl md:text-5xl font-bold text-ink mb-6">
              The <span className="text-gold">Compendium</span>
            </h2>
            <p className="text-lg text-ink-muted max-w-3xl mx-auto leading-relaxed">
              Our collection of handcrafted botanical essences, each distilled through 
              alchemical processes passed down through generations of master perfumers.
            </p>
          </motion.div>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-ink-muted" />
            <input
              type="text"
              placeholder="Search essences..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 manuscript-input"
            />
          </div>

          {/* Humour Filter */}
          <HumourFilter
            selectedHumour={selectedHumour}
            onHumourChange={setSelectedHumour}
          />
        </div>

        {/* Essence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEssences.map((essence, index) => (
            <motion.div
              key={essence.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <EssenceCard essence={essence} />
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredEssences.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="font-manuscript-display text-2xl text-ink mb-2">
              No essences found
            </h3>
            <p className="text-ink-muted">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
