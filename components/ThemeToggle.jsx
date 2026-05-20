"use client";

import { useEffect, useState } from "react";

const SunIcon = () => (
  <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <line x1="12" y1="2" x2="12" y2="4" />
    <line x1="12" y1="20" x2="12" y2="22" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="2" y1="12" x2="4" y2="12" />
    <line x1="20" y1="12" x2="22" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const initial = stored ?? "dark";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  return (
    <button
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        flexShrink: 0,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        padding: "6px 12px",
        borderRadius: "20px",
        border: theme === "dark" ? "1px solid rgba(212,184,106,0.4)" : "1px solid rgba(74,50,120,0.2)",
        background: theme === "dark" ? "rgba(212,184,106,0.1)" : "rgba(74,50,120,0.05)",
        color: theme === "dark" ? "#D4B86A" : "#4A3278",
        cursor: "pointer",
        transition: "all 200ms ease",
        fontSize: "12px",
        fontWeight: 500,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = theme === "dark" ? "rgba(212,184,106,0.15)" : "rgba(74,50,120,0.1)";
        e.currentTarget.style.borderColor = theme === "dark" ? "rgba(212,184,106,0.6)" : "rgba(74,50,120,0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = theme === "dark" ? "rgba(212,184,106,0.1)" : "rgba(74,50,120,0.05)";
        e.currentTarget.style.borderColor = theme === "dark" ? "rgba(212,184,106,0.4)" : "rgba(74,50,120,0.2)";
      }}
    >
      {theme === "dark" ? <MoonIcon /> : <SunIcon />}
      <span>{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
}
