import Link from "next/link";
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
      <section style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
        {/* Background video layer */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
        >
          <source src="https://cdn.pixabay.com/video/2020/10/28/53812-475059916_large.mp4" type="video/mp4" />
        </video>

        {/* Purple overlay for readability */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(107, 79, 160, 0.35)', zIndex: 1 }} />

        {/* Gradient overlay for text readability */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(26,22,46,0.2) 0%, rgba(26,22,46,0.5) 100%)', zIndex: 1 }} />

        {/* Hero content above both layers */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          <HeroContent />
        </div>
      </section>
      <NowStrip />

      {/* ── Skills section ── */}
      <section className="relative z-10 py-20 px-6 bg-dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-[11px] uppercase tracking-[0.12em] text-[#C9A84C] font-display mb-8 inline-block border-b-2 border-[#C9A84C] pb-1">
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
            <div className="text-[11px] uppercase tracking-[0.12em] text-[#C9A84C] font-display mb-4 inline-block border-b-2 border-[#C9A84C] pb-1">
              The UW Journey
            </div>
            <h2
              className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#6B4FA0] leading-[1.05]"
              style={{ fontWeight: 600 }}
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
