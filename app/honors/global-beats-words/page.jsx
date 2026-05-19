import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PageShell, { PageHeader } from "../../../components/PageShell";

export const metadata = { title: "Global Beats & Words | Iva Dhooria" };

export default function GlobalBeatsWordsPage() {
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
            Ad-Hoc Honors · GLITC 252 · Spring 2025
          </span>
        </div>
      </div>

      <PageHeader title="Global Beats & Words" />

      <article className="prose prose-invert max-w-3xl mx-auto text-white/70" style={{ fontSize: "17px", lineHeight: 1.8 }}>
        <section className="mb-12">
          <h2 className="text-white text-2xl font-display mb-4" style={{ fontWeight: 500 }}>Associated UW Course</h2>
          <p>GLITC 252</p>
        </section>

        <section className="mb-12">
          <h2 className="text-white text-2xl font-display mb-4" style={{ fontWeight: 500 }}>Quarter/Year</h2>
          <p>Spring 2025</p>
        </section>

        <section className="mb-12">
          <h2 className="text-white text-2xl font-display mb-4" style={{ fontWeight: 500 }}>Project Proposal</h2>

          <h3 className="text-white text-lg font-display mb-3" style={{ fontWeight: 500 }}>Topic</h3>
          <p>The main topic that I will explore through this project is the intersection between music and poetry in a global context. As I read and analyze poems from different regions around the world, I will find music from cultural or regional artists that connects to the topics/themes explored in the poems.</p>

          <h3 className="text-white text-lg font-display mb-3 mt-6" style={{ fontWeight: 500 }}>Goal</h3>
          <p>My goal for this project is to deepen my understanding of words as they are used in music, poetry, or other creative forms to express thoughts, ideas, or opinions. I have always viewed words as an incredibly powerful tool, however, I think they're used in different contexts, like poetry and literary forms, versus their combination with other creative mediums like music can make a big impact on their interpretation and comprehension.</p>

          <h3 className="text-white text-lg font-display mb-3 mt-6" style={{ fontWeight: 500 }}>Focus</h3>
          <p>The project focus will be on the regions explored through the poetry and specific time periods, if relevant to the content discussed in that week. For each week's poetry, I will try to pick two songs from local or cultural artists that reflect themes similar to the ones covered in the poetry.</p>

          <h3 className="text-white text-lg font-display mb-3 mt-6" style={{ fontWeight: 500 }}>Deliverable</h3>
          <p>My final deliverable for the project will include two components:</p>
          <ul className="list-disc list-inside space-y-2 text-white/70 mt-3">
            <li>A curated playlist of 12-14 songs that each relate to the region-by-region poetry themes discussed in class</li>
            <li>A written reflection compilation that will include at least a paragraph from each of the weeks explaining the choice of music and the themes it relates to from the class</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-white text-2xl font-display mb-4" style={{ fontWeight: 500 }}>Project Motivation</h2>
          <p>As someone who comes from a strong cultural background and speaks multiple languages, I have always been curious about words and how they can be used to communicate so many different things and in so many different ways. Coupling this curiosity for words with my appreciation for music, this project gives me the perfect opportunity to draw connections between multiple disciplines and draw dots between the links to create a picture of meaning. Furthermore, I think music often transcends language, culture, and contextual barriers to create an understanding based on purely emotional interpretation of the creative medium, so I wish to explore how this differentiates itself from poetry, which stands on a very strong foundation and dependence of words. Overarchingly, I wish for this project to be my opportunity to reflect on the creative mediums of poetry and music in an interdisciplinary manner while broadening the horizons of my cultural understanding.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-white text-2xl font-display mb-4" style={{ fontWeight: 500 }}>Connection to educational goals</h2>
          <p>The theme of this project is the exploration of creative works through a global lens. As a business major, there are often scenarios where I have opportunities to work with individuals from different cultures and backgrounds, so developing a more refined understanding of words and culture through this project will help me become more culturally conscious and enrich my conversations. Apart from my academic pursuits, I have a profound interest in poetry, which got left behind ever since I joined college, so pursuing this course and project is my way of reconnecting with poetry, reaffirming the power of words, and refining my creative expression. To supplement my interest in the subject, Professor Florczyk has a deep passion for poetry, and his expertise on the subject makes me super excited to pursue this project under his guidance. Having him review my reflections and choice of music will give me deeper insight and feedback into my understanding of the course content and my ability to draw connections with other fields.</p>
        </section>
      </article>
    </PageShell>
  );
}
