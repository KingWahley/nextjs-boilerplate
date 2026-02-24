"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import StoryView from "@/components/ui/composite/story-view";

export default function PortfolioSection() {
  const ref = useRef(null);

  /* scroll progress */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  /* parallax glow movement */
  const glowY = useTransform(scrollYProgress, [0, 1], [-120, 120]);
  const glowY2 = useTransform(scrollYProgress, [0, 1], [120, -120]);

  /* stagger container */
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 },
    },
  };

  /* fade up item */
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      className="relative w-full overflow-x-clip overflow-y-hidden bg-slate-950 py-14 sm:py-16 md:py-20 text-white"
    >
      {/* PARALLAX GLOW */}
      <motion.div
        style={{ y: glowY }}
        className="absolute top-[-140px] left-1/2 -translate-x-1/2 h-[280px] w-[280px] md:h-[360px] md:w-[360px] rounded-full bg-indigo-600/30 blur-[120px] -z-10"
      />

      <motion.div
        style={{ y: glowY2 }}
        className="absolute bottom-[-140px] right-4 md:right-10 h-[220px] w-[220px] md:h-[280px] md:w-[280px] rounded-full bg-pink-600/20 blur-[120px] -z-10"
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10"
      >
        <div className="grid items-center gap-10 md:gap-12 lg:gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <div className="min-w-0 text-left">
            <motion.span
              variants={item}
              className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-slate-300 backdrop-blur"
            >
              Portfolio Highlights
            </motion.span>

            <motion.h2
              variants={item}
              className="mt-5 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight"
            >
              Creative Work That
              <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                {" "}
                Drives Results
              </span>
            </motion.h2>

            <motion.p
              variants={item}
              className="mt-4 max-w-xl mx-auto lg:mx-0 text-slate-400 text-base md:text-lg"
            >
              Explore ad creatives, campaign visuals, and social storytelling
              crafted to help brands stand out and convert.
            </motion.p>

            {/* stats */}
            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap justify-start gap-6 md:gap-10"
            >
              {[
                ["120+", "Projects Delivered"],
                ["35+", "Brands Served"],
                ["4.9★", "Client Rating"],
              ].map(([num, label]) => {
                const displayNum = /^[\x00-\x7F]+$/.test(num) ? num : "4.9/5";

                return (
                  <div key={label}>
                    <p className="text-xl md:text-2xl font-semibold">{displayNum}</p>
                    <p className="text-xs md:text-sm text-slate-400">{label}</p>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div variants={item} className="relative min-w-0 w-full max-w-xl mx-auto lg:mx-0">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-2 sm:p-3 md:p-4 backdrop-blur-xl shadow-2xl">
              <StoryView />
            </div>

            {/* floating card */}
            <motion.div
              variants={item}
              className="absolute -bottom-5 -left-5 hidden sm:block rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur"
            >
              <p className="text-xs text-slate-400">Latest Campaign</p>
              <p className="text-sm font-medium">Summer Product Launch</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
