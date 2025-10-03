import { BUSINESS_INFO } from '@/lib/constants'

export const metadata = {
  title: `Politique de Confidentialité | ${BUSINESS_INFO.name}`,
  robots: 'noindex, nofollow'
}

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="gradient-primary text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl lg:text-5xl font-bold">
            Politique de Confidentialité
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 prose prose-lg max-w-none">
            <p className="lead">
              {BUSINESS_INFO.name} s&apos;engage à protéger la confidentialité des informations
              personnelles de ses utilisateurs.
            </p>

            <h2>1. Collecte des informations</h2>
            <p>
              Nous collectons les informations que vous nous fournissez directement lorsque vous :
            </p>
            <ul>
              <li>Remplissez un formulaire de contact ou de demande de devis</li>
              <li>Nous contactez par téléphone ou par email</li>
              <li>Vous inscrivez à notre newsletter (si applicable)</li>
            </ul>
            <p>
              Les informations collectées peuvent inclure : nom, prénom, adresse email, numéro de
              téléphone, code postal, et détails de votre projet.
            </p>

            <h2>2. Utilisation des informations</h2>
            <p>
              Les informations personnelles que nous collectons sont utilisées pour :
            </p>
            <ul>
              <li>Répondre à vos demandes de devis et d&apos;information</li>
              <li>Vous recontacter concernant votre projet</li>
              <li>Améliorer nos services et notre site web</li>
              <li>Vous envoyer des informations sur nos services (avec votre consentement)</li>
            </ul>

            <h2>3. Protection des données</h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos
              informations personnelles contre tout accès, modification, divulgation ou destruction
              non autorisés.
            </p>
            <p>
              Vos données sont stockées de manière sécurisée et ne sont accessibles que par le
              personnel autorisé de {BUSINESS_INFO.name}.
            </p>

            <h2>4. Partage des informations</h2>
            <p>
              Nous ne vendons, n&apos;échangeons ni ne louons vos informations personnelles à des tiers.
              Vos données peuvent être partagées avec :
            </p>
            <ul>
              <li>Nos sous-traitants techniques (hébergement, emailing) dans le strict respect du RGPD</li>
              <li>Les autorités compétentes si la loi l&apos;exige</li>
            </ul>

            <h2>5. Vos droits</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
            </p>
            <ul>
              <li><strong>Droit d&apos;accès :</strong> Vous pouvez demander une copie des données que nous détenons sur vous</li>
              <li><strong>Droit de rectification :</strong> Vous pouvez demander la correction de données inexactes</li>
              <li><strong>Droit à l&apos;effacement :</strong> Vous pouvez demander la suppression de vos données</li>
              <li><strong>Droit d&apos;opposition :</strong> Vous pouvez vous opposer au traitement de vos données</li>
              <li><strong>Droit à la portabilité :</strong> Vous pouvez demander le transfert de vos données</li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous à : <strong>{BUSINESS_INFO.email}</strong>
            </p>

            <h2>6. Conservation des données</h2>
            <p>
              Nous conservons vos données personnelles pendant la durée nécessaire aux finalités
              pour lesquelles elles ont été collectées, dans le respect de la réglementation en vigueur.
            </p>
            <p>
              Les données relatives aux demandes de devis sont conservées pendant 3 ans maximum.
            </p>

            <h2>7. Cookies</h2>
            <p>
              Notre site utilise uniquement des cookies techniques essentiels au bon fonctionnement
              du site. Aucun cookie de tracking ou publicitaire n&apos;est utilisé sans votre consentement.
            </p>

            <h2>8. Modifications de cette politique</h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment.
              Les modifications entreront en vigueur dès leur publication sur cette page.
            </p>

            <h2>9. Contact</h2>
            <p>
              Pour toute question concernant cette politique de confidentialité, vous pouvez nous contacter :
            </p>
            <ul>
              <li>Par email : {BUSINESS_INFO.email}</li>
              <li>Par téléphone : {BUSINESS_INFO.phone}</li>
              <li>Par courrier : {BUSINESS_INFO.address}</li>
            </ul>

            <p className="text-sm text-gray-600 mt-8">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
