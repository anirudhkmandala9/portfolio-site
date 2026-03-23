"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fade = {
  hidden: { opacity: 0, y: 12 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.4 },
  }),
};

const projects = [
  {
    id: "001",
    name: "Portfolio Risk Intelligence Dashboard",
    stack: ["Next.js", "FastAPI", "Python", "PostgreSQL", "Docker"],
    metric: "Live app",
    featured: true,
    live: "https://portfolio-risk-intelligence-dashboa.vercel.app",
    github: "https://github.com/anirudhkmandala9/portfolio-risk-intelligence-dashboard",
    description:
      "Full-stack portfolio analytics platform delivering institutional-grade risk intelligence. Supports manual or CSV portfolio input, then computes VaR, Expected Shortfall, Monte Carlo simulations (5000-path GBM), Fama-French 3-factor decomposition, efficient frontier optimization, scenario/stress testing, and benchmark-relative performance — all through a clean dashboard.",
    highlights: [
      "Historical & Parametric VaR, Conditional VaR / Expected Shortfall",
      "Monte Carlo simulation with percentile fan charts and return distribution",
      "Fama-French 3-factor regression with alpha decomposition",
      "Efficient frontier with min-vol and max-Sharpe optimization",
      "Scenario stress testing with custom sector/holding shocks",
      "Benchmark comparison (SPY) with rolling beta, tracking error, information ratio",
      "CSV/PDF export of full analytics report",
    ],
  },
  {
    id: "002",
    name: "ARBEX AI",
    stack: ["Python", "React", "PostgreSQL", "API Integration"],
    metric: "Real-time data",
    featured: false,
    live: null,
    github: null,
    description:
      "Financial analytics platform delivering real-time market data and portfolio performance insights. Integrated live APIs to automate data ingestion and compute risk-adjusted metrics for dashboards and reports.",
    highlights: [
      "Real-time market data ingestion via REST APIs",
      "Automated risk-adjusted metric computation",
      "Interactive dashboards for portfolio performance tracking",
    ],
  },
  {
    id: "003",
    name: "Sentinance",
    stack: ["Python", "FastAPI", "React", "NLP", "FinBERT"],
    metric: "NLP pipeline",
    featured: false,
    live: null,
    github: null,
    description:
      "Full-stack sentiment analytics platform aggregating Reddit data to generate real-time trading sentiment signals. FinBERT-based NLP pipeline scoring sentiment, detecting event spikes, and serving low-latency REST endpoints.",
    highlights: [
      "FinBERT transformer model for financial sentiment classification",
      "Reddit data aggregation with event spike detection",
      "Low-latency REST API for real-time signal serving",
    ],
  },
  {
    id: "004",
    name: "Williamsburg Gentrification Analysis",
    stack: ["ArcGIS", "Census Data", "HOLC Maps"],
    metric: "Interactive map",
    featured: false,
    live: null,
    github: null,
    description:
      "Interactive ArcGIS StoryMap integrating ACS demographic data with historical HOLC redlining maps. Analyzed rezoning, reinvestment, housing costs, and displacement to quantify redevelopment-driven inequality in Williamsburg, Brooklyn.",
    highlights: [
      "ACS demographic data integrated with HOLC redlining overlays",
      "Rezoning impact analysis with displacement metrics",
      "Interactive StoryMap narrative with layered geographic data",
    ],
  },
];

function ExternalLinkIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

function GithubIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function ProjectsPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <motion.div variants={fade} initial="hidden" animate="show" custom={0}>
        <Link href="/" className="text-[10px] tracking-wider text-txt-muted hover:text-t-green transition">
          ← BACK TO HOME
        </Link>
        <h1 className="mt-4 text-2xl font-bold text-txt tracking-tight">Projects</h1>
        <p className="mt-2 text-[13px] font-sans text-txt-secondary max-w-xl">
          Tools and applications built at the intersection of finance, data science,
          and software engineering.
        </p>
      </motion.div>

      {/* Project cards */}
      <div className="space-y-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            variants={fade}
            initial="hidden"
            animate="show"
            custom={i + 1}
            className="t-card rounded p-6"
          >
            {/* Top row */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-start gap-3">
                <span className="text-[11px] text-txt-muted font-mono mt-0.5">{p.id}</span>
                <div>
                  <h2 className="text-[15px] font-bold text-txt">{p.name}</h2>
                  {p.featured && (
                    <span className="mt-1 inline-block text-[9px] font-bold uppercase tracking-widest text-t-amber">
                      FEATURED
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-txt-muted hover:text-t-green transition">
                    <ExternalLinkIcon />
                  </a>
                )}
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-txt-muted hover:text-txt-secondary transition">
                    <GithubIcon />
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-[12px] font-sans text-txt-secondary leading-relaxed mb-4">
              {p.description}
            </p>

            {/* Highlights */}
            <div className="space-y-1.5 mb-4">
              {p.highlights.map((h, j) => (
                <div key={j} className="flex gap-2 text-[11px] font-sans text-txt-muted">
                  <span className="text-t-green/50 mt-px shrink-0">▸</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* Stack + Metric */}
            <div className="flex items-center justify-between gap-4 pt-4 border-t border-line">
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((t) => (
                  <span key={t} className="rounded border border-line px-2 py-0.5 text-[10px] text-txt-muted">
                    {t}
                  </span>
                ))}
              </div>
              <span className="text-[10px] text-t-amber tracking-wider shrink-0">{p.metric}</span>
            </div>

            {/* Live link */}
            {p.live && (
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-[10px] text-txt-muted hover:text-t-green transition"
              >
                <span className="text-t-green/30">&gt;</span>
                {p.live.replace("https://", "")}
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
