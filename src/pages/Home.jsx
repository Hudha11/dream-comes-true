import SEO from "../components/SEO.jsx";
import { scopes } from "../data/content.js";
import HeroSection from "../sections/home/HeroSection.jsx";
import IntroSection from "../sections/home/IntroSection.jsx";
import ScopesSection from "../sections/home/ScopesSection.jsx";
import FeaturedEventsSection from "../sections/home/FeaturedEventsSection.jsx";
import ServicesSection from "../sections/home/ServicesSection.jsx";
import TeamFilmSection from "../sections/home/TeamFilmSection.jsx";
import TestimonialsSection from "../sections/home/TestimonialsSection.jsx";
import FeaturedArticlesSection from "../sections/home/FeaturedArticlesSection.jsx";
import PancaPreviewSection from "../sections/home/PancaPreviewSection.jsx";
import FinalCTASection from "../sections/home/FinalCTASection.jsx";

export default function Home() {
  return (
    <>
      <SEO
        path="/"
        description="Dream Comes True adalah event organizer di Balikpapan untuk wedding, corporate events, dan government events."
        image={scopes[0].image}
      />
      <HeroSection />
      <IntroSection />
      <ScopesSection />
      <FeaturedEventsSection />
      <ServicesSection />
      <TeamFilmSection />
      <TestimonialsSection />
      <FeaturedArticlesSection />
      <PancaPreviewSection />
      <FinalCTASection />
    </>
  );
}
