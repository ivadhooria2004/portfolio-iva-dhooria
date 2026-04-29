import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PageShell from "../../../components/PageShell";

export const metadata = {
  title: "Artifact 02 | Honors Journey | Iva Dhooria",
};

function Section({ label, children }) {
  return (
    <section className="mb-14">
      <div className="text-[11px] uppercase tracking-[0.15em] text-husky-gold-light/60 font-display mb-4">
        {label}
      </div>
      <div className="text-white/55 text-[15px] leading-[1.8]">{children}</div>
    </section>
  );
}

export default function CaseItArtifactPage() {
  return (
    <PageShell>
      <Link
        href="/learning-statement"
        className="inline-flex items-center gap-2 text-[13px] text-white/40 hover:text-white/70 transition-colors font-display mb-10"
      >
        <ArrowLeft size={14} />
        Back to Honors Journey
      </Link>

      <div className="text-[11px] uppercase tracking-[0.15em] text-white/40 font-display mb-3">
        Artifact 02
      </div>
      <h1 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl text-white leading-[1.1] mb-12">
        CaseIT 2024 &mdash; IT integration strategy for Pacific Coastal Airlines
      </h1>

      <div className="mx-auto" style={{ maxWidth: "680px" }}>
        <Section label="The artifact">
          <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.02] h-64 flex items-center justify-center">
            <span className="text-[11px] uppercase tracking-[0.15em] text-white/30 font-display">
              [ Embed PDF / document here ]
            </span>
          </div>
        </Section>

        <Section label="Context">
          <p>
            Placeholder &mdash; a 2-sentence situational description of the
            CaseIT competition and the team deliverable.
          </p>
        </Section>

        <Section label="Annotation">
          <p>
            Placeholder &mdash; a 200&ndash;300 word reflection on what this
            artifact taught me about cross-functional problem-solving, late
            nights, and how to synthesize technical strategy under pressure.
          </p>
        </Section>

        <Section label="Connections">
          <ul className="list-none space-y-2">
            <li>
              <Link
                href="/case-competitions"
                className="text-husky-gold-light hover:text-white transition-colors"
              >
                &rarr; Case Competitions
              </Link>
            </li>
            <li>
              <Link
                href="/work"
                className="text-husky-gold-light hover:text-white transition-colors"
              >
                &rarr; Work & Projects
              </Link>
            </li>
          </ul>
        </Section>
      </div>
    </PageShell>
  );
}
