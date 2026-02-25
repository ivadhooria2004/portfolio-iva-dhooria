"use client";

import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import yearData from "../lib/yearData";

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
      <div className="h-px w-8 bg-gradient-to-r from-husky-purple to-transparent" />
      <span className="text-xs uppercase tracking-[0.2em] text-white/30 font-display font-semibold">
        {children}
      </span>
    </div>
  );
}

function StatCard({ label, value, index }) {
  return (
    <motion.div
      custom={index + 2}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center px-6 py-5"
    >
      <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">
        {value}
      </div>
      <div className="text-xs text-white/40 font-display mt-1 uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
}

function QuarterCard({ quarter, index }) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-6"
    >
      <div className="flex items-center justify-between mb-5">
        <h4 className="font-display font-semibold text-white text-sm">
          {quarter.name}
        </h4>
        <div className="flex items-center gap-2">
          {quarter.deanslist && (
            <span className="text-[10px] uppercase tracking-wider text-husky-gold font-display font-semibold px-2.5 py-1 rounded-full border border-husky-gold/30 bg-husky-gold/10">
              Dean&apos;s List
            </span>
          )}
          {quarter.gpa ? (
            <span className="text-sm font-display font-bold text-white/80">
              {quarter.gpa}
            </span>
          ) : quarter.label ? (
            <span className="text-[10px] uppercase tracking-wider text-husky-purple-bright font-display font-semibold px-2.5 py-1 rounded-full border border-husky-purple-bright/30 bg-husky-purple-bright/10">
              {quarter.label}
            </span>
          ) : null}
        </div>
      </div>
      <div className="space-y-2.5">
        {quarter.courses.map((course) => (
          <div
            key={course.code}
            className="flex items-center justify-between text-sm"
          >
            <div className="flex items-center gap-3 min-w-0">
              <span className="text-white/30 font-mono text-xs w-24 shrink-0">
                {course.code}
              </span>
              <span className="text-white/70 truncate">{course.name}</span>
            </div>
            <span className="text-white/30 text-xs shrink-0 ml-3">
              {course.credits} cr
            </span>
          </div>
        ))}
      </div>
    </motion.div>
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
      className="relative pl-10 pb-10 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-[13px] top-8 bottom-0 w-px bg-gradient-to-b from-white/10 to-transparent" />

      {/* Timeline dot */}
      <div className="absolute left-0 top-1 w-7 h-7 rounded-lg bg-husky-purple/20 border border-husky-purple/30 flex items-center justify-center">
        <Icon size={13} className="text-husky-purple-bright" />
      </div>

      <div>
        <h4 className="font-display font-semibold text-white text-sm leading-snug">
          {experience.role}
        </h4>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-1">
          <span className="text-white/50 text-sm">{experience.org}</span>
          <span className="text-white/20">&middot;</span>
          <span className="text-white/30 text-xs">{experience.duration}</span>
        </div>
        <p className="text-white/40 text-sm leading-relaxed mt-2.5">
          {experience.description}
        </p>
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
      <h4 className="font-display font-semibold text-white text-sm mb-2">
        {highlight.title}
      </h4>
      <p className="text-white/40 text-sm leading-relaxed">
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
              Back to Home
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
              className={`font-display font-extrabold text-7xl sm:text-8xl md:text-9xl bg-gradient-to-br ${data.gradient} bg-clip-text text-transparent opacity-20 leading-none`}
            >
              {data.number}
            </span>
          </motion.div>

          <motion.h1
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white leading-[1.05] -mt-6 sm:-mt-8"
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

          {/* Stats row */}
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm divide-x divide-white/[0.06]"
          >
            {data.stats.map((stat, i) => (
              <StatCard key={stat.label} {...stat} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Scene Section ── */}
      <section className="relative z-10 py-20 px-6">
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
            {/* Gradient accent on top */}
            <div
              className={`absolute top-0 left-8 right-8 h-px bg-gradient-to-r ${data.gradient} opacity-40`}
            />

            <h3 className="font-display font-bold text-lg text-white/80 mb-6">
              {data.scene.title}
            </h3>

            <blockquote className="font-serif italic text-xl sm:text-2xl text-white/70 leading-relaxed mb-6">
              &ldquo;{data.scene.quote}&rdquo;
            </blockquote>

            <p className="text-white/40 text-base leading-relaxed max-w-3xl">
              {data.scene.body}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Academics Section ── */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Coursework</SectionLabel>

          <div className="grid gap-6 md:grid-cols-2">
            {data.academics.quarters.map((quarter, i) => (
              <QuarterCard key={quarter.name} quarter={quarter} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Experiences Section ── */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Experiences & Involvement</SectionLabel>

          <div className="max-w-2xl">
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
      <section className="relative z-10 py-20 px-6">
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
      <section className="relative z-10 py-24 px-6">
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
          <div className="flex items-center justify-between pt-10 border-t border-white/[0.06]">
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
                Back to Home
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
