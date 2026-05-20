"use client";

import { useState } from "react";

const themeConfig = {
  exploration: {
    label: "Intentional Exploration",
    color: "#4A3278",
    lightBg: "#F5F2FB",
    darkBg: "#221D38",
    accent: "#7357B5",
    number: "01",
  },
  curiosity: {
    label: "Consistent Curiosity",
    color: "#C9A84C",
    lightBg: "#FAF8F3",
    darkBg: "#2A2218",
    accent: "#D4B86A",
    number: "02",
  },
  authenticity: {
    label: "Relearning Authenticity",
    color: "#7357B5",
    lightBg: "#EEE8FA",
    darkBg: "#1E1A30",
    accent: "#9B7FD4",
    number: "03",
  },
};

function ArtifactTile({ artifact, expanded, onToggle }) {
  const config = themeConfig[artifact.themeKey];

  const getDarkModeColors = () => {
    switch (artifact.themeKey) {
      case "exploration":
        return { badge: "#4A3278", badgeText: "#FFFFFF" };
      case "curiosity":
        return { badge: "#C9A84C", badgeText: "#17142A" };
      case "authenticity":
        return { badge: "#7357B5", badgeText: "#FFFFFF" };
      default:
        return { badge: config.color, badgeText: "#FFFFFF" };
    }
  };

  const darkColors = getDarkModeColors();

  return (
    <div
      className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
      style={{
        borderTop: `3px solid ${config.color}`,
        backgroundColor: "white",
        "--dark-bg": "#2A2448",
        "--dark-title": "#EDE8FF",
        "--dark-date": "#9890B5",
        "--dark-shadow": "0 2px 8px rgba(0,0,0,0.4)",
      }}
    >
      {/* Photo area */}
      <div
        className="w-full overflow-hidden"
        style={{
          height: "160px",
          borderRadius: "1rem 1rem 0 0",
        }}
      >
        {artifact.photo ? (
          <img
            src={artifact.photo}
            alt={artifact.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center border-b-2 border-dashed"
            style={{
              backgroundColor: "#F5F2FB",
              borderColor: "#D4D2DF",
            }}
            data-theme-dark={{
              backgroundColor: "#1E1A30",
              borderColor: "#3A3250",
            }}
          >
            <span
              className="text-sm italic"
              style={{
                color: "#9890B5",
              }}
            >
              [ Add photo ]
            </span>
          </div>
        )}
      </div>

      {/* Card content */}
      <div className="p-6">
        {/* Theme badge */}
        <span
          className="text-[10px] uppercase tracking-[0.08em] font-display text-white rounded-full px-2.5 py-1 inline-block mb-3"
          style={{
            backgroundColor: config.color,
            color: darkColors.badgeText,
          }}
        >
          {config.label.split(" ").slice(0, 2).join(" ")}
        </span>

        {/* Title and date */}
        <h3
          className="font-display font-bold text-lg mb-1 leading-snug"
          style={{
            color: "#4A3278",
          }}
        >
          {artifact.title}
        </h3>
        <p
          className="text-sm font-display mb-4"
          style={{
            color: "#68607E",
          }}
        >
          {artifact.date}
        </p>

        {/* Reflection link or placeholder */}
        {!expanded && (
          <button
            onClick={onToggle}
            className="text-sm font-display mt-4 transition-colors duration-200"
            style={{ color: config.accent }}
          >
            Read reflection →
          </button>
        )}
      </div>

      {/* Expanded content */}
      {expanded && (
        <div
          className="border-t px-6 py-6"
          style={{
            backgroundColor: "#F5F2FB",
            borderColor: "#E0DAF0",
          }}
        >
          {/* Reflection placeholder */}
          <p
            className="text-sm italic mb-6"
            style={{
              color: "#9890B5",
            }}
          >
            Reflection coming soon — check back soon.
          </p>

          {/* Close button */}
          <button
            onClick={onToggle}
            className="text-sm font-display transition-colors duration-200"
            style={{ color: config.accent }}
          >
            Close ↑
          </button>
        </div>
      )}
    </div>
  );
}

function ArtifactsByTheme({ artifacts, expandedId, onToggle }) {
  const themes = ["exploration", "curiosity", "authenticity"];

  return (
    <div className="space-y-16">
      {themes.map((themeKey) => {
        const config = themeConfig[themeKey];
        const themeArtifacts = artifacts.filter((a) => a.themeKey === themeKey);

        return (
          <div key={themeKey}>
            {/* Watermark number */}
            <div
              className="relative mb-6"
              style={{
                fontSize: "120px",
                fontWeight: "bold",
                opacity: 0.06,
                color: config.color,
                lineHeight: 0.8,
                height: "80px",
              }}
            >
              {config.number}
            </div>

            {/* Theme heading with colored left border */}
            <div className="flex items-center gap-3 mb-8">
              <div
                style={{
                  width: "4px",
                  height: "24px",
                  backgroundColor: config.color,
                }}
              />
              <h3 className="font-display text-xl font-bold" style={{ color: config.color }}>
                {config.label}
              </h3>
            </div>

            {/* Artifact grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {themeArtifacts.map((artifact) => (
                <ArtifactTile
                  key={artifact.id}
                  artifact={artifact}
                  expanded={expandedId === artifact.id}
                  onToggle={() => onToggle(artifact.id)}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ArtifactsByYear({ artifacts, expandedId, onToggle }) {
  const sortedArtifacts = [...artifacts].sort((a, b) => a.year - b.year);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {sortedArtifacts.map((artifact) => {
        const config = themeConfig[artifact.themeKey];
        return (
          <div key={artifact.id} className="relative">
            {/* Year badge */}
            <span
              className="absolute top-3 right-3 text-[11px] font-display font-bold px-2 py-1 rounded text-white"
              style={{ backgroundColor: config.color }}
            >
              {artifact.year}
            </span>
            <ArtifactTile
              artifact={artifact}
              expanded={expandedId === artifact.id}
              onToggle={() => onToggle(artifact.id)}
            />
          </div>
        );
      })}
    </div>
  );
}

export default function ArtifactsSection({ artifacts }) {
  const [sortBy, setSortBy] = useState("theme");
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpanded = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div>
      {/* Sort controls */}
      <div className="flex gap-3 mb-12">
        <button
          onClick={() => setSortBy("theme")}
          className="px-5 py-2.5 rounded-full font-display text-sm font-medium transition-all duration-200"
          style={{
            backgroundColor: sortBy === "theme" ? "#4A3278" : "transparent",
            color: sortBy === "theme" ? "#FFFFFF" : "#68607E",
            border: sortBy === "theme" ? "none" : "1px solid #E0DAF0",
          }}
        >
          By Theme
        </button>
        <button
          onClick={() => setSortBy("year")}
          className="px-5 py-2.5 rounded-full font-display text-sm font-medium transition-all duration-200"
          style={{
            backgroundColor: sortBy === "year" ? "#4A3278" : "transparent",
            color: sortBy === "year" ? "#FFFFFF" : "#68607E",
            border: sortBy === "year" ? "none" : "1px solid #E0DAF0",
          }}
        >
          By Year
        </button>
      </div>

      {/* Artifacts view */}
      {sortBy === "theme" ? (
        <ArtifactsByTheme artifacts={artifacts} expandedId={expandedId} onToggle={toggleExpanded} />
      ) : (
        <ArtifactsByYear artifacts={artifacts} expandedId={expandedId} onToggle={toggleExpanded} />
      )}
    </div>
  );
}
