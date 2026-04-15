import BackgroundVideo from "../components/BackgroundVideo";
import HeroContent from "../components/HeroContent";
import NowStrip from "../components/NowStrip";
import JourneyTimeline from "../components/JourneyTimeline";

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-dark">
        <BackgroundVideo />
        <HeroContent />
      </section>
      <NowStrip />

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
