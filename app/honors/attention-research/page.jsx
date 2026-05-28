import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowLeft } from "lucide-react";
import PageShell, { PageHeader } from "../../../components/PageShell";

const PdfViewer = dynamic(() => import("../../../components/PdfViewer"), {
  ssr: true,
  loading: () => <div className="bg-white/[0.03] rounded-lg p-8 text-white/50">Loading PDF...</div>,
});

export const metadata = { title: "Deep Dive Into Attention Span | Iva Dhooria" };

export default function AttentionResearchPage() {
  return (
    <PageShell>
      <div className="mb-8">
        <Link href="/honors-portfolio" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors">
          <ArrowLeft size={16} />
          Back to Honors Journey
        </Link>
      </div>

      <div className="mb-8">
        <div className="inline-block">
          <span className="text-[11px] uppercase tracking-[0.08em] font-display text-husky-gold-light border border-husky-gold/30 bg-husky-gold/10 rounded-full px-3 py-1.5">
            Ad-Hoc Honors · INFO 300 · Winter 2025
          </span>
        </div>
      </div>

      <PageHeader title="Deep Dive Into Attention Span" />

      <article className="prose prose-invert max-w-3xl mx-auto text-white/70" style={{ fontSize: "17px", lineHeight: 1.8 }}>
        <section className="mb-12">
          <h2 className="text-white text-2xl font-display mb-4" style={{ fontWeight: 500 }}>Associated UW Course</h2>
          <p>INFO 300</p>
        </section>

        <section className="mb-12">
          <h2 className="text-white text-2xl font-display mb-4" style={{ fontWeight: 500 }}>Quarter/Year</h2>
          <p>Winter 2025</p>
        </section>

        <section className="mb-12">
          <h2 className="text-white text-2xl font-display mb-4" style={{ fontWeight: 500 }}>Project Proposal</h2>
          <p>For my ad hoc honors project, I propose writing a seven to ten double-spaced pages long research paper. I see this deliverable as being an appropriate way of capturing my interest in and research on the topic of the attention span of humans and how different scenario conditioning impacts the focus span of an individual. The primary focus of this project will be to find a body of research that reveals psychological or medical reasoning for the variance in attention spans among human beings. I wish to work on this research topic because as a student I see myself having varying levels of attention depending on the time deadlines that I place myself under for the completion of specific tasks. My goal with this project is to further my curiosity in this field and gauge if there is potential for a natural product (like a vitamin/supplement) or psychological training to fill the gap in the market that may help students focus better. This project will be my way of starting the journey of research exploration regarding human exploration while applying the research techniques I will learn through this course because of its interdisciplinarity.</p>

          <p>Here is my proposed structure for the deliverable:</p>
          <ul className="list-disc list-inside space-y-2 text-white/70">
            <li>Research Paper: seven to ten pages (double-spaced)</li>
            <li>Sources: the paper will include at least 10 sources/references</li>
            <li>Specific emphasis on primary sources (like experimental studies or journal articles)</li>
            <li>For finding the sources I will use public-facing sources as well as research databases like JSTOR or Google Scholar</li>
            <li>Graphics: if I can find relevant data sources for the research topic, I will try to include graphs or infographics in my research paper</li>
            <li>The paper will be completed in two major parts: A detailed outline with at least seven sources (part 1) and a final paper with professor feedback incorporated (part 2)</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-white text-2xl font-display mb-4" style={{ fontWeight: 500 }}>Project Motivation</h2>
          <p>My motivation for pursuing this ad hoc project is to leverage the research skills I am developing in this course and put it into practice by diving deeper into a body of work that is unfamiliar to me. Through the completion of this project, I am hoping to enhance my knowledge of human attention spans, and research methods, and discover if there is a gap in the market that can potentially address the issue of retaining focus for students whether that be through a physical product like a vitamin/supplement or psychological training course. This ad hoc project is my opportunity to expand the interdisciplinarity of my education because I wish to explore an unfamiliar academic space of psychology through the lens of an informatics research methods course and potentially relate it to my business degree by identifying a market need. The three disciplines that this project connects have always been areas that I have often viewed in parallel, but I have never had the opportunity to intersect them. Through this project, I am also looking to gauge how profound my interest will develop in this research space, and if I decide to pursue it further to be realized into a real business idea.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-white text-2xl font-display mb-4" style={{ fontWeight: 500 }}>Connection to educational goals</h2>
          <p>The key educational goals of this course lie around the discussion of research, its purpose, methods, and how it can be linked to theory, practice, and technological innovation. I think the additional work that I have picked for myself in this project helps me apply the skills learned in this course to my project in real-time. This research project will give me an opportunity to test a few of the research methods that I will discover through this course. Additionally, I picked a research paper as the medium for my project because I would like to sharpen my writing skills in a research academic setting. This is where I see my professor's expertise play a big role in my choice of medium as well as area of research. Dr. Bristol has a PhD in cognitive science, and an MA in linguistics which allows me to take advantage of her rich background to get incredibly meaningful feedback on my research and writing. Furthermore, I see myself as being able to pursue this research beyond this ad-hoc project under Dr. Bristol's guidance.</p>
        </section>
      </article>

      {/* PDF Viewer for Research Paper */}
      <div style={{
        marginTop: '4rem',
        borderRadius: '1rem',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        overflow: 'hidden',
        maxWidth: '3xl',
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
      }}>
        <PdfViewer src="/documents/INFO_300_Honors_Research_Paper.pdf" height="800px" />
      </div>
    </PageShell>
  );
}
