import Link from "next/link";
import BackgroundVideo from "../components/BackgroundVideo";
import HeroContent from "../components/HeroContent";
import NowStrip from "../components/NowStrip";
import JourneyTimeline from "../components/JourneyTimeline";

const skills = [
  { label: "R (RStudio)", href: "#" },
  { label: "SQL", href: "#" },
  { label: "Python", href: "#" },
  { label: "Microsoft Excel", href: "#" },
  { label: "Microsoft PowerPoint", href: "#" },
];

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-dark">
        <BackgroundVideo />
        <HeroContent />
      </section>
      <NowStrip />

      {/* ── Skills section ── */}
      <section className="relative z-10 py-20 px-6 bg-dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-[11px] uppercase tracking-[0.15em] text-white/40 font-display mb-8">
            Technical Skills
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <Link
                key={skill.label}
                href={skill.href}
                className="text-[14px] text-white/65 font-display border border-white/[0.08] bg-white/[0.03] rounded-full px-5 py-2.5 hover:border-husky-gold/30 hover:text-white hover:bg-white/[0.06] transition-all duration-200"
              >
                {skill.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── UW Journey timeline section ── */}
      <section
        id="journey"
        className="relative z-10 py-24 px-6 bg-dark scroll-mt-24"
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <div className="text-[11px] uppercase tracking-[0.15em] text-white/40 font-display mb-4">
              The UW Journey
            </div>
            <h2
              className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight text-white leading-[1.05]"
              style={{ fontWeight: 500 }}
            >
              Four years of learning, competing, building, and becoming.
            </h2>
          </div>
          <JourneyTimeline />
        </div>
      </section>
    </>
  );
}
