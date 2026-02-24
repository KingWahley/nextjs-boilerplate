import HeroSection from "@/components/sections/hero-section";
import FeaturedShowcaseSection from "@/components/sections/featured-showcase-section";
import ServicesOrbitSection from "@/components/sections/services-orbit-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import PortfolioSection from "@/components/sections/portfolio-section";
import UseMarquee from "@/components/sections/UseMarquee";

export default function HomePage() {
  return (
    <section className="w-full space-y-8 pb-10">
      <HeroSection />
      <PortfolioSection />
      <TestimonialsSection />
      <UseMarquee />
      <FeaturedShowcaseSection />
      <ServicesOrbitSection />
    </section>
  );
}
