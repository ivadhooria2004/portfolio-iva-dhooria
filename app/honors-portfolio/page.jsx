import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageShell, { PageHeader } from "../../components/PageShell";
import ArtifactsSection from "./ArtifactsSection";
import { artifacts } from "./artifactsData";

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
                Defining myself is a really complex task, but I find it rather easy to encompass myself as a learner into just the phrase "serial problem solver." Ever since I can recall, I have been the DIY kid trying to figure it out on my own. While this trait has helped me strengthen my ability to teach myself new things and try until failure, it has also held me back from being able to ask for help. My time at UW has been one where I have intentionally and consistently sought to gather more tools for my problem-solving toolbox, while also unlearning the idea of not asking for help. While not filled to the brim, this toolbox now seems more enriched as I reflect on its state from before UW.
              </p>
              <p className="mt-4">
                When I was in my goal-setting phase in the summer before starting college, I had big aspirations of what I wanted to make of this experience, but I think I was misunderstanding "wants" and "shoulds." This tussle between "what I want to vs. what I should do" has played a consistent role in driving the intentionality of my actions in my undergraduate studies, and somewhere along the way, I was able to strike the right balance. One such clear example is my choice of concentrations for my business degree. Right off the bat, I was a direct admit to the Foster School of Business, and this made me feel like I knew exactly what I wanted to do. Although my primary goal of being an entrepreneur in life still stands, the timeline has shifted significantly, and so have my choices. From wanting to concentrate on entrepreneurship to making a stark shift towards finance, I realized that my toolbox needed the skill of dealing with numbers first. This realization was not abrupt or rushed. It came from deeply reflecting on what tools I would need to best carry out both my short-term and long-term goals.
              </p>
              <p className="mt-4">
                While my desire to command numbers and evidence them in my problem-solving was crucial to this decision, I was also motivated by the intellectual challenge this presented to me. The thought of being able to blend numbers, technology, and the humanities into my problem-solving and challenge-seeking brain was a major lever that grounded the intentionality of opportunities I pursued at UW. From classes in literature, philosophy, and history in the honors program to business valuations in finance, I pieced together a more refined and interdisciplinary perspective. While the honors curriculum helped me keep my creativity alive and engage with the freedom to explore new subjects, my majors in finance and information systems supplemented the intellectual challenge I craved, feeding my analytical curiosity.
              </p>
              <p className="mt-4">
                In the quest for doing everything under the sun, I was quick to realize that time management would be key. While I would like to believe that I am efficient at completing tasks, I think my mindset of not asking for help was hindering the pace of my progress. From small steps like going to the office hours or asking more clarifying questions in class, I eventually reached a stage where I could recognize where my trial and error was slowing me down significantly, and take steps to remedy the situation. Unlearning the mindset of associating "asking for help" with "weakness" was not an easy task because I think I drew self-validation from being able to complete tasks by myself. However, a big value add for me in my time at UW has been that it is necessary to both provide and ask for help. While I have always been eager to offer help, I have realized that asking for help and completing a task to better standards is more intellectually stimulating.
              </p>
              <p className="mt-4">
                While the type of learner I have become after coming to UW has not changed significantly, I have developed a more well-rounded perspective that allows me to problem solve in an analytical, creative, and cross-functional way. In my time after UW, I will deploy this mindset into every conversation that I partake in, every community that I become a part of, and every problem that I solve. As you explore my portfolio, I would like you to bear in mind that this is the journey of an intentional explorer who likes collecting tools on the way. The order of your exploration does not matter because my experiences come together to reflect three key themes of intentional exploration, consistent curiosity, and relearning authenticity.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* ── Section 1.5: CaseIT Video ── */}
      <section className="mb-20 py-12 px-6" style={{ backgroundColor: '#F5F2FB' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-[11px] uppercase tracking-[0.12em] text-[#C9A84C] font-display mb-4">
            A Pivotal Moment
          </div>
          <h2 className="font-display text-2xl sm:text-3xl tracking-tight text-[#4A3278] leading-[1.1] mb-3" style={{ fontWeight: 600 }}>
            CaseIT 2024
          </h2>
          <p className="text-sm text-[#68607E] font-display mb-8 max-w-2xl">
            Representing UW internationally at Simon Fraser University — 2nd place of 15 global teams.
          </p>
          <div style={{
            borderRadius: '1rem',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
            backgroundColor: '#000',
            aspectRatio: '16/9',
            width: '100%'
          }}>
            <video
              controls
              style={{ width: '100%', height: '100%', display: 'block' }}
              poster=""
            >
              <source src="/videos/Case IT video for portfolio.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
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
