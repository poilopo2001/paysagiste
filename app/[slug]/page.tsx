import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Award, Shield, Clock, ArrowRight } from 'lucide-react'
import { SERVICES_LIST, PROJECTS, FAQ_HOME } from '@/lib/constants'
import { generateServiceMetadata } from '@/lib/metadata'
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import Accordion from '@/components/ui/Accordion'

interface ServicePageProps {
  params: {
    slug: string
  }
}

// Generate static params for all services
export async function generateStaticParams() {
  return SERVICES_LIST.map((service) => ({
    slug: service.slug
  }))
}

// Generate metadata for each service
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = SERVICES_LIST.find((s) => s.slug === params.slug)

  if (!service) {
    return {
      title: 'Service non trouvé'
    }
  }

  return generateServiceMetadata(service.title, service.shortDescription)
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = SERVICES_LIST.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  // Get related projects
  const relatedProjects = PROJECTS.filter(
    (project) => project.category.toLowerCase().includes(service.title.toLowerCase().split(' ')[0]) ||
                 service.title.toLowerCase().includes(project.category.toLowerCase())
  )

  // Schemas
  const serviceSchema = generateServiceSchema(service.title, service.shortDescription, service.priceRange)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Accueil', url: 'https://jardinluxpro.lu' },
    { name: service.title, url: `https://jardinluxpro.lu/${service.slug}` }
  ])

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 gradient-hero" />
        </div>

        <div className="container-custom relative z-10 py-16">
          <Breadcrumbs items={[{ label: service.title, href: `/${service.slug}` }]} />

          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 text-shadow">
            {service.title}
          </h1>
          <p className="text-xl text-white/95 max-w-3xl mb-8">
            {service.shortDescription}
          </p>

          <div className="flex flex-wrap gap-4">
            {service.benefits.slice(0, 3).map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-white"
              >
                <CheckCircle2 className="w-5 h-5 text-accent-400" />
                <span className="font-medium text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content - 2/3 */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Pourquoi choisir notre service de {service.title.toLowerCase()} ?
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Fort de notre expérience de plus de 15 ans dans le secteur de l&apos;aménagement extérieur
                    au Luxembourg, nous vous offrons un service de {service.title.toLowerCase()} de qualité
                    supérieure, adapté à vos besoins spécifiques et à votre budget.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Notre équipe d&apos;experts certifiés vous accompagne de A à Z dans votre projet, depuis
                    la conception jusqu&apos;à la réalisation finale, en passant par le choix des matériaux
                    et la coordination des travaux.
                  </p>
                </div>
              </div>

              {/* Benefits Grid */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Nos Avantages
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                      <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-6 h-6 text-accent-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">
                          Avantage {index + 1}
                        </h3>
                        <p className="text-gray-600">{benefit}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              {relatedProjects.length > 0 && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">
                    Nos Réalisations
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {relatedProjects.map((project) => (
                      <div key={project.id} className="group relative aspect-[4/3] rounded-2xl overflow-hidden">
                        <Image
                          src={project.afterImage}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                            <p className="text-sm text-white/90">{project.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQ */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Questions Fréquentes
                </h2>
                <Accordion items={FAQ_HOME.slice(0, 4)} />
              </div>
            </div>

            {/* Sidebar - 1/3 */}
            <div className="space-y-6">
              {/* Price Card */}
              {service.priceRange && (
                <div className="bg-accent-50 border-2 border-accent-500 rounded-3xl p-8 sticky top-32">
                  <div className="text-center mb-6">
                    <div className="text-sm text-gray-600 mb-2">À partir de</div>
                    <div className="text-4xl font-bold text-accent-600 mb-2">
                      {service.priceRange}
                    </div>
                    <div className="text-sm text-gray-600">
                      Prix indicatif · Devis personnalisé gratuit
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3 text-sm text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-accent-600 flex-shrink-0" />
                      <span>Devis gratuit sous 24h</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-accent-600 flex-shrink-0" />
                      <span>Visite technique incluse</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-accent-600 flex-shrink-0" />
                      <span>Prix fixe garanti</span>
                    </div>
                  </div>

                  <Link href="/devis-gratuit" className="btn btn-accent w-full justify-center">
                    Demander un Devis
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              )}

              {/* Trust Badges */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Nos Garanties
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Garantie Décennale</div>
                      <div className="text-sm text-gray-600">Tous nos travaux sont couverts</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Certifications RGE</div>
                      <div className="text-sm text-gray-600">Artisans qualifiés</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Délais Respectés</div>
                      <div className="text-sm text-gray-600">Planning garanti</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <div className="gradient-primary text-white rounded-3xl p-8">
                <h3 className="text-xl font-bold mb-4">
                  Besoin d&apos;un conseil ?
                </h3>
                <p className="text-white/90 mb-6">
                  Notre équipe est à votre écoute pour répondre à toutes vos questions.
                </p>
                <Link href="/contact" className="btn bg-white text-primary-600 hover:bg-gray-100 w-full justify-center">
                  Contactez-nous
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="bg-gradient-accent rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto">
              Demandez votre devis gratuit maintenant et recevez une réponse personnalisée sous 24h.
            </p>
            <Link href="/devis-gratuit" className="btn bg-white text-accent-600 hover:bg-gray-100 btn-xl">
              Obtenir mon Devis Gratuit
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
