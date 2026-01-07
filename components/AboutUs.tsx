"use client";

export default function AboutUs() {
    return (
        <section className="relative overflow-hidden bg-white py-14 md:py-24">
            {/* Background accents */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-24 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-accent/10 blur-3xl" />
            </div>

            <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 text-center">
                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-primary animate-fade-up">
                    About Skilled Select Academy
                </h2>

                {/* Divider */}
                <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-accent animate-scale-x" />

                {/* Intro */}
                <p className="mt-8 text-lg md:text-xl leading-relaxed text-gray-700 animate-fade-up delay-200">
                    <span className="font-semibold text-primary">
                        Skilled Select Academy (AUST) Pty Ltd
                    </span>{" "}
                    is a nationally recognised{" "}
                    <span className="font-semibold text-accent">
                        Registered Training Organisation (RTO 45128)
                    </span>{" "}
                    in Australia, delivering high-quality vocational education and
                    nationally accredited qualifications across key industry sectors.
                </p>

                {/* Compliance */}
                <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-600 animate-fade-up delay-300">
                    We operate in full compliance with the{" "}
                    <span className="font-medium text-primary">
                        Australian Skills Quality Authority (ASQA)
                    </span>{" "}
                    and the{" "}
                    <span className="font-medium text-primary">
                        National Vocational Education and Training Regulator Act 2011
                    </span>
                    , ensuring all training and assessment meets rigorous national
                    standards.
                </p>

                {/* Mission Card */}
                <div className="group mx-auto mt-14 max-w-4xl rounded-2xl border border-border bg-gradient-to-br from-primary/5 via-white to-accent/5 p-8 md:p-12 shadow-md animate-fade-scale">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                        Our Mission
                    </h3>

                    <p className="text-base md:text-lg leading-relaxed text-gray-700">
                        To empower learners with{" "}
                        <span className="font-semibold text-primary">
                            industry-relevant skills
                        </span>
                        , practical knowledge, and{" "}
                        <span className="font-semibold text-primary">
                            nationally recognised qualifications
                        </span>{" "}
                        that enhance employability, career progression, and workforce
                        readiness across Australia.
                    </p>
                </div>
            </div>
        </section>
    );
}
