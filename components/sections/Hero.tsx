'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star, CheckCircle2 } from 'lucide-react'
import { BUSINESS_INFO } from '@/lib/constants'

export default function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1920&q=90"
          alt={`Aménagement de jardin professionnel au ${BUSINESS_INFO.location}`}
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 gradient-hero" />
        {/* Animated shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-float delay-300" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-20 lg:py-32">
        <div className="max-w-4xl">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-6"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-accent-400 fill-accent-400"
                />
              ))}
            </div>
            <span className="text-white font-semibold text-sm">
              4.9/5 · 127 avis clients
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-hero text-white mb-6 text-shadow"
          >
            Transformez votre jardin en{' '}
            <span className="text-accent-400">oasis de rêve</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-body-large text-white/95 mb-8 max-w-3xl"
          >
            Expert en aménagement de jardins et construction de piscines au{' '}
            {BUSINESS_INFO.location}. {BUSINESS_INFO.yearsExperience} ans d&apos;expérience,
            +450 projets réalisés. Devis gratuit sous 24h.
          </motion.p>

          {/* USPs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            {[
              'Garantie Décennale',
              'Devis Gratuit 24h',
              'Prix Transparents'
            ].map((usp, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2"
              >
                <CheckCircle2 className="w-5 h-5 text-accent-400" />
                <span className="text-white font-medium text-sm">{usp}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/devis-gratuit" className="btn btn-accent btn-xl group">
              Obtenir mon Devis Gratuit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/realisations" className="btn btn-secondary btn-xl">
              Voir nos Réalisations
            </Link>
          </motion.div>

          {/* Social Proof Numbers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/20"
          >
            <div>
              <div className="text-4xl font-bold text-white mb-1">
                450<span className="text-accent-400">+</span>
              </div>
              <div className="text-white/80 text-sm">Projets Réalisés</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-1">
                {BUSINESS_INFO.yearsExperience}
                <span className="text-accent-400">ans</span>
              </div>
              <div className="text-white/80 text-sm">D&apos;Expérience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-1">
                98<span className="text-accent-400">%</span>
              </div>
              <div className="text-white/80 text-sm">Clients Satisfaits</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
