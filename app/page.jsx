import { APP_NAME, APP_DESCRIPTION } from "@/constants/app";
import SectionShell from "@/components/ui/SectionShell";

export default function HomePage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[var(--fog-bg)] px-6 py-16 text-black/90">
      <SectionShell className="max-w-3xl px-0">
        <div className="flex w-full flex-col gap-4">
          <p className="text-sm uppercase tracking-[0.2em] text-black/55">Starter</p>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">{APP_NAME}</h1>
          <p className="max-w-2xl text-base text-black/70 md:text-lg">{APP_DESCRIPTION}</p>
        </div>
      </SectionShell>
    </main>
  );
}
