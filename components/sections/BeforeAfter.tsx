'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { PROJECTS } from '@/lib/constants'

export default function BeforeAfter() {
  const [activeProject, setActiveProject] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging && e.type !== 'touchmove') return

    const container = e.currentTarget.getBoundingClientRect()
    let clientX: number

    if ('touches' in e) {
      clientX = e.touches[0].clientX
    } else {
      clientX = e.clientX
    }

    const x = clientX - container.left
    const percentage = (x / container.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }

  return (
    <section className="section bg-white">
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
            Nos Réalisations{' '}
            <span className="text-accent-500">Avant / Après</span>
          </h2>
          <p className="text-body-large text-gray-600">
            Découvrez la transformation spectaculaire de nos projets. Des résultats
            qui parlent d&apos;eux-mêmes.
          </p>
        </motion.div>

        {/* Project Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {PROJECTS.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(index)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeProject === index
                  ? 'bg-accent-500 text-white shadow-accent'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {project.title}
            </button>
          ))}
        </motion.div>

        {/* Before/After Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div
            className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-3xl cursor-ew-resize select-none"
            onMouseMove={handleMove}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onTouchMove={handleMove}
          >
            {/* Before Image */}
            <Image
              src={PROJECTS[activeProject].beforeImage}
              alt={`${PROJECTS[activeProject].title} - Avant`}
              fill
              className="object-cover"
            />

            {/* After Image */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <Image
                src={PROJECTS[activeProject].afterImage}
                alt={`${PROJECTS[activeProject].title} - Après`}
                fill
                className="object-cover"
              />
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-accent-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                  />
                </svg>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-bold text-sm">
              Avant
            </div>
            <div className="absolute top-6 right-6 bg-accent-500 text-white px-4 py-2 rounded-lg font-bold text-sm">
              Après
            </div>

            {/* Metric Badge */}
            {PROJECTS[activeProject].metric && (
              <div className="absolute bottom-6 left-6 bg-white px-6 py-3 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-accent-500">
                  {PROJECTS[activeProject].metric}
                </div>
              </div>
            )}
          </div>

          {/* Project Description */}
          <div className="text-center mt-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              {PROJECTS[activeProject].title}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {PROJECTS[activeProject].description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
