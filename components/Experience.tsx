"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "GLP Intern",
    company: "Profit Recovery Partners",
    location: "Santa Ana, CA",
    period: "Spring/Summer 2026",
    status: "INCOMING",
    statusColor: "text-terminal-amber",
    bullets: [],
  },
  {
    title: "Private Equity Intern",
    company: "VerdeVista Partners",
    location: "West Grove, PA",
    period: "Oct 2025 — Mar 2026",
    status: "COMPLETED",
    statusColor: "text-terminal-green",
    bullets: [
      "Screened 50+ lower-middle-market acquisition targets across industrial and service sectors against investment criteria.",
      "Built integrated 3-statement and DCF models to evaluate IRR, downside risk, and scenario sensitivity.",
      "Conducted market sizing, competitive analysis, and management diligence; supported IC materials and deal execution.",
    ],
  },
  {
    title: "External Relations Vice President",
    company: "Venture Capital Society at UC Irvine",
    location: "Irvine, CA",
    period: "May 2025 — Present",
    status: "ACTIVE",
    statusColor: "text-terminal-green",
    bullets: [
      "Performed diligence on VC firms, quant funds, and investment banks; structured partnerships benefiting 100+ members.",
      "Led workshops on valuation and financial modeling (DCF, comps, sensitivity) and delivered investment research sessions.",
    ],
  },
  {
    title: "Student President",
    company: "UC Irvine Student Housing",
    location: "Irvine, CA",
    period: "Sep 2023 — Jun 2025",
    status: "COMPLETED",
    statusColor: "text-terminal-green",
    bullets: [
      "Directed 15-person executive board and managed $25,000 budget for a 1,300+ attendee campus event.",
      "Applied regression analysis to operational and community data to support budgeting decisions and resource allocation.",
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Experience() {
  return (
    <section id="experience" className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center gap-3">
          <span className="text-terminal-green text-[11px]">&gt;</span>
          <h2 className="text-lg font-bold text-terminal-green glow-green tracking-wide">EXPERIENCE</h2>
          <div className="flex-1 border-t border-border" />
          <span className="text-[10px] text-slate-600">{experiences.length} RECORDS</span>
        </div>

        {/* Table header */}
        <div className="hidden md:grid grid-cols-[1fr_180px_120px_100px] gap-4 border-b border-border pb-2 mb-4 text-[10px] uppercase tracking-widest text-slate-600">
          <span>POSITION / COMPANY</span>
          <span>PERIOD</span>
          <span>LOCATION</span>
          <span className="text-right">STATUS</span>
        </div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="space-y-3">
          {experiences.map((exp, i) => (
            <motion.div key={i} variants={item} className="terminal-card rounded p-4">
              <div className="md:grid md:grid-cols-[1fr_180px_120px_100px] md:gap-4 md:items-start">
                <div>
                  <div className="text-sm font-semibold text-slate-200">{exp.title}</div>
                  <div className="text-[12px] text-terminal-amber/80">{exp.company}</div>
                </div>
                <div className="text-[11px] text-slate-500 mt-1 md:mt-0">{exp.period}</div>
                <div className="text-[11px] text-slate-600 mt-1 md:mt-0">{exp.location}</div>
                <div className={`text-[10px] font-bold tracking-wider mt-1 md:mt-0 md:text-right ${exp.statusColor}`}>
                  [{exp.status}]
                </div>
              </div>
              {exp.bullets.length > 0 && (
                <div className="mt-3 space-y-1.5 border-t border-border/50 pt-3">
                  {exp.bullets.map((b, j) => (
                    <div key={j} className="flex gap-2 text-[11px] font-sans text-slate-400 leading-relaxed">
                      <span className="text-terminal-green/50 mt-0.5 shrink-0">▸</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
