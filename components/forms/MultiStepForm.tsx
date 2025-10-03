'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react'

// Validation schemas for each step
const step1Schema = z.object({
  projectType: z.string().min(1, 'Veuillez sélectionner un type de projet')
})

const step2Schema = z.object({
  surface: z.number().min(1, 'La surface doit être supérieure à 0'),
  budget: z.string().min(1, 'Veuillez sélectionner une fourchette de budget')
})

const step3Schema = z.object({
  timing: z.string().min(1, 'Veuillez indiquer quand vous souhaitez commencer')
})

const step4Schema = z.object({
  firstName: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères'),
  lastName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(8, 'Numéro de téléphone invalide'),
  postalCode: z.string().min(4, 'Code postal invalide'),
  rgpdConsent: z.boolean().refine((val) => val === true, {
    message: 'Vous devez accepter la politique de confidentialité'
  })
})

type FormData = z.infer<typeof step1Schema> &
  z.infer<typeof step2Schema> &
  z.infer<typeof step3Schema> &
  z.infer<typeof step4Schema>

const projectTypes = [
  { id: 'jardin', label: 'Aménagement de Jardin', icon: '🌸' },
  { id: 'piscine', label: 'Construction Piscine', icon: '🌊' },
  { id: 'terrasse', label: 'Terrasse', icon: '🏗️' },
  { id: 'entretien', label: 'Entretien', icon: '🌱' },
  { id: 'autre', label: 'Autre', icon: '💡' }
]

const budgetRanges = [
  'Moins de 10 000€',
  '10 000€ - 25 000€',
  '25 000€ - 50 000€',
  '50 000€ - 100 000€',
  'Plus de 100 000€'
]

const timingOptions = [
  'Dès que possible',
  'Dans 1-3 mois',
  'Dans 3-6 mois',
  'Dans 6-12 mois',
  'Je ne sais pas encore'
]

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    trigger
  } = useForm<FormData>({
    resolver: zodResolver(
      currentStep === 1
        ? step1Schema
        : currentStep === 2
        ? step2Schema
        : currentStep === 3
        ? step3Schema
        : step4Schema
    ),
    mode: 'onChange'
  })

  const projectType = watch('projectType')
  const surface = watch('surface')

  const nextStep = async () => {
    const isValid = await trigger()
    if (isValid && currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const onSubmit = async (data: FormData) => {
    console.log('Form submitted:', data)
    // Here you would typically send the data to your backend
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Merci pour votre demande !
        </h3>
        <p className="text-lg text-gray-600 mb-2">
          Nous avons bien reçu votre demande de devis.
        </p>
        <p className="text-gray-600">
          Notre équipe vous contactera dans les 24 heures.
        </p>
      </motion.div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-12">
        <div className="flex justify-between mb-4">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`flex items-center ${
                step < 4 ? 'flex-1' : ''
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                  step <= currentStep
                    ? 'bg-accent-500 text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {step < currentStep ? (
                  <CheckCircle2 className="w-6 h-6" />
                ) : (
                  step
                )}
              </div>
              {step < 4 && (
                <div
                  className={`flex-1 h-1 mx-2 transition-all ${
                    step < currentStep ? 'bg-accent-500' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-xs text-gray-600">
          <span>Projet</span>
          <span>Détails</span>
          <span>Planning</span>
          <span>Contact</span>
        </div>
      </div>

      {/* Form Steps */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <AnimatePresence mode="wait">
          {/* Step 1: Project Type */}
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Quel type de projet souhaitez-vous réaliser ?
              </h3>
              <p className="text-gray-600 mb-8">
                Sélectionnez le service qui correspond à votre besoin
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {projectTypes.map((type) => (
                  <label
                    key={type.id}
                    className={`cursor-pointer border-2 rounded-xl p-6 transition-all hover:border-accent-500 ${
                      projectType === type.id
                        ? 'border-accent-500 bg-accent-50'
                        : 'border-gray-200'
                    }`}
                  >
                    <input
                      type="radio"
                      value={type.id}
                      {...register('projectType')}
                      className="sr-only"
                    />
                    <div className="text-4xl mb-3">{type.icon}</div>
                    <div className="font-semibold text-gray-900">
                      {type.label}
                    </div>
                  </label>
                ))}
              </div>
              {errors.projectType && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.projectType.message}
                </p>
              )}
            </motion.div>
          )}

          {/* Step 2: Surface & Budget */}
          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Caractéristiques de votre projet
              </h3>
              <p className="text-gray-600 mb-8">
                Aidez-nous à mieux comprendre vos besoins
              </p>

              <div className="space-y-6">
                {/* Surface */}
                <div>
                  <label className="block font-semibold text-gray-900 mb-3">
                    Surface approximative (m²)
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="500"
                    step="10"
                    {...register('surface', { valueAsNumber: true })}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-accent-500"
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>10 m²</span>
                    <span className="font-bold text-accent-600 text-lg">
                      {surface || 50} m²
                    </span>
                    <span>500 m²</span>
                  </div>
                  {errors.surface && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.surface.message}
                    </p>
                  )}
                </div>

                {/* Budget */}
                <div>
                  <label className="block font-semibold text-gray-900 mb-3">
                    Budget envisagé
                  </label>
                  <select
                    {...register('budget')}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-accent-500 focus:outline-none"
                  >
                    <option value="">Sélectionnez une fourchette</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                  {errors.budget && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.budget.message}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Timing */}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Quand souhaitez-vous commencer ?
              </h3>
              <p className="text-gray-600 mb-8">
                Indiquez votre planning idéal
              </p>

              <div className="space-y-3">
                {timingOptions.map((option) => (
                  <label
                    key={option}
                    className="flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-accent-500 transition-all"
                  >
                    <input
                      type="radio"
                      value={option}
                      {...register('timing')}
                      className="w-5 h-5 text-accent-500 focus:ring-accent-500"
                    />
                    <span className="ml-3 font-medium text-gray-900">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
              {errors.timing && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.timing.message}
                </p>
              )}
            </motion.div>
          )}

          {/* Step 4: Contact Info */}
          {currentStep === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Vos coordonnées
              </h3>
              <p className="text-gray-600 mb-8">
                Pour vous envoyer votre devis personnalisé
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div>
                  <label className="block font-semibold text-gray-900 mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    {...register('firstName')}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-accent-500 focus:outline-none"
                    placeholder="Jean"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <label className="block font-semibold text-gray-900 mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    {...register('lastName')}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-accent-500 focus:outline-none"
                    placeholder="Dupont"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block font-semibold text-gray-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    {...register('email')}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-accent-500 focus:outline-none"
                    placeholder="jean.dupont@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block font-semibold text-gray-900 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    {...register('phone')}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-accent-500 focus:outline-none"
                    placeholder="+352 621 234 567"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Postal Code */}
                <div className="md:col-span-2">
                  <label className="block font-semibold text-gray-900 mb-2">
                    Code Postal *
                  </label>
                  <input
                    type="text"
                    {...register('postalCode')}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-accent-500 focus:outline-none"
                    placeholder="L-1234"
                  />
                  {errors.postalCode && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.postalCode.message}
                    </p>
                  )}
                </div>

                {/* RGPD Consent */}
                <div className="md:col-span-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      {...register('rgpdConsent')}
                      className="w-5 h-5 mt-1 text-accent-500 focus:ring-accent-500 rounded"
                    />
                    <span className="text-sm text-gray-700">
                      J&apos;accepte que mes données soient utilisées pour me
                      recontacter concernant ma demande. Voir notre{' '}
                      <a
                        href="/politique-confidentialite"
                        className="text-accent-500 hover:underline"
                      >
                        politique de confidentialité
                      </a>
                      .
                    </span>
                  </label>
                  {errors.rgpdConsent && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.rgpdConsent.message}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-12">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="btn btn-secondary"
            >
              <ArrowLeft className="w-5 h-5" />
              Retour
            </button>
          )}

          {currentStep < 4 ? (
            <button
              type="button"
              onClick={nextStep}
              className="btn btn-accent ml-auto"
            >
              Continuer
              <ArrowRight className="w-5 h-5" />
            </button>
          ) : (
            <button type="submit" className="btn btn-accent ml-auto">
              Envoyer ma demande
              <CheckCircle2 className="w-5 h-5" />
            </button>
          )}
        </div>
      </form>
    </div>
  )
}
