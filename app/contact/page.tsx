"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-background via-background to-muted/40 pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold tracking-tight text-primary">
            Contact Us About Your Queries
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/70 leading-relaxed">
            Whether you’re exploring courses, enrolment, or partnerships —
            our team is ready to guide you.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-24">
          {/* Contact Info */}
          <div className="lg:col-span-4 space-y-6">
            {[{
              icon: Phone,
              title: "Phone",
              value: "(08) 7427 6100",
              note: "Mon–Fri, 9am–5pm",
            },
            {
              icon: Mail,
              title: "Email",
              value: "enquiries@skilledselect.com.au",
              note: "Response within 24 hours",
            },
            {
              icon: MapPin,
              title: "Visit Us",
              value: "Shop 37, 70–74 Phillip Street, Parramatta NSW 2150",
              note: "Australia",
            }].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border/50 bg-white/70 backdrop-blur-xl p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-accent/15 flex items-center justify-center">
                    <item.icon className="text-accent" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">{item.title}</h3>
                    <p className="text-foreground/80 text-sm mt-1">{item.value}</p>
                    <p className="text-xs text-foreground/50 mt-1">{item.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            <div className="rounded-3xl border border-border/50 bg-white/80 backdrop-blur-xl p-6 md:p-10 shadow-lg">
              {submitted ? (
                <div className="py-24 text-center">
                  <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center text-3xl">
                    ✓
                  </div>
                  <h3 className="text-2xl font-semibold text-primary">Message Sent</h3>
                  <p className="mt-2 text-foreground/70">
                    We’ll be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { label: "Full Name", name: "name", placeholder: "John Doe" },
                      { label: "Email Address", name: "email", placeholder: "john@example.com", type: "email" },
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="text-sm font-medium text-primary">{field.label}</label>
                        <input
                          type={field.type ?? "text"}
                          name={field.name}
                          value={(formData as any)[field.name]}
                          onChange={handleChange}
                          required
                          placeholder={field.placeholder}
                          className="mt-2 w-full rounded-xl border border-border px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-accent/40"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-primary">Phone Number</label>
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(02) 1234 5678"
                        className="mt-2 w-full rounded-xl border border-border px-4 py-3 bg-white focus:ring-2 focus:ring-accent/40"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-primary">Subject</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="mt-2 w-full rounded-xl border border-border px-4 py-3 bg-white focus:ring-2 focus:ring-accent/40"
                      >
                        <option value="">Select a subject</option>
                        <option value="course">Course Inquiry</option>
                        <option value="enrolment">Enrolment Support</option>
                        <option value="general">General Question</option>
                        <option value="partnership">Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-primary">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      placeholder="Tell us how we can help…"
                      className="mt-2 w-full rounded-xl border border-border px-4 py-3 bg-white focus:ring-2 focus:ring-accent/40 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-accent py-4 text-accent-foreground font-semibold transition hover:shadow-xl hover:scale-[1.01]"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="rounded-3xl overflow-hidden border border-border/50 bg-muted h-[420px] flex items-center justify-center">
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d793.132858984109!2d151.00748601801928!3d-33.81304537887841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a319691e1121%3A0xf695fc937748a67a!2sMacquarie%20court%2C%20Suite%2037%2F70-74%20Phillip%20St%2C%20Parramatta%20NSW%202150%2C%20Australia!5e1!3m2!1sen!2sin!4v1767784280674!5m2!1sen!2sin"
          width="100%"
          height="100%"
          loading="lazy"
          ></iframe>
        </div>
      </div>
    </main>
  )
}
