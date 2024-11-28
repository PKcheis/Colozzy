import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { EnrollmentDialog } from './enrollment-dialog'

const courses = [
  {
    title: "Data Science Fundamentals",
    description: "Master the basics of data science and analytics.",
    duration: "12 weeks",
    price: "$1,999",
    features: [
      "Statistical Analysis",
      "Python Programming",
      "Data Visualization",
      "Machine Learning Basics"
    ]
  },
  {
    title: "Advanced Data Mining",
    description: "Deep dive into data mining techniques and applications.",
    duration: "10 weeks",
    price: "$1,799",
    features: [
      "Pattern Recognition",
      "Predictive Modeling",
      "Text Mining",
      "Big Data Analytics"
    ]
  },
  {
    title: "Data Quality & Governance",
    description: "Learn to ensure data quality and implement governance.",
    duration: "8 weeks",
    price: "$1,599",
    features: [
      "Data Quality Frameworks",
      "Governance Standards",
      "Quality Metrics",
      "Compliance Management"
    ]
  }
]

export default function CoursePricing() {
  return (
    <section id="courses" className="py-20 bg-gradient-to-br from-violet-50 to-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-gradient">Our Courses</h2>
        <p className="text-center mb-12 text-violet-700">Choose the perfect course to advance your data analytics career</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="flex flex-col hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-br from-violet-100 to-pink-100">
                <CardTitle className="text-violet-900">{course.title}</CardTitle>
                <CardDescription className="text-violet-700">{course.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="font-semibold mb-2 text-violet-900">Course Duration: {course.duration}</p>
                <ul className="list-disc list-inside space-y-2 text-violet-700">
                  {course.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col items-start">
                <p className="text-2xl font-bold mb-4 text-gradient">{course.price}</p>
                <EnrollmentDialog courses={courses} />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

