"use client";

import { Button } from "@/components/ui/primitives/button";
import Link from "next/link";
import {
  Atom,
  Cloud,
  Container,
  Server,
  Boxes,
  Rocket,
  Workflow,
  Braces,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Chrome,
  Apple,
  Facebook,
  Cpu,
  Database,
} from "lucide-react";

const iconConfigs = [
  { Icon: Atom, color: "#334155" },
  { Icon: Cloud, color: "#475569" },
  { Icon: Container, color: "#64748B" },
  { Icon: Server, color: "#334155" },
  { Icon: Boxes, color: "#475569" },
  { Icon: Rocket, color: "#64748B" },
  { Icon: Workflow, color: "#334155" },
  { Icon: Braces, color: "#64748B" },
  { Icon: Github, color: "#334155" },
  { Icon: Twitter, color: "#64748B" },
  { Icon: Linkedin, color: "#475569" },
  { Icon: Instagram, color: "#64748B" },
  { Icon: Chrome, color: "#334155" },
  { Icon: Apple, color: "#334155" },
  { Icon: Facebook, color: "#64748B" },
  { Icon: Cpu, color: "#475569" },
  { Icon: Database, color: "#334155" },
];

export default function ServicesOrbitSection() {
  const orbitCount = 3;
  const orbitGap = 8; // rem between orbits
  const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);

  return (
    <section className="relative  flex h-[30rem] w-full items-center justify-between overflow-hidden border border-slate-300/70 bg-white">
      {/* Left side: Heading and Text */}
      <div className="z-10 w-1/2 pl-10">
        <h1 className="mb-4 text-4xl font-bold text-slate-900 sm:text-6xl">
          Build Campaigns That Convert
        </h1>
        <p className="mb-6 max-w-lg text-slate-500">
          We combine content production, ad strategy, and media execution to
          help brands grow faster across paid and organic channels.
        </p>
        <div className="flex items-center gap-3">
          <Button variant="default">
            <Link href="https://ruixen.com" target="_blank" rel="noreferrer">
              {" "}
              Start Your Campaign
            </Link>
          </Button>
          <Button variant="outline">View Services</Button>
        </div>
      </div>

      {/* Right side: Orbit animation cropped to 1/4 */}
      <div className="relative flex h-full w-1/2 items-center justify-start overflow-hidden">
        <div className="relative flex h-[50rem] w-[50rem] translate-x-[50%] items-center justify-center">
          {/* Center Circle */}
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-slate-300/70 bg-white shadow-sm">
            <Atom className="h-12 w-12 text-slate-700" />
          </div>

          {/* Generate Orbits */}
          {[...Array(orbitCount)].map((_, orbitIdx) => {
            const size = `${12 + orbitGap * (orbitIdx + 1)}rem`; // equal spacing
            const angleStep = (2 * Math.PI) / iconsPerOrbit;

            return (
              <div
                key={orbitIdx}
                className="absolute rounded-full border-2 border-dotted border-slate-400/70"
                style={{
                  width: size,
                  height: size,
                  animation: `spin ${12 + orbitIdx * 6}s linear infinite`,
                }}
              >
                {iconConfigs
                  .slice(
                    orbitIdx * iconsPerOrbit,
                    orbitIdx * iconsPerOrbit + iconsPerOrbit,
                  )
                  .map((cfg, iconIdx) => {
                    const angle = iconIdx * angleStep;
                    const x = 50 + 50 * Math.cos(angle);
                    const y = 50 + 50 * Math.sin(angle);

                    return (
                      <div
                        key={iconIdx}
                        className="absolute rounded-full border border-slate-300/70 bg-white p-1 shadow-sm"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <cfg.Icon className="w-8 h-8" style={{ color: cfg.color }} />
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
