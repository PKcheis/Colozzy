'use server'

export async function enrollStudent(formData: FormData) {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Extract form data
    const studentData = {
      studentId: formData.get('studentId'),
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      course: formData.get('course'),
      files: {
        transcript: formData.get('transcript'),
        idDocument: formData.get('idDocument'),
        photo: formData.get('photo')
      }
    }

    // Here you would typically:
    // 1. Validate the data
    // 2. Upload files to storage (e.g., AWS S3)
    // 3. Save student data to database
    console.log('Enrollment data:', studentData)

    return { 
      success: true, 
      message: 'Application submitted successfully! We will review your documents and contact you shortly.' 
    }
  } catch (error) {
    console.error('Enrollment error:', error)
    return { 
      success: false, 
      message: 'Something went wrong while processing your application. Please try again.' 
    }
  }
}

