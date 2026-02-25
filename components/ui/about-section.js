"use client";

import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function AboutSection3() {
  const heroRef = useRef(null);

  const revealVariants = {
    visible: (i) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const scaleVariants = {
    visible: (i) => ({
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
    },
  };

  return (
    <section
      className="w-full bg-white py-10 md:py-14 px-6 md:px-8 overflow-x-hidden overflow-y-visible"
      ref={heroRef}
    >
      <div className="mx-auto max-w-6xl">
        <div className="relative">
          <div className="absolute z-10 flex w-[85%] items-center justify-between lg:top-4 md:top-0 sm:-top-2 -top-3 mb-8">
            <div className="flex items-center gap-2 text-xl">
              <span className="animate-spin text-slate-500">✱</span>
              <TimelineContent
                as="span"
                animationNum={0}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-xs font-semibold uppercase tracking-widest text-slate-600"
              >
                About Us
              </TimelineContent>
            </div>
          </div>

          <TimelineContent
            as="figure"
            animationNum={4}
            timelineRef={heroRef}
            customVariants={scaleVariants}
            className="relative group m-0"
          >
            <svg
              className="w-full"
              width="100%"
              height="100%"
              viewBox="0 0 100 40"
            >
              <defs>
                <clipPath id="clip-inverted" clipPathUnits="objectBoundingBox">
                  <path
                    d="M0.0998072 1H0.422076H0.749756C0.767072 1 0.774207 0.961783 0.77561 0.942675V0.807325C0.777053 0.743631 0.791844 0.731953 0.799059 0.734076H0.969813C0.996268 0.730255 1.00088 0.693206 0.999875 0.675159V0.0700637C0.999875 0.0254777 0.985045 0.00477707 0.977629 0H0.902473C0.854975 0 0.890448 0.138535 0.850165 0.138535H0.0204424C0.00408849 0.142357 0 0.180467 0 0.199045V0.410828C0 0.449045 0.0136283 0.46603 0.0204424 0.469745H0.0523086C0.0696245 0.471019 0.0735527 0.497877 0.0733523 0.511146V0.915605C0.0723903 0.983121 0.090588 1 0.0998072 1Z"
                    fill="#D9D9D9"
                  />
                </clipPath>
              </defs>
              <image
                clipPath="url(#clip-inverted)"
                preserveAspectRatio="xMidYMid slice"
                width="100%"
                height="100%"
                href="https://vida.id/hubfs/agency%20adalah.jpg"
              />
            </svg>
          </TimelineContent>

          <div className="flex flex-wrap items-center justify-between lg:justify-start py-3 text-sm">
            <TimelineContent
              as="div"
              animationNum={5}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="flex gap-4"
            >
              <div className="mb-2 flex items-center gap-2 sm:text-base text-xs">
                <span className="font-bold text-slate-900">120+</span>
                <span className="text-slate-600">campaigns delivered</span>
                <span className="text-slate-300">|</span>
              </div>
              <div className="mb-2 flex items-center gap-2 sm:text-base text-xs">
                <span className="font-bold text-slate-900">35+</span>
                <span className="text-slate-600">brands served</span>
              </div>
            </TimelineContent>

            <div className="lg:absolute right-0 bottom-16 flex lg:flex-col flex-row-reverse lg:gap-0 gap-4">
              <TimelineContent
                as="div"
                animationNum={6}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="mb-2 flex items-center gap-2 lg:text-4xl sm:text-3xl text-2xl"
              >
                <span className="font-semibold text-sm md:text-4xl text-slate-900">
                  4.9/5
                </span>
                <span className="uppercase text-sm md:text-4xl text-slate-600">
                  client rating
                </span>
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={7}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="mb-2 flex items-center gap-2 sm:text-base text-xs"
              >
                <span className="font-bold text-slate-900">+42%</span>
                <span className="text-slate-600">
                  avg. creative performance lift
                </span>
                <span className="lg:hidden block text-slate-300">|</span>
              </TimelineContent>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h1 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-900 leading-tight mb-8">
              <VerticalCutReveal
                splitBy="words"
                staggerDuration={0.1}
                staggerFrom="first"
                reverse
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 30,
                  delay: 3,
                }}
              >
                We Build Scroll-Stopping Creative That Turns Attention Into
                Revenue.
              </VerticalCutReveal>
            </h1>

            <TimelineContent
              as="div"
              animationNum={9}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="grid md:grid-cols-2 gap-8 text-slate-600"
            >
              <TimelineContent
                as="div"
                animationNum={10}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="sm:text-base text-xs"
              >
                <p className="leading-relaxed text-justify">
                  We are a content creation and advertising agency focused on
                  performance-first storytelling. From concept development to
                  final production, we craft assets that are built for paid and
                  organic channels.
                </p>
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={11}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="sm:text-base text-xs"
              >
                <p className="leading-relaxed text-justify">
                  Our team combines creative direction, media buying insight,
                  and rapid iteration cycles to help brands launch faster, test
                  smarter, and scale campaigns with consistency.
                </p>
              </TimelineContent>
            </TimelineContent>
          </div>
        </div>
      </div>
    </section>
  );
}
