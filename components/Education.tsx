"use client";

import { motion } from "framer-motion";

const degrees = [
  {
    degree: "B.S. Applied Mathematics & Computational Sciences",
    track: "Data Science Track",
    school: "University of California, Irvine",
    year: "Expected 2027",
  },
  {
    degree: "B.A. Quantitative Economics",
    track: null,
    school: "University of California, Irvine",
    year: "Expected 2027",
  },
];

const honors = [
  "Spring 2024",
  "Fall 2024",
  "Winter 2025",
  "Spring 2025",
  "Fall 2025",
];

export function Education() {
  return (
    <section id="education" className="px-6 py-20 bg-bg-secondary/30">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center gap-3">
          <span className="text-terminal-green text-[11px]">&gt;</span>
          <h2 className="text-lg font-bold text-terminal-green glow-green tracking-wide">EDUCATION</h2>
          <div className="flex-1 border-t border-border" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          {degrees.map((d, i) => (
            <div key={i} className="terminal-card rounded p-5">
              <div className="md:flex md:items-start md:justify-between gap-4">
                <div>
                  <div className="text-sm font-bold text-slate-200">{d.degree}</div>
                  {d.track && (
                    <div className="text-[11px] text-terminal-amber/80 mt-0.5">{d.track}</div>
                  )}
                  <div className="text-[11px] text-slate-500 mt-1">{d.school}</div>
                </div>
                <div className="text-[11px] text-slate-600 mt-1 md:mt-0 shrink-0">{d.year}</div>
              </div>
            </div>
          ))}

          {/* Honors */}
          <div className="terminal-card rounded p-5">
            <div className="text-[10px] font-bold tracking-widest text-terminal-amber mb-3">
              [DEAN&apos;S HONORS LIST]
            </div>
            <div className="flex flex-wrap gap-2">
              {honors.map((h) => (
                <span
                  key={h}
                  className="rounded border border-terminal-amber/20 bg-terminal-amber/5 px-3 py-1 text-[11px] text-terminal-amber/80"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
