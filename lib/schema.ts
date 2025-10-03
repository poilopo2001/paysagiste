import { BUSINESS_INFO, FAQ_HOME } from './constants'
import { FAQItem } from './types'

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://jardinluxpro.lu/#business',
    name: BUSINESS_INFO.name,
    description: BUSINESS_INFO.tagline,
    url: 'https://jardinluxpro.lu',
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.split(',')[0],
      addressLocality: BUSINESS_INFO.location,
      addressCountry: 'LU'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.geo.latitude,
      longitude: BUSINESS_INFO.geo.longitude
    },
    openingHoursSpecification: BUSINESS_INFO.openingHours.map(hours => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: hours.split(' ')[0].split('-'),
      opens: hours.split(' ')[1].split('-')[0],
      closes: hours.split(' ')[1].split('-')[1]
    })),
    priceRange: '€€',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5'
    },
    image: 'https://jardinluxpro.lu/images/logo.png',
    sameAs: [
      BUSINESS_INFO.social.facebook,
      BUSINESS_INFO.social.instagram
    ]
  }
}

export function generateServiceSchema(
  serviceName: string,
  serviceDescription: string,
  priceRange?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceName,
    provider: {
      '@type': 'LocalBusiness',
      name: BUSINESS_INFO.name,
      telephone: BUSINESS_INFO.phone
    },
    description: serviceDescription,
    areaServed: {
      '@type': 'Country',
      name: 'Luxembourg'
    },
    ...(priceRange && {
      offers: {
        '@type': 'Offer',
        price: priceRange,
        priceCurrency: 'EUR'
      }
    })
  }
}

export function generateFAQSchema(faqItems: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: BUSINESS_INFO.name,
    url: 'https://jardinluxpro.lu',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://jardinluxpro.lu/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  }
}
