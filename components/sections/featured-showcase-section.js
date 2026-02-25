'use client';

import * as React from "react";
import { Activity, ArrowRight, Files, Flower, GalleryVerticalEnd, MapPin } from "lucide-react";
import DottedMap from "dotted-map";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Card } from "@/components/ui/primitives/card";

const map = new DottedMap({ height: 55, grid: "diagonal" });
const points = map.getPoints();

const chartData = [
  { month: "May", desktop: 56, mobile: 224 },
  { month: "June", desktop: 90, mobile: 300 },
  { month: "July", desktop: 126, mobile: 252 },
  { month: "Aug", desktop: 205, mobile: 410 },
  { month: "Sep", desktop: 200, mobile: 126 },
  { month: "Oct", desktop: 400, mobile: 800 },
];

const messages = [
  { title: "Creative Ops", time: "1m ago", content: "New ad concepts uploaded for your Q2 campaign.", color: "from-pink-400 to-indigo-500" },
  { title: "Client Feedback", time: "3m ago", content: "Eight new revision notes were added to your content board.", color: "from-orange-500 to-pink-500" },
  { title: "Media Buying", time: "6m ago", content: "Campaign budget pacing is on track across all channels.", color: "from-yellow-400 to-red-400" },
  { title: "Production Hub", time: "10m ago", content: "Three video ads moved from edit to approval.", color: "from-sky-400 to-blue-700" },
  { title: "Performance Report", time: "12m ago", content: "CTR increased after creative refresh in top ad sets.", color: "from-orange-300 to-fuchsia-500" },
  { title: "Weekly Recap", time: "15m ago", content: "Your agency team delivered 24 assets this week.", color: "from-green-400 to-blue-500" },
];

function Map() {
  return (
    <svg viewBox="0 0 120 60" className="h-auto w-full text-slate-600/70">
      {points.map((point, i) => (
        <circle key={i} cx={point.x} cy={point.y} r={0.35} fill="currentColor" />
      ))}
    </svg>
  );
}

function MonitoringChart() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-60 w-full" />;
  }

  return (
    <div className="h-60 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2563eb" stopOpacity={0.8} />
              <stop offset="55%" stopColor="#2563eb" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity={0.8} />
              <stop offset="55%" stopColor="#60a5fa" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <XAxis hide />
          <YAxis hide />
          <CartesianGrid vertical={false} horizontal={false} />
          <Tooltip cursor={false} />
          <Area strokeWidth={2} dataKey="mobile" type="monotone" fill="url(#fillMobile)" stroke="#60a5fa" />
          <Area strokeWidth={2} dataKey="desktop" type="monotone" fill="url(#fillDesktop)" stroke="#2563eb" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

function RuixenFeaturedMessageCard() {
  return (
    <div className="relative h-[280px] w-full mt-max-w-sm overflow-hidden bg-white p-2 font-sans">
      <div className="absolute inset-x-0 bottom-0 z-10 h-12 bg-gradient-to-t from-white to-transparent" />
      <div className="relative z-0 space-y-2">
        {messages.map((msg, i) => (
          <div
            key={msg.title}
            className="animate-fade-up flex cursor-pointer items-start gap-3 rounded-2xl border border-slate-300/70 bg-white p-3 transition duration-300 ease-in-out"
            style={{ animationDelay: `${i * 120}ms` }}
          >
            <div className={`h-8 w-8 min-h-[2rem] min-w-[2rem] rounded-lg bg-gradient-to-br ${msg.color}`} />
            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                {msg.title}
                <span className="text-xs text-slate-500 before:mr-1 before:content-['•']">{msg.time}</span>
              </div>
              <p className="mt-0.5 line-clamp-1 text-xs text-slate-600">{msg.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, subtitle, description }) {
  return (
    <div className="relative flex flex-col gap-3 border border-slate-300/70 bg-white p-4 transition">
      <div className="flex items-center gap-4">
        <div>
          <span className="mb-4 flex items-center gap-2 text-sm text-slate-500">
            {icon}
            {title}
          </span>
          <h3 className="text-lg font-normal text-slate-900">
            {subtitle} <span className="text-slate-500">{description}</span>
          </h3>
        </div>
      </div>

      <Card className="absolute bottom-0 right-0 h-20 w-24 overflow-hidden rounded-bl-none rounded-br-none rounded-tl-xl rounded-tr-none border-8 border-b-0 border-r-0 border-white bg-white sm:h-28 sm:w-32 md:h-32 md:w-40" />
      <div className="absolute bottom-2 right-2 z-10 flex items-center gap-2 rounded-full border border-slate-300/70 bg-white p-3 transition hover:-rotate-45">
        <ArrowRight className="h-4 w-4 text-slate-700" />
      </div>
    </div>
  );
}

export default function FeaturedShowcaseSection() {
  const featuredCasestudy = {
    tags: "Case Study",
    title: "How we scaled a paid campaign to 1M+ impressions",
    subtitle: "while improving CPA through faster creative iteration and data-led testing",
  };

  return (
    <section className="bg-gray-100 py-6 px-6 md:px-8">
      <div className="mb-12 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-red-600 ">
          Our Tools
        </p>

        <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-900 leading-tight">
          The Stack Behind Our Creative Workflow
        </h2>

        <p className="mt-3 text-slate-600 text-base md:text-lg">
          We use industry-leading platforms to design, produce, and optimize
          content that helps brands grow faster.
        </p>
      </div>
      <div className="grid w-full grid-cols-1 md:grid-cols-2 ">
        <div className="relative overflow-hidden rounded-none border bg-white p-4">
          <div className="mb-4 flex items-center gap-2 text-sm text-slate-500">
            <MapPin className="h-4 w-4" />
            Audience Insights
          </div>
          <h3 className="text-xl font-normal text-slate-900">
            Visualize campaign demand across regions.{" "}
            <span className="text-slate-500">
              Plan localized creative and optimize media by location.
            </span>
          </h3>

          <div className="relative mt-4">
            <div className="absolute left-1/2 top-16 z-10 -translate-x-1/2 rounded-xl border border-slate-300/70 bg-white px-3 py-1 text-xs font-semibold text-slate-900 shadow-sm">
              Latest lead from US
            </div>
            <Map />
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 rounded-none border border-slate-300/70 bg-white p-6">
          <div>
            <span className="flex items-center gap-2 text-sm text-slate-500">
              <GalleryVerticalEnd className="h-4 w-4" />{" "}
              {featuredCasestudy.tags}
            </span>
            <h3 className="text-xl font-normal text-slate-900">
              {featuredCasestudy.title}{" "}
              <span className="text-slate-500">
                {featuredCasestudy.subtitle}
              </span>
            </h3>
          </div>
          <div className="flex w-full items-center justify-center">
            <RuixenFeaturedMessageCard />
          </div>
        </div>

        {/* <div className="space-y-4 rounded-none border border-slate-300/70 bg-white p-6">
          <div className="mb-4 flex items-center gap-2 text-sm text-slate-500">
            <Activity className="h-4 w-4" />
            Campaign Analytics
          </div>
          <h3 className="text-xl font-normal text-slate-900">
            Real-time ad performance monitoring.{" "}
            <span className="text-slate-500">Make faster creative and targeting decisions with live data.</span>
          </h3>
          <MonitoringChart />
        </div>

        <div className="grid rounded-none bg-white sm:grid-cols-2">
          <FeatureCard
            icon={<Files className="h-4 w-4" />}
            title="Campaign-ready assets"
            subtitle="Launch Faster"
            description="Deploy ad formats and content packs built for each funnel stage."
          />
          <FeatureCard
            icon={<Flower className="h-4 w-4" />}
            title="Brand-first creative"
            subtitle="Scale Consistently"
            description="Adapt messaging, visuals, and hooks without losing brand clarity."
          />
        </div> */}
      </div>
    </section>
  );
}
