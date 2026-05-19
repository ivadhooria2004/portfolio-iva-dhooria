/**
 * Shared page wrapper for all non-hero pages.
 * Provides the top padding needed to clear the fixed navbar,
 * the common max-width container, and a consistent dark bg.
 */
export default function PageShell({ children, className = "" }) {
  return (
    <main className={`relative min-h-screen bg-dark ${className}`}>
      {/* Ambient background glow */}
      <div className="fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] opacity-[0.08] pointer-events-none z-0">
        <div className="w-full h-full rounded-full blur-[200px] bg-gradient-to-br from-husky-purple to-husky-gold" />
      </div>
      <div className="relative z-10 pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">{children}</div>
      </div>
    </main>
  );
}

export function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <header className="mb-16">
      {eyebrow && (
        <div className="text-[11px] uppercase tracking-[0.15em] text-white/40 font-display mb-4">
          {eyebrow}
        </div>
      )}
      <h1 className="font-display font-medium text-4xl sm:text-5xl md:text-6xl tracking-tight text-white leading-[1.05]">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-5 text-base sm:text-lg text-white/50 leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </header>
  );
}

export function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="h-px w-8 bg-gradient-to-r from-husky-purple via-husky-gold/50 to-transparent" />
      <span className="text-[11px] uppercase tracking-[0.15em] text-white/40 font-display">
        {children}
      </span>
    </div>
  );
}
