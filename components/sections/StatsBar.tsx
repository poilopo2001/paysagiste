'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Award, Heart, Clock } from 'lucide-react'
import { STATS } from '@/lib/constants'

const iconMap: Record<string, any> = {
  CheckCircle2,
  Award,
  Heart,
  Clock
}

export default function StatsBar() {
  return (
    <section className="relative -mt-20 z-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-3xl border border-gray-100 p-8 lg:p-12"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, index) => {
              const Icon = iconMap[stat.icon]
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group cursor-pointer hover:scale-110 transition-transform"
                >
                  <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-500 transition-colors">
                    <Icon className="w-8 h-8 text-accent-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
