import { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import MultiStepForm from '@/components/forms/MultiStepForm'
import { PAGE_METADATA } from '@/lib/metadata'
import { BUSINESS_INFO } from '@/lib/constants'
import { formatPhoneNumber } from '@/lib/utils'

export const metadata: Metadata = PAGE_METADATA.contact

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="gradient-primary text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Contactez-nous
          </h1>
          <p className="text-xl text-white/90">
            Réponse garantie sous 24h · Devis gratuit et sans engagement
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form - 2/3 width */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Demande de Devis Gratuit
                </h2>
                <p className="text-gray-600 mb-8">
                  Remplissez ce formulaire en 2 minutes et recevez votre devis
                  personnalisé sous 24h.
                </p>
                <MultiStepForm />
              </div>
            </div>

            {/* Contact Info Sidebar - 1/3 width */}
            <div className="space-y-6">
              {/* Contact Card */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Nos Coordonnées
                </h3>

                <div className="space-y-6">
                  {/* Phone */}
                  <a
                    href={`tel:${formatPhoneNumber(BUSINESS_INFO.phone)}`}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-primary-50 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent-500 transition-colors">
                      <Phone className="w-6 h-6 text-accent-600 group-hover:text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">
                        Téléphone
                      </div>
                      <div className="text-gray-600">
                        {BUSINESS_INFO.phone}
                      </div>
                      <div className="text-sm text-primary-600 mt-1">
                        Lun-Ven 8h-18h, Sam 9h-16h
                      </div>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-primary-50 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent-500 transition-colors">
                      <Mail className="w-6 h-6 text-accent-600 group-hover:text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">
                        Email
                      </div>
                      <div className="text-gray-600 break-all">
                        {BUSINESS_INFO.email}
                      </div>
                      <div className="text-sm text-primary-600 mt-1">
                        Réponse sous 24h
                      </div>
                    </div>
                  </a>

                  {/* Address */}
                  <div className="flex items-start gap-4 p-4 rounded-xl">
                    <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">
                        Adresse
                      </div>
                      <div className="text-gray-600">
                        {BUSINESS_INFO.address}
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4 p-4 rounded-xl">
                    <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-accent-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">
                        Horaires
                      </div>
                      <div className="text-gray-600 space-y-1">
                        <div>Lun-Ven: 08:00 - 18:00</div>
                        <div>Sam: 09:00 - 16:00</div>
                        <div className="text-sm text-gray-500">
                          Dimanche fermé
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us Card */}
              <div className="bg-gradient-accent text-white rounded-3xl shadow-xl p-8">
                <h3 className="text-xl font-bold mb-4">
                  Pourquoi nous choisir ?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-2xl">✓</span>
                    <span>{BUSINESS_INFO.yearsExperience} ans d&apos;expérience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-2xl">✓</span>
                    <span>+450 projets réalisés</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-2xl">✓</span>
                    <span>Garantie décennale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-2xl">✓</span>
                    <span>Prix transparents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-2xl">✓</span>
                    <span>Devis gratuit sous 24h</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-12">
            <div className="bg-white rounded-3xl shadow-xl p-4 lg:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Nous Trouver
              </h3>
              <div className="aspect-[16/9] lg:aspect-[21/9] rounded-2xl overflow-hidden bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.9876543210987!2d6.1319!3d49.6116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDM2JzQxLjgiTiA2wrAwNyA1NC44IkU!5e0!3m2!1sfr!2slu!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Carte de localisation JardinLux Pro"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
