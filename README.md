# JardinLux Pro - Site Web Next.js 14

Site web professionnel pour une entreprise d'aménagement de jardins et construction de piscines au Luxembourg.

## 🚀 Technologies Utilisées

- **Framework**: Next.js 14.2+ (App Router)
- **Language**: TypeScript (Mode Strict)
- **Styling**: Tailwind CSS 3.4+
- **Animations**: Framer Motion 12+
- **Icônes**: Lucide React
- **Formulaires**: React Hook Form + Zod
- **Images**: Next/Image avec optimisation

## 📦 Installation

1. Installer les dépendances :
```bash
npm install
```

2. Lancer le serveur de développement :
```bash
npm run dev
```

3. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🏗️ Structure du Projet

```
v3/
├── app/                          # App Router (Next.js 14)
│   ├── layout.tsx               # Layout racine avec Header/Footer
│   ├── page.tsx                 # Page d'accueil
│   ├── [slug]/                  # Pages de services dynamiques
│   ├── contact/                 # Page de contact
│   ├── nos-services/            # Liste des services
│   ├── realisations/            # Portfolio
│   ├── devis-gratuit/           # Page de conversion principale
│   └── ...                      # Autres pages
├── components/
│   ├── ui/                      # Composants UI réutilisables
│   ├── layout/                  # Header, Footer, Breadcrumbs
│   ├── sections/                # Sections de page (Hero, Stats, etc.)
│   └── forms/                   # Formulaires (MultiStepForm)
├── lib/
│   ├── constants.ts             # Données globales
│   ├── metadata.ts              # SEO & métadonnées
│   ├── schema.ts                # Schémas JSON-LD
│   ├── types.ts                 # Types TypeScript
│   └── utils.ts                 # Fonctions utilitaires
└── public/                      # Assets statiques
```

## 🎨 Design System

### Palette de Couleurs

- **Primary**: Bleu professionnel (#1a5490)
- **Accent**: Orange énergique (#ff8c42)
- **Neutral**: Échelle de gris Tailwind

### Composants Clés

- `.btn-primary` - Bouton principal bleu
- `.btn-accent` - Bouton de conversion orange
- `.btn-secondary` - Bouton secondaire blanc
- `.card-modern` - Carte avec ombre et hover
- `.glass` - Effet glassmorphisme

## 📱 Pages Principales

1. **Homepage** (`/`) - Hero, Stats, Services, Before/After, Process, Testimonials, FAQ, CTA
2. **Services** (`/nos-services`) - Grille de tous les services
3. **Service Individuel** (`/[slug]`) - Page détaillée pour chaque service
4. **Contact** (`/contact`) - Formulaire multi-étapes avec sidebar informations
5. **Réalisations** (`/realisations`) - Portfolio avec effet hover avant/après
6. **Devis Gratuit** (`/devis-gratuit`) - Page de conversion optimisée

## 🔍 SEO & Performance

- ✅ Metadata optimisées pour chaque page
- ✅ Schémas JSON-LD (LocalBusiness, Service, FAQPage, BreadcrumbList)
- ✅ Sitemap.xml et robots.txt
- ✅ Images optimisées avec Next/Image
- ✅ Server Components par défaut
- ✅ Responsive mobile-first

## 🚀 Déploiement

Le site est optimisé pour un déploiement sur Vercel :

```bash
npm run build
```

Puis déployer via Vercel CLI ou connecter le repository GitHub à Vercel.

## 📝 Personnalisation

### Modifier les informations de l'entreprise

Éditer `/lib/constants.ts` :
- `BUSINESS_INFO` - Nom, téléphone, email, adresse
- `SERVICES_LIST` - Liste des services
- `TESTIMONIALS` - Témoignages clients
- `PROJECTS` - Réalisations

### Modifier le thème de couleurs

Éditer `/tailwind.config.js` - sections `colors.primary` et `colors.accent`

### Ajouter un nouveau service

1. Ajouter le service dans `/lib/constants.ts` → `SERVICES_LIST`
2. La page sera automatiquement générée via `/app/[slug]/page.tsx`

## 📄 Licence

© 2025 JardinLux Pro. Tous droits réservés.
