import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageShell, { PageHeader } from "../../components/PageShell";

export const metadata = { title: "Honors Journey | Iva Dhooria" };

const honCourses = [
  {
    code: "HON 100",
    name: null,
    note: "My first interaction with the honors community",
  },
  {
    code: "HON 211",
    name: "Disenchantment of the West",
    note: "The hardest but also most rewarding honors class",
  },
  {
    code: "HON 231",
    name: "Improving Population Health through Social Entrepreneurship",
    note: "Three-hour once-a-week lecture, but so worth it",
  },
  {
    code: "HON 345",
    name: "Oral History",
    note: "The interview was truly a unique experience",
  },
  {
    code: "HON 394",
    name: "Lovework",
    note: "The best professor and the sound therapy was amazing",
  },
  {
    code: "HON 496",
    name: null,
    note: "The culmination of honors and my time at UW",
  },
];

const adHocExperiences = [
  {
    project: "Sustained Attention Research Project (INFO 300)",
    note: "Unique idea, and it surprisingly came together",
  },
  {
    project: "GLITS 252 — Playlist and Poems",
    note: "Felt the love for literature and poem writing again",
  },
];

const artifacts = [
  {
    number: "01",
    title: "Sustained attention in time-pressured case competitions",
    context: "INFO 300 — independent honors research, Winter 2025",
    href: "/honors-portfolio/info-300-research",
  },
  {
    number: "02",
    title: "CaseIT 2024 — IT integration strategy for Pacific Coastal Airlines",
    context: "Simon Fraser University — Winter 2024",
    href: "/honors-portfolio/caseit-2024",
  },
  {
    number: "03",
    title: "Equitable Futures — writing the King County Metro case",
    context: "UW Undergraduate Women in Business — Winter 2025",
    href: "/honors-portfolio/equitable-futures",
  },
];

function ArtifactCard({ artifact }) {
  return (
    <Link
      href={artifact.href}
      className="group block rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-6 hover:bg-white/[0.05] hover:border-husky-gold/25 transition-all duration-200"
    >
      <div className="text-[11px] uppercase tracking-[0.15em] text-husky-gold-light/60 font-display mb-3">
        Artifact {artifact.number}
      </div>
      <h3 className="font-display font-medium text-white text-lg leading-snug">
        {artifact.title}
      </h3>
      <p className="mt-2 text-[13px] text-white/40 font-display">
        {artifact.context}
      </p>
      <div className="mt-5 inline-flex items-center gap-1.5 text-[13px] text-husky-gold-light font-display">
        Read the annotation
        <ArrowRight
          size={14}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
}

export default function HonorsJourneyPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow={"UW Interdisciplinary Honors — 2022–2026"}
        title="Honors Journey"
      />

      {/* ── Section 1: Learning Statement ── */}
      <section className="mb-20">
        <div className="text-[11px] uppercase tracking-[0.15em] text-white/40 font-display mb-6">
          Learning Statement
        </div>
        <article className="mx-auto" style={{ maxWidth: "680px" }}>
          <div
            className="text-white/65 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-8"
            style={{ fontSize: "17px", lineHeight: 1.8 }}
          >
            {/* PLACEHOLDER: Insert learning statement text here */}
            <p className="text-white/30 text-center text-sm font-display">
              Learning statement text will go here.
            </p>
          </div>
        </article>
      </section>

      {/* ── Section 2: HON Courses ── */}
      <section className="mb-20">
        <div className="text-[11px] uppercase tracking-[0.15em] text-white/40 font-display mb-4">
          Honors Coursework
        </div>
        <h2
          className="font-display text-2xl sm:text-3xl tracking-tight text-white leading-[1.1] mb-10"
          style={{ fontWeight: 500 }}
        >
          Honors Classes
        </h2>
        <div className="space-y-0">
          {honCourses.map((course) => (
            <div
              key={course.code}
              className="group border-b border-white/[0.06] py-5 first:border-t first:border-white/[0.06]"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                <span className="text-[13px] font-display text-husky-gold-light/70 tracking-wide shrink-0 w-24">
                  {course.code}
                </span>
                <span className="text-white/80 font-display text-[15px]">
                  {course.name || "—"}
                </span>
              </div>
              <p className="mt-1.5 sm:ml-28 text-[14px] text-white/40 italic leading-relaxed">
                {course.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 3: HON Ad-Hoc ── */}
      <section className="mb-20">
        <h2
          className="font-display text-2xl sm:text-3xl tracking-tight text-white leading-[1.1] mb-10"
          style={{ fontWeight: 500 }}
        >
          Ad-Hoc Honors Experiences
        </h2>
        <div className="space-y-0">
          {adHocExperiences.map((item) => (
            <div
              key={item.project}
              className="group border-b border-white/[0.06] py-5 first:border-t first:border-white/[0.06]"
            >
              <span className="text-white/80 font-display text-[15px]">
                {item.project}
              </span>
              <p className="mt-1.5 text-[14px] text-white/40 italic leading-relaxed">
                {item.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 4: Experiential Learning ── */}
      <section className="mb-20">
        <div className="text-[11px] uppercase tracking-[0.15em] text-white/40 font-display mb-6">
          Experiential Learning
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {/* PLACEHOLDER: Experiential Learning Activity 1 */}
          <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-8 min-h-[200px] flex items-center justify-center">
            <span className="text-[11px] uppercase tracking-[0.15em] text-white/30 font-display text-center">
              Experiential Learning Activity 1
            </span>
          </div>
          {/* PLACEHOLDER: Experiential Learning Activity 2 */}
          <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-8 min-h-[200px] flex items-center justify-center">
            <span className="text-[11px] uppercase tracking-[0.15em] text-white/30 font-display text-center">
              Experiential Learning Activity 2
            </span>
          </div>
        </div>
      </section>

      {/* ── Section 5: Artifacts ── */}
      <section>
        <div className="text-[11px] uppercase tracking-[0.15em] text-white/40 font-display mb-6">
          Artifacts
        </div>
        {/* PLACEHOLDER: Link artifacts here */}
        <div className="grid gap-5 md:grid-cols-3">
          {artifacts.map((artifact) => (
            <ArtifactCard key={artifact.number} artifact={artifact} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
