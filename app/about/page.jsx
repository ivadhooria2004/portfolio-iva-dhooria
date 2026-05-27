import PageShell, { PageHeader } from "../../components/PageShell";
import PhotoSlot from "../../components/PhotoSlot";
import LinkedInIcon from "../../components/LinkedInIcon";
import { Download } from "lucide-react";

export const metadata = { title: "About | Iva Dhooria" };

const languages = ["English", "Punjabi", "Hindi", "French (AP)"];
const technical = ["MS PowerPoint", "MS Excel", "R (RStudio)", "Python", "SQL"];
const honors = [
  "JASSO Government Scholarship 2024",
  "Annual Dean's List",
  "University Honors Program",
];

function StripBlock({ label, items }) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-[0.15em] text-white/40 font-display mb-3">
        {label}
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="text-[13px] text-white/60 font-display border border-white/[0.08] bg-white/[0.03] rounded-full px-3 py-1.5"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <PageShell>
      <PageHeader title="About" />

      {/* Two-column layout */}
      <div className="grid gap-10 md:grid-cols-[2fr_3fr] md:gap-12">
        {/* Left: photo slot */}
        <div>
          <PhotoSlot src="/iva-about.webp" alt="Iva Dhooria" aspectRatio="3/4" caption="" />
        </div>

        {/* Right: bio + actions */}
        <div>
          <div className="text-white/60 text-[16px] leading-[1.75]">
            <p className="mb-5">
              I'm a senior at the UW Foster School of Business, finishing a degree in Finance and Information Systems with minors in Data Science and Informatics. This fall, I'm heading to UBC for a Master of Data Science.
            </p>
            <p className="mb-5">
              I'm drawn to problems that sit at the intersection of data and strategy, where analytical thinking and business judgment both have a seat at the table. My time at UW has been about deliberately collecting tools for that kind of work: finance and information systems for the analytical foundation, case competitions for the pressure-tested problem solving, and an interdisciplinary honors curriculum that pushed me to think across literature, history, philosophy, and public health alongside my business coursework.
            </p>
            <p className="mb-5">
              Outside the classroom, I co-founded UW's Case Club, represented UW internationally at case competitions in Canada and Mexico, spent two months interning and studying in Kobe, Japan on a JASSO government scholarship, and worked as a TA for two years. I speak English, Punjabi, Hindi, and French.
            </p>
            <p>
              I care about doing work that is rigorous, cross-functional, and grounded in real decisions. After UBC, I'm targeting roles at the intersection of data and strategy, where the analysis doesn't stop at the output, but carries through to the so what.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/iva-dhooria/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 bg-transparent text-white/70 font-display text-[13px] hover:bg-white/[0.05] hover:text-white hover:border-husky-gold/40 transition-colors duration-200"
              style={{ fontWeight: 500 }}
            >
              <LinkedInIcon size={14} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Skills / Languages / Honors strip */}
      <div className="mt-20 rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-8">
        <div className="grid gap-8 md:grid-cols-3">
          <StripBlock label="Languages" items={languages} />
          <StripBlock label="Technical" items={technical} />
          <StripBlock label="Honors" items={honors} />
        </div>
      </div>
    </PageShell>
  );
}
