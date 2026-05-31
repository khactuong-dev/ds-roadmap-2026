"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sparkles } from "lucide-react";
import { NAV_LINKS } from "@/lib/site";
import { Button } from "@/components/ui/primitives";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 sm:pt-4">
      <nav
        className={cn(
          "flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 sm:px-5",
          scrolled ? "glass-strong ring-glow" : "border border-transparent",
        )}
      >
        <a href="#top" className="flex items-center gap-2.5 font-semibold">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-[linear-gradient(135deg,#6366f1,#a855f7)] shadow-[0_6px_20px_-6px_rgba(124,58,237,0.8)]">
            <Sparkles size={18} className="text-white" />
          </span>
          <span className="hidden text-sm tracking-tight sm:block">
            DS Roadmap <span className="text-ink-muted">2026</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3.5 py-2 text-sm text-ink-soft transition-colors hover:bg-white/[0.06] hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button href="#roadmap" size="md" className="hidden sm:inline-flex">
            Bắt đầu học
          </Button>
          <button
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-ink md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="glass-strong absolute inset-x-4 top-[4.5rem] z-50 rounded-2xl p-3 md:hidden"
          >
            <ul className="grid gap-1">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm text-ink-soft hover:bg-white/[0.06] hover:text-ink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-1">
                <Button href="#roadmap" className="w-full" onClick={() => setOpen(false)}>
                  Bắt đầu học
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
