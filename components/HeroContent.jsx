"use client";

import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

// Floating background orbs config
const orbs = [
  { size: 350, x: "10%", y: "15%", color: "rgba(75, 46, 131, 0.15)", dur: 22, dx: 40, dy: -30 },
  { size: 250, x: "75%", y: "55%", color: "rgba(123, 79, 212, 0.10)", dur: 28, dx: -30, dy: 25 },
  { size: 200, x: "55%", y: "8%", color: "rgba(183, 165, 122, 0.08)", dur: 25, dx: 20, dy: 35 },
  { size: 280, x: "25%", y: "70%", color: "rgba(155, 111, 232, 0.08)", dur: 30, dx: -35, dy: -20 },
  { size: 180, x: "85%", y: "20%", color: "rgba(232, 213, 181, 0.06)", dur: 26, dx: -25, dy: 30 },
];

const ease = [0.25, 0.4, 0.25, 1];

export default function HeroContent() {
  return (
    <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6 text-center">
      {/* ── Floating orbs ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {orbs.map((orb, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: orb.size,
              height: orb.size,
              left: orb.x,
              top: orb.y,
              background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
              filter: "blur(60px)",
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              x: [0, orb.dx, -orb.dx * 0.5, orb.dx * 0.7, 0],
              y: [0, orb.dy, -orb.dy * 0.7, orb.dy * 0.5, 0],
              scale: [1, 1.1, 0.95, 1.05, 1],
            }}
            transition={{
              duration: orb.dur,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
              opacity: { duration: 2, delay: 0.2 + i * 0.2 },
            }}
          />
        ))}
      </div>

      {/* ── Breathing glow behind headline ── */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(75, 46, 131, 0.08), transparent 70%)",
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── Badge ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease }}
        className="relative mb-8 mt-24 z-10"
      >
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-glass-border bg-dark-glass backdrop-blur-xl">
          <motion.span
            className="flex items-center justify-center w-6 h-6 rounded-md bg-husky-purple"
            animate={{ rotate: [0, 0, 360, 360] }}
            transition={{
              duration: 2.5,
              delay: 0.8,
              ease: "easeInOut",
              times: [0, 0.3, 0.7, 1],
            }}
          >
            <Sparkles size={13} className="text-white" />
          </motion.span>
          <span className="text-sm font-medium text-white/80 font-display tracking-wide">
            University of Washington Interdisciplinary Honors
          </span>
        </div>
      </motion.div>

      {/* ── Headline Line 1: Decoding Markets. ── */}
      <h1 className="max-w-5xl z-10">
        <span className="block overflow-hidden">
          <motion.span
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.55, ease }}
            className="inline-block font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.95] tracking-[-0.03em] text-white"
          >
            Decoding{" "}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, filter: "blur(16px)", scale: 0.85 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 1.3, delay: 0.85, ease }}
            className="inline-block font-serif italic font-normal text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.95] text-husky-purple-bright"
          >
            Markets
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="inline-block font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.95] tracking-[-0.03em] text-white"
          >
            .
          </motion.span>
        </span>

        {/* ── Headline Line 2: Designing Futures. ── */}
        <span className="block overflow-hidden mt-2">
          <motion.span
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.9, ease }}
            className="inline-block font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.95] tracking-[-0.03em] text-white"
          >
            Designing{" "}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, filter: "blur(16px)", scale: 0.85 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 1.3, delay: 1.2, ease }}
            className="inline-block font-serif italic font-normal text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.95] bg-gradient-to-r from-husky-gold-light to-husky-gold bg-clip-text text-transparent"
          >
            Futures
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            className="inline-block font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.95] tracking-[-0.03em] text-white"
          >
            .
          </motion.span>
        </span>
      </h1>

      {/* ── Decorative animated line ── */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6, ease }}
        className="mt-7 w-24 h-px bg-gradient-to-r from-transparent via-husky-purple-bright/40 to-transparent z-10 origin-center"
      />

      {/* ── Subtitle ── */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.7, ease }}
        className="mt-5 max-w-2xl text-base sm:text-lg text-white/50 leading-relaxed font-light z-10"
      >
        Finance major. Data Science &amp; Informatics minor. Building at the
        intersection of markets, models, and meaning.
      </motion.p>

      {/* ── CTA Buttons ── */}
      <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.0, ease }}
        >
          <Link
            href="/freshman"
            className="group relative flex items-center gap-2 px-7 py-3.5 rounded-xl bg-husky-purple text-white font-display font-semibold text-sm hover:bg-husky-purple-light transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(75,46,131,0.4)]"
          >
            {/* Pulsing glow behind button */}
            <span className="absolute inset-0 rounded-xl bg-husky-purple/40 blur-xl animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative">Explore My Journey</span>
            <ArrowRight
              size={16}
              className="relative transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.2, ease }}
        >
          <a
            href="mailto:contact@ivadhooria.com"
            className="block px-7 py-3.5 rounded-xl border border-white/[0.1] bg-white/[0.03] backdrop-blur-sm text-white/80 font-display font-semibold text-sm hover:bg-white/[0.08] hover:text-white transition-all duration-300 hover:scale-105"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[11px] uppercase tracking-[0.2em] text-white/25 font-display">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-5 h-8 rounded-full border border-white/15 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-white/40" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
