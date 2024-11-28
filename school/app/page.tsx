import Header from '@/components/header'
import Hero from '@/components/hero'
import Features from '@/components/features'
import CoursePricing from '@/components/course-pricing'
import DataVisualization from '@/components/data-visualization'
import ContactForm from '@/components/contact-form'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <CoursePricing />
        <DataVisualization />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

