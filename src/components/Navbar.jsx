import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Mail } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const years = [
  { label: "Freshman", path: "/freshman" },
  { label: "Sophomore", path: "/sophomore" },
  { label: "Junior", path: "/junior" },
  { label: "Senior", path: "/senior" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl">
        <div className="relative rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-2xl px-6 py-3 flex items-center justify-between">
          {/* Subtle glow on the navbar */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-husky-purple/5 via-transparent to-husky-purple/5 pointer-events-none" />

          {/* Logo */}
          <Link
            to="/"
            className="relative font-display font-bold text-lg tracking-tight text-white hover:text-husky-purple-bright transition-colors duration-300"
          >
            Iva Dhooria
          </Link>

          {/* Desktop Year Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {years.map((year) => {
              const isActive = location.pathname === year.path;
              return (
                <Link
                  key={year.path}
                  to={year.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    isActive
                      ? "text-white"
                      : "text-white/60 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeYear"
                      className="absolute inset-0 rounded-lg bg-husky-purple/20 border border-husky-purple/30"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{year.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="mailto:contact@ivadhooria.com"
              className="group flex items-center gap-2 px-5 py-2 rounded-lg bg-husky-purple text-white text-sm font-medium hover:bg-husky-purple-light transition-all duration-300 hover:scale-105"
            >
              <Mail size={14} />
              Get in Touch
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative text-white p-1"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mt-2 rounded-2xl border border-white/[0.08] bg-black/90 backdrop-blur-2xl p-6 md:hidden"
            >
              <div className="flex flex-col gap-2">
                {years.map((year) => {
                  const isActive = location.pathname === year.path;
                  return (
                    <Link
                      key={year.path}
                      to={year.path}
                      onClick={() => setMobileOpen(false)}
                      className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-husky-purple/20 text-white border border-husky-purple/30"
                          : "text-white/60 hover:text-white hover:bg-white/[0.05]"
                      }`}
                    >
                      {year.label}
                    </Link>
                  );
                })}
                <hr className="border-white/10 my-2" />
                <a
                  href="mailto:contact@ivadhooria.com"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-husky-purple text-white text-base font-medium"
                >
                  <Mail size={16} />
                  Get in Touch
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
