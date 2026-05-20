"use client";

import { useState } from "react";
import Link from "next/link";
import { artifacts } from "./artifactsData";

const themeConfig = {
  exploration: {
    label: "Intentional Exploration",
    color: "#4A3278",
    lightBg: "#F5F2FB",
    darkBg: "#221D38",
    badgeColor: "#4A3278",
    badgeText: "#FFFFFF",
    number: "01",
    path: "/honors-portfolio/intentional-exploration",
  },
  curiosity: {
    label: "Consistent Curiosity",
    color: "#C9A84C",
    lightBg: "#FAF8F3",
    darkBg: "#2A2218",
    badgeColor: "#C9A84C",
    badgeText: "#17142A",
    number: "02",
    path: "/honors-portfolio/consistent-curiosity",
  },
  authenticity: {
    label: "Relearning Authenticity",
    color: "#7357B5",
    lightBg: "#EEE8FA",
    darkBg: "#1E1A30",
    badgeColor: "#7357B5",
    badgeText: "#FFFFFF",
    number: "03",
    path: "/honors-portfolio/relearning-authenticity",
  },
};

function ArtifactTile({ artifact }) {
  const config = themeConfig[artifact.themeKey];
  const linkPath = `${config.path}#${artifact.id}`;

  return (
    <Link href={linkPath}>
      <div
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
        <div className="p-6" style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
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
          <div className="text-sm font-display mt-auto" style={{ color: config.color }}>
            View details →
          </div>
        </div>
      </div>
    </Link>
  );
}

function ThemeNavCard({ themeKey }) {
  const config = themeConfig[themeKey];
  const [isHovered, setIsHovered] = useState(false);

  const cardColorMap = {
    exploration: {
      bg: "#3D2875",
      border: "#7357B5",
      titleColor: "#EDE8FF",
      descColor: "#C5BDDF",
      arrowColor: "#9B7FD4",
    },
    curiosity: {
      bg: "#3D3210",
      border: "#C9A84C",
      titleColor: "#FFF8E1",
      descColor: "#E8D5A3",
      arrowColor: "#C9A84C",
    },
    authenticity: {
      bg: "#2D1F5E",
      border: "#9B7FD4",
      titleColor: "#EDE8FF",
      descColor: "#C5BDDF",
      arrowColor: "#B8A0E8",
    },
  };

  const colors = cardColorMap[themeKey];
  const baseStyle = {
    backgroundColor: colors.bg,
    boxShadow: isHovered ? "0 6px 20px rgba(0, 0, 0, 0.25)" : "0 0 0 0 rgba(0, 0, 0, 0.15)",
    transform: isHovered ? "translateY(-2px)" : "translateY(0)",
    transition: "all 0.2s ease",
  };

  return (
    <Link href={config.path}>
      <div
        className="rounded-r-2xl p-6 cursor-pointer"
        style={baseStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h3 className="font-display font-bold text-lg" style={{ color: colors.titleColor }}>
          {config.label}
        </h3>
        <div style={{ color: colors.arrowColor, marginTop: "1rem" }}>→</div>
      </div>
    </Link>
  );
}

function ArtifactsByTheme({ artifacts }) {
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ alignItems: "stretch" }}>
              {themeArtifacts.map((artifact) => (
                <ArtifactTile key={artifact.id} artifact={artifact} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ArtifactsByYear({ artifacts }) {
  const sortedArtifacts = [...artifacts].sort((a, b) => a.year - b.year);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ alignItems: "stretch" }}>
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
            <ArtifactTile artifact={artifact} />
          </div>
        );
      })}
    </div>
  );
}

export default function ArtifactsSection() {
  const [sortBy, setSortBy] = useState("theme");

  return (
    <div>
      {/* Theme navigation cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
        <ThemeNavCard themeKey="exploration" />
        <ThemeNavCard themeKey="curiosity" />
        <ThemeNavCard themeKey="authenticity" />
      </div>

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
        <ArtifactsByTheme artifacts={artifacts} />
      ) : (
        <ArtifactsByYear artifacts={artifacts} />
      )}
    </div>
  );
}
