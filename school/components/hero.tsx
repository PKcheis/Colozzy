import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Colozzy Data Analytic and Research Solution</h1>
        <p className="text-xl mb-8">Unlock the power of railway data and drive innovation in transportation</p>
        <Button size="lg">Explore Our Courses</Button>
      </div>
    </section>
  )
}

