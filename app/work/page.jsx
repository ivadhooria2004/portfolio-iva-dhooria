import PageShell, { PageHeader } from "../../components/PageShell";

export const metadata = { title: "Work | Iva Dhooria" };

const workEntries = [
  {
    role: "TEACHING ASSISTANT \u2014 MKTG 305",
    organization: "Foster School of Business, University of Washington",
    location: "Seattle, WA",
    dates: "January 2025 \u2013 June 2026",
    bullets: [
      "Supported 120+ business minor students per quarter by facilitating in-class curriculum and instruction",
      "Provided actionable feedback on assignments and presentations, strengthening student storytelling and delivery skills",
      "Conducted office hours to resolve student queries, improving accessibility and course comprehension",
      "Managed Canvas page setup and contributed to writing and grading assignments and exams",
      "Gained teaching-side perspective that reinforced personal learning habits and time management",
    ],
  },
  {
    role: "STRATEGIC OPERATIONS AND DIGITAL GROWTH INTERN",
    organization: "Maxicom Canada (IT Asset Disposition Company)",
    location: "Surrey, BC",
    dates: "June 2025 \u2013 September 2025",
    bullets: [
      "Optimized LinkedIn and Google Ads campaigns through audience segmentation analysis, increasing B2B website traffic by 15%",
      "Supported Zoho CRM implementation by documenting workflows, testing features, and training team members on new processes",
      "Assessed feasibility of a D2C e-commerce channel, identifying diversification opportunities to shorten sales cycles",
      "Conducted competitive research to inform digital growth strategy across key verticals",
    ],
  },
  {
    role: "INTERNATIONAL BUSINESS DEVELOPMENT INTERN",
    organization: "Kobe University Cultural Exchange and Internship Project",
    location: "Kobe, Japan",
    dates: "July 2024 \u2013 August 2024",
    bullets: [
      "Conducted market research on tourism trends for Kobe City Government, informing regional funding allocation and strategic partnership decisions",
      "Designed a market expansion strategy for Foodpict to boost brand recognition among inbound tourists",
      "Engaged in cross-cultural exchange as part of a government-sponsored internship program",
      "Recipient of the JASSO Government Scholarship for this experience",
    ],
  },
  {
    role: "HFS HR STUDENT ASSISTANT",
    organization: "UW Housing & Food Services, University of Washington",
    location: "Seattle, WA",
    dates: "September 2023 \u2013 December 2024",
    bullets: [
      "Supported HR operations for one of UW's largest administrative departments",
      "Assisted with employee onboarding, record management, and internal communications",
      "Developed organizational and administrative skills in a fast-paced institutional environment",
      "Balanced role responsibilities alongside a full academic course load",
    ],
  },
  {
    role: "EXECUTIVE ASSISTANT (SUMMER INTERN)",
    organization: "College R Us",
    dates: "August 2023 \u2013 September 2023",
    bullets: [
      "Streamlined administrative processes, ensuring daily operations ran smoothly through strong attention to detail and multitasking",
      "Managed the CEO's calendar, arranged complex travel itineraries, and handled sensitive information with discretion",
      "Identified areas for improvement within workflows and introduced solutions that increased efficiency and productivity",
      "Delivered high-quality work consistently under tight deadlines, demonstrating strong written and verbal communication skills",
    ],
  },
];

function WorkCard({ entry }) {
  return (
    <article className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-6 hover:bg-white/[0.05] transition-colors duration-200">
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
        <h3 className="font-display font-medium text-white text-lg">
          {entry.role}
        </h3>
        <span className="text-[12px] text-white/35 font-display whitespace-nowrap">
          {entry.dates}
        </span>
      </div>
      <div className="text-sm text-husky-gold-light font-display" style={{ fontWeight: 500 }}>
        {entry.organization}
      </div>
      {entry.location && (
        <div className="text-[12px] text-white/35 font-display mt-1">
          {entry.location}
        </div>
      )}
      <div className="mt-4 pt-4 border-t border-white/[0.06]">
        <ul className="space-y-2 text-sm text-white/40">
          {entry.bullets.map((bullet, idx) => (
            <li key={idx} className="flex gap-3">
              <span className="text-husky-gold-light flex-shrink-0">\u2022</span>
              <span className="leading-[1.6]">{bullet}</span>
            </li>
          ))}
        </ul>
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
          <WorkCard key={entry.role} entry={entry} />
        ))}
      </div>
    </PageShell>
  );
}
