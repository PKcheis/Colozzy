'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function header() {
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

        {/* Dark Mode Icon */}
        <button
          onClick={toggleDarkMode}
          className="sm:ml-4 mt-4 sm:mt-0 flex items-center justify-center"
          aria-label="Toggle Dark Mode"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
            className="text-primary-foreground dark:text-secondary"
          >
            {/* Sun Icon for Light Mode, Moon for Dark Mode */}
            <path
              d="M12 3C12 3 12 5 13 6C14 7 14 9 13 10C12 11 10 11 9 10C8 9 8 7 9 6C10 5 10 3 12 3ZM18 12C18 12 19 13 19 14C19 15 18 16 17 17C16 18 14 18 13 17C12 16 12 14 13 13C14 12 16 12 17 12C18 12 18 12 18 12ZM12 5C13 6 13 7 12 8C11 9 10 9 9 8C8 7 8 6 9 5C10 4 11 4 12 5ZM12 10C13 11 13 12 12 13C11 14 10 14 9 13C8 12 8 11 9 10C10 9 11 9 12 10ZM6 18C7 19 7 20 6 21C5 22 4 22 3 21C2 20 2 19 3 18C4 17 5 17 6 18ZM19 18C20 19 20 20 19 21C18 22 17 22 16 21C15 20 15 19 16 18C17 17 18 17 19 18ZM15 6C16 7 16 8 15 9C14 10 13 10 12 9C11 8 11 7 12 6C13 5 14 5 15 6ZM12 16C13 17 13 18 12 19C11 20 10 20 9 19C8 18 8 17 9 16C10 15 11 15 12 16Z"
            />
          </svg>
        </button>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden flex items-center justify-center space-y-1"
          aria-label="Open menu"
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