import Link from "next/link";
import PageShell, { PageHeader } from "../../components/PageShell";

export const metadata = { title: "Projects | Iva Dhooria" };

const completed = [
  {
    title: "INFO 300 Research Paper",
    date: "Winter 2025",
    blurb: "Independent honors research project.",
    note: "Unique idea, and it surprisingly came together. An independent research project on sustained attention in time-pressured settings.",
    href: "/honors/attention-research",
  },
  {
    title: "Equitable Futures Case",
    date: "Winter 2025",
    blurb: "Case writing on equitable access to public transit.",
    note: "Had a lot of fun organizing and writing. Loved being interviewed. Writing the King County Metro case for UWIB, and learning to frame problems instead of solve them.",
  },
];

const caseWriting = [
  {
    title: "Equitable Futures Case Competition",
    date: "Winter 2025",
    role: "Co-Case Writer",
    description: "Live case on King County Metro, framing leadership challenges through sustainability and equity lenses to enhance service delivery for marginalized populations.",
    pdf: "/documents/EFCC_Case_2025.pdf",
  },
  {
    title: "MOSAIC Case Competition",
    date: "Spring 2026",
    role: "Co-Case Writer",
    description: "Case on Stanley 1913, examining global expansion strategy, product diversification, and brand relevance in an evolving consumer market.",
    pdf: "/documents/MOSAIC_Case_2026.pdf",
  },
  {
    title: "BEA Case Competition",
    date: "Spring 2026",
    role: "Co-Case Writer",
    description: "Case titled \"Double Dilemma\" exploring a merger decision between Bios.ai, a MedTech startup, and ASID Pharmaceuticals, weighing synergies against value misalignment and public relations risk.",
    pdf: "/documents/BEA_Case_2026_.pdf",
  },
];

function CompletedCard({ item }) {
  const content = (
    <article className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-6 hover:bg-white/[0.05] transition-colors duration-200">
      <div className="flex items-baseline justify-between mb-2 gap-3">
        <h3 className="font-display font-medium text-white text-lg">
          {item.title}
        </h3>
        <span className="text-[12px] text-white/35 font-display whitespace-nowrap">
          {item.date}
        </span>
      </div>
      <p className="text-sm text-white/45 leading-[1.75]">{item.blurb}</p>
      <div className="mt-5 pt-5 border-t border-white/[0.06]">
        <p className="text-sm text-white/40 leading-[1.75]">
          {item.note || "A detailed case study coming soon."}
        </p>
      </div>
    </article>
  );

  if (item.href) {
    return <Link href={item.href}>{content}</Link>;
  }
  return content;
}

function CaseWriterCard({ item }) {
  return (
    <div>
      <article className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-6 hover:bg-white/[0.05] transition-colors duration-200 mb-4">
        <div className="flex items-baseline justify-between mb-2 gap-3">
          <h3 className="font-display font-medium text-white text-lg">
            {item.title}
          </h3>
          <span className="text-[12px] text-white/35 font-display whitespace-nowrap">
            {item.date}
          </span>
        </div>
        <div className="mb-3">
          <span className="inline-block text-[11px] uppercase tracking-[0.08em] text-husky-gold-light font-display">
            {item.role}
          </span>
        </div>
        <p className="text-sm text-white/45 leading-[1.75]">{item.description}</p>
      </article>
      <div style={{
        borderRadius: '1rem',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        overflow: 'hidden',
        marginBottom: '2rem'
      }}>
        <iframe
          src={item.pdf}
          width="100%"
          height="600px"
          style={{ border: 'none' }}
        />
      </div>
    </div>
  );
}

function InProgressCard() {
  return (
    <article className="rounded-2xl border border-dashed border-white/15 bg-transparent p-6">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-[11px] uppercase tracking-[0.15em] text-husky-gold-light/60 font-display border border-husky-gold/25 rounded-full px-2.5 py-1">
          In progress
        </span>
      </div>
      <h3 className="font-display font-medium text-white/80 text-lg mt-3">
        Current writing project
      </h3>
      <p className="text-sm text-white/40 leading-[1.75] mt-2">
        Placeholder &mdash; an in-progress research and writing project. Details
        will appear here once the draft is ready to share.
      </p>
    </article>
  );
}

export default function ResearchPage() {
  return (
    <PageShell>
      <PageHeader
        title="Projects"
        subtitle={
          "Independent research, case writing, and written work \u2014 the intellectual layer beneath the r\u00E9sum\u00E9."
        }
      />
      <div className="grid gap-5 md:grid-cols-2">
        {completed.map((item) => (
          <CompletedCard key={item.title} item={item} />
        ))}
        <InProgressCard />
      </div>
    </PageShell>
  );
}
