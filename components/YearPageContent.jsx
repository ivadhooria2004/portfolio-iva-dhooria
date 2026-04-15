"use client";

import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import yearData from "../lib/yearData";
import PhotoSlot from "./PhotoSlot";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.7,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <div className="h-px w-8 bg-gradient-to-r from-husky-purple via-husky-gold/50 to-transparent" />
      <span className="text-[11px] uppercase tracking-[0.15em] text-white/40 font-display">
        {children}
      </span>
    </div>
  );
}

function ExperienceItem({ experience, index }) {
  const Icon = experience.icon;
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-6"
    >
      <div className="flex items-start gap-4">
        <div className="flex-none w-10 h-10 rounded-lg bg-husky-purple/15 border border-husky-purple/25 flex items-center justify-center">
          <Icon size={16} className="text-husky-purple-bright" />
        </div>
        <div className="flex-1 min-w-0">
          <h4
            className="font-display text-white text-base leading-snug"
            style={{ fontWeight: 500 }}
          >
            {experience.role}
          </h4>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-1">
            <span className="text-white/50 text-sm">{experience.org}</span>
            <span className="text-white/20">&middot;</span>
            <span className="text-white/30 text-xs">{experience.duration}</span>
          </div>
          <p className="text-white/45 text-[14px] leading-[1.75] mt-3">
            {experience.description}
          </p>
        </div>
      </div>
      <div className="mt-4">
        <PhotoSlot aspectRatio="16/9" />
      </div>
    </motion.div>
  );
}

function HighlightCard({ highlight, index, gradient }) {
  const Icon = highlight.icon;
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-6 hover:bg-white/[0.05] transition-colors duration-300"
    >
      <div
        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4`}
      >
        <Icon size={18} className="text-white" />
      </div>
      <h4
        className="font-display text-white text-sm mb-2"
        style={{ fontWeight: 500 }}
      >
        {highlight.title}
      </h4>
      <p className="text-white/45 text-sm leading-relaxed">
        {highlight.description}
      </p>
    </motion.div>
  );
}

export default function YearPageContent({ year }) {
  const data = yearData[year];
  if (!data) return null;

  return (
    <main className="relative min-h-screen bg-dark">
      {/* Ambient background glow */}
      <div className="fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-10 pointer-events-none z-0">
        <div
          className={`w-full h-full rounded-full blur-[200px] bg-gradient-to-br ${data.gradient}`}
        />
      </div>

      {/* ── Hero Section ── */}
      <section className="relative z-10 pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors font-display"
            >
              <ArrowLeft size={14} />
              Back to portfolio
            </Link>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-12"
          >
            <span
              className={`font-display font-medium text-7xl sm:text-8xl md:text-9xl bg-gradient-to-br ${data.gradient} bg-clip-text text-transparent opacity-20 leading-none`}
            >
              {data.number}
            </span>
          </motion.div>

          <motion.h1
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight text-white leading-[1.05] -mt-6 sm:-mt-8"
            style={{ fontWeight: 500 }}
          >
            {data.title}
          </motion.h1>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className={`mt-3 text-xl sm:text-2xl font-serif italic bg-gradient-to-r ${data.gradient} bg-clip-text text-transparent`}
          >
            {data.subtitle}
          </motion.p>

          <motion.p
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-2 text-sm text-white/30 font-display"
          >
            {data.year}
          </motion.p>
        </div>
      </section>

      {/* ── Scene Section ── */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>{data.scene.number}</SectionLabel>

          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 sm:p-12 overflow-hidden"
          >
            <div
              className={`absolute top-0 left-8 right-8 h-px bg-gradient-to-r ${data.gradient} opacity-40`}
            />

            <h3
              className="font-display text-lg text-white/80 mb-6"
              style={{ fontWeight: 500 }}
            >
              {data.scene.title}
            </h3>

            <blockquote className="font-serif italic text-xl sm:text-2xl text-white/70 leading-relaxed mb-6">
              &ldquo;{data.scene.quote}&rdquo;
            </blockquote>

            <p className="text-white/45 text-base leading-[1.75] max-w-3xl">
              {data.scene.body}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Photo Gallery Row ── */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: "12px" }}
          >
            <PhotoSlot aspectRatio="4/3" />
            <PhotoSlot aspectRatio="4/3" />
            <PhotoSlot aspectRatio="4/3" />
          </div>
        </div>
      </section>

      {/* ── Experiences Section ── */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Experiences & Involvement</SectionLabel>

          <div className="grid gap-5 md:grid-cols-2">
            {data.experiences.map((exp, i) => (
              <ExperienceItem
                key={exp.role + exp.org}
                experience={exp}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Highlights Section ── */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Highlights</SectionLabel>

          <div className="grid gap-5 sm:grid-cols-2">
            {data.highlights.map((h, i) => (
              <HighlightCard
                key={h.title}
                highlight={h}
                index={i}
                gradient={data.gradient}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Reflection Section ── */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div
              className={`w-12 h-px mx-auto bg-gradient-to-r ${data.gradient} mb-8`}
            />
            <blockquote className="font-serif italic text-2xl sm:text-3xl text-white/60 leading-relaxed">
              &ldquo;{data.reflection}&rdquo;
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* ── Year Navigation Footer ── */}
      <section className="relative z-10 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between pt-10 border-t border-husky-gold/10">
            {data.prevYear ? (
              <Link
                href={`/${data.prevYear}`}
                className="group flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors font-display"
              >
                <ArrowLeft
                  size={14}
                  className="transition-transform group-hover:-translate-x-1"
                />
                {yearData[data.prevYear].title}
              </Link>
            ) : (
              <div />
            )}

            {data.nextYear ? (
              <Link
                href={`/${data.nextYear}`}
                className="group flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors font-display"
              >
                {yearData[data.nextYear].title}
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            ) : (
              <Link
                href="/"
                className="group flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors font-display"
              >
                Back to portfolio
                <ChevronRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
