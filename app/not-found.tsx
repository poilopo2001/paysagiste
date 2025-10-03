'use client'

import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary-500 mb-4">404</h1>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Page non trouvée
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn btn-accent btn-xl">
            <Home className="w-5 h-5" />
            Retour à l&apos;accueil
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn btn-secondary btn-xl"
          >
            <ArrowLeft className="w-5 h-5" />
            Page précédente
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4">Pages les plus consultées :</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/nos-services" className="text-primary-600 hover:text-accent-500 font-medium">
              Nos Services
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/realisations" className="text-primary-600 hover:text-accent-500 font-medium">
              Réalisations
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/contact" className="text-primary-600 hover:text-accent-500 font-medium">
              Contact
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/devis-gratuit" className="text-primary-600 hover:text-accent-500 font-medium">
              Devis Gratuit
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
