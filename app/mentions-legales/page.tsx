import { BUSINESS_INFO } from '@/lib/constants'

export const metadata = {
  title: `Mentions Légales | ${BUSINESS_INFO.name}`,
  robots: 'noindex, nofollow'
}

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="gradient-primary text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl lg:text-5xl font-bold">
            Mentions Légales
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 prose prose-lg max-w-none">
            <h2>Éditeur du site</h2>
            <p>
              <strong>{BUSINESS_INFO.name}</strong><br />
              {BUSINESS_INFO.address}<br />
              Téléphone : {BUSINESS_INFO.phone}<br />
              Email : {BUSINESS_INFO.email}
            </p>

            <h2>Directeur de publication</h2>
            <p>
              Le directeur de la publication du site est le représentant légal de {BUSINESS_INFO.name}.
            </p>

            <h2>Hébergement</h2>
            <p>
              Ce site est hébergé par Vercel Inc.<br />
              340 S Lemon Ave #4133<br />
              Walnut, CA 91789, USA
            </p>

            <h2>Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble de ce site relève de la législation luxembourgeoise et internationale
              sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction
              sont réservés, y compris pour les documents téléchargeables et les représentations
              iconographiques et photographiques.
            </p>

            <h2>Crédits photos</h2>
            <p>
              Les photographies utilisées sur ce site sont la propriété de {BUSINESS_INFO.name} ou
              proviennent de banques d&apos;images libres de droits (Unsplash).
            </p>

            <h2>Protection des données personnelles</h2>
            <p>
              Les informations recueillies sur ce site sont enregistrées dans un fichier informatisé
              par {BUSINESS_INFO.name} pour la gestion de la relation client et l&apos;envoi de devis.
            </p>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous pouvez
              exercer votre droit d&apos;accès aux données vous concernant et les faire rectifier en
              contactant : {BUSINESS_INFO.email}
            </p>

            <h2>Cookies</h2>
            <p>
              Ce site n&apos;utilise pas de cookies de tracking. Seuls des cookies techniques essentiels
              au fonctionnement du site peuvent être utilisés.
            </p>

            <h2>Responsabilité</h2>
            <p>
              {BUSINESS_INFO.name} s&apos;efforce de fournir des informations aussi précises que possible.
              Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des
              carences dans la mise à jour, qu&apos;elles soient de son fait ou du fait des tiers
              partenaires qui lui fournissent ces informations.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
