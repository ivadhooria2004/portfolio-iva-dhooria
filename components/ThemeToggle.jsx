"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

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
        border: theme === "dark" ? "1.5px solid white" : "1.5px solid #4A3278",
        background: theme === "dark" ? "rgba(255,255,255,0.15)" : "rgba(74,50,120,0.1)",
        color: theme === "dark" ? "#FFFFFF" : "#4A3278",
        cursor: "pointer",
        transition: "all 200ms ease",
        fontSize: "12px",
        fontWeight: 600,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = theme === "dark" ? "rgba(255,255,255,0.25)" : "rgba(74,50,120,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = theme === "dark" ? "rgba(255,255,255,0.15)" : "rgba(74,50,120,0.1)";
      }}
    >
      {theme === "dark" ? <MoonIcon /> : <SunIcon />}
      <span>{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
}
