import { PrismaClient, HumourType, RarityType, SeasonType } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌿 Seeding Atelier Arôme database...\n');

  // Create essences
  const essences = [
    {
      folioNumber: 'I',
      slug: 'provence-lavender',
      latinName: 'Lavandula × intermedia',
      commonName: 'Provence Lavender',
      description: 'Harvested at dawn from the rolling hills of Provence, this exceptional lavender essence captures the pure soul of the Mediterranean.',
      longDescription: 'Our Provence Lavender is cultivated in the high-altitude fields of the Alpes-de-Haute-Provence, where the combination of limestone soil, intense sunlight, and cool mountain air creates the perfect conditions for exceptional lavender. Each plant is hand-harvested at dawn during the peak flowering season, when the essential oil concentration is at its highest. The distillation process takes place within hours of harvest using traditional copper alembics that have been in our family for three generations. This meticulous attention to timing and technique results in an essence of extraordinary purity, with sweet, floral notes balanced by subtle herbaceous undertones. The calming properties of this essence make it perfect for evening rituals, meditation practices, and creating peaceful atmospheres.',
      humour: HumourType.CALMING,
      rarity: RarityType.RARE,
      season: SeasonType.SUMMER,
      extractionMethod: 'Steam Distillation',
      notes: ['Floral', 'Herbaceous', 'Sweet', 'Honeyed'],
      price: 42.00,
      volumeMl: 5,
      stockQuantity: 12,
      isFeatured: true,
      batchNumber: 'PV-2024-A1',
      harvestDate: new Date('2024-07-15'),
      distillationDate: new Date('2024-07-16'),
      distillationHours: 4,
      terroir: 'Alpes-de-Haute-Provence, France',
      altitude: 800,
    },
    {
      folioNumber: 'II',
      slug: 'tasmanian-eucalyptus',
      latinName: 'Eucalyptus globulus',
      commonName: 'Tasmanian Eucalyptus',
      description: 'Steam-distilled from the blue gum eucalyptus of Tasmania, offering clarity and invigoration with every breath.',
      longDescription: 'Sourced from the pristine wilderness of Tasmania, our Eucalyptus globulus is harvested from mature trees that have been sustainably managed for over a century. The leaves are collected during the southern hemisphere\'s spring, when the eucalyptus oil content reaches its peak. Our distillation process uses a combination of traditional knowledge and modern precision, maintaining temperatures between 100-110°C to preserve the full spectrum of aromatic compounds. The resulting essence is remarkably clean and penetrating, with the characteristic camphoraceous notes of eucalyptus balanced by subtle sweet and woody undertones. This invigorating essence is ideal for morning rituals, focus enhancement, and clearing spaces of stagnant energy.',
      humour: HumourType.INVIGORATING,
      rarity: RarityType.UNCOMMON,
      season: SeasonType.SPRING,
      extractionMethod: 'Steam Distillation',
      notes: ['Camphoraceous', 'Fresh', 'Cooling', 'Woody'],
      price: 38.00,
      volumeMl: 5,
      stockQuantity: 8,
      isFeatured: true,
      batchNumber: 'TE-2024-B2',
      harvestDate: new Date('2024-10-20'),
      distillationDate: new Date('2024-10-21'),
      distillationHours: 3,
      terroir: 'Tasmania, Australia',
      altitude: 400,
    },
    {
      folioNumber: 'III',
      slug: 'calabrian-bergamot',
      latinName: 'Citrus bergamia',
      commonName: 'Calabrian Bergamot',
      description: 'Cold-pressed from the sun-kissed bergamot orchards of Calabria, this essence embodies Italian sunshine.',
      longDescription: 'Our bergamot is cultivated in the coastal region of Calabria, where the Mediterranean climate and volcanic soil create ideal growing conditions for this precious citrus fruit. The essence is extracted through cold-pressing of the fresh peel, a technique that preserves the delicate aromatic compounds that would be lost through heat distillation. The process requires exceptional skill and timing - the peels must be processed within hours of harvest to capture the full complexity of the oil. The resulting essence is bright and effervescent, with the characteristic citrus notes of bergamot enhanced by subtle floral and spicy undertones. Unlike other citrus oils, bergamot has a remarkable depth and complexity that makes it equally at home in perfumery and aromatherapy applications.',
      humour: HumourType.UPLIFTING,
      rarity: RarityType.RARE,
      season: SeasonType.WINTER,
      extractionMethod: 'Cold Pression',
      notes: ['Citrus', 'Floral', 'Bright', 'Spicy'],
      price: 45.00,
      volumeMl: 5,
      stockQuantity: 15,
      isFeatured: true,
      batchNumber: 'CB-2024-C3',
      harvestDate: new Date('2024-02-10'),
      distillationDate: new Date('2024-02-11'),
      distillationHours: 2,
      terroir: 'Calabria, Italy',
      altitude: 100,
    },
    {
      folioNumber: 'IV',
      slug: 'bulgarian-rose',
      latinName: 'Rosa damascena',
      commonName: 'Bulgarian Rose',
      description: 'The queen of flowers, distilled from petals hand-picked at dawn in the Valley of Roses.',
      longDescription: 'Considered the finest rose essence in the world, our Bulgarian Rose is sourced from the legendary Valley of Roses, where the unique climate and soil conditions have been cultivated roses for over 300 years. The harvest begins before dawn during the brief flowering season in May and June, when the essential oil concentration in the petals is at its peak. It takes approximately 3,000 kilograms of rose petals to produce just one kilogram of essential oil, making this one of the most precious and expensive essences in the world. Our traditional steam distillation process, passed down through generations of master distillers, captures the full complexity of the rose\'s aromatic profile. The resulting essence is intensely floral and rich, with deep, honeyed notes and a remarkable persistence on the skin.',
      humour: HumourType.BALANCING,
      rarity: RarityType.LEGENDARY,
      season: SeasonType.SPRING,
      extractionMethod: 'Steam Distillation',
      notes: ['Floral', 'Rich', 'Romantic', 'Honeyed'],
      price: 85.00,
      volumeMl: 5,
      stockQuantity: 3,
      isFeatured: true,
      batchNumber: 'BR-2024-D4',
      harvestDate: new Date('2024-05-25'),
      distillationDate: new Date('2024-05-26'),
      distillationHours: 6,
      terroir: 'Kazanlak Valley, Bulgaria',
      altitude: 350,
    },
    {
      folioNumber: 'V',
      slug: 'sandalwood-mysore',
      latinName: 'Santalum album',
      commonName: 'Sandalwood Mysore',
      description: 'Aged for decades, this sacred sandalwood essence offers profound spiritual depth.',
      longDescription: 'Our sandalwood essence represents the pinnacle of artisanal craftsmanship. Sourced from mature Santalum album trees in the Mysore region of India, this essence is derived from heartwood that has been aged for a minimum of 30 years. The aging process is crucial - as the wood matures, its essential oil develops remarkable complexity and depth. The distillation process is performed using traditional methods that have remained unchanged for centuries. The wood is ground by hand and distilled slowly over several days, allowing the full spectrum of aromatic compounds to be captured. The resulting essence is profoundly woody and creamy, with sweet, balsamic notes that evolve beautifully on the skin. This grounding essence has been used for millennia in spiritual practices and meditation, and our version captures the sacred quality that has made sandalwood so revered across cultures.',
      humour: HumourType.GROUNDING,
      rarity: RarityType.LEGENDARY,
      season: SeasonType.AUTUMN,
      extractionMethod: 'Steam Distillation',
      notes: ['Woody', 'Creamy', 'Sacred', 'Balsamic'],
      price: 120.00,
      volumeMl: 5,
      stockQuantity: 2,
      isFeatured: true,
      batchNumber: 'SM-2024-E5',
      harvestDate: new Date('1994-01-01'),
      distillationDate: new Date('2024-01-15'),
      distillationHours: 72,
      terroir: 'Mysore, India',
      altitude: 800,
    },
    {
      folioNumber: 'VI',
      slug: 'peppermint-supreme',
      latinName: 'Mentha × piperita',
      commonName: 'Peppermint Supreme',
      description: 'Field-distilled peppermint from the English countryside, capturing the essence of morning dew.',
      longDescription: 'Our peppermint is cultivated in the fertile fields of rural England, where the cool climate and rich soil produce peppermint leaves of exceptional quality. The plants are harvested at first light, when the essential oil concentration is at its peak and the leaves are still covered in morning dew. The distillation takes place immediately after harvest in mobile stills located right in the fields, ensuring that none of the volatile aromatic compounds are lost during transport. This field-to-flask approach results in an essence of remarkable freshness and purity. The scent is intensely minty and cooling, with sweet, herbaceous undertones that distinguish it from lesser quality peppermint oils. This invigorating essence is perfect for morning rituals, focus enhancement, and creating an atmosphere of clarity and alertness.',
      humour: HumourType.INVIGORATING,
      rarity: RarityType.COMMON,
      season: SeasonType.SUMMER,
      extractionMethod: 'Steam Distillation',
      notes: ['Minty', 'Cooling', 'Fresh', 'Sweet'],
      price: 32.00,
      volumeMl: 5,
      stockQuantity: 25,
      isFeatured: false,
      batchNumber: 'PS-2024-F6',
      harvestDate: new Date('2024-08-10'),
      distillationDate: new Date('2024-08-10'),
      distillationHours: 2,
      terroir: 'Kent, England',
      altitude: 50,
    },
  ];

  // Create essences with related data
  for (const essenceData of essences) {
    console.log(`Creating essence: ${essenceData.commonName}...`);
    
    const essence = await prisma.essence.create({
      data: essenceData,
    });

    // Create botanical info
    await prisma.botanicalInfo.create({
      data: {
        essenceId: essence.id,
        family: getBotanicalFamily(essenceData.latinName),
        genus: essenceData.latinName.split(' ')[0],
        species: essenceData.latinName.split(' ')[1],
        commonNames: [essenceData.commonName],
        origin: essenceData.terroir,
        plantPart: getPlantPart(essenceData.extractionMethod),
        growingConditions: getGrowingConditions(essenceData.latinName),
        harvestTime: getHarvestTime(essenceData.season),
        sustainabilityNotes: 'Sustainably harvested with respect for natural ecosystems.',
      },
    });

    // Create ritual metadata
    await prisma.essenceRitualMetadata.create({
      data: {
        essenceId: essence.id,
        hapticPattern: getHapticPattern(essenceData.humour),
        audioKey: getAudioKey(essenceData.humour),
        visualEffect: getVisualEffect(essenceData.humour),
        colorPrimary: getPrimaryColor(essenceData.humour),
        colorSecondary: getSecondaryColor(essenceData.humour),
      },
    });

    // Create process steps
    await prisma.alchemicalProcess.createMany({
      data: getProcessSteps(essence.id),
    });

    // Create artisan notes
    await prisma.artisanNote.create({
      data: {
        essenceId: essence.id,
        author: 'Master Perfumer',
        note: getArtisanNote(essenceData.commonName),
        type: 'general',
      },
    });

    // Create testimonials
    await prisma.testimonial.createMany({
      data: getTestimonials(essence.id, essenceData.commonName),
    });
  }

  console.log('\n✨ Database seeded successfully!');
  console.log('🌿 Created 6 essences with complete data');
  console.log('📋 Added botanical information');
  console.log('🎭 Configured ritual metadata');
  console.log('⚗️ Created alchemical process steps');
  console.log('📝 Added artisan notes');
  console.log('⭐ Added testimonials');
}

// Helper functions
function getBotanicalFamily(latinName: string): string {
  const families: Record<string, string> = {
    'Lavandula': 'Lamiaceae',
    'Eucalyptus': 'Myrtaceae',
    'Citrus': 'Rutaceae',
    'Rosa': 'Rosaceae',
    'Santalum': 'Santalaceae',
    'Mentha': 'Lamiaceae',
  };
  const genus = latinName.split(' ')[0];
  return families[genus] || 'Unknown';
}

function getPlantPart(extractionMethod: string): string {
  if (extractionMethod === 'Cold Pression') return 'fruit peel';
  if (extractionMethod === 'Steam Distillation') return 'flowers';
  return 'plant material';
}

function getGrowingConditions(latinName: string): string {
  const conditions: Record<string, string> = {
    'Lavandula × intermedia': 'Well-drained limestone soil, full sun, 600-1200m altitude',
    'Eucalyptus globulus': 'Well-drained sandy soil, full sun, 200-800m altitude',
    'Citrus bergamia': 'Rich volcanic soil, full sun, coastal climate',
    'Rosa damascena': 'Fertile loamy soil, full sun, 200-600m altitude',
    'Santalum album': 'Sandy loam soil, partial shade, 600-1200m altitude',
    'Mentha × piperita': 'Rich moist soil, partial shade, low altitude',
  };
  return conditions[latinName] || 'Standard growing conditions';
}

function getHarvestTime(season: SeasonType): string {
  const times: Record<SeasonType, string> = {
    SPRING: 'Early morning, peak flowering period',
    SUMMER: 'Dawn, when oil concentration is highest',
    AUTUMN: 'Mid-morning, after dew evaporation',
    WINTER: 'Midday, when sun is strongest',
  };
  return times[season];
}

function getHapticPattern(humour: HumourType): string[] {
  const patterns: Record<HumourType, string[]> = {
    CALMING: ['gentle-pulse', 'slow-wave'],
    INVIGORATING: ['sharp-pulse', 'quick-burst'],
    UPLIFTING: ['light-pulse', 'ascending-wave'],
    BALANCING: ['steady-pulse', 'centered-wave'],
    GROUNDING: ['deep-pulse', 'earth-wave'],
  };
  return patterns[humour];
}

function getAudioKey(humour: HumourType): string {
  const keys: Record<HumourType, string> = {
    CALMING: 'lavender-ambience',
    INVIGORATING: 'eucalyptus-fresh',
    UPLIFTING: 'bergamot-bright',
    BALANCING: 'rose-harmony',
    GROUNDING: 'sandalwood-deep',
  };
  return keys[humour];
}

function getVisualEffect(humour: HumourType): string {
  const effects: Record<HumourType, string> = {
    CALMING: 'gentle-float',
    INVIGORATING: 'energetic-pulse',
    UPLIFTING: 'rising-sparkle',
    BALANCING: 'centered-glow',
    GROUNDING: 'earthy-settle',
  };
  return effects[humour];
}

function getPrimaryColor(humour: HumourType): string {
  const colors: Record<HumourType, string> = {
    CALMING: '#B8A9C9',
    INVIGORATING: '#7CB9A0',
    UPLIFTING: '#F5D489',
    BALANCING: '#E8B4B8',
    GROUNDING: '#9A8C6D',
  };
  return colors[humour];
}

function getSecondaryColor(humour: HumourType): string {
  const colors: Record<HumourType, string> = {
    CALMING: '#D6CCE0',
    INVIGORATING: '#A8D6C0',
    UPLIFTING: '#F9E6B3',
    BALANCING: '#F5D9DC',
    GROUNDING: '#C4B896',
  };
  return colors[humour];
}

function getProcessSteps(essenceId: string) {
  return [
    {
      essenceId,
      stepNumber: 1,
      title: 'Botanical Selection',
      description: 'Careful selection of the finest botanical specimens based on aromatic profile and purity.',
      duration: '2 hours',
      equipment: ['magnifying glass', 'aromatic assessment tools'],
    },
    {
      essenceId,
      stepNumber: 2,
      title: 'Preparation Ritual',
      description: 'Traditional preparation methods honoring the botanical\'s natural properties.',
      duration: '4 hours',
      equipment: ['ceremonial tools', 'cleansing vessels'],
    },
    {
      essenceId,
      stepNumber: 3,
      title: 'Sacred Distillation',
      description: 'Slow distillation in copper alembics to preserve the complete aromatic profile.',
      duration: '6 hours',
      temperature: '100°C',
      equipment: ['copper alembic', 'condenser', 'collection vessel'],
    },
    {
      essenceId,
      stepNumber: 4,
      title: 'Maturation',
      description: 'Resting period allowing the essence to develop its full complexity.',
      duration: '30 days',
      equipment: ['dark glass vessels', 'temperature-controlled environment'],
    },
  ];
}

function getArtisanNote(essenceName: string): string {
  const notes: Record<string, string> = {
    'Provence Lavender': 'This batch captures the essence of a perfect Provence dawn. The lavender was harvested under optimal conditions, and the resulting oil shows exceptional complexity.',
    'Tasmanian Eucalyptus': 'The Tasmanian climate has been particularly favorable this season. This essence shows the perfect balance of cooling and invigorating properties.',
    'Calabrian Bergamot': 'A truly exceptional harvest from our coastal Calabrian groves. The bergamot shows remarkable brightness and depth.',
    'Bulgarian Rose': 'This is perhaps our finest rose essence in years. The Valley of Roses blessed us with perfect growing conditions.',
    'Sandalwood Mysore': 'Thirty years of patient aging have resulted in an essence of extraordinary spiritual depth. This is liquid meditation.',
    'Peppermint Supreme': 'The English countryside continues to produce peppermint of unparalleled freshness. A true morning essence.',
  };
  return notes[essenceName] || 'A carefully crafted essence of exceptional quality.';
}

function getTestimonials(essenceId: string, essenceName: string) {
  const testimonials: Record<string, any[]> = {
    'Provence Lavender': [
      {
        author: 'Isabelle Moreau',
        title: 'Aromatherapist, Paris',
        quote: 'The purity of this lavender essence is unmatched. I can sense the dawn harvest in every drop.',
        rating: 5,
        folioEntry: 'XIV',
        isApproved: true,
      },
    ],
    'Tasmanian Eucalyptus': [
      {
        author: 'Dr. James Wilson',
        title: 'Botanical Researcher',
        quote: 'The clarity and invigoration this essence provides is truly remarkable.',
        rating: 5,
        folioEntry: 'XV',
        isApproved: true,
      },
    ],
    'Calabrian Bergamot': [
      {
        author: 'Maria Rossi',
        title: 'Perfumer, Milan',
        quote: 'This bergamot captures the very essence of Italian sunshine. Absolutely divine.',
        rating: 5,
        folioEntry: 'XVI',
        isApproved: true,
      },
    ],
    'Bulgarian Rose': [
      {
        author: 'Henrik Bergström',
        title: 'Master Perfumer, Grasse',
        quote: 'The queen of flowers has found her perfect expression in this essence.',
        rating: 5,
        folioEntry: 'XVII',
        isApproved: true,
      },
    ],
    'Sandalwood Mysore': [
      {
        author: 'Master Yogi Anand',
        title: 'Meditation Teacher',
        quote: 'This sandalwood essence is liquid meditation. Thirty years of patience in every drop.',
        rating: 5,
        folioEntry: 'XVIII',
        isApproved: true,
      },
    ],
    'Peppermint Supreme': [
      {
        author: 'Sarah Thompson',
        title: 'Herbalist',
        quote: 'The freshest, most vibrant peppermint essence I have ever encountered.',
        rating: 5,
        folioEntry: 'XIX',
        isApproved: true,
      },
    ],
  };
  
  return testimonials[essenceName] || [];
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
