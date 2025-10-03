'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FAQItem } from '@/lib/types'

interface AccordionProps {
  items: FAQItem[]
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="card-modern"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex items-center justify-between text-left gap-4"
          >
            <h3 className="font-bold text-lg text-gray-900">
              {item.question}
            </h3>
            <ChevronDown
              className={`w-6 h-6 text-accent-500 flex-shrink-0 transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96 mt-4' : 'max-h-0'
            }`}
          >
            <p className="text-gray-600 leading-relaxed">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
