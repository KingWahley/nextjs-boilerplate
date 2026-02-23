import Hero from "@/components/ui/Hero";
import StoryView from "@/components/ui/StoryView";

export default function HomePage() {
  return (
    <section className="w-full space-y-8 pb-10">
      <Hero />
      <StoryView />
    </section>
  );
}
