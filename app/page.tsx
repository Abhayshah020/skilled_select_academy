"use client"

import Image from "next/image"
import Link from "next/link"
import CourseCard from "@/components/course-card"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import HeroSection from "@/components/heroSection"
import AboutUs from "@/components/AboutUs"

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

const benefits = [
  {
    title: "ASQA-Approved Qualifications",
    description: "Nationally recognised qualifications aligned with Australian standards (RTO 45128)",
  },
  {
    title: "Industry-Focused Training",
    description: "Practical, job-ready skills delivered by experienced industry professionals",
  },
  {
    title: "Quality & Compliance",
    description: "Rigorous assessment integrity and comprehensive learner support systems",
  },
  {
    title: "Flexible Learning",
    description: "Blended delivery models designed for diverse learner needs and schedules",
  },
  {
    title: "Student-Centric Support",
    description: "Clear pathways, personalised guidance, and transparent processes",
  },
  {
    title: "Career Advancement",
    description: "Develop skills that enhance employability and workforce readiness",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-white to-background">
      {/* Hero Section */}
      <HeroSection />

      <AboutUs />
      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-primary/5 rounded-3xl mx-4 sm:mx-6 lg:mx-8 mb-16 md:mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 text-balance">
              Why Choose Skilled Select Academy?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              We deliver nationally recognised qualifications with practical, industry-focused training backed by
              rigorous quality assurance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-4"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={24} className="text-accent" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg md:text-xl font-bold text-primary">{benefit.title}</h3>
                  <p className="text-foreground/70">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 text-balance">Our Courses</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Choose from 10+ nationally recognised vocational qualifications across multiple industry sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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

          <div className="text-center mt-12 md:mt-16">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300"
            >
              View All Courses
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground rounded-3xl mx-4 sm:mx-6 lg:mx-8 mb-16 md:mb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-6 md:gap-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90">
            Join thousands of students who have advanced their careers with Skilled Select Academy's industry-recognised
            qualifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300 text-center w-full sm:w-auto"
            >
              Enrol Now
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border-2 border-primary-foreground text-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors duration-300 text-center w-full sm:w-auto"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
