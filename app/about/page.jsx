import PageShell, { PageHeader } from "../../components/PageShell";
import PhotoSlot from "../../components/PhotoSlot";
import LinkedInIcon from "../../components/LinkedInIcon";
import { Download } from "lucide-react";

export const metadata = { title: "About | Iva Dhooria" };

const languages = ["English", "Punjabi", "Hindi", "French (AP)"];
const technical = ["MS PowerPoint", "MS Excel", "R (RStudio)", "Python"];
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
          <PhotoSlot src="/iva-about.jpg" alt="Iva Dhooria" aspectRatio="3/4" caption="" />
        </div>

        {/* Right: bio + actions */}
        <div>
          <div className="text-white/60 text-[16px] leading-[1.75]">
            <p className="mb-5">
              Placeholder bio &mdash; a short introduction will live here. A
              few sentences about who I am, what I care about, and how I think
              about the work I do.
            </p>
            <p>
              Additional context about studying at UW Foster, the Honors
              Program, and how the pieces of this portfolio fit together.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-husky-gold text-dark font-display text-[13px] hover:bg-husky-gold-light transition-colors duration-200"
              style={{ fontWeight: 500 }}
            >
              <Download size={14} />
              Download r&eacute;sum&eacute;
            </a>
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
