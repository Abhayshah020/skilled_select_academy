"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface CourseCardProps {
  id: string
  title: string
  code: string
  image: string
  description: string
}

export default function CourseCard({ id, title, code, image, description }: CourseCardProps) {
  return (
    <Link href={`/courses/${id}`}>
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col group cursor-pointer">
        {/* Image Container */}
        <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-muted">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 flex flex-col flex-grow gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-xs sm:text-sm text-accent font-semibold uppercase tracking-wide">{code}</p>
            <h3 className="text-lg sm:text-xl font-bold text-primary line-clamp-2">{title}</h3>
          </div>

          <p className="text-sm text-foreground/70 line-clamp-3 flex-grow">{description}</p>

          <div className="flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all">
            Learn More
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </Link>
  )
}
