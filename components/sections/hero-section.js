import { AnimatedMarqueeHero } from "@/components/ui/composite/marquee-hero";

const DEMO_IMAGES = [
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=900&auto=format&fit=crop&q=60", // friends selfie
  "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=900&auto=format&fit=crop&q=60", // laptop lifestyle
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=60", // streetwear portrait
  "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=900&auto=format&fit=crop&q=60", // cafe hangout
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=900&auto=format&fit=crop&q=60", // content creator camera
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&auto=format&fit=crop&q=60", // laughing portrait
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=900&auto=format&fit=crop&q=60", // headphones aesthetic
  "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?w=900&auto=format&fit=crop&q=60", // nightlife neon
  "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=900&auto=format&fit=crop&q=60", // friends walking
  "https://images.unsplash.com/photo-1485217988980-11786ced9454?w=900&auto=format&fit=crop&q=60", // coffee lifestyle
  "https://images.unsplash.com/photo-1520974735194-9f7c7c3f0f6a?w=900&auto=format&fit=crop&q=60", // phone social moment
  "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=900&auto=format&fit=crop&q=60", // creative workspace
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&auto=format&fit=crop&q=60", // city youth portrait
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=60", // soft aesthetic portrait
  "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=900&auto=format&fit=crop&q=60", // friends laughing
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=900&auto=format&fit=crop&q=60", // fashion lifestyle
];

export default function HeroSection() {
  return (
    <AnimatedMarqueeHero
      tagline="Content Creation & Advertising Agency"
      title={
        <>
          Launch Better Campaigns
          <br />
          with Scroll-Stopping Creative
        </>
      }
      description="From social ads to full-funnel campaign assets, we help brands create content that performs and scales profitably."
      ctaText="Book a Strategy Call"
      images={DEMO_IMAGES}
    />
  );
}
