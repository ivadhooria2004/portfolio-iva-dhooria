"use client";

import { useState } from "react";
import Link from "next/link";
import journeyEntries from "../lib/journeyData";

/**
 * Category -> existing palette class mapping. No new colors.
 */
const categoryStyles = {
  honors: {
    label: "Honors",
    pill: "border border-husky-purple-bright/30 bg-husky-purple/15 text-husky-purple-bright",
    dot: "bg-husky-purple-bright",
  },
  "case competition": {
    label: "Case Competition",
    pill: "border border-husky-gold/30 bg-husky-gold/10 text-husky-gold-light",
    dot: "bg-husky-gold",
  },
  internship: {
    label: "Internship",
    pill: "border border-husky-purple-light/30 bg-husky-purple-light/10 text-husky-purple-bright",
    dot: "bg-husky-purple-light",
  },
  leadership: {
    label: "Leadership",
    pill: "border border-husky-gold-bright/30 bg-husky-gold-bright/10 text-husky-gold-light",
    dot: "bg-husky-gold-bright",
  },
  work: {
    label: "Work",
    pill: "border border-white/15 bg-white/[0.04] text-white/60",
    dot: "bg-white/60",
  },
  academics: {
    label: "Academics",
    pill: "border border-white/15 bg-white/[0.04] text-white/60",
    dot: "bg-white/50",
  },
  personal: {
    label: "Personal",
    pill: "border border-husky-gold-light/25 bg-husky-gold-light/5 text-husky-gold-light",
    dot: "bg-husky-gold-light",
  },
};

const filterOrder = [
  "all",
  "honors",
  "case competition",
  "internship",
  "leadership",
  "work",
  "academics",
  "personal",
];

function filterLabel(key) {
  if (key === "all") return "All";
  return categoryStyles[key]?.label ?? key;
}

function TimelineCard({ entry, side }) {
  const style = categoryStyles[entry.category];
  const [imageError, setImageError] = useState(false);

  const CardContent = () => (
    <>
      <div className="text-[12px] text-white/35 font-display mb-1">
        {entry.date}
      </div>
      <h3
        className="font-display text-white leading-snug mb-2"
        style={{ fontSize: "15px", fontWeight: 500 }}
      >
        {entry.title}
      </h3>
      <p
        className="text-white/45"
        style={{ fontSize: "13px", lineHeight: 1.65 }}
      >
        {entry.description}
      </p>
      <div className={`mt-4 rounded-lg overflow-hidden bg-white/[0.05] flex items-center justify-center border border-white/[0.08] ${
        entry.id === 5 ? "" : "aspect-video"
      }`} style={entry.id === 5 ? { height: "300px" } : {}}>
        {entry.image && !imageError ? (
          <img
            src={entry.image}
            alt={entry.title}
            className="w-full object-cover"
            style={entry.id === 5 ? { height: "300px", objectPosition: "center top" } : { height: "100%" }}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="text-white/25 text-[13px] font-display text-center px-4">
            [Image]
          </div>
        )}
      </div>
      <div
        className={`mt-4 flex flex-wrap gap-2 ${
          side === "left" ? "md:justify-end" : "md:justify-start"
        }`}
      >
        <span
          className={`text-[11px] uppercase tracking-[0.08em] font-display rounded-full px-2.5 py-1 ${style.pill}`}
        >
          {style.label}
        </span>
      </div>
    </>
  );

  if (entry.link) {
    return (
      <Link href={entry.link}>
        <div
          className={`relative rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-5 hover:bg-white/[0.05] transition-colors duration-200 cursor-pointer ${
            side === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          <CardContent />
        </div>
      </Link>
    );
  }

  return (
    <div
      className={`relative rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-5 hover:bg-white/[0.05] transition-colors duration-200 ${
        side === "left" ? "md:text-right" : "md:text-left"
      }`}
    >
      <CardContent />
    </div>
  );
}

function TimelineRow({ entry, index }) {
  const side = index % 2 === 0 ? "left" : "right";
  const style = categoryStyles[entry.category];

  return (
    <div className="relative mb-12 last:mb-0">
      {/* Desktop alternating layout */}
      <div className="hidden md:grid md:grid-cols-[44%_12%_44%] md:items-start">
        {side === "left" ? (
          <>
            <div className="pr-4">
              <TimelineCard entry={entry} side="left" />
            </div>
            <div className="flex justify-center pt-6">
              <span
                className={`block w-2 h-2 rounded-full ${style.dot}`}
              />
            </div>
            <div />
          </>
        ) : (
          <>
            <div />
            <div className="flex justify-center pt-6">
              <span
                className={`block w-2 h-2 rounded-full ${style.dot}`}
              />
            </div>
            <div className="pl-4">
              <TimelineCard entry={entry} side="right" />
            </div>
          </>
        )}
      </div>

      {/* Mobile layout */}
      <div className="md:hidden relative pl-8">
        <span
          className={`absolute left-[-3px] top-4 block w-2 h-2 rounded-full ${style.dot}`}
        />
        <TimelineCard entry={entry} side="right" />
      </div>
    </div>
  );
}

export default function JourneyTimeline() {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterClick = (key) => {
    if (activeFilter === key && key !== "all") {
      setActiveFilter("all");
    } else {
      setActiveFilter(key);
    }
  };

  return (
    <>
      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 mb-14">
        {filterOrder.map((key) => {
          const active = activeFilter === key;
          return (
            <button
              key={key}
              onClick={() => handleFilterClick(key)}
              className={`text-[12px] uppercase tracking-[0.08em] font-display rounded-full px-3 py-1.5 transition-colors duration-200 ${
                active
                  ? "border border-husky-gold/40 bg-husky-gold/15 text-husky-gold-light"
                  : "border border-white/10 bg-transparent text-white/50 hover:text-white hover:border-white/25"
              }`}
            >
              {filterLabel(key)}
            </button>
          );
        })}
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Desktop center spine */}
        <div
          className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-white/[0.08]"
          aria-hidden="true"
        />
        {/* Mobile left spine */}
        <div
          className="md:hidden absolute top-0 bottom-0 left-4 w-px bg-white/[0.08]"
          aria-hidden="true"
        />

        <div className="relative">
          {journeyEntries.map((entry, index) => {
            const visible =
              activeFilter === "all" || entry.category === activeFilter;
            return (
              <div
                key={entry.id}
                className="overflow-hidden transition-all duration-200 ease-out"
                style={{
                  opacity: visible ? 1 : 0,
                  maxHeight: visible ? "1600px" : "0px",
                  marginBottom: visible ? undefined : 0,
                  pointerEvents: visible ? "auto" : "none",
                }}
              >
                <TimelineRow entry={entry} index={index} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
