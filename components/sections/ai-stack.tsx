"use client";

import { motion } from "motion/react";
import { AlertTriangle, Sparkles, ArrowUpRight } from "lucide-react";
import { AI_STACK } from "@/lib/site";
import { COURSE_BY_ID } from "@/lib/courses";
import { Section, SectionHeading } from "@/components/ui/primitives";
import { Icon } from "@/components/ui/icon";

const AI_COURSES = ["dlai-short", "langgraph", "mcp", "hf-llm"];

export function AIStack() {
  return (
    <Section id="ai-2026">
      <div className="absolute inset-x-0 top-1/4 -z-0 mx-auto h-72 max-w-3xl rounded-full bg-pink/10 blur-[120px]" />

      <SectionHeading
        eyebrow="AI Engineering 2026"
        title={<>Modern <span className="text-gradient">AI Stack</span></>}
        description="Làn sóng nóng nhất của thị trường 2026: LLM, RAG, AI Agents. Nhưng đây là phần mở rộng — KHÔNG thay thế nền tảng."
      />

      {/* warning banner */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto mb-10 flex max-w-3xl items-start gap-3 rounded-2xl border border-rose/30 bg-rose/10 p-4"
      >
        <AlertTriangle size={20} className="mt-0.5 shrink-0 text-rose" />
        <div>
          <p className="flex items-center gap-2 text-sm font-bold text-rose">
            Advanced — Không dành cho beginner
          </p>
          <p className="mt-1 text-sm leading-relaxed text-ink-soft">
            Người mới <strong className="text-ink">tuyệt đối không</strong> học LLM/Agent ngay từ đầu.
            Bạn chỉ chạm vào đây sau khi đã vững Phase 1-9. Nếu không, bạn sẽ chỉ biết “gọi API”
            mà không hiểu gì bên dưới — kiểu ứng viên dễ bị loại nhất.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {AI_STACK.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: (i % 4) * 0.07 }}
            className="group glass relative overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-pink/30"
          >
            <span className="absolute right-3 top-3 rounded-full bg-rose/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-rose">
              Adv
            </span>
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-[linear-gradient(135deg,rgba(236,72,153,0.2),rgba(168,85,247,0.2))] text-pink">
              <Icon name={item.icon} size={22} />
            </span>
            <h3 className="mt-3 text-base font-bold">{item.name}</h3>
            <p className="mt-1 text-xs leading-relaxed text-ink-soft">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* learn-more courses */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <span className="text-sm text-ink-muted">Khi đã sẵn sàng, bắt đầu với:</span>
        {AI_COURSES.map((id) => {
          const c = COURSE_BY_ID[id];
          return c ? (
            <a
              key={id}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium text-ink-soft transition-colors hover:border-pink/30 hover:text-ink"
            >
              <Sparkles size={12} className="text-pink" />
              {c.name}
              <ArrowUpRight size={12} />
            </a>
          ) : null;
        })}
      </div>
    </Section>
  );
}
