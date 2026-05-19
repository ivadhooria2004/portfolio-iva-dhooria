import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { readdirSync } from "fs";
import { join } from "path";
import PageShell, { PageHeader } from "../../../components/PageShell";
import PhotoCarousel from "../../../components/PhotoCarousel";

export const metadata = { title: "Kobe University Exchange | Iva Dhooria" };

function getJapanPhotos() {
  const photosDir = join(process.cwd(), "public/images/japan");
  const files = readdirSync(photosDir)
    .filter((file) => /\.(jpg|jpeg|JPG|JPEG)$/i.test(file))
    .sort();
  return files.map((file) => `/images/japan/${file}`);
}

export default function KobeInternshipPage() {
  const japanPhotos = getJapanPhotos();

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
            Experiential Learning · International Engagement
          </span>
        </div>
      </div>

      <PageHeader title="Kobe University Cultural Exchange & Internship" />

      <article className="prose prose-invert max-w-3xl mx-auto text-white/70" style={{ fontSize: "17px", lineHeight: 1.8 }}>
        <div className="mb-12">
          <span className="text-[11px] uppercase tracking-[0.08em] font-display text-husky-gold-light border border-husky-gold/30 bg-husky-gold/10 rounded-full px-3 py-1.5">
            July 1 – August 12, 2024
          </span>
        </div>
      </article>

      <div className="mb-16 max-w-3xl mx-auto">
        <PhotoCarousel images={japanPhotos} />
      </div>

      <article className="prose prose-invert max-w-3xl mx-auto text-white/70" style={{ fontSize: "17px", lineHeight: 1.8 }}>
        <section className="mb-12">
          <h2 className="text-white text-2xl font-display mb-4" style={{ fontWeight: 500 }}>Summary of the Activity</h2>
          <p>For this experiential learning activity, I will participate in a cultural exchange program and an internship at Kobe University, Japan. The first part of the program is an intensive study of the Japanese language and culture. The program aims to allow students to engage with the Japanese language and people to be able to experience Japanese culture and society. During these ten days, the lessons will be on topics related to Japanese society, focusing on the Kobe region. Participation in these sessions will allow me to learn Japanese language skills. The conclusion of this segment of the program will involve a final presentation. The program's second half involves a month-long internship at four different companies in the Kobe region. The companies for internships include the farm of Kobe University, Kewpie Corporation, Kobe City Government, and Foodpict. These companies span from government to food and hospitality corporations. Participation in the internship program will allow me to gain insight into Japanese corporate life and work culture. The primary focus of this activity is immersion in the Japanese language, culture, and way of life.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-white text-2xl font-display mb-4" style={{ fontWeight: 500 }}>Defining International Engagement</h2>
          <p>In my opinion, 'international engagement' is the conscious effort of trying to interact with individuals from different backgrounds and walks of life in an attempt to engage in meaningful dialogue around how our culture and upbringing have shaped each of our perspectives. International engagement has been a very integral part of my high school and college experience. Having moved from India to the United States in my junior year of high school, I was exposed to individuals from a variety of backgrounds. Interacting with these individuals and learning more about their lived experiences was my primary exposure to cultural exchange. These interactions helped me discover both similarities and differences between my culture and other cultures which led to beautiful conversations around varying perspectives. With a curiosity to come across more individuals from diverse backgrounds, I attended a variety of cultural events to learn more about the different cultures represented here at UW. My most influential engagement with a new culture happened through the salsa club at UW. With the amazing opportunity of learning new dance forms of salsa and bachata, I engaged not just in learning the dance steps but also in learning more about the Latino culture. My interactions with the amazing folks of the salsa club were incredibly influential and heartwarming. These beautiful interactions pushed me to learn more about their culture, music, and dance while sharing bits of my Indian heritage with them as well.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-white text-2xl font-display mb-4" style={{ fontWeight: 500 }}>Growth of tangible skills and experience</h2>
          <p>If I ever have the opportunity to get to know about a new culture, language, or tradition, I do not pass on that opportunity because that is what fulfills my vision of understanding cultural similarities and differences. Having met people from different walks of life, I have realized that we are more unique than we realize and less different than we believe. My main goal for the language and culture program is to engage with the Japanese culture, traditions, and people in the most authentic way possible so that I can gain a new outlook on life. Furthermore, I believe that the anecdotes shared, habits developed, and ways of life demonstrated by the people of a specific culture speak volumes about their history and the richness of their traditions. I would love to learn more about the Japanese way of life and I am particularly interested in learning more about "Ikigai" or the Japanese concept of finding a purpose in life. As somebody who is extremely young and passionate about a lot of different things, I would love to learn more about not just the application but also the origins of this concept. Apart from this, I hope to gauge the work ethic and collaboration culture through my internship experience. Collaborating with individuals from diverse backgrounds, I aim to blend our unique perspectives, fostering innovation and mutual growth. Beyond being a sponge for knowledge, I am committed to sharing the rich tapestry of my cultural heritage, sparking meaningful dialogues that celebrate our shared human experiences.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-white text-2xl font-display mb-4" style={{ fontWeight: 500 }}>Experience and Understanding of International Engagement</h2>
          <p>Through my participation in this activity, I hope to develop a stronger work ethic and the ability to effectively collaborate with individuals from different backgrounds. Additionally, I wish to learn more about Japanese techniques of problem-solving and organization. By cultivating these skills through my participation in this program, I wish to apply them to my personal and professional endeavors in the future. This activity connects with my coursework on the interpersonal skills and effective communications aspect. As a student with a major in business administration and a deep interest in entrepreneurship, the ability to effectively communicate with individuals of different backgrounds is a necessary skill. I hope that participation in this program allows me to become a better communicator, collaborator, and leader. Apart from professional and educational goals, this program speaks to a few of my personal goals as well. As someone who has a knack for learning new languages, I see this program as an opportunity to develop basic conversational skills in the Japanese language. Additionally, this program will allow me to explore myself in a completely unfamiliar setting and culture which will pose a rewarding way of challenging myself. My hope for this program is to refresh my perspective on life and introduce me to concepts that I may not have come across before.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-white text-2xl font-display mb-4" style={{ fontWeight: 500 }}>Messaging about community and culture</h2>
          <p>Throughout my life, I have had a few short yet impactful interactions with the Japanese community that have motivated me to participate in this program. One of my earliest introductions to the Japanese community was through the Japanese anime Doraemon that I watched as a kid. Watching this show, I would always ask my mother questions about the different dishes and cultural elements I would come across. The seed for curiosity regarding this culture was planted in me fairly early on, but my passion strengthened when I had the chance to meet an IBM corporate social responsibility representative from Tokyo, Japan who was visiting my hometown in India to work on a project. From acting as an English translator for him at the NGO school to bonding with him over Doraemon, my interactions with him intrigued my curiosity about the culture and how different it is from mine. As a young fourth-grader, I was impressed to see the love and warmth with which he tried to learn about Indian culture and this motivated me to learn about different communities in general. This influential meeting was really powerful in motivating me to interact with and learn about new cultures. I think the desire to learn about Japanese culture has been living in me since then and it was only boosted by the beauty of cherry blossom trees on the UW quad. In my engagement with the Japanese community, I will try my best to try as many new things as possible and experience this culture firsthand.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-white text-2xl font-display mb-4" style={{ fontWeight: 500 }}>Final Reflection (Post-Program Completion)</h2>
          <p>Participating in my language study and internship exchange program in Kobe, Japan has easily been among the best decisions I have made in my undergraduate journey. Completing this experiential learning activity has only strengthened my belief in the power of lived experiences in striking meaningful conversations between people from different backgrounds. Before participating in this project, I was very excited about all the new information I was going to be learning and the new culture I was going to explore, however, I did not expect to come back with a refreshed perspective and a rejuvenated desire to learn more about different cultures. I have always been somebody who will take up a cultural exchange opportunity that presents itself. Still, I think this program has pushed me to create my own opportunities and look beyond the normal to find ways of not just interacting with but also connecting with individuals on a lot of different levels. To me, cultural exchange has always been about appreciating our similarities and celebrating our differences. However, this program has nudged me into the next category where I think about where the differences come from and how they influence our personalities and perspectives. Looking through the lens of all the knowledge I have gained in the past few weeks, I would compare the differences between cultures to spices that add more depth of flavor and meaning to a person's lived experience and help shape their outlook toward life. If I had to summarize my experience in this program in a phrase, I would describe it as an "awakening towards a more colorful life." Having talked about the cultural aspects of the program, I would like to touch a little bit on the transferable skills that apply to my academic and professional endeavors in the future. Throughout this program, I have approached it with the intent of cultivating more focus, curiosity, and adaptability. In my participation in this program, there were numerous times when I was in situations that required me to navigate unfamiliar territories both culturally and academically. For the cultural aspects of the challenging situations, I was able to deepen my understanding of Japanese corporate culture and truly understand the flow of information among the corporate hierarchy. I was pleasantly surprised to discover that Japanese culture accustomed people to a more implicit way of asking for work or deliverables and also giving feedback. Although unfamiliar, I was able to understand the intricacies of this implicit communication and how it fits within the Japanese corporate culture. On the other hand, for the academic side of learning, I was able to dabble in the fields of agriculture and sustainability which were not necessarily subjects I had previously explored. Through this program, I was able to gain insight into the Japanese corporate focus on sustainability and the achievement of Sustainable Development Goals (SDGs) not just in the supply chain but also in the production lines. I sincerely appreciated the knowledge I was able to acquire about the concepts of farm-to-table and "Mottainai." In Japanese culture, it is considered offensive or regretful to let anything go to waste, and this feeling is accurately captured by the phrase "Mottainai" which means "want not, waste not." Acting as a sponge for knowledge, I was able to absorb a lot of helpful information about sustainable production lines, production efficiency, and culturally informed corporate communication through my involvement in this program. My participation in this project has helped me grow both personally and professionally. Over the past six weeks, I feel like activities that I was able to partake in have pushed me to explore myself and test myself in unknown waters. Exploring unknown territories has helped me cultivate a newfound confidence in myself and the assurance that I can tackle challenges in unfamiliar and sometimes challenging environments. My biggest takeaway from this program is to have an adaptable mindset and try to mold myself based on the situation. I hope I can continue to cultivate this go-with-the-flow mentality that is accurately described by the Japanese phrase "Ikimashou" which means "let's go!"</p>
        </section>
      </article>
    </PageShell>
  );
}
