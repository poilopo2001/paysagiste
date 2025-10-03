import { Metadata } from 'next'
import { BUSINESS_INFO } from './constants'

const { name, location } = BUSINESS_INFO

export const PAGE_METADATA = {
  home: {
    title: `Aménagement Jardin & Piscine ${location} | ${name} | Devis Gratuit 24h`,
    description: `Expert aménagement jardin ${location} depuis ${BUSINESS_INFO.yearsExperience} ans. Création jardins, piscines, terrasses. Devis gratuit sous 24h. Garantie décennale. +450 projets réalisés.`,
    keywords: [
      `aménagement jardin ${location}`,
      `piscine ${location}`,
      `terrasse composite ${location}`,
      `paysagiste ${location}`,
      `entretien jardin ${location}`,
      'construction piscine Luxembourg',
      'jardinier professionnel Luxembourg'
    ],
    openGraph: {
      title: `${name} - Aménagement Jardin & Piscine au ${location}`,
      description: `Transformez votre extérieur avec ${name}. Jardins, piscines, terrasses. ${BUSINESS_INFO.yearsExperience} ans d'expérience. Devis gratuit 24h.`,
      type: 'website',
      locale: 'fr_FR'
    }
  },
  services: {
    title: `Nos Services d'Aménagement Extérieur ${location} | ${name}`,
    description: `Découvrez nos services : création de jardins, construction de piscines, terrasses bois/composite, éclairage extérieur, arrosage automatique. Expertise ${location}.`,
    keywords: [
      `services jardin ${location}`,
      `piscine enterrée ${location}`,
      `terrasse bois ${location}`,
      'éclairage jardin',
      'arrosage automatique'
    ]
  },
  contact: {
    title: `Contact & Devis Gratuit | ${name} ${location}`,
    description: `Contactez ${name} pour votre projet d'aménagement extérieur. Devis gratuit sous 24h. Tél: ${BUSINESS_INFO.phone}. Intervention tout ${location}.`,
    keywords: [
      `devis jardin ${location}`,
      `contact paysagiste ${location}`,
      'devis piscine gratuit',
      'aménagement extérieur prix'
    ]
  },
  realisations: {
    title: `Nos Réalisations ${location} | Portfolio Jardins & Piscines`,
    description: `Découvrez nos +450 réalisations au ${location} : jardins contemporains, piscines familiales, terrasses design. Photos avant/après de nos projets.`,
    keywords: [
      `réalisations jardin ${location}`,
      'portfolio piscine',
      'photos avant après jardin',
      'exemples aménagement extérieur'
    ]
  },
  devis: {
    title: `Devis Gratuit Aménagement Jardin ${location} | Réponse 24h`,
    description: `Obtenez votre devis gratuit et sans engagement en 24h. Aménagement jardin, piscine, terrasse au ${location}. Prix transparents. Garanties incluses.`,
    keywords: [
      `devis gratuit jardin ${location}`,
      'prix aménagement extérieur',
      'tarif piscine Luxembourg',
      'cout terrasse composite'
    ]
  }
}

export function generateServiceMetadata(serviceTitle: string, serviceDescription: string): Metadata {
  return {
    title: `${serviceTitle} ${location} | ${name} | Devis Gratuit`,
    description: `${serviceDescription} Expert ${serviceTitle.toLowerCase()} au ${location}. Devis gratuit 24h. Garanties incluses. ${BUSINESS_INFO.yearsExperience} ans d'expérience.`,
    keywords: [
      `${serviceTitle.toLowerCase()} ${location}`,
      `prix ${serviceTitle.toLowerCase()}`,
      `entreprise ${serviceTitle.toLowerCase()}`,
      `devis ${serviceTitle.toLowerCase()}`
    ],
    openGraph: {
      title: `${serviceTitle} au ${location} - ${name}`,
      description: serviceDescription,
      type: 'website'
    }
  }
}
