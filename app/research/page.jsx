import PageShell, { PageHeader } from "../../components/PageShell";

export const metadata = { title: "Research & Writing | Iva Dhooria" };

const completed = [
  {
    title: "INFO 300 Research Paper",
    date: "Winter 2025",
    blurb: "Independent honors research project.",
  },
  {
    title: "Equitable Futures Case",
    date: "Winter 2025",
    blurb: "Case writing on equitable access to public transit.",
  },
];

function CompletedCard({ item }) {
  return (
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
          Placeholder body &mdash; the full write-up of this artifact will live
          here.
        </p>
      </div>
    </article>
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
        title="Research & Writing"
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
