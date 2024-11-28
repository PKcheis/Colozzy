import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Train, TrendingUp, Clock, Users } from 'lucide-react'

const features = [
  { title: 'Real-time Data Analysis', icon: Clock, description: 'Analyze live train data for immediate insights' },
  { title: 'Predictive Maintenance', icon: TrendingUp, description: 'Forecast maintenance needs to prevent breakdowns' },
  { title: 'Passenger Flow Optimization', icon: Users, description: 'Optimize schedules based on passenger patterns' },
  { title: 'Route Efficiency', icon: Train, description: 'Improve route planning for better fuel efficiency' },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Program Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <feature.icon className="w-10 h-10 mb-2 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

