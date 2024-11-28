import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="RailData Institute Logo" width={40} height={40} />
          <span className="text-2xl font-bold">Colozzy Data Analytic and Research Solution</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#features">Features</Link></li>
            <li><Link href="#courses">Courses</Link></li>
            <li><Link href="#visualization">Data Viz</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </nav>
        <Button variant="secondary">Enroll Now</Button>
      </div>
    </header>
  )
}

