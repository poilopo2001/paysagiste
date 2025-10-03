import { Service, Testimonial, Project, ProcessStep, Stat, FAQItem } from './types'

// Business Information
export const BUSINESS_INFO = {
  name: 'JardinLux Pro',
  tagline: 'Aménagement de Jardins & Piscines au Luxembourg',
  phone: '+352 621 234 567',
  email: 'contact@jardinluxpro.lu',
  address: '15 Rue de la Gare, L-1234 Luxembourg',
  yearsExperience: 15,
  location: 'Luxembourg',
  geo: {
    latitude: '49.6116',
    longitude: '6.1319'
  },
  openingHours: [
    'Mo-Fr 08:00-18:00',
    'Sa 09:00-16:00'
  ],
  social: {
    facebook: 'https://facebook.com/jardinluxpro',
    instagram: 'https://instagram.com/jardinluxpro'
  }
}

// Services List
export const SERVICES_LIST: Service[] = [
  {
    slug: 'amenagement-jardin',
    title: 'Aménagement de Jardin',
    shortDescription: 'Création complète d\'espaces verts sur-mesure adaptés à vos envies et votre terrain',
    icon: 'Flower2',
    image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80',
    benefits: [
      'Design personnalisé 3D avant travaux',
      'Sélection de plantes adaptées au climat luxembourgeois',
      'Garantie reprise végétaux 2 ans'
    ],
    priceRange: '85€ - 150€/m²'
  },
  {
    slug: 'construction-piscine',
    title: 'Construction de Piscine',
    shortDescription: 'Installation de piscines enterrées et semi-enterrées avec équipements haut de gamme',
    icon: 'Waves',
    image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80',
    benefits: [
      'Piscines enterrées béton ou coque',
      'Systèmes de filtration écologiques',
      'Garantie décennale constructeur'
    ],
    priceRange: '25 000€ - 65 000€'
  },
  {
    slug: 'terrasses-bois-composite',
    title: 'Terrasses Bois & Composite',
    shortDescription: 'Pose de terrasses durables en bois exotique ou composite nouvelle génération',
    icon: 'Square',
    image: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800&q=80',
    benefits: [
      'Matériaux premium anti-déformation',
      'Pose sur lambourdes ajustables',
      'Entretien minimal garanti'
    ],
    priceRange: '120€ - 280€/m²'
  },
  {
    slug: 'entretien-jardin',
    title: 'Entretien de Jardin',
    shortDescription: 'Service d\'entretien régulier pour un jardin impeccable toute l\'année',
    icon: 'Sprout',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
    benefits: [
      'Forfaits mensuels ou trimestriels',
      'Tonte, taille, désherbage inclus',
      'Équipe professionnelle certifiée'
    ],
    priceRange: '45€ - 85€/visite'
  },
  {
    slug: 'eclairage-exterieur',
    title: 'Éclairage Extérieur',
    shortDescription: 'Installation d\'éclairages LED pour sublimer votre jardin de nuit',
    icon: 'Lightbulb',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    benefits: [
      'LED basse consommation longue durée',
      'Programmation automatique crépusculaire',
      'Design discret intégré au paysage'
    ],
    priceRange: '1 500€ - 8 000€'
  },
  {
    slug: 'systeme-arrosage',
    title: 'Système d\'Arrosage Automatique',
    shortDescription: 'Installation de systèmes d\'arrosage intelligents pour économiser l\'eau',
    icon: 'Droplets',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80',
    benefits: [
      'Arrosage programmable par zones',
      'Capteurs de pluie et d\'humidité',
      'Économies d\'eau jusqu\'à 50%'
    ],
    priceRange: '2 000€ - 6 500€'
  }
]

// Statistics
export const STATS: Stat[] = [
  {
    value: '450+',
    label: 'Projets Réalisés',
    icon: 'CheckCircle2'
  },
  {
    value: '15',
    label: 'Ans d\'Expérience',
    icon: 'Award'
  },
  {
    value: '98%',
    label: 'Clients Satisfaits',
    icon: 'Heart'
  },
  {
    value: '24h',
    label: 'Délai Devis Gratuit',
    icon: 'Clock'
  }
]

// Process Steps
export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: 'Demande de Devis Gratuit',
    description: 'Remplissez notre formulaire en ligne ou appelez-nous. Nous vous recontactons sous 24h pour fixer un rendez-vous.',
    icon: 'FileText'
  },
  {
    number: 2,
    title: 'Visite Technique & Étude',
    description: 'Notre expert se déplace chez vous pour analyser votre terrain, prendre les mesures et comprendre vos besoins.',
    icon: 'Home'
  },
  {
    number: 3,
    title: 'Proposition & Devis Détaillé',
    description: 'Vous recevez un plan 3D de votre futur jardin avec un devis transparent et sans surprise incluant tous les postes.',
    icon: 'Presentation'
  },
  {
    number: 4,
    title: 'Réalisation des Travaux',
    description: 'Notre équipe qualifiée réalise les travaux dans les délais convenus avec un suivi quotidien et des photos de progression.',
    icon: 'Hammer'
  },
  {
    number: 5,
    title: 'Réception & Garanties',
    description: 'Visite de réception finale, remise des documents de garantie et conseils d\'entretien personnalisés.',
    icon: 'ThumbsUp'
  }
]

// Testimonials
export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Marie Schneider',
    city: 'Luxembourg-Ville',
    rating: 5,
    quote: 'Une équipe exceptionnelle ! Notre jardin a été transformé en véritable oasis. Le suivi du chantier était impeccable et le résultat dépasse nos attentes. Je recommande vivement JardinLux Pro.'
  },
  {
    id: '2',
    name: 'Thomas Weber',
    city: 'Esch-sur-Alzette',
    rating: 5,
    quote: 'Piscine installée en 3 semaines chrono avec un professionnalisme remarquable. Les conseils pour l\'entretien sont précieux. Prix très compétitif par rapport à la concurrence. Excellent rapport qualité-prix.'
  },
  {
    id: '3',
    name: 'Sophie Muller',
    city: 'Differdange',
    rating: 5,
    quote: 'Ma terrasse en composite est magnifique et ultra-résistante. Après 2 ans aucun entretien nécessaire et toujours comme neuve. L\'équipe a respecté les délais et le budget initial à l\'euro près.'
  },
  {
    id: '4',
    name: 'Jean-Paul Kremer',
    city: 'Dudelange',
    rating: 5,
    quote: 'Service d\'entretien mensuel très professionnel. Mon jardin est toujours impeccable et l\'équipe est ponctuelle. Le forfait annuel est vraiment avantageux et permet d\'économiser du temps précieux.'
  },
  {
    id: '5',
    name: 'Caroline Becker',
    city: 'Pétange',
    rating: 5,
    quote: 'L\'éclairage extérieur a complètement sublimé notre jardin. Les conseils de l\'équipe sur le placement des spots étaient parfaits. Le résultat nocturne est féerique et nos voisins nous envient.'
  },
  {
    id: '6',
    name: 'Marc Fontaine',
    city: 'Schifflange',
    rating: 5,
    quote: 'Système d\'arrosage automatique installé rapidement et programmé selon nos besoins. Fini le gaspillage d\'eau ! La facture d\'eau a baissé de 40% dès le premier été. Investissement très rentable.'
  }
]

// Projects
export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Jardin Contemporain Luxembourg',
    category: 'Aménagement Jardin',
    beforeImage: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80',
    metric: '+45m² espace détente',
    description: 'Transformation complète d\'un jardin de 120m² avec création d\'une terrasse, pelouse premium et massifs fleuris'
  },
  {
    id: '2',
    title: 'Piscine Familiale Esch',
    category: 'Piscine',
    beforeImage: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80',
    metric: 'Piscine 8x4m',
    description: 'Installation d\'une piscine enterrée coque avec plage en composite et système de filtration écologique'
  },
  {
    id: '3',
    title: 'Terrasse Moderne Differdange',
    category: 'Terrasse',
    beforeImage: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800&q=80',
    metric: '35m² composite',
    description: 'Création d\'une terrasse composite haut de gamme avec éclairage LED intégré et garde-corps design'
  }
]

// FAQ
export const FAQ_HOME: FAQItem[] = [
  {
    question: 'Quel est le délai pour obtenir un devis gratuit ?',
    answer: 'Nous nous engageons à vous fournir un devis détaillé dans les 24 à 48 heures suivant votre demande. Après la visite technique sur site, vous recevrez une proposition complète incluant un plan 3D, le détail des travaux et le prix transparent.'
  },
  {
    question: 'Intervenez-vous dans tout le Luxembourg ?',
    answer: 'Oui, nous intervenons dans tout le Grand-Duché de Luxembourg et dans un rayon de 30km autour des frontières (Belgique, France, Allemagne). Les déplacements sont gratuits pour les devis dans ces zones.'
  },
  {
    question: 'Quelles garanties offrez-vous sur vos travaux ?',
    answer: 'Nous offrons une garantie décennale sur tous nos travaux de construction (piscines, terrasses, structures). Les plantations bénéficient d\'une garantie de reprise de 2 ans. Tous nos travaux sont assurés et conformes aux normes luxembourgeoises.'
  },
  {
    question: 'Proposez-vous des facilités de paiement ?',
    answer: 'Oui, nous proposons des échéanciers de paiement adaptés à votre projet : acompte de 30% à la commande, 40% en cours de chantier et solde à la réception. Pour les projets importants (>20 000€), nous pouvons vous mettre en relation avec nos partenaires bancaires.'
  },
  {
    question: 'Puis-je voir des réalisations avant de me décider ?',
    answer: 'Absolument ! Nous disposons d\'un portfolio complet de plus de 450 réalisations avec photos avant/après. Sur demande, nous pouvons également organiser des visites chez d\'anciens clients qui ont accepté de témoigner de notre travail.'
  },
  {
    question: 'Combien de temps dure un chantier d\'aménagement de jardin ?',
    answer: 'La durée varie selon l\'ampleur du projet : 3-5 jours pour une terrasse simple, 2-3 semaines pour un aménagement complet de jardin, 3-4 semaines pour une piscine enterrée. Nous établissons un planning précis validé avec vous avant le début des travaux.'
  }
]

// Navigation Menu
export const NAV_LINKS = [
  { label: 'Accueil', href: '/' },
  { label: 'Nos Services', href: '/nos-services' },
  { label: 'Réalisations', href: '/realisations' },
  { label: 'Contact', href: '/contact' }
]
