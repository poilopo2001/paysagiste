'use client'

import { motion } from 'framer-motion'
import { FileText, Home, Presentation, Hammer, ThumbsUp } from 'lucide-react'
import { PROCESS_STEPS } from '@/lib/constants'

const iconMap: Record<string, any> = {
  FileText,
  Home,
  Presentation,
  Hammer,
  ThumbsUp
}

export default function ProcessTimeline() {
  return (
    <section className="section gradient-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-dots opacity-10" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-h2 text-white mb-6">
            Notre Processus{' '}
            <span className="text-accent-400">en 5 Étapes</span>
          </h2>
          <p className="text-body-large text-white/90">
            Un accompagnement professionnel de A à Z pour concrétiser votre projet
            dans les meilleures conditions.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {PROCESS_STEPS.map((step, index) => {
            const Icon = iconMap[step.icon]
            const isLast = index === PROCESS_STEPS.length - 1

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex gap-6 pb-12">
                  {/* Timeline Line & Number */}
                  <div className="relative flex flex-col items-center">
                    {/* Number Circle */}
                    <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-accent z-10">
                      {step.number}
                    </div>

                    {/* Connecting Line */}
                    {!isLast && (
                      <div className="w-1 h-full bg-accent-400/30 absolute top-16" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 lg:p-8 hover:bg-white/15 transition-colors">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-accent-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white flex-1">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-white/80 leading-relaxed ml-16">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="/devis-gratuit" className="btn bg-white text-primary-600 hover:bg-gray-100 btn-xl">
            Commencer Mon Projet
          </a>
        </motion.div>
      </div>
    </section>
  )
}
