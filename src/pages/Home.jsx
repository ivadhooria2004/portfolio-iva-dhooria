import BackgroundVideo from "../components/BackgroundVideo";
import HeroContent from "../components/HeroContent";

export default function Home() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-dark">
      <BackgroundVideo />
      <HeroContent />
    </section>
  );
}
