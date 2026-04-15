import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageShell, { PageHeader } from "../../components/PageShell";

export const metadata = { title: "Learning Statement | Iva Dhooria" };

const artifacts = [
  {
    number: "01",
    title: "Sustained attention in time-pressured case competitions",
    context: "INFO 300 \u2014 independent honors research, Winter 2025",
    href: "/learning-statement/info-300-research",
  },
  {
    number: "02",
    title: "CaseIT 2024 \u2014 IT integration strategy for Pacific Coastal Airlines",
    context: "Simon Fraser University \u2014 Winter 2024",
    href: "/learning-statement/caseit-2024",
  },
  {
    number: "03",
    title: "Equitable Futures \u2014 writing the King County Metro case",
    context: "UW Undergraduate Women in Business \u2014 Winter 2025",
    href: "/learning-statement/equitable-futures",
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

export default function LearningStatementPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow={"UW Interdisciplinary Honors \u2014 2022\u20132026"}
        title="Learning Statement"
      />

      {/* Essay prose area */}
      <article
        className="mx-auto"
        style={{ maxWidth: "680px" }}
      >
        <div
          className="text-white/65"
          style={{ fontSize: "17px", lineHeight: 1.8 }}
        >
          <p className="mb-5">
            Placeholder essay body &mdash; the final 600&ndash;900 word Learning
            Statement will live here. It will trace four years of
            interdisciplinary learning through the lens of the three artifacts
            below, and explain how the pieces fit together.
          </p>
          <p className="mb-5">
            The prose layout uses a comfortable reading measure (680px),
            generous line-height (1.8), and a 17px body size to keep long-form
            writing easy on the eye.
          </p>
          <p>
            Additional paragraphs will be added as the essay is drafted and
            revised.
          </p>
        </div>
      </article>

      {/* Artifacts */}
      <div className="mt-20">
        <div className="text-[11px] uppercase tracking-[0.15em] text-white/40 font-display mb-6">
          Artifacts
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {artifacts.map((artifact) => (
            <ArtifactCard key={artifact.number} artifact={artifact} />
          ))}
        </div>
      </div>
    </PageShell>
  );
}
