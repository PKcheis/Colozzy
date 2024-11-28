import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function Header() {
  // State to manage the mobile menu toggle
  const [menuOpen, setMenuOpen] = useState(false)

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    const currentMode = document.documentElement.classList.contains('dark')
    if (currentMode) {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }

  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center flex-wrap">
        {/* Logo and Title */}
        <Link href="/" className="flex items-center space-x-2 sm:space-x-4">
          <Image src="/logo1.png" alt="logo" width={40} height={40} />
          <span className="text-xl sm:text-2xl font-bold truncate max-w-xs sm:max-w-full">
            Colozzy Data Analytic and Research Solution
          </span>
        </Link>

        {/* Dark Mode Toggle Button */}
        <Button
          variant="secondary"
          onClick={toggleDarkMode}
          className="sm:ml-4 mt-4 sm:mt-0"
        >
          Toggle Dark Mode
        </Button>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden flex items-center justify-center space-y-1"
        >
          <span className="block w-6 h-1 bg-black"></span>
          <span className="block w-6 h-1 bg-black"></span>
          <span className="block w-6 h-1 bg-black"></span>
        </button>

        {/* Mobile Navigation Menu */}
        <nav
          className={`${
            menuOpen ? 'block' : 'hidden'
          } sm:flex flex-col sm:flex-row sm:space-x-6 space-x-4 sm:space-y-0 space-y-4 items-center sm:items-center`}
        >
          <li><Link href="#features" className="hover:text-accent">Features</Link></li>
          <li><Link href="#courses" className="hover:text-accent">Courses</Link></li>
          <li><Link href="#visualization" className="hover:text-accent">Data Viz</Link></li>
          <li><Link href="#contact" className="hover:text-accent">Contact</Link></li>
        </nav>

        {/* Enroll Now Button */}
        <Button variant="secondary" className="mt-4 sm:mt-0 w-full sm:w-auto max-w-xs">
          Enroll Now
        </Button>
      </div>
    </header>
  )
}
