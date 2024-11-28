import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Header() {
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

        {/* Navigation Menu */}
        <nav className="w-full sm:w-auto">
          <ul className="flex justify-between sm:space-x-4 space-x-2 sm:flex-row flex-col items-center sm:items-center">
            <li><Link href="#features">Features</Link></li>
            <li><Link href="#courses">Courses</Link></li>
            <li><Link href="#visualization">Data Viz</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Enroll Now Button */}
        <Button variant="secondary" className="mt-4 sm:mt-0">Enroll Now</Button>
      </div>
    </header>
  )
}
