import Link from "next/link";
import PageShell, { PageHeader } from "../../../components/PageShell";
import { artifacts } from "../artifactsData";

export const metadata = { title: "Consistent Curiosity | Iva Dhooria" };

const themeConfig = {
  number: "02",
  color: "#C9A84C",
  lightBg: "#FAF8F3",
  darkBg: "#2A2218",
};

export default function ConsistentCuriosityPage() {
  const themeArtifacts = artifacts.filter((a) => a.themeKey === "curiosity");

  return (
    <PageShell>
      {/* Back link */}
      <div className="mb-8">
        <Link
          href="/honors-portfolio"
          className="text-sm font-display transition-colors"
          style={{ color: themeConfig.color }}
        >
          ← Honors Journey
        </Link>
      </div>

      {/* Header section */}
      <div className="mb-16">
        {/* Watermark number */}
        <div
          className="artifact-theme-watermark relative mb-4"
          style={{
            fontSize: "120px",
            fontWeight: "bold",
            color: themeConfig.color,
            lineHeight: 0.8,
            height: "80px",
            opacity: 0.06,
          }}
        >
          {themeConfig.number}
        </div>

        {/* Title */}
        <h1
          className="font-display text-4xl font-bold mb-6"
          style={{ color: themeConfig.color }}
        >
          Consistent Curiosity
        </h1>

        {/* Divider */}
        <div style={{ height: "2px", backgroundColor: themeConfig.color, width: "60px" }} />
      </div>

      {/* Artifacts list */}
      <div style={{ maxWidth: "800px" }}>
        {themeArtifacts.map((artifact, idx) => (
          <div
            key={artifact.id}
            id={artifact.id}
            style={{ marginBottom: idx !== themeArtifacts.length - 1 ? "4rem" : "0" }}
          >
            {/* Date + period */}
            <p
              className="text-xs uppercase tracking-wider font-display mb-3"
              style={{ color: "#9890B5" }}
            >
              {artifact.date} • {artifact.period}
            </p>

            {/* Title */}
            <h2
              className="font-display font-bold text-2xl mb-6"
              style={{ color: themeConfig.color }}
            >
              {artifact.title}
            </h2>

            {/* Photo area */}
            <div
              style={{
                width: "100%",
                maxHeight: "400px",
                borderRadius: "1rem",
                overflow: "hidden",
                backgroundColor: "#FAF8F3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "2rem",
              }}
            >
              {artifact.photo ? (
                <img
                  src={artifact.photo}
                  alt={artifact.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                    padding: "12px",
                  }}
                />
              ) : (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "300px",
                    border: "2px dashed #D4D2DF",
                  }}
                >
                  <span style={{ color: "#9890B5", fontSize: "14px", fontStyle: "italic" }}>
                    [ Add photo ]
                  </span>
                </div>
              )}
            </div>

            {/* Reflection heading */}
            <div
              className="text-[11px] uppercase tracking-[0.08em] font-display mb-4"
              style={{ color: themeConfig.color }}
            >
              Reflection
            </div>

            {/* Reflection content */}
            {artifact.reflection ? (
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.85,
                  color: "#1A1A2A",
                  maxWidth: "680px",
                }}
              >
                {artifact.reflection}
              </p>
            ) : (
              <p
                style={{
                  fontSize: "14px",
                  fontStyle: "italic",
                  color: "#9890B5",
                }}
              >
                Reflection coming soon.
              </p>
            )}

            {/* PDF Viewer for Passion in Project */}
            {artifact.id === "passion-in-project" && (
              <div style={{
                borderRadius: '1rem',
                border: '1px solid #E0DAF0',
                marginTop: '2rem',
                overflow: 'hidden'
              }}>
                <iframe
                  src="/documents/IS451_Presentation.pdf"
                  width="100%"
                  height="600px"
                  style={{ border: 'none' }}
                />
              </div>
            )}

            {/* Divider */}
            {idx !== themeArtifacts.length - 1 && (
              <div style={{ height: "1px", backgroundColor: "#E0DAF0", marginTop: "3rem" }} />
            )}
          </div>
        ))}
      </div>
    </PageShell>
  );
}
