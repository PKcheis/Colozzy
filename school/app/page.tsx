"use client";

import { useEffect, useState } from 'react'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Features from '@/components/features'
import CoursePricing from '@/components/course-pricing'
import DataVisualization from '@/components/data-visualization'
import ContactForm from '@/components/contact-form'
import Footer from '@/components/footer'

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Check for theme preference in localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('theme')
    if (savedMode === 'dark') {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  // Toggle dark mode and update localStorage
  const toggleDarkMode = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)
    localStorage.setItem('theme', newMode ? 'dark' : 'light')

    if (newMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Pass the dark mode toggle function down to the Header component */}
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
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