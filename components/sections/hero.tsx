"use client";

import { motion } from "motion/react";
import { ArrowRight, Map, Clock, BookOpen, FolderGit2, Layers3 } from "lucide-react";
import { Button } from "@/components/ui/primitives";
import { Counter } from "@/components/ui/counter";
import { STATS } from "@/lib/site";

const stats = [
  { icon: Clock, value: STATS.durationMonths, suffix: " mo", label: "Standard roadmap" },
  { icon: BookOpen, value: STATS.totalCourses, suffix: "+", label: "Curated courses" },
  { icon: FolderGit2, value: STATS.totalProjects, suffix: "", label: "Portfolio projects" },
  { icon: Layers3, value: STATS.totalPhases, suffix: "", label: "Learning phases" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-10 sm:pt-40">
      {/* floating orbs */}
      <div className="pointer-events-none absolute left-1/2 top-24 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo/20 blur-[110px]" />

      <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate="show"
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-ink-soft backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
          </span>
          Updated for the 2026 job market
        </motion.div>

        <motion.h1
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate="show"
          className="text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          Data Science
          <br />
          <span className="text-gradient">Roadmap 2026</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate="show"
          className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft sm:text-xl"
        >
          A complete learning journey{" "}
          <span className="text-ink">from zero to AI Engineer</span> — 10 phases,
          free official resources, and a real-world portfolio.
        </motion.p>

        {/* dedication */}
        <motion.p
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate="show"
          className="mt-7 text-sm font-medium text-ink-muted"
        >
          Made with <span className="text-rose">♥</span> for{" "}
          <span className="text-gradient font-semibold">Diệu Vy</span>
          <span className="text-rose"> 💜</span>
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={4}
          initial="hidden"
          animate="show"
          className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button href="#roadmap" size="lg">
            Start Learning
            <ArrowRight size={18} />
          </Button>
          <Button href="#roadmap" size="lg" variant="outline">
            <Map size={18} />
            Explore Roadmap
          </Button>
        </motion.div>

        {/* stats */}
        <motion.div
          variants={fadeUp}
          custom={5}
          initial="hidden"
          animate="show"
          className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass rounded-2xl px-4 py-5 text-center transition-colors hover:border-white/20"
            >
              <s.icon size={18} className="mx-auto mb-2 text-indigo" />
              <div className="text-2xl font-bold tracking-tight sm:text-3xl">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-xs text-ink-muted">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
