import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageShell, { PageHeader } from "../../components/PageShell";
import ArtifactsSection from "./ArtifactsSection";

export const metadata = { title: "Honors Journey | Iva Dhooria" };

const honCourses = [
  {
    code: "HON 100",
    name: null,
    note: "My first interaction with the honors community",
  },
  {
    code: "HON 211",
    name: "Disenchantment of the West",
    note: "The hardest but also most rewarding honors class",
  },
  {
    code: "HON 231",
    name: "Improving Population Health through Social Entrepreneurship",
    note: "Three-hour once-a-week lecture, but so worth it",
  },
  {
    code: "HON 345",
    name: "Oral History",
    note: "The interview was truly a unique experience",
  },
  {
    code: "HON 394",
    name: "Lovework",
    note: "The best professor and the sound therapy was amazing",
  },
  {
    code: "HON 496",
    name: null,
    note: "The culmination of honors and my time at UW",
  },
];

const experientialLearning = [
  {
    title: "Kobe University International Engagement",
    dates: "Summer 2024",
    description: "Cultural exchange and internship in Japan",
    href: "/honors/kobe-internship",
    badge: "International Engagement",
  },
  {
    title: "UW Case Club Leadership",
    dates: "December 2024 – Present",
    description: "Co-Founder and Director of Membership",
    href: "/honors/case-club-leadership",
    badge: "Leadership",
  },
];

const adHocHonors = [
  {
    title: "Deep Dive Into Attention Span",
    course: "INFO 300",
    quarter: "Winter 2025",
    description: "Research paper on attention spans",
    href: "/honors/attention-research",
    badge: "Research",
  },
  {
    title: "Global Beats & Words",
    course: "GLITC 252",
    quarter: "Spring 2025",
    description: "Music and poetry across global contexts",
    href: "/honors/global-beats-words",
    badge: "Creative",
  },
];

const artifacts = [
  // THEME 1: Intentional Exploration
  {
    id: "first-job",
    title: "My First Job",
    date: "September 2023",
    period: "Sophomore Year, Fall Quarter",
    theme: "Intentional Exploration",
    themeKey: "exploration",
    year: 2023,
    reflection: null,
    photo: "/images/artifacts/first-job.jpg",
  },
  {
    id: "startup-world",
    title: "Startup World and Networking",
    date: "September 2024 – June 2025",
    period: "Junior Year",
    theme: "Intentional Exploration",
    themeKey: "exploration",
    year: 2024,
    reflection: null,
    photo: "/images/artifacts/startup-world.jpg",
  },
  {
    id: "bmcc",
    title: "BMCC",
    date: "November 10–17, 2024",
    period: "Junior Year, Fall Quarter",
    theme: "Intentional Exploration",
    themeKey: "exploration",
    year: 2024,
    reflection: null,
    photo: "/images/artifacts/bmcc.jpg",
  },
  {
    id: "first-c2-event",
    title: "First C2 Event",
    date: "January 21, 2025",
    period: "Junior Year, Winter Quarter",
    theme: "Intentional Exploration",
    themeKey: "exploration",
    year: 2025,
    reflection: null,
    photo: "/images/artifacts/first-c2-event.jpg",
  },
  {
    id: "writing-not-competing",
    title: "Writing, Not Competing?",
    date: "February 2025",
    period: "Junior Year, Winter Quarter",
    theme: "Intentional Exploration",
    themeKey: "exploration",
    year: 2025,
    reflection: null,
    photo: "/images/artifacts/lifes-philosophy.jpg",
  },
  // THEME 2: Consistent Curiosity
  {
    id: "always-loved-dancing",
    title: "She Has Always Loved Dancing",
    date: "September 2023 – June 2024",
    period: "Sophomore Year",
    theme: "Consistent Curiosity",
    themeKey: "curiosity",
    year: 2023,
    reflection: null,
    photo: "/images/artifacts/always-loved-dancing.jpg",
  },
  {
    id: "deep-conversations",
    title: "Deep Conversations with Strangers",
    date: "November 17, 2023",
    period: "Sophomore Year",
    theme: "Consistent Curiosity",
    themeKey: "curiosity",
    year: 2023,
    reflection: null,
    photo: "/images/artifacts/deep-conversations.jpg",
  },
  {
    id: "open-endings",
    title: "Open Endings",
    date: "April 7–12, 2025",
    period: "Junior Year",
    theme: "Consistent Curiosity",
    themeKey: "curiosity",
    year: 2025,
    reflection: null,
    photo: "/images/artifacts/open-endings.jpg",
  },
  {
    id: "being-a-ta",
    title: "Being a TA",
    date: "January 2025 – June 2026",
    period: "Junior and Senior Year",
    theme: "Consistent Curiosity",
    themeKey: "curiosity",
    year: 2025,
    reflection: null,
    photo: "/images/artifacts/being-a-ta.jpg",
  },
  {
    id: "passion-in-project",
    title: "Passion in Project",
    date: "Winter 2026",
    period: "Senior Year",
    theme: "Consistent Curiosity",
    themeKey: "curiosity",
    year: 2026,
    reflection: null,
    photo: null,
  },
  // THEME 3: Relearning Authenticity
  {
    id: "lifes-philosophy",
    title: "Writing My Life's Philosophy at 18",
    date: "Winter 2023",
    period: "Freshman Year",
    theme: "Relearning Authenticity",
    themeKey: "authenticity",
    year: 2023,
    reflection: null,
    photo: "/images/artifacts/lifes-philosophy.jpg",
  },
  {
    id: "shrm",
    title: "SHRM",
    date: "Spring 2023",
    period: "Freshman Year",
    theme: "Relearning Authenticity",
    themeKey: "authenticity",
    year: 2023,
    reflection: null,
    photo: "/images/artifacts/shrm.jpg",
  },
  {
    id: "caseit-2024",
    title: "CaseIT 2024",
    date: "Winter 2024",
    period: "Sophomore Year",
    theme: "Relearning Authenticity",
    themeKey: "authenticity",
    year: 2024,
    reflection: null,
    photo: "/images/artifacts/caseit-2024.jpg",
  },
  {
    id: "lakeside-speaker",
    title: "Going Back to Lakeside as a Guest Speaker",
    date: "Summer 2025",
    period: "Junior Year",
    theme: "Relearning Authenticity",
    themeKey: "authenticity",
    year: 2025,
    reflection: null,
    photo: "/images/artifacts/lakeside-speaker.jpg",
  },
  {
    id: "first-solo-trip",
    title: "First Solo Trip",
    date: "Summer 2025",
    period: "Junior Year",
    theme: "Relearning Authenticity",
    themeKey: "authenticity",
    year: 2025,
    reflection: null,
    photo: "/images/artifacts/first-solo-trip.jpg",
  },
  {
    id: "husky-100",
    title: "Husky 100 Application",
    date: "Winter 2026",
    period: "Senior Year",
    theme: "Relearning Authenticity",
    themeKey: "authenticity",
    year: 2026,
    reflection: null,
    photo: null,
  },
];

function HonorsCourseCard({ course }) {
  return (
    <div className="honors-course-card relative rounded-2xl bg-white shadow-sm border-l-4 border-[#C9A84C] overflow-hidden group hover:shadow-md transition-shadow duration-200" style={{ minHeight: '140px', padding: '1.5rem 1.5rem 1rem 1.5rem' }}>
      {/* Watermark background */}
      <div className="honors-course-watermark absolute select-none pointer-events-none" style={{ bottom: '-8px', right: '8px', fontSize: 'clamp(3.5rem, 7vw, 5rem)', opacity: 0.07, color: '#4A3278', lineHeight: 1 }}>
        {course.code.split(" ")[1]}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="font-display font-bold text-lg text-[#4A3278]">
          {course.name || course.code}
        </h3>
        {course.name && (
          <p className="text-sm text-[#1A1A2A] mt-1 font-display">{course.code}</p>
        )}
        <p className="text-sm text-[#68607E] italic mt-3 leading-relaxed">
          {course.note}
        </p>
      </div>
    </div>
  );
}

function ExperientialLearningCard({ experience }) {
  return (
    <Link
      href={experience.href}
      className="group block rounded-2xl overflow-hidden bg-gradient-to-br from-[#4A3278] to-[#6B52A8] p-6 hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
    >
      <div className="flex items-baseline justify-between gap-2 mb-3">
        <span className="text-[11px] uppercase tracking-[0.08em] font-display text-white/90 bg-white/20 rounded-full px-2.5 py-1 backdrop-blur-sm">
          {experience.badge}
        </span>
        <span className="text-[12px] text-white/70 font-display whitespace-nowrap">
          {experience.dates}
        </span>
      </div>
      <h3 className="font-display font-medium text-white text-lg leading-snug">
        {experience.title}
      </h3>
      <p className="mt-2 text-[14px] text-white/85">
        {experience.description}
      </p>
      <div className="mt-5 inline-flex items-center gap-1.5 text-[13px] text-white/90 font-display">
        Read more
        <ArrowRight
          size={14}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
}

function AdHocHonorsCard({ experience }) {
  return (
    <Link
      href={experience.href}
      className="adhoc-honors-card group block rounded-2xl overflow-hidden bg-white border-l-4 border-[#C9A84C] p-6 hover:shadow-lg transition-all duration-200"
    >
      <div className="flex items-baseline justify-between gap-2 mb-3">
        <span className="text-[11px] uppercase tracking-[0.08em] font-display text-white bg-[#C9A84C] rounded-full px-2.5 py-1 backdrop-blur-sm">
          {experience.badge}
        </span>
        <span className="text-[12px] text-[#68607E] font-display whitespace-nowrap">
          {experience.quarter}
        </span>
      </div>
      <h3 className="font-display font-medium text-[#4A3278] text-lg leading-snug">
        {experience.title}
      </h3>
      <p className="mt-1 text-[12px] text-[#68607E] font-display">
        {experience.course}
      </p>
      <p className="mt-2 text-[14px] text-[#68607E]">
        {experience.description}
      </p>
      <div className="mt-5 inline-flex items-center gap-1.5 text-[13px] text-[#4A3278] font-display">
        Read more
        <ArrowRight
          size={14}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
}

export default function HonorsJourneyPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow={"UW Interdisciplinary Honors — 2022–2026"}
        title="Honors Journey"
      />

      {/* ── Section 1: Learning Statement ── */}
      <section className="mb-20 py-12 px-6 rounded-3xl" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-[11px] uppercase tracking-[0.12em] text-[#C9A84C] font-display mb-6">
            Learning Statement
          </div>
          <article style={{ maxWidth: "680px", margin: "0 auto" }}>
            <div
              className="rounded-2xl p-8"
              style={{ fontSize: "17px", lineHeight: 1.8, color: '#6B6080' }}
            >
              <p>
                Looking at this long list of things and experiences that I would like to put in as artifacts, I find it moving how the last four years have looked for me at UW. Each of these experiences holds memories that have either shaped a personal or professional goal of mine. From case competitions to leadership positions to jobs, I think I have tried to push myself out of my comfort zone at every instance. These experiences paint the picture of time at UW as being boundless in a sense because I did not try to restrict myself to only one type of activity or passion to pursue.
              </p>
              <p className="mt-4">
                In looking at the breadth of these activities, I think I was able to stay true to the honors values of interdisciplinarity and experiential learning. I think the connection among these different activities and experiences, apart from chronology, is my desire to learn more about myself and to have a growth mindset.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* ── Section 2: HON Courses ── */}
      <section className="mb-20 py-12 px-6" style={{ backgroundColor: '#F5F2FB' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-[11px] uppercase tracking-[0.12em] text-[#C9A84C] font-display mb-6">
            Honors Coursework
          </div>
          <h2
            className="font-display text-2xl sm:text-3xl tracking-tight text-[#4A3278] leading-[1.1] mb-10"
            style={{ fontWeight: 600 }}
          >
            Honors Classes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {honCourses.map((course) => (
              <HonorsCourseCard key={course.code} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Experiential Learning ── */}
      <section className="mb-20 py-12 px-6" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-[11px] uppercase tracking-[0.12em] text-[#C9A84C] font-display mb-6">
            Experiential Learning Activities
          </div>
          <h2
            className="font-display text-2xl sm:text-3xl tracking-tight text-[#4A3278] leading-[1.1] mb-10"
            style={{ fontWeight: 600 }}
          >
            Learning Through Experience
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {experientialLearning.map((exp) => (
              <ExperientialLearningCard key={exp.href} experience={exp} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Ad-Hoc Honors ── */}
      <section className="mb-20 py-12 px-6" style={{ backgroundColor: '#F5F2FB' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-[11px] uppercase tracking-[0.12em] text-[#C9A84C] font-display mb-6">
            Ad-Hoc Honors
          </div>
          <h2
            className="font-display text-2xl sm:text-3xl tracking-tight text-[#4A3278] leading-[1.1] mb-10"
            style={{ fontWeight: 600 }}
          >
            Independent Research & Creative Projects
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {adHocHonors.map((item) => (
              <AdHocHonorsCard key={item.href} experience={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Artifacts ── */}
      <section className="py-12 px-6" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-[11px] uppercase tracking-[0.12em] text-[#C9A84C] font-display mb-2">
            Artifacts
          </div>
          <h2 className="font-display text-2xl sm:text-3xl tracking-tight text-[#4A3278] leading-[1.1] mb-3" style={{ fontWeight: 600 }}>
            Moments That Shaped Me
          </h2>
          <p className="text-sm text-[#68607E] font-display mb-10 max-w-2xl">
            Sixteen moments across four years, organized by the themes that define my UW journey.
          </p>
          <ArtifactsSection artifacts={artifacts} />
        </div>
      </section>
    </PageShell>
  );
}
