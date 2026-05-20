"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ease = [0.25, 0.4, 0.25, 1];

export default function HeroContent() {
  return (
    <div id="hero" className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden" style={{
      background: 'linear-gradient(150deg, #0E0B1A 0%, #1C1535 30%, #2E1F5E 60%, #3D2875 85%, #251A45 100%)',
      backgroundSize: '200% 200%',
      animation: 'gradientShift 16s ease infinite'
    }}>

      {/* ── Decorative blurred circle 1 ── */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(160,120,48,0.12) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(40px)',
        pointerEvents: 'none'
      }} />

      {/* ── Decorative blurred circle 2 ── */}
      <div style={{
        position: 'absolute',
        bottom: '-80px',
        left: '-80px',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(74,50,120,0.35) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />

      {/* ── Tagline: Decoding Markets. Designing Futures. ── */}
      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease }}
        className="relative max-w-5xl z-10 font-display text-white leading-[1.02] tracking-[-0.02em] text-5xl sm:text-6xl md:text-7xl lg:text-[88px]"
        style={{ fontWeight: 500, textShadow: '0 2px 30px rgba(0,0,0,0.3)', color: '#FFFFFF' }}
      >
        <span className="block">
          Decoding{" "}
          <span className="font-serif italic font-normal" style={{ color: '#9B7FD4' }}>
            Markets
          </span>
          .
        </span>
        <span className="block mt-2">
          Designing{" "}
          <span className="font-serif italic font-normal bg-gradient-to-r from-[#C49A45] to-[#A07830] bg-clip-text text-transparent">
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
        className="relative mt-7 w-24 h-px z-10 origin-center"
        style={{ background: 'linear-gradient(90deg, #C9A84C, #D4B86A, #C9A84C)' }}
      />

      {/* ── Subtext ── */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease }}
        className="relative mt-5 max-w-2xl text-base sm:text-lg leading-relaxed font-light z-10"
        style={{ color: 'rgba(255,255,255,0.85)', textShadow: '0 2px 30px rgba(0,0,0,0.3)' }}
      >
        <p>UW Foster School of Business &amp; Interdisciplinary Honors</p>
        <p className="mt-1">Majors &mdash; Finance and Information Systems</p>
        <p className="mt-1">Minors &mdash; Data Science and Informatics</p>
        <p className="mt-3">Building at the intersection of strategy, data, and decision-making.</p>
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
          className="group flex items-center gap-2 px-7 py-3.5 rounded-xl font-display text-sm transition-all duration-200"
          style={{ backgroundColor: '#4A3278', color: '#FFFFFF', fontWeight: 600 }}
        >
          View my work
          <ArrowRight
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </Link>

        <a
          href="mailto:ivadhooria2004@gmail.com"
          className="px-7 py-3.5 rounded-xl font-display text-sm transition-all duration-200"
          style={{ border: '2px solid rgba(255,255,255,0.6)', backgroundColor: 'transparent', color: '#FFFFFF' }}
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
