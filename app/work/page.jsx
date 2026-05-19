import PageShell, { PageHeader } from "../../components/PageShell";

export const metadata = { title: "Work | Iva Dhooria" };

const workEntries = [
  {
    company: "Maxicom Canada",
    role: "Strategic Operations & Digital Growth Intern",
    dates: "Summer 2025",
    location: "Remote \u2014 Canada",
    note: "A summer in strategic operations and digital growth at Maxicom.",
  },
  {
    company: "Bellalete",
    role: "Technology Transformation Student Consultant",
    dates: "Spring 2024",
    location: "Seattle, WA",
    note: "A student consulting engagement with Bellalete, focused on tech transformation and go-to-market thinking.",
  },
  {
    company: "Kobe City Government / Kobe University",
    role: "International Business Development Intern",
    dates: "Summer 2024",
    location: "Kobe, Japan",
    note: "The best moment of my undergraduate and the steepest learning curve. Studying and interning in Kobe on a JASSO scholarship, and what it meant to work across languages.",
  },
  {
    company: "UW Foster School of Business",
    role: "Teaching Assistant",
    dates: "January 2025 \u2014 Present",
    location: "Seattle, WA",
    note: "Helped me build up an aptitude for explaining things and also a deep appreciation for my professors.",
  },
];

function WorkCard({ entry }) {
  return (
    <article className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-6 hover:bg-white/[0.05] transition-colors duration-200">
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
        <h3 className="font-display font-medium text-white text-lg">
          {entry.company}
        </h3>
        <span className="text-[12px] text-white/35 font-display">
          {entry.dates}
        </span>
      </div>
      <div className="text-sm text-husky-gold-light font-display" style={{ fontWeight: 500 }}>
        {entry.role}
      </div>
      <div className="text-[12px] text-white/35 font-display mt-1">
        {entry.location}
      </div>
      <div className="mt-5 pt-5 border-t border-white/[0.06]">
        <p className="text-sm text-white/40 leading-[1.75]">
          {entry.note || "The problem, approach, and outcome coming soon."}
        </p>
      </div>
    </article>
  );
}

export default function WorkPage() {
  return (
    <PageShell>
      <PageHeader
        title="Work"
        subtitle="Selected professional experience \u2014 each entry is a short case study of the problem, the approach, and the outcome."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {workEntries.map((entry) => (
          <WorkCard key={entry.company} entry={entry} />
        ))}
      </div>
    </PageShell>
  );
}
