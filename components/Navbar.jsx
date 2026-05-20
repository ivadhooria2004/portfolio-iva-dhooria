"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "Work", path: "/work" },
  { label: "Projects", path: "/research" },
  { label: "Case Competitions", path: "/case-competitions" },
  { label: "Honors Journey", path: "/honors-portfolio" },
  { label: "About", path: "/about" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) =>
    pathname === path ||
    pathname === path + "/" ||
    (pathname && pathname.startsWith(path + "/"));

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl">
      <div className="relative rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-2xl px-6 py-3 flex items-center justify-between">
        {/* Subtle glow on the navbar */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-husky-purple/5 via-transparent to-husky-gold/5 pointer-events-none" />

        {/* Logo */}
        <Link
          href="/"
          className="relative font-display font-medium text-lg tracking-tight text-white hover:text-husky-gold-light transition-colors duration-300"
        >
          Iva Dhooria
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`relative px-4 py-2 text-sm transition-all duration-300 rounded-lg ${
                  active
                    ? "text-white"
                    : "text-white/60 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                {active && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-lg bg-husky-gold/10 border border-husky-gold/25"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
          <div className="ml-2 pl-2 border-l border-white/[0.1]">
            <button
              onClick={() => {
                const current = document.documentElement.getAttribute('data-theme');
                const next = current === 'dark' ? 'light' : 'dark';
                document.documentElement.setAttribute('data-theme', next);
                localStorage.setItem('theme', next);
              }}
              aria-label="Toggle theme"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '6px',
                display: 'flex',
                alignItems: 'center',
                color: 'inherit',
                opacity: 1,
                visibility: 'visible'
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile: hamburger only */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative text-white p-1"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
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
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3 rounded-lg text-base transition-all duration-200 ${
                      active
                        ? "bg-husky-gold/10 text-white border border-husky-gold/25"
                        : "text-white/60 hover:text-white hover:bg-white/[0.05]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="mt-2 pt-2 border-t border-white/[0.1] flex items-center justify-between px-4 py-3">
                <span className="text-sm text-white/60">Theme</span>
                <button
                  onClick={() => {
                    const current = document.documentElement.getAttribute('data-theme');
                    const next = current === 'dark' ? 'light' : 'dark';
                    document.documentElement.setAttribute('data-theme', next);
                    localStorage.setItem('theme', next);
                  }}
                  aria-label="Toggle theme"
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    color: 'inherit',
                    opacity: 1,
                    visibility: 'visible'
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5"/>
                    <line x1="12" y1="1" x2="12" y2="3"/>
                    <line x1="12" y1="21" x2="12" y2="23"/>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                    <line x1="1" y1="12" x2="3" y2="12"/>
                    <line x1="21" y1="12" x2="23" y2="12"/>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
