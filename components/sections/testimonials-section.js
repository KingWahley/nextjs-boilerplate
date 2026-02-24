import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/primitives/avatar";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Meschac Irung",
      role: "Brand Founder",
      stars: 5,
      avatar: "https://avatars.githubusercontent.com/u/47919550?v=4",
      content:
        "They transformed our ad creative pipeline. We went from inconsistent posts to weekly campaigns that actually convert.",
    },
    {
      name: "Theo Balick",
      role: "Marketing Lead",
      stars: 4,
      avatar: "https://avatars.githubusercontent.com/u/68236786?v=4",
      content:
        "Fast turnaround, clear strategy, and better performance reports. The team feels like an extension of our in-house marketing.",
    },
    {
      name: "Glodie Lukose",
      role: "Ecommerce Manager",
      stars: 5,
      avatar: "https://avatars.githubusercontent.com/u/99137927?v=4",
      content:
        "From product videos to paid social ads, they delivered high-quality assets that lifted CTR and reduced CPA.",
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1300px] px-6 md:px-8">
        {/* HEADER */}
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
            Testimonials
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-900 leading-tight">
            What Clients Say About Our Agency
          </h2>

          <p className="mt-3 text-slate-600 text-base md:text-lg">
            Real feedback from brands we support with content production,
            advertising strategy, and campaign execution.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* subtle gradient glow */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition group-hover:opacity-100">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-pink-500/10" />
              </div>

              {/* STARS */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "size-4 transition",
                      i < t.stars
                        ? "fill-amber-400 stroke-amber-400"
                        : "fill-slate-200 stroke-slate-200",
                    )}
                  />
                ))}
              </div>

              {/* CONTENT */}
              <p className="relative my-4 text-slate-700 leading-relaxed">
                {t.content}
              </p>

              {/* FOOTER */}
              <div className="relative flex items-center gap-3">
                <Avatar className="size-9 border border-slate-200 shadow-sm">
                  <AvatarImage src={t.avatar} alt={t.name} />
                  <AvatarFallback>{t.name.charAt(0)}</AvatarFallback>
                </Avatar>

                <div>
                  <div className="text-sm font-semibold text-slate-900">
                    {t.name}
                  </div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
