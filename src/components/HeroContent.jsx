import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 * i,
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

export default function HeroContent() {
  return (
    <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6 text-center">
      {/* Badge */}
      <motion.div
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="mb-8 mt-24"
      >
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-glass-border bg-dark-glass backdrop-blur-xl">
          <span className="flex items-center justify-center w-6 h-6 rounded-md bg-husky-purple">
            <Sparkles size={13} className="text-white" />
          </span>
          <span className="text-sm font-medium text-white/80 font-display tracking-wide">
            University of Washington Interdisciplinary Honors
          </span>
        </div>
      </motion.div>

      {/* Main Headline */}
      <motion.h1
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="max-w-5xl"
      >
        <span className="block font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.95] tracking-[-0.03em] text-white">
          Decoding{" "}
          <span className="font-serif italic font-normal text-husky-purple-bright">
            Markets
          </span>
          .
        </span>
        <span className="block font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.95] tracking-[-0.03em] text-white mt-2">
          Designing{" "}
          <span className="font-serif italic font-normal bg-gradient-to-r from-husky-gold-light to-husky-gold bg-clip-text text-transparent">
            Futures
          </span>
          .
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="mt-7 max-w-2xl text-base sm:text-lg text-white/50 leading-relaxed font-light"
      >
        Finance major. Data Science &amp; Informatics minor. Building at the
        intersection of markets, models, and meaning.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        custom={3}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="mt-10 flex flex-col sm:flex-row items-center gap-4"
      >
        <Link
          to="/freshman"
          className="group flex items-center gap-2 px-7 py-3.5 rounded-xl bg-husky-purple text-white font-display font-semibold text-sm hover:bg-husky-purple-light transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(75,46,131,0.4)]"
        >
          Explore My Journey
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
        <a
          href="mailto:contact@ivadhooria.com"
          className="px-7 py-3.5 rounded-xl border border-white/[0.1] bg-white/[0.03] backdrop-blur-sm text-white/80 font-display font-semibold text-sm hover:bg-white/[0.08] hover:text-white transition-all duration-300 hover:scale-105"
        >
          Get in Touch
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        custom={5}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[11px] uppercase tracking-[0.2em] text-white/25 font-display">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-white/15 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-white/40" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
