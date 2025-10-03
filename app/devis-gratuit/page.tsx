import { Metadata } from 'next'
import { CheckCircle2, Clock, Shield, Award } from 'lucide-react'
import MultiStepForm from '@/components/forms/MultiStepForm'
import { PAGE_METADATA } from '@/lib/metadata'

export const metadata: Metadata = PAGE_METADATA.devis

export default function DevisGratuitPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="gradient-accent text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Devis Gratuit en 24h
            </h1>
            <p className="text-xl text-white/95 mb-8">
              Obtenez votre estimation détaillée et personnalisée sans engagement.
              Réponse rapide et prix transparents garantis.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">Réponse sous 24h</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3">
                <Shield className="w-5 h-5" />
                <span className="font-semibold">Sans engagement</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3">
                <Award className="w-5 h-5" />
                <span className="font-semibold">100% Gratuit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form - 2/3 */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Remplissez le formulaire
                </h2>
                <p className="text-gray-600 mb-8">
                  Quelques informations suffisent pour recevoir votre devis personnalisé.
                  Le formulaire ne prend que 2 minutes.
                </p>
                <MultiStepForm />
              </div>
            </div>

            {/* Benefits Sidebar - 1/3 */}
            <div className="space-y-6">
              {/* What to Expect */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Ce qui est inclus
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-accent-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Visite technique gratuite
                      </div>
                      <div className="text-sm text-gray-600">
                        Un expert se déplace chez vous
                      </div>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-accent-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Plan 3D de votre projet
                      </div>
                      <div className="text-sm text-gray-600">
                        Visualisez le résultat final
                      </div>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-accent-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Devis détaillé transparent
                      </div>
                      <div className="text-sm text-gray-600">
                        Chaque poste de dépense expliqué
                      </div>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-accent-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Conseils personnalisés
                      </div>
                      <div className="text-sm text-gray-600">
                        Optimisation budget & délais
                      </div>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-accent-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Planning prévisionnel
                      </div>
                      <div className="text-sm text-gray-600">
                        Dates de début et fin estimées
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Process Timeline */}
              <div className="bg-gradient-primary text-white rounded-3xl p-8">
                <h3 className="text-xl font-bold mb-6">
                  Comment ça marche ?
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Formulaire</div>
                      <div className="text-sm text-white/80">
                        Remplissez le formulaire en 2 min
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Contact</div>
                      <div className="text-sm text-white/80">
                        Nous vous appelons sous 24h
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Visite</div>
                      <div className="text-sm text-white/80">
                        Rendez-vous technique gratuit
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Devis</div>
                      <div className="text-sm text-white/80">
                        Réception du devis détaillé
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantee Badge */}
              <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Garantie Satisfaction
                </h3>
                <p className="text-sm text-gray-600">
                  Aucun engagement de votre part. Devis 100% gratuit et sans obligation
                  d&apos;achat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
