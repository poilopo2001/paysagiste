import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Clock } from 'lucide-react'
import { BUSINESS_INFO, SERVICES_LIST } from '@/lib/constants'
import { formatPhoneNumber } from '@/lib/utils'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-700 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center font-bold text-xl">
                JL
              </div>
              <div>
                <div className="font-bold text-xl">{BUSINESS_INFO.name}</div>
                <div className="text-sm text-primary-100">
                  Depuis {currentYear - BUSINESS_INFO.yearsExperience}
                </div>
              </div>
            </div>
            <p className="text-primary-100 text-sm leading-relaxed mb-6">
              Expert en aménagement de jardins, construction de piscines et
              création d&apos;espaces extérieurs au Luxembourg. {BUSINESS_INFO.yearsExperience} ans d&apos;expérience
              à votre service.
            </p>
            <div className="flex gap-4">
              <a
                href={BUSINESS_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center hover:bg-accent-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={BUSINESS_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center hover:bg-accent-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Nos Services</h3>
            <ul className="space-y-3">
              {SERVICES_LIST.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/${service.slug}`}
                    className="text-primary-100 hover:text-accent-400 text-sm transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-accent-400 rounded-full group-hover:scale-150 transition-transform" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Liens Rapides</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-primary-100 hover:text-accent-400 text-sm transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-accent-400 rounded-full group-hover:scale-150 transition-transform" />
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/nos-services"
                  className="text-primary-100 hover:text-accent-400 text-sm transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-accent-400 rounded-full group-hover:scale-150 transition-transform" />
                  Nos Services
                </Link>
              </li>
              <li>
                <Link
                  href="/realisations"
                  className="text-primary-100 hover:text-accent-400 text-sm transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-accent-400 rounded-full group-hover:scale-150 transition-transform" />
                  Réalisations
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary-100 hover:text-accent-400 text-sm transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-accent-400 rounded-full group-hover:scale-150 transition-transform" />
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/devis-gratuit"
                  className="text-primary-100 hover:text-accent-400 text-sm transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-accent-400 rounded-full group-hover:scale-150 transition-transform" />
                  Devis Gratuit
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${formatPhoneNumber(BUSINESS_INFO.phone)}`}
                  className="flex items-start gap-3 text-primary-100 hover:text-accent-400 text-sm transition-colors group"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-medium text-white">Téléphone</div>
                    {BUSINESS_INFO.phone}
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-start gap-3 text-primary-100 hover:text-accent-400 text-sm transition-colors group"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-medium text-white">Email</div>
                    {BUSINESS_INFO.email}
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-primary-100 text-sm">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-white">Adresse</div>
                    {BUSINESS_INFO.address}
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3 text-primary-100 text-sm">
                  <Clock className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-white">Horaires</div>
                    <div>Lun-Ven: 08:00-18:00</div>
                    <div>Sam: 09:00-16:00</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-600">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-200">
            <div>
              © {currentYear} {BUSINESS_INFO.name}. Tous droits réservés.
            </div>
            <div className="flex gap-6">
              <Link
                href="/mentions-legales"
                className="hover:text-accent-400 transition-colors"
              >
                Mentions Légales
              </Link>
              <Link
                href="/politique-confidentialite"
                className="hover:text-accent-400 transition-colors"
              >
                Politique de Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
