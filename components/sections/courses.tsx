"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { COURSES, COURSE_CATEGORIES } from "@/lib/courses";
import type { CourseCategory, Difficulty } from "@/lib/types";
import { Section, SectionHeading } from "@/components/ui/primitives";
import { CourseCard } from "@/components/ui/course-card";
import { cn } from "@/lib/utils";

const CATEGORY_LABEL: Record<CourseCategory, string> = {
  Python: "Python",
  Math: "Toán & Thống kê",
  SQL: "SQL",
  Data: "pandas & Viz",
  ML: "Machine Learning",
  DL: "Deep Learning",
  "Responsible AI": "Responsible AI",
  MLOps: "MLOps",
  "AI 2026": "AI 2026",
  BI: "BI Tools",
};

const LEVELS: Difficulty[] = ["Beginner", "Intermediate", "Advanced"];
const LEVEL_LABEL: Record<Difficulty, string> = {
  Beginner: "Cơ bản",
  Intermediate: "Trung cấp",
  Advanced: "Nâng cao",
};

export function Courses() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<CourseCategory | "all">("all");
  const [level, setLevel] = useState<Difficulty | "all">("all");
  const [freeOnly, setFreeOnly] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return COURSES.filter((c) => {
      if (cat !== "all" && c.category !== cat) return false;
      if (level !== "all" && c.level !== level) return false;
      if (freeOnly && !(c.cost === "Free" || c.cost === "Free audit")) return false;
      if (q) {
        const hay = `${c.name} ${c.provider} ${c.tags.join(" ")}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [query, cat, level, freeOnly]);

  const hasFilters = cat !== "all" || level !== "all" || freeOnly || query.length > 0;

  return (
    <Section id="courses">
      <SectionHeading
        eyebrow="Course Catalog"
        title={<><span className="text-gradient">{COURSES.length}+ khóa học</span> tuyển chọn</>}
        description="Official docs + 1 khóa có cấu trúc + 1 cuốn sách cho mỗi chủ đề. Ưu tiên: Andrew Ng → DeepLearning.AI → Stanford → Harvard → MIT → Google → Kaggle."
      />

      {/* search + filters */}
      <div className="mx-auto mb-8 max-w-5xl space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Tìm khóa học, provider, kỹ năng…"
              className="glass w-full rounded-full py-3 pl-11 pr-4 text-sm text-ink outline-none transition-colors placeholder:text-ink-muted focus:border-indigo/50"
            />
          </div>
          <label className="glass flex shrink-0 cursor-pointer select-none items-center gap-2.5 rounded-full px-4 py-3 text-sm">
            <span
              className={cn(
                "relative h-5 w-9 rounded-full transition-colors",
                freeOnly ? "bg-cyan" : "bg-white/15",
              )}
            >
              <span
                className={cn(
                  "absolute top-0.5 h-4 w-4 rounded-full bg-white transition-transform",
                  freeOnly ? "translate-x-4" : "translate-x-0.5",
                )}
              />
            </span>
            <input type="checkbox" className="sr-only" checked={freeOnly} onChange={(e) => setFreeOnly(e.target.checked)} />
            Chỉ miễn phí
          </label>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-muted">
            <SlidersHorizontal size={13} /> Chủ đề:
          </span>
          <FilterChip active={cat === "all"} onClick={() => setCat("all")}>
            Tất cả
          </FilterChip>
          {COURSE_CATEGORIES.map((c) => (
            <FilterChip key={c} active={cat === c} onClick={() => setCat(c)}>
              {CATEGORY_LABEL[c]}
            </FilterChip>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium text-ink-muted">Cấp độ:</span>
          <FilterChip active={level === "all"} onClick={() => setLevel("all")}>
            Tất cả
          </FilterChip>
          {LEVELS.map((l) => (
            <FilterChip key={l} active={level === l} onClick={() => setLevel(l)}>
              {LEVEL_LABEL[l]}
            </FilterChip>
          ))}

          <div className="ml-auto flex items-center gap-3 text-xs text-ink-muted">
            <span>{filtered.length} kết quả</span>
            {hasFilters && (
              <button
                onClick={() => {
                  setQuery("");
                  setCat("all");
                  setLevel("all");
                  setFreeOnly(false);
                }}
                className="inline-flex items-center gap-1 rounded-full border border-white/10 px-2.5 py-1 transition-colors hover:text-ink"
              >
                <X size={12} /> Xóa lọc
              </button>
            )}
          </div>
        </div>
      </div>

      {/* grid */}
      <motion.div layout className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((c) => (
            <motion.div
              key={c.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
            >
              <CourseCard course={c} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-ink-muted">
          Không tìm thấy khóa học phù hợp. Thử bỏ bớt bộ lọc.
        </p>
      )}
    </Section>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full border px-3 py-1.5 text-xs font-medium transition-all",
        active
          ? "border-indigo/50 bg-indigo/20 text-ink"
          : "border-white/10 text-ink-soft hover:border-white/25 hover:text-ink",
      )}
    >
      {children}
    </button>
  );
}
