import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { SERVICES_LIST } from '@/lib/constants'
import { PAGE_METADATA } from '@/lib/metadata'

export const metadata: Metadata = PAGE_METADATA.services

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="gradient-primary text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Nos Services d&apos;Aménagement Extérieur
          </h1>
          <p className="text-xl text-white/95 max-w-3xl">
            Découvrez notre gamme complète de services pour transformer vos espaces
            extérieurs. De l&apos;aménagement de jardin à la construction de piscine,
            nous réalisons tous vos projets avec expertise et passion.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {SERVICES_LIST.map((service, index) => (
              <div
                key={service.slug}
                className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-3xl transition-all"
              >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {service.priceRange && (
                    <div className="absolute top-6 right-6 bg-accent-500 text-white px-6 py-3 rounded-xl font-bold shadow-lg">
                      {service.priceRange}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8 lg:p-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-accent-500 transition-colors">
                    {service.title}
                  </h2>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Benefits */}
                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTAs */}
                  <div className="flex gap-4">
                    <Link
                      href={`/${service.slug}`}
                      className="btn btn-primary flex-1 justify-center group/btn"
                    >
                      En Savoir Plus
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href="/devis-gratuit"
                      className="btn btn-accent flex-1 justify-center"
                    >
                      Devis Gratuit
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="bg-gradient-accent rounded-3xl p-12 lg:p-16 text-center text-white">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Vous ne trouvez pas ce que vous cherchez ?
            </h2>
            <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto">
              Nous proposons également des services sur-mesure adaptés à vos besoins
              spécifiques. Contactez-nous pour en discuter.
            </p>
            <Link
              href="/contact"
              className="btn bg-white text-accent-600 hover:bg-gray-100 btn-xl"
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
