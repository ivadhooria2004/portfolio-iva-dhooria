import PageShell, { PageHeader } from "../../components/PageShell";

export const metadata = { title: "Case Competitions | Iva Dhooria" };

const competitions = [
  {
    name: "CaseIT International MIS Case Competition",
    badge: "2nd of 15 global teams",
    host: "Simon Fraser University, Canada",
    date: "Winter 2024",
  },
  {
    name: "Business Management Case Competition (BMCC)",
    badge: "2nd Place Bracket",
    host: "Universidad Panamericana, Mexico",
    date: "Fall 2024",
  },
  {
    name: "Accenture Unify Case Competition",
    badge: "3rd Place",
    host: "UW Foster School of Business",
    date: "Winter 2024",
  },
  {
    name: "Equitable Futures Case Competition",
    badge: "Case Writer",
    host: "UW Undergraduate Women in Business Club",
    date: "Winter 2025",
  },
];

function CompetitionCard({ entry }) {
  return (
    <article className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-6 hover:bg-white/[0.05] transition-colors duration-200">
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="font-display font-medium text-white text-lg leading-snug">
          {entry.name}
        </h3>
        <span className="flex-none text-[11px] uppercase tracking-[0.08em] font-display text-husky-gold-light border border-husky-gold/30 bg-husky-gold/10 rounded-full px-2.5 py-1">
          {entry.badge}
        </span>
      </div>
      <div className="text-sm text-white/50 font-display">{entry.host}</div>
      <div className="text-[12px] text-white/35 font-display mt-1">
        {entry.date}
      </div>
      <div className="mt-5 pt-5 border-t border-white/[0.06]">
        <p className="text-sm text-white/40 leading-[1.75]">
          Placeholder body &mdash; the full write-up of this competition
          (problem, approach, outcome) will live here.
        </p>
      </div>
    </article>
  );
}

export default function CaseCompetitionsPage() {
  return (
    <PageShell>
      <PageHeader
        title="Case Competitions"
        subtitle={
          "Applied problem-solving across four competitions and three countries."
        }
      />
      <div className="grid gap-5 md:grid-cols-2">
        {competitions.map((entry) => (
          <CompetitionCard key={entry.name} entry={entry} />
        ))}
      </div>
    </PageShell>
  );
}
