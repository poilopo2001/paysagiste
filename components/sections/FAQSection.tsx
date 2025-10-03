'use client'

import { motion } from 'framer-motion'
import Accordion from '@/components/ui/Accordion'
import { FAQ_HOME } from '@/lib/constants'

export default function FAQSection() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <h2 className="text-h2 mb-6">
              Questions{' '}
              <span className="text-accent-500">Fréquentes</span>
            </h2>
            <p className="text-body-large text-gray-600 mb-8">
              Vous avez des questions ? Nous avons les réponses. Retrouvez ici
              les informations essentielles sur nos services et notre processus.
            </p>

            <div className="bg-accent-50 border-l-4 border-accent-500 p-6 rounded-r-xl">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Vous ne trouvez pas votre réponse ?
              </h3>
              <p className="text-gray-600 mb-4">
                Notre équipe est à votre disposition pour répondre à toutes vos
                questions personnalisées.
              </p>
              <a
                href="/contact"
                className="btn btn-accent"
              >
                Contactez-nous
              </a>
            </div>
          </motion.div>

          {/* Right Column - FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Accordion items={FAQ_HOME} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
