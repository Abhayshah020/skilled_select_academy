import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 bg-primary-foreground rounded-lg flex items-center justify-center">
              <span className="text-primary text-lg font-bold">SSA</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Leading Registered Training Organisation delivering nationally recognised qualifications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-base">Quick Links</h4>
            <Link
              href="/"
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              href="/courses"
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Courses
            </Link>
            <Link
              href="/about"
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-base">Contact Info</h4>
            <div className="flex items-start gap-2 text-sm">
              <MapPin size={16} className="mt-0.5 flex-shrink-0" />
              <p className="text-primary-foreground/70">Shop 37, 70–74 Phillip St, Parramatta NSW 2150</p>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Phone size={16} />
              <a href="tel:(08)74276100" className="text-primary-foreground/70 hover:text-primary-foreground">
                (08) 7427 6100
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Mail size={16} />
              <a
                href="mailto:enquiries@skilledselect.com.au"
                className="text-primary-foreground/70 hover:text-primary-foreground"
              >
                enquiries@skilledselect.com.au
              </a>
            </div>
          </div>

          {/* Compliance */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-base">RTO Details</h4>
            <p className="text-sm text-primary-foreground/70">
              <strong>RTO Code:</strong> 45128
            </p>
            <p className="text-sm text-primary-foreground/70">
              <strong>ABN:</strong> 27 613 302 220
            </p>
            <p className="text-sm text-primary-foreground/70">
              <strong>ACN:</strong> 613 302 220
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>&copy; 2026 SMS IT Solutions. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
