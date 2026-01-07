"use client"

import Image from "next/image"
import { Users, Target, Award, BookOpen } from "lucide-react"

const teamMembers = [
  {
    name: "Mrs Geetanjali Sapkota",
    role: "Chief Executive Officer",
    image: "/professional-female-ceo-headshot.jpg",
    bio: "Leading the academy with a vision for quality vocational education and student success.",
  },
  {
    name: "Mrs. Anna De Sanctis",
    role: "Registration Manager",
    image: "/professional-female-manager-headshot.jpg",
    bio: "Ensuring regulatory compliance and maintaining the highest standards of training delivery.",
  },
]

const values = [
  {
    icon: Target,
    title: "Student-Centric",
    description: "We prioritise learner success with personalised support and clear pathways.",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "Rigorous standards and assessment integrity in all training delivery.",
  },
  {
    icon: BookOpen,
    title: "Industry-Focused",
    description: "Practical, job-ready skills delivered by experienced industry professionals.",
  },
  {
    icon: Users,
    title: "Inclusive Community",
    description: "Welcoming diverse learners and supporting their individual needs.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-white">
      {/* Hero Section */}
      <section className="pt-16 md:pt-24 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="flex flex-col gap-6 md:gap-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight text-balance">
                About Skilled Select Academy
              </h1>

              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
                Skilled Select Academy (AUST) Pty Ltd is a nationally recognised Registered Training Organisation (RTO
                45128), committed to delivering high-quality vocational education and nationally accredited
                qualifications.
              </p>

              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
                We operate in full compliance with the Australian Skills Quality Authority (ASQA) and the National
                Vocational Education and Training Regulator Act 2011, ensuring all training meets rigorous national
                standards.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 md:pt-8">
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                  <p className="text-2xl font-bold text-accent mb-1">RTO 45128</p>
                  <p className="text-sm text-foreground/70">ASQA Registered</p>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                  <p className="text-2xl font-bold text-accent mb-1">7+ Years</p>
                  <p className="text-sm text-foreground/70">Experience</p>
                </div>
              </div>
            </div>

            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/modern-training-academy-building-facility.jpg" alt="Academy facility" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground rounded-3xl mx-4 sm:mx-6 lg:mx-8 mb-16 md:mb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6 md:gap-8">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Our Mission</h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
            To empower learners with industry-relevant skills, practical knowledge, and nationally recognised
            qualifications that enhance employability, career progression, and workforce readiness across Australia.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 text-balance">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-4"
                >
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon size={28} className="text-accent" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl md:text-2xl font-bold text-primary">{value.title}</h3>
                    <p className="text-foreground/70">{value.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-background rounded-3xl mx-4 sm:mx-6 lg:mx-8 mb-16 md:mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 text-balance">
              Leadership Team
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Meet the experienced professionals driving our mission of educational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                {/* <div className="relative h-64 md:h-72">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div> */}
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-primary mb-1">{member.name}</h3>
                  <p className="text-accent font-semibold mb-4">{member.role}</p>
                  <p className="text-foreground/70 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 text-balance">
              Why Choose Skilled Select Academy?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { title: "ASQA-Approved", desc: "Nationally recognised qualifications (RTO 45128)" },
              { title: "Industry Experts", desc: "Experienced trainers delivering practical skills" },
              { title: "Quality Assured", desc: "Rigorous assessment and compliance standards" },
              { title: "Flexible Delivery", desc: "Blended learning options for diverse needs" },
              { title: "Student Support", desc: "Personalised guidance and clear pathways" },
              { title: "Career Ready", desc: "Job-focused skills for employability" },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start p-4 rounded-lg hover:bg-primary/5 transition-colors">
                <div className="w-6 h-6 bg-accent rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-bold text-primary text-lg">{item.title}</h3>
                  <p className="text-foreground/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground rounded-3xl mx-4 sm:mx-6 lg:mx-8 mb-16 md:mb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-6 md:gap-8">
          <h2 className="text-3xl md:text-4xl font-bold">Visit Our Campus</h2>
          <div className="text-lg md:text-xl text-primary-foreground/90">
            <p className="font-semibold mb-2">Parramatta Campus</p>
            <p>Shop 37, 70–74 Phillip Street</p>
            <p>Parramatta, NSW 2150</p>
          </div>
          <p className="text-primary-foreground/80">
            Conveniently located in the heart of Parramatta, easily accessible by public transport.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Get Directions
          </a>
        </div>
      </section>
    </main>
  )
}
