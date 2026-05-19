import Link from "next/link";
import LinkedInIcon from "./LinkedInIcon";

// UPDATE THIS: current status line
// Edit this one string to change what the home page reports under "Currently".
const NOW_STATUS = "Currently \u2014 Senior at UW Foster";

export default function NowStrip() {
  return (
    <section className="relative z-20 w-full border-t border-white/[0.08] bg-dark">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center gap-4">
        {/* Pulsing live dot */}
        <span className="relative flex h-2 w-2 flex-none">
          <span className="absolute inset-0 rounded-full bg-husky-gold/60 animate-ping" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-husky-gold" />
        </span>

        {/* Status text (truncates on small screens) */}
        <p className="flex-1 min-w-0 truncate text-[13px] text-white/50 font-display">
          {NOW_STATUS}
        </p>

        {/* Desktop-only: jump to the timeline section on this page */}
        <Link
          href="#journey"
          className="hidden md:inline-flex items-center gap-1 text-[13px] text-white/45 hover:text-husky-gold-light transition-colors duration-200 font-display whitespace-nowrap"
        >
          See the full UW journey &darr;
        </Link>

        {/* LinkedIn icon button — always visible */}
        <a
          href="https://www.linkedin.com/in/iva-dhooria/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Iva Dhooria on LinkedIn"
          className="flex-none inline-flex items-center justify-center w-8 h-8 rounded-lg text-white/45 hover:text-husky-gold transition-colors duration-200"
        >
          <LinkedInIcon size={16} />
        </a>
      </div>
    </section>
  );
}
