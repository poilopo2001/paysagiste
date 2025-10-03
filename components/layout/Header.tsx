'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { BUSINESS_INFO, NAV_LINKS, SERVICES_LIST } from '@/lib/constants'
import { formatPhoneNumber } from '@/lib/utils'

export default function Header() {
  const [isSticky, setIsSticky] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      {/* Desktop Header */}
      <header
        className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isSticky
            ? 'bg-white shadow-lg py-3'
            : 'bg-white/95 backdrop-blur-sm py-5'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
                JL
              </div>
              <div>
                <div className="font-bold text-xl text-gray-900">
                  {BUSINESS_INFO.name}
                </div>
                <div className="text-xs text-gray-600">
                  {BUSINESS_INFO.tagline}
                </div>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="flex items-center gap-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-accent-500 font-medium transition-colors"
              >
                Accueil
              </Link>

              {/* Services Mega Menu */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="flex items-center gap-1 text-gray-700 hover:text-accent-500 font-medium transition-colors">
                  Nos Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isServicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Mega Menu Dropdown */}
                {isServicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-white rounded-2xl shadow-3xl border border-gray-100 p-8">
                    <div className="grid grid-cols-3 gap-6">
                      {/* Services List */}
                      <div className="col-span-2 grid grid-cols-2 gap-4">
                        {SERVICES_LIST.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/${service.slug}`}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-primary-50 transition-colors group"
                          >
                            <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center text-accent-600 group-hover:scale-110 transition-transform flex-shrink-0">
                              {service.icon === 'Flower2' && '🌸'}
                              {service.icon === 'Waves' && '🌊'}
                              {service.icon === 'Square' && '🏗️'}
                              {service.icon === 'Sprout' && '🌱'}
                              {service.icon === 'Lightbulb' && '💡'}
                              {service.icon === 'Droplets' && '💧'}
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900 text-sm">
                                {service.title}
                              </div>
                              <div className="text-xs text-gray-600 mt-1 line-clamp-2">
                                {service.shortDescription}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* CTA Section */}
                      <div className="bg-gradient-accent rounded-xl p-6 text-white flex flex-col justify-between">
                        <div>
                          <h3 className="font-bold text-lg mb-2">
                            Besoin d&apos;un conseil ?
                          </h3>
                          <p className="text-sm text-white/90 mb-4">
                            Notre équipe d&apos;experts est à votre écoute pour vous guider dans votre projet.
                          </p>
                        </div>
                        <Link
                          href="/contact"
                          className="btn bg-white text-accent-600 hover:bg-gray-100 w-full justify-center"
                        >
                          Contactez-nous
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/realisations"
                className="text-gray-700 hover:text-accent-500 font-medium transition-colors"
              >
                Réalisations
              </Link>

              <Link
                href="/contact"
                className="text-gray-700 hover:text-accent-500 font-medium transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4">
              <a
                href={`tel:${formatPhoneNumber(BUSINESS_INFO.phone)}`}
                className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
              >
                <Phone className="w-5 h-5" />
                <span className="hidden xl:inline">{BUSINESS_INFO.phone}</span>
              </a>
              <Link href="/devis-gratuit" className="btn btn-accent">
                Devis Gratuit
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold">
              JL
            </div>
            <div className="font-bold text-lg text-gray-900">
              {BUSINESS_INFO.name}
            </div>
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 top-[60px] bg-white z-40 overflow-y-auto">
            <nav className="container-custom py-6 space-y-1">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg font-medium"
              >
                Accueil
              </Link>

              {/* Services Accordion */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg font-medium"
                >
                  Nos Services
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      isServicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isServicesOpen && (
                  <div className="ml-4 mt-2 space-y-1">
                    {SERVICES_LIST.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/${service.slug}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-primary-50 hover:text-primary-600 rounded-lg"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/realisations"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg font-medium"
              >
                Réalisations
              </Link>

              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg font-medium"
              >
                Contact
              </Link>

              <div className="pt-4 space-y-3">
                <Link
                  href="/devis-gratuit"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn btn-accent w-full justify-center"
                >
                  Devis Gratuit
                </Link>
                <a
                  href={`tel:${formatPhoneNumber(BUSINESS_INFO.phone)}`}
                  className="btn btn-primary w-full justify-center"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Mobile Sticky Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
        <div className="grid grid-cols-3 gap-1 p-2">
          <a
            href={`tel:${formatPhoneNumber(BUSINESS_INFO.phone)}`}
            className="flex flex-col items-center justify-center py-2 px-3 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
          >
            <Phone className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">Appeler</span>
          </a>
          <Link
            href="/devis-gratuit"
            className="flex flex-col items-center justify-center py-2 px-3 bg-gradient-accent text-white rounded-lg shadow-accent animate-pulse-glow"
          >
            <svg
              className="w-5 h-5 mb-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            <span className="text-xs font-bold">Devis</span>
          </Link>
          <Link
            href="/contact"
            className="flex flex-col items-center justify-center py-2 px-3 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
          >
            <svg
              className="w-5 h-5 mb-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="text-xs font-medium">Contact</span>
          </Link>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-[76px] lg:h-[88px]" />
    </>
  )
}
