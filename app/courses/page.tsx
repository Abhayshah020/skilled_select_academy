"use client"

import CourseCard from "@/components/course-card"

const courses = [
  {
    id: "bsb40520",
    title: "Certificate IV in Leadership and Management",
    code: "BSB40520",
    image: "/professional-business-leadership-training.jpg",
    description: "Develop management skills and lead teams effectively in any industry.",
  },
  {
    id: "chc33021",
    title: "Certificate III in Individual Support",
    code: "CHC33021",
    image: "/community-care-and-support-services.jpg",
    description: "Provide compassionate support to individuals in healthcare and community settings.",
  },
  {
    id: "chc43015",
    title: "Certificate IV in Ageing Support",
    code: "CHC43015",
    image: "/aged-care-elderly-support-services.jpg",
    description: "Specialise in providing quality care and support to ageing populations.",
  },
  {
    id: "chc43121",
    title: "Certificate IV in Disability Support",
    code: "CHC43121",
    image: "/disability-support-and-inclusion.jpg",
    description: "Enable people with disabilities to live fulfilling and independent lives.",
  },
  {
    id: "shb20216",
    title: "Certificate II in Salon Assistant",
    code: "SHB20216",
    image: "/beauty-salon-assistant-training.jpg",
    description: "Start your beauty industry career with essential salon skills.",
  },
  {
    id: "shb30416",
    title: "Certificate III in Hairdressing",
    code: "SHB30416",
    image: "/professional-hairdressing-course.jpg",
    description: "Master the art of hairdressing and build a rewarding career.",
  },
  {
    id: "shb30516",
    title: "Certificate III in Barbering",
    code: "SHB30516",
    image: "/barber-training-course.jpg",
    description: "Learn traditional and modern barbering techniques from industry experts.",
  },
  {
    id: "shb40121",
    title: "Certificate IV in Beauty Therapy",
    code: "SHB40121",
    image: "/beauty-therapy-advanced-course.jpg",
    description: "Advance your beauty therapy skills and business knowledge.",
  },
  {
    id: "shb40216",
    title: "Certificate IV in Hairdressing",
    code: "SHB40216",
    image: "/advanced-hairdressing-certificate.jpg",
    description: "Develop advanced hairdressing techniques and salon management skills.",
  },
  {
    id: "shb50121",
    title: "Diploma of Beauty Therapy",
    code: "SHB50121",
    image: "/diploma-beauty-therapy-professional.jpg",
    description: "The highest qualification in beauty therapy with comprehensive business training.",
  },
]

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-white pt-16 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 text-balance">
            Our Vocational Qualifications
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            Choose from 10+ nationally recognised courses across leadership, community services, hairdressing, and
            beauty therapy. All qualifications are delivered in accordance with Australian vocational education
            standards.
          </p>
        </div>

        {/* Filter/Category Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 md:mb-16">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-primary mb-2">Leadership & Management</h3>
            <p className="text-sm text-foreground/70">Develop professional management skills</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="font-semibold text-primary mb-2">Community Services</h3>
            <p className="text-sm text-foreground/70">Care support and community work qualifications</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
            <h3 className="font-semibold text-primary mb-2">Beauty & Hairdressing</h3>
            <p className="text-sm text-foreground/70">Industry certifications in beauty and hair</p>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              code={course.code}
              image={course.image}
              description={course.description}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center mb-16 md:mb-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Contact our team to discuss your specific training needs and career goals. We're here to help you find the
            perfect course.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </main>
  )
}
