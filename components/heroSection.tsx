"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
            >
                <source src="/hero_bg.mp4" type="video/mp4" />
            </video>

            {/* Gradient + Dark Overlay */}
            <div className="absolute inset-0 backdrop-blur-xs bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

            {/* Subtle Grain (Premium feel) */}
            <div className="absolute inset-0 opacity-[0.08] bg-[url('/noise.png')] pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20">
                <div className="max-w-3xl space-y-8">
                    {/* Badge */}
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur">
                        🎓 RTO 45128 — Nationally Recognised Training
                    </span>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-6xl xl:text-7xl font-semibold tracking-tight text-white leading-[1.1]">
                        Build a Career That
                        <span className="block text-white mt-2">
                            Actually Matters
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="max-w-xl text-lg md:text-xl text-white/75 leading-relaxed">
                        Skilled Select Academy delivers nationally accredited vocational education
                        designed for real-world careers in leadership, community services, and beauty industries.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link
                            href="/courses"
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-8 py-4 text-base font-semibold text-accent-foreground transition-all hover:scale-[1.02] hover:shadow-xl"
                        >
                            Explore Courses
                            <ArrowRight size={18} />
                        </Link>

                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-xl border border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
                        >
                            Speak to an Advisor
                        </Link>
                    </div>

                    {/* Divider */}
                    <div className="h-px w-full bg-white/20 mt-10" />

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6 pt-6 max-w-xl">
                        <div>
                            <p className="text-3xl font-semibold text-white">10+</p>
                            <p className="text-sm text-white/60">Accredited Courses</p>
                        </div>
                        <div>
                            <p className="text-3xl font-semibold text-white">3</p>
                            <p className="text-sm text-white/60">Industry Streams</p>
                        </div>
                        <div>
                            <p className="text-3xl font-semibold text-white">7+ yrs</p>
                            <p className="text-sm text-white/60">Training Excellence</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Fade */}
            {/* <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-background to-transparent" /> */}
        </section>
    )
}
