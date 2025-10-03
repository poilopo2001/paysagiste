import Hero from '@/components/sections/Hero'
import StatsBar from '@/components/sections/StatsBar'
import ServicesGrid from '@/components/sections/ServicesGrid'
import BeforeAfter from '@/components/sections/BeforeAfter'
import ProcessTimeline from '@/components/sections/ProcessTimeline'
import Testimonials from '@/components/sections/Testimonials'
import FAQSection from '@/components/sections/FAQSection'
import FinalCTA from '@/components/sections/FinalCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesGrid />
      <BeforeAfter />
      <ProcessTimeline />
      <Testimonials />
      <FAQSection />
      <FinalCTA />
    </>
  )
}
