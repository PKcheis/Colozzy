"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { month: 'Jan', punctuality: 92 },
  { month: 'Feb', punctuality: 94 },
  { month: 'Mar', punctuality: 93 },
  { month: 'Apr', punctuality: 95 },
  { month: 'May', punctuality: 97 },
  { month: 'Jun', punctuality: 96 },
]

export default function DataVisualization() {
  return (
    <section id="visualization" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Sample Data Visualization</h2>
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Train Punctuality Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="punctuality" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

