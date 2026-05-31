"use client";

import { motion } from "motion/react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { JOURNEY } from "@/lib/projects";
import { trackVars } from "@/lib/colors";
import { Section, SectionHeading } from "@/components/ui/primitives";

export function Journey() {
  return (
    <Section id="journey">
      <SectionHeading
        eyebrow="Visual Learning Journey"
        title={<>Your <span className="text-gradient">career ladder</span></>}
        description="From beginner to expert. Each milestone comes with its difficulty, cumulative time, and typical recruiter expectations."
      />

      <div className="flex flex-col items-stretch gap-0 lg:flex-row lg:items-stretch">
        {JOURNEY.map((stage, i) => (
          <div key={stage.id} className="flex flex-col lg:flex-1 lg:flex-row lg:items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              style={trackVars(stage.color)}
              className="glass relative flex-1 overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/25"
            >
              <span className="absolute inset-x-0 top-0 h-[3px]" style={{ background: "var(--c-grad)" }} />
              <div className="text-xs" style={{ color: "var(--c)" }}>{stage.difficulty}</div>
              <h3 className="mt-1.5 text-base font-bold leading-tight">{stage.role}</h3>
              <p className="text-xs font-medium text-ink-muted">{stage.level}</p>
              <div className="mt-3 inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-medium" style={{ background: "var(--c-soft)", color: "var(--c)" }}>
                {stage.years}
              </div>
              <p className="mt-3 text-xs leading-relaxed text-ink-soft">{stage.expectation}</p>
            </motion.div>

            {i < JOURNEY.length - 1 && (
              <div className="flex shrink-0 items-center justify-center py-2 text-ink-muted lg:px-1.5 lg:py-0">
                <ArrowRight size={18} className="hidden lg:block" />
                <ArrowDown size={18} className="lg:hidden" />
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-ink-muted">
        💡 For <span className="text-ink-soft">Data Analyst</span> and many{" "}<span className="text-ink-soft">ML Engineer</span> roles, a strong portfolio + real skills can matter more than a degree. Research roles usually require a master's degree or higher.
      </p>
    </Section>
  );
}
