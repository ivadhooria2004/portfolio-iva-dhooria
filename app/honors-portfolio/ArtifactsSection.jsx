"use client";

import { useState, useEffect } from "react";

const themeConfig = {
  exploration: {
    label: "Intentional Exploration",
    color: "#4A3278",
    lightBg: "#F5F2FB",
    darkBg: "#221D38",
    accent: "#7357B5",
    badgeColor: "#4A3278",
    badgeText: "#FFFFFF",
    number: "01",
  },
  curiosity: {
    label: "Consistent Curiosity",
    color: "#C9A84C",
    lightBg: "#FAF8F3",
    darkBg: "#2A2218",
    accent: "#D4B86A",
    badgeColor: "#C9A84C",
    badgeText: "#17142A",
    number: "02",
  },
  authenticity: {
    label: "Relearning Authenticity",
    color: "#7357B5",
    lightBg: "#EEE8FA",
    darkBg: "#1E1A30",
    accent: "#9B7FD4",
    badgeColor: "#7357B5",
    badgeText: "#FFFFFF",
    number: "03",
  },
};

function ArtifactTile({ artifact, onSelect }) {
  const config = themeConfig[artifact.themeKey];

  return (
    <div
      onClick={() => onSelect(artifact)}
      className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 hover:scale-[1.02] cursor-pointer"
      style={{
        borderTop: `3px solid ${config.color}`,
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* Photo area */}
      <div
        style={{
          width: '100%',
          height: '180px',
          borderRadius: '1rem 1rem 0 0',
          overflow: 'hidden',
          backgroundColor: '#F5F2FB',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {artifact.photo ? (
          <img
            src={artifact.photo}
            alt={artifact.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'center',
              display: 'block',
              padding: '8px'
            }}
          />
        ) : (
          <div
            className="artifact-photo-placeholder w-full h-full flex items-center justify-center border-b-2 border-dashed"
            style={{
              backgroundColor: "#F5F2FB",
              borderColor: "#D4D2DF",
              height: '180px',
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
          className={`text-[10px] uppercase tracking-[0.08em] font-display text-white rounded-full px-2.5 py-1 inline-block mb-3 artifact-badge-${artifact.themeKey}`}
          style={{
            backgroundColor: config.badgeColor,
            color: config.badgeText,
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

        {/* Visual cue */}
        <div className="text-sm font-display mt-4" style={{ color: config.accent }}>
          View details →
        </div>
      </div>
    </div>
  );
}

function ArtifactsByTheme({ artifacts, onSelectArtifact }) {
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
              className="artifact-theme-watermark relative mb-6"
              style={{
                fontSize: "120px",
                fontWeight: "bold",
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
                  onSelect={onSelectArtifact}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ArtifactsByYear({ artifacts, onSelectArtifact }) {
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
              onSelect={onSelectArtifact}
            />
          </div>
        );
      })}
    </div>
  );
}

function ArtifactPanel({ artifact, onClose }) {
  const config = themeConfig[artifact.themeKey];
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(onClose, 300);
  };

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <>
      {/* Overlay */}
      <div
        className="artifact-overlay fixed inset-0 z-40"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          backdropFilter: "blur(4px)",
          opacity: isOpen ? 1 : 0,
        }}
        onClick={handleClose}
      />

      {/* Panel */}
      <div
        className="artifact-panel fixed z-50 overflow-y-auto"
        style={{
          top: 0,
          right: 0,
          height: '100vh',
          width: isMobile ? '100vw' : '420px',
          backgroundColor: "#FFFFFF",
          boxShadow: "-4px 0 30px rgba(0, 0, 0, 0.2)",
          transform: isMobile
            ? `translateY(${isOpen ? 0 : 100}%)`
            : `translateX(${isOpen ? 0 : 100}%)`,
          borderRadius: isMobile ? "1.5rem 1.5rem 0 0" : "0",
          bottom: isMobile ? 0 : "auto",
        }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors z-10"
          style={{ fontSize: "20px", color: "#1A1A2A" }}
        >
          ×
        </button>

        {/* Panel content */}
        <div style={{ padding: "2rem", paddingRight: "3rem", paddingBottom: "2.5rem" }}>
          {/* Theme badge */}
          <div className="mb-6">
            <span
              className="text-[11px] uppercase tracking-[0.08em] font-display rounded-full px-3 py-1.5 inline-block"
              style={{
                backgroundColor: config.badgeColor,
                color: config.badgeText,
              }}
            >
              {config.label.split(" ").slice(0, 2).join(" ")}
            </span>
          </div>

          {/* Title */}
          <h2
            className="font-display font-bold text-2xl mb-2 leading-tight"
            style={{ color: config.color }}
          >
            {artifact.title}
          </h2>

          {/* Date and period */}
          <p
            className="text-sm font-display mb-8"
            style={{ color: "#68607E" }}
          >
            {artifact.date} • {artifact.period}
          </p>

          {/* Photo area */}
          <div
            style={{
              width: '100%',
              height: '260px',
              marginBottom: '1.5rem',
              borderRadius: '1rem',
              overflow: 'hidden',
              backgroundColor: '#F5F2FB',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {artifact.photo ? (
              <img
                src={artifact.photo}
                alt={artifact.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  objectPosition: 'center',
                  padding: '8px',
                }}
              />
            ) : (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: '100%',
                  border: '2px dashed #D4D2DF',
                }}
              >
                <span style={{ color: "#9890B5", fontSize: "14px", fontStyle: "italic" }}>
                  [ Add photo ]
                </span>
              </div>
            )}
          </div>

          {/* Divider */}
          <div style={{ height: "1px", backgroundColor: "#E0DAF0", marginBottom: "1.5rem" }} />

          {/* Reflection section */}
          <div className="text-[11px] uppercase tracking-[0.08em] font-display mb-4" style={{ color: config.color }}>
            Reflection
          </div>

          {artifact.reflection ? (
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.8,
                color: "#1A1A2A",
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
        </div>
      </div>
    </>
  );
}

export default function ArtifactsSection({ artifacts }) {
  const [sortBy, setSortBy] = useState("theme");
  const [selectedArtifact, setSelectedArtifact] = useState(null);

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
        <ArtifactsByTheme artifacts={artifacts} onSelectArtifact={setSelectedArtifact} />
      ) : (
        <ArtifactsByYear artifacts={artifacts} onSelectArtifact={setSelectedArtifact} />
      )}

      {/* Side panel */}
      {selectedArtifact && (
        <ArtifactPanel artifact={selectedArtifact} onClose={() => setSelectedArtifact(null)} />
      )}
    </div>
  );
}
