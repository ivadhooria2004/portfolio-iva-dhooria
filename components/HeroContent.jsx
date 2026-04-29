"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ease = [0.25, 0.4, 0.25, 1];

export default function HeroContent() {
  return (
    <div id="hero" className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6 text-center">
      {/* Darker readability overlay (~55%) on top of the video */}
      <div className="absolute inset-0 bg-dark/55 pointer-events-none z-0" />

      {/* ── Tagline: Decoding Markets. Designing Futures. ── */}
      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease }}
        className="relative max-w-5xl z-10 font-display text-white leading-[1.02] tracking-[-0.02em] text-5xl sm:text-6xl md:text-7xl lg:text-[88px]"
        style={{ fontWeight: 500 }}
      >
        <span className="block">
          Decoding{" "}
          <span className="font-serif italic font-normal text-husky-purple-bright">
            Markets
          </span>
          .
        </span>
        <span className="block mt-2">
          Designing{" "}
          <span className="font-serif italic font-normal bg-gradient-to-r from-husky-gold-light to-husky-gold bg-clip-text text-transparent">
            Futures
          </span>
          .
        </span>
      </motion.h1>

      {/* ── Decorative accent line ── */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease }}
        className="relative mt-7 w-24 h-px bg-gradient-to-r from-husky-purple-bright/40 via-husky-gold/40 to-husky-purple-bright/40 z-10 origin-center"
      />

      {/* ── Subtext ── */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease }}
        className="relative mt-5 max-w-2xl text-base sm:text-lg text-white/60 leading-relaxed font-light z-10"
      >
        <p>UW Foster School of Business &amp; Interdisciplinary Honors</p>
        <p className="mt-1">Majors &mdash; Finance and Information Systems, Minors &mdash; Data Science and Informatics</p>
      </motion.div>

      {/* ── CTAs ── */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45, ease }}
        className="relative mt-10 flex flex-col sm:flex-row items-center gap-4 z-10"
      >
        <Link
          href="/work"
          className="group flex items-center gap-2 px-7 py-3.5 rounded-xl bg-husky-gold text-dark font-display text-sm hover:bg-husky-gold-light transition-all duration-200"
          style={{ fontWeight: 500 }}
        >
          View my work
          <ArrowRight
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </Link>

        <a
          href="mailto:ivadhooria2004@gmail.com"
          className="px-7 py-3.5 rounded-xl border border-husky-gold/30 bg-transparent text-husky-gold-light font-display text-sm hover:bg-husky-gold/10 hover:text-white hover:border-husky-gold/50 transition-all duration-200"
          style={{ fontWeight: 500 }}
        >
          Get in touch
        </a>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[11px] uppercase tracking-[0.2em] text-husky-gold/40 font-display">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-5 h-8 rounded-full border border-husky-gold/20 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-husky-gold/50" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
