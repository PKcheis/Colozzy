"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { enrollStudent } from '@/app/actions'

interface EnrollmentDialogProps {
  courses: Array<{
    title: string;
    price: string;
  }>;
}

export function EnrollmentDialog({ courses }: EnrollmentDialogProps) {
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState<{ message: string; success: boolean } | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState<{ [key: string]: File | null }>({
    transcript: null,
    idDocument: null,
    photo: null
  })

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, type: string) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFiles(prev => ({
        ...prev,
        [type]: event.target.files![0]
      }))
    }
  }

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    // Append files to formData
    Object.entries(selectedFiles).forEach(([key, file]) => {
      if (file) formData.append(key, file)
    })
    
    const result = await enrollStudent(formData)
    setStatus(result)
    setIsSubmitting(false)
    if (result.success) {
      setTimeout(() => setOpen(false), 2000)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full bg-violet-600 hover:bg-violet-700">Enroll Now</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-gradient-to-br from-violet-50 to-pink-50">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-violet-900">Student Enrollment Form</DialogTitle>
          <DialogDescription className="text-violet-700">
            Please complete all required fields and upload necessary documents
          </DialogDescription>
        </DialogHeader>
        <form action={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Personal Information */}
            <div className="space-y-2">
              <Label htmlFor="studentId">Student ID/Passport Number*</Label>
              <Input 
                id="studentId" 
                name="studentId" 
                required 
                className="border-violet-200 focus:border-violet-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Full Name*</Label>
              <Input 
                id="name" 
                name="name" 
                required 
                className="border-violet-200 focus:border-violet-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address*</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                required 
                className="border-violet-200 focus:border-violet-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number*</Label>
              <Input 
                id="phone" 
                name="phone" 
                type="tel" 
                required 
                className="border-violet-200 focus:border-violet-500"
              />
            </div>
          </div>

          {/* Course Selection */}
          <div className="space-y-2">
            <Label htmlFor="course">Select Course*</Label>
            <Select name="course" required>
              <SelectTrigger className="border-violet-200 focus:border-violet-500">
                <SelectValue placeholder="Choose your course" />
              </SelectTrigger>
              <SelectContent>
                {courses.map((course, index) => (
                  <SelectItem key={index} value={course.title}>
                    {course.title} - {course.price}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Document Uploads */}
          <div className="space-y-4">
            <h3 className="font-semibold text-violet-900">Required Documents</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="transcript">Academic Transcript*</Label>
                <Input
                  id="transcript"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => handleFileChange(e, 'transcript')}
                  required
                  className="border-violet-200 focus:border-violet-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="idDocument">ID/Passport Copy*</Label>
                <Input
                  id="idDocument"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => handleFileChange(e, 'idDocument')}
                  required
                  className="border-violet-200 focus:border-violet-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="photo">Passport Photo*</Label>
                <Input
                  id="photo"
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  onChange={(e) => handleFileChange(e, 'photo')}
                  required
                  className="border-violet-200 focus:border-violet-500"
                />
              </div>
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Processing...' : 'Submit Application'}
          </Button>
          
          {status && (
            <div className={`p-3 rounded-lg ${
              status.success 
                ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-700' 
                : 'bg-gradient-to-r from-red-100 to-pink-100 text-red-700'
            }`}>
              {status.message}
            </div>
          )}
        </form>
      </DialogContent>
    </Dialog>
  )
}

