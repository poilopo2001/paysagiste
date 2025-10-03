import { Metadata } from 'next'
import Image from 'next/image'
import { PROJECTS } from '@/lib/constants'
import { PAGE_METADATA } from '@/lib/metadata'

export const metadata: Metadata = PAGE_METADATA.realisations

export default function RealisationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="gradient-primary text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Nos Réalisations
          </h1>
          <p className="text-xl text-white/95 max-w-3xl">
            Découvrez +450 projets réalisés au Luxembourg. Nos transformations
            avant/après témoignent de notre expertise et de notre savoir-faire.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-3xl transition-all"
              >
                {/* Before Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.beforeImage}
                    alt={`${project.title} - Avant`}
                    fill
                    className="object-cover group-hover:opacity-0 transition-opacity duration-500"
                  />
                  {/* After Image */}
                  <Image
                    src={project.afterImage}
                    alt={`${project.title} - Après`}
                    fill
                    className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  {/* Label */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-bold text-sm group-hover:hidden">
                    Avant
                  </div>
                  <div className="absolute top-4 left-4 bg-accent-500 text-white px-4 py-2 rounded-lg font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Après
                  </div>
                  {/* Metric Badge */}
                  {project.metric && (
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="font-bold text-accent-500">
                        {project.metric}
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-sm text-accent-600 font-semibold mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* More Projects CTA */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-3xl shadow-xl p-12 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Vous souhaitez voir plus de réalisations ?
              </h2>
              <p className="text-gray-600 mb-8">
                Contactez-nous pour découvrir l&apos;intégralité de notre portfolio et
                visiter des chantiers terminés près de chez vous.
              </p>
              <a href="/contact" className="btn btn-accent btn-xl">
                Demander un Rendez-vous
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section gradient-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">450+</div>
              <div className="text-white/80">Projets Réalisés</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-white/80">Satisfaction Client</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">15</div>
              <div className="text-white/80">Ans d&apos;Expérience</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24h</div>
              <div className="text-white/80">Délai Devis</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
