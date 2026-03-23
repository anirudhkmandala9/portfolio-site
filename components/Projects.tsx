"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

function GithubIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const projects = [
  {
    name: "Portfolio Risk Intelligence Dashboard",
    tech: ["Next.js", "FastAPI", "Python", "PostgreSQL", "Docker"],
    description:
      "Full-stack portfolio analytics platform with institutional-grade risk intelligence — VaR, Monte Carlo simulation, Fama-French factor analysis, efficient frontier optimization, scenario stress testing, and benchmark comparison.",
    live: "https://portfolio-risk-intelligence-dashboa.vercel.app",
    github: "https://github.com/anirudhkmandala9/portfolio-risk-intelligence-dashboard",
    highlight: true,
  },
  {
    name: "ARBEX AI",
    tech: ["Python", "React", "PostgreSQL", "API Integration"],
    description:
      "Financial analytics platform delivering real-time market data and portfolio performance insights. Integrated live APIs to automate ingestion and compute risk-adjusted metrics for dashboards and reports.",
    live: null,
    github: null,
    highlight: false,
  },
  {
    name: "Sentinance",
    tech: ["Python", "FastAPI", "React", "NLP", "FinBERT"],
    description:
      "Full-stack sentiment analytics platform aggregating Reddit data to generate real-time trading sentiment signals. FinBERT-based NLP pipeline scoring sentiment, detecting event spikes, and serving low-latency REST endpoints.",
    live: null,
    github: null,
    highlight: false,
  },
  {
    name: "Williamsburg Gentrification Analysis",
    tech: ["ArcGIS", "Census Data", "HOLC Maps"],
    description:
      "Interactive ArcGIS StoryMap integrating ACS demographic data with historical HOLC redlining maps. Analyzed rezoning, reinvestment, housing costs, and displacement to quantify redevelopment-driven inequality.",
    live: null,
    github: null,
    highlight: false,
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

export function Projects() {
  return (
    <section id="projects" className="px-6 py-20 bg-bg-secondary/30">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center gap-3">
          <span className="text-terminal-green text-[11px]">&gt;</span>
          <h2 className="text-lg font-bold text-terminal-green glow-green tracking-wide">PROJECTS</h2>
          <div className="flex-1 border-t border-border" />
          <span className="text-[10px] text-slate-600">{projects.length} ENTRIES</span>
        </div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="grid gap-4 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={item}
              className={`terminal-card rounded p-5 flex flex-col ${
                p.highlight ? "md:col-span-2 border-terminal-green/20" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-sm font-bold text-slate-200">{p.name}</h3>
                  {p.highlight && (
                    <span className="mt-1 inline-block text-[9px] font-bold uppercase tracking-widest text-terminal-amber bg-terminal-amber/10 px-2 py-0.5 rounded">
                      Featured
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-terminal-green/60 hover:text-terminal-green transition"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-slate-300 transition"
                    >
                      <GithubIcon size={14} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-[11px] font-sans text-slate-400 leading-relaxed flex-1">
                {p.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-border bg-bg-primary/60 px-2 py-0.5 text-[10px] text-terminal-green/70"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex items-center gap-1.5 text-[10px] text-terminal-green/60 hover:text-terminal-green transition"
                >
                  <span className="text-terminal-green/30">&gt;</span>
                  {p.live.replace("https://", "")}
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
