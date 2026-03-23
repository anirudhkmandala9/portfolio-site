"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "PROGRAMMING",
    color: "text-terminal-green",
    bg: "bg-terminal-green/5",
    borderColor: "border-terminal-green/20",
    items: ["Python", "MATLAB", "R", "SQL", "Excel (VBA, Solver)", "Power BI", "Tableau"],
  },
  {
    label: "QUANT & ML",
    color: "text-terminal-amber",
    bg: "bg-terminal-amber/5",
    borderColor: "border-terminal-amber/20",
    items: ["Regression Analysis", "Monte Carlo Simulation", "Portfolio Optimization", "FinBERT", "Sentiment Analysis", "Time Series"],
  },
  {
    label: "FINANCE",
    color: "text-sky-400",
    bg: "bg-sky-400/5",
    borderColor: "border-sky-400/20",
    items: ["Valuation", "DCF Modeling", "M&A Analysis", "Due Diligence", "Financial Forecasting", "Risk Management"],
  },
  {
    label: "ENGINEERING",
    color: "text-purple-400",
    bg: "bg-purple-400/5",
    borderColor: "border-purple-400/20",
    items: ["REST APIs", "Git", "Docker", "PostgreSQL", "React", "Next.js", "FastAPI"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function Skills() {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center gap-3">
          <span className="text-terminal-green text-[11px]">&gt;</span>
          <h2 className="text-lg font-bold text-terminal-green glow-green tracking-wide">SKILLS</h2>
          <div className="flex-1 border-t border-border" />
          <span className="text-[10px] text-slate-600">{skillGroups.length} PANELS</span>
        </div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((g) => (
            <motion.div key={g.label} variants={item} className={`terminal-card rounded p-5 ${g.bg} border ${g.borderColor}`}>
              <div className={`text-[10px] font-bold tracking-widest mb-3 ${g.color}`}>
                [{g.label}]
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="rounded border border-border bg-bg-primary/40 px-2.5 py-1 text-[11px] text-slate-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
