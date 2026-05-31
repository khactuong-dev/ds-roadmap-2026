"use client";

import { motion } from "motion/react";
import { PRINCIPLES } from "@/lib/site";
import { Section, SectionHeading, Button } from "@/components/ui/primitives";
import { Icon } from "@/components/ui/icon";
import { ArrowRight } from "lucide-react";

export function Principles() {
  return (
    <Section id="principles">
      <SectionHeading
        eyebrow="3 Golden Principles"
        title={<>Remember these <span className="text-gradient">3 things</span></>}
        description="This is what separates people who get hired from those who keep spinning their wheels in 2026."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {PRINCIPLES.map((pr, i) => (
          <motion.div
            key={pr.title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass relative overflow-hidden rounded-[var(--radius-card)] p-6"
          >
            <span className="absolute -right-4 -top-6 font-mono text-[6rem] font-bold leading-none text-white/[0.04]">
              {i + 1}
            </span>
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[linear-gradient(135deg,#6366f1,#a855f7)] text-white">
              <Icon name={pr.icon} size={24} />
            </span>
            <h3 className="mt-4 text-lg font-bold">{pr.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{pr.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="ring-glow relative mt-16 overflow-hidden rounded-[var(--radius-card)] border border-white/10 px-6 py-12 text-center sm:px-12"
      >
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(99,102,241,0.18),rgba(168,85,247,0.14),rgba(34,211,238,0.12))]" />
        <h3 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl">
          Ready for your journey?
        </h3>
        <p className="mx-auto mt-3 max-w-xl text-pretty text-ink-soft">
          Start from Phase 1 today. Publish something to GitHub every week. After 9 months,
          you&apos;ll have a portfolio strong enough to apply.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="#roadmap" size="lg">
            Open Roadmap <ArrowRight size={18} />
          </Button>
          <Button href="#courses" size="lg" variant="outline">
            Browse courses
          </Button>
        </div>
      </motion.div>
    </Section>
  );
}
