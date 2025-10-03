'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { SERVICES_LIST } from '@/lib/constants'

export default function ServicesGrid() {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-h2 mb-6">
            Nos Services d&apos;
            <span className="text-accent-500">Aménagement Extérieur</span>
          </h2>
          <p className="text-body-large text-gray-600">
            De la conception à la réalisation, nous transformons vos espaces
            extérieurs en véritables havres de paix adaptés à votre style de vie.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card-modern h-full flex flex-col">
                {/* Image */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {service.priceRange && (
                    <div className="absolute top-4 right-4 bg-accent-500 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
                      {service.priceRange}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-h3 mb-3 group-hover:text-accent-500 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Benefits */}
                  <ul className="space-y-2 mb-6 flex-1">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTAs */}
                  <div className="flex gap-3">
                    <Link
                      href={`/${service.slug}`}
                      className="btn btn-secondary flex-1 justify-center text-sm"
                    >
                      En Savoir Plus
                    </Link>
                    <Link
                      href="/devis-gratuit"
                      className="btn btn-accent flex-1 justify-center text-sm group/btn"
                    >
                      Devis
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/nos-services" className="btn btn-primary btn-xl">
            Voir Tous Nos Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
