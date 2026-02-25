"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/primitives/card";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { cn } from "@/lib/utils";
import { CheckCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const plans = [
  {
    name: "Creative Launch",
    description: "For new and growing brands that need consistent social content and ad-ready creatives.",
    price: 1200,
    yearlyPrice: 12000,
    buttonText: "Book a Kickoff Call",
    buttonVariant: "outline",
    includes: [
      "Includes:",
      "8 short-form videos / month",
      "12 static ad creatives / month",
      "Creative direction + hooks",
      "1 monthly strategy review",
      "Weekly delivery cadence",
    ],
  },
  {
    name: "Performance Growth",
    description: "For teams scaling paid acquisition with faster creative testing and clearer reporting.",
    price: 3200,
    yearlyPrice: 32000,
    buttonText: "Start Growth Plan",
    buttonVariant: "default",
    popular: true,
    includes: [
      "Everything in Creative Launch, plus:",
      "24 videos + 24 statics / month",
      "Paid ads concept testing framework",
      "Weekly performance optimization",
      "Cross-platform creative adaptation",
      "Bi-weekly strategy calls",
    ],
  },
  {
    name: "Scale Studio",
    description: "For established brands running multi-channel campaigns and high-volume creative production.",
    price: 6500,
    yearlyPrice: 65000,
    buttonText: "Talk to Sales",
    buttonVariant: "outline",
    includes: [
      "Everything in Performance Growth, plus:",
      "Dedicated creative pod",
      "Landing page + funnel support",
      "Creative for Meta, TikTok, YouTube",
      "Advanced attribution insights",
      "Priority turnaround SLA",
    ],
  },
];

function PricingSwitch({ onSwitch, className }) {
  const [selected, setSelected] = useState("0");

  const handleSwitch = (value) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className={cn("flex justify-center", className)}>
      <div className="relative z-10 mx-auto flex w-fit rounded-xl border border-slate-300/80 bg-white p-1">
        <button
          onClick={() => handleSwitch("0")}
          className={cn(
            "relative z-10 w-fit cursor-pointer h-12 rounded-xl sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors sm:text-base text-sm",
            selected === "0" ? "text-white" : "text-slate-500 hover:text-slate-900"
          )}
        >
          {selected === "0" && (
            <motion.span
              layoutId="switch"
              className="absolute top-0 left-0 h-12 w-full rounded-xl border border-slate-800 bg-gradient-to-t from-slate-900 via-slate-800 to-slate-700 shadow-sm shadow-slate-900/30"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">Monthly Billing</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={cn(
            "relative z-10 w-fit cursor-pointer h-12 flex-shrink-0 rounded-xl sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors sm:text-base text-sm",
            selected === "1" ? "text-white" : "text-slate-500 hover:text-slate-900"
          )}
        >
          {selected === "1" && (
            <motion.span
              layoutId="switch"
              className="absolute top-0 left-0 h-12 w-full rounded-xl border border-slate-800 bg-gradient-to-t from-slate-900 via-slate-800 to-slate-700 shadow-sm shadow-slate-900/30"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2">
            Yearly Billing
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
              Save 20%
            </span>
          </span>
        </button>
      </div>
    </div>
  );
}

export default function PricingSection5() {
  const [isYearly, setIsYearly] = useState(false);
  const pricingRef = useRef(null);

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

  const togglePricingPeriod = (value) => setIsYearly(Number.parseInt(value, 10) === 1);

  return (
    <div className="px-6 md:px-8 pt-5 min-h-screen max-w-[1300px] mx-auto relative" ref={pricingRef}>
      <article className="text-left mb-6 space-y-4 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-600">Pricing</p>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-900 leading-tight">
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.15}
            staggerFrom="first"
            reverse
            containerClassName="justify-start"
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 40,
              delay: 0,
            }}
          >
            Flexible Plans for Content and Performance Campaigns
          </VerticalCutReveal>
        </h2>

        <TimelineContent
          as="p"
          animationNum={0}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="mt-3 text-slate-600 text-base md:text-lg w-[85%]"
        >
          Choose the engagement model that matches your growth stage, from consistent social
          creative to full-funnel ad production and optimization.
        </TimelineContent>

        <TimelineContent as="div" animationNum={1} timelineRef={pricingRef} customVariants={revealVariants}>
          <PricingSwitch onSwitch={togglePricingPeriod} className="w-fit" />
        </TimelineContent>
      </article>

      <div className="grid md:grid-cols-3 gap-4 py-6">
        {plans.map((plan, index) => (
          <TimelineContent
            key={plan.name}
            as="div"
            animationNum={2 + index}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <Card className={cn("relative border border-slate-200 bg-white", plan.popular && "ring-2 ring-slate-400")}>
              <CardHeader className="text-left">
                <div className="flex justify-between">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                    {plan.name}
                  </h3>
                  {plan.popular && (
                    <span className="bg-slate-900 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Popular
                    </span>
                  )}
                </div>
                <p className="xl:text-sm md:text-xs text-sm text-slate-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-semibold text-slate-900">
                    ${isYearly ? plan.yearlyPrice : plan.price}
                  </span>
                  <span className="text-slate-500 ml-1">/{isYearly ? "year" : "month"}</span>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <button
                  className={cn(
                    "w-full mb-6 p-4 text-base rounded-xl font-medium",
                    plan.popular
                      ? "bg-gradient-to-t from-slate-900 to-slate-700 shadow-md shadow-slate-900/30 border border-slate-700 text-white"
                      : plan.buttonVariant === "outline"
                        ? "bg-white border border-slate-300 text-slate-900 hover:bg-slate-50"
                        : "bg-slate-900 text-white"
                  )}
                >
                  {plan.buttonText}
                </button>

                <div className="space-y-3 pt-4 border-t border-slate-200">
                  <h2 className="text-lg font-semibold uppercase tracking-wide text-slate-900 mb-3">What&apos;s Included</h2>
                  <h4 className="font-medium text-base text-slate-900 mb-3">{plan.includes[0]}</h4>
                  <ul className="space-y-2 font-semibold">
                    {plan.includes.slice(1).map((feature) => (
                      <li key={`${plan.name}-${feature}`} className="flex items-center">
                        <span className="h-6 w-6 bg-white border border-slate-500 rounded-full grid place-content-center mt-0.5 mr-3">
                          <CheckCheck className="h-4 w-4 text-slate-700" />
                        </span>
                        <span className="text-sm text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TimelineContent>
        ))}
      </div>
    </div>
  );
}
