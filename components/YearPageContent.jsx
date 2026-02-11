"use client";

import { motion } from "motion/react";
import { BookOpen, ArrowLeft } from "lucide-react";
import Link from "next/link";

const yearData = {
  freshman: {
    title: "Freshman Year",
    subtitle: "Foundation & Discovery",
    description:
      "The beginning of my interdisciplinary journey at the University of Washington. Exploring the fundamentals of finance, data science, and finding my academic identity.",
    color: "from-husky-purple to-husky-purple-light",
  },
  sophomore: {
    title: "Sophomore Year",
    subtitle: "Growth & Exploration",
    description:
      "Deepening my understanding of financial markets while building technical fluency in data science and informatics. Seeking connections across disciplines.",
    color: "from-husky-purple-light to-husky-purple-bright",
  },
  junior: {
    title: "Junior Year",
    subtitle: "Integration & Application",
    description:
      "Applying interdisciplinary skills to real-world problems. Research, internships, and projects that bridge finance and data science.",
    color: "from-husky-purple-bright to-husky-gold",
  },
  senior: {
    title: "Senior Year",
    subtitle: "Synthesis & Impact",
    description:
      "Culminating my honors journey with a capstone that reflects four years of interdisciplinary growth. Looking forward to what comes next.",
    color: "from-husky-gold to-husky-gold-light",
  },
};

export default function YearPageContent({ year }) {
  const data = yearData[year] || yearData.freshman;

  return (
    <section className="relative min-h-screen bg-dark flex items-center justify-center px-6">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-15 pointer-events-none">
        <div className={`w-full h-full rounded-full blur-[200px] bg-gradient-to-br ${data.color}`} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        className="relative z-10 max-w-3xl text-center"
      >
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors mb-12 font-display"
        >
          <ArrowLeft size={14} />
          Back to Home
        </Link>

        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${data.color} flex items-center justify-center shadow-lg`}>
            <BookOpen size={28} className="text-white" />
          </div>
        </div>

        {/* Title */}
        <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl tracking-tight text-white leading-[1.05]">
          {data.title}
        </h1>

        {/* Subtitle */}
        <p className={`mt-4 text-xl sm:text-2xl font-serif italic bg-gradient-to-r ${data.color} bg-clip-text text-transparent`}>
          {data.subtitle}
        </p>

        {/* Description */}
        <p className="mt-6 text-base sm:text-lg text-white/40 leading-relaxed max-w-xl mx-auto">
          {data.description}
        </p>

        {/* Placeholder content indicator */}
        <div className="mt-16 p-8 rounded-2xl border border-dashed border-white/[0.08] bg-white/[0.02]">
          <p className="text-white/25 text-sm font-display">
            Content for this year will be added here — courses, projects, reflections, and achievements.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
