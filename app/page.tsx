"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 12 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4 },
  }),
};

const projects = [
  {
    id: "001",
    name: "Portfolio Risk Intelligence Dashboard",
    stack: "Next.js, FastAPI, Python",
    metric: "Live app",
    href: "/projects",
  },
  {
    id: "002",
    name: "ARBEX AI",
    stack: "Python, React, PostgreSQL",
    metric: "Real-time data",
    href: "/projects",
  },
  {
    id: "003",
    name: "Sentinance",
    stack: "Python, FastAPI, FinBERT",
    metric: "NLP pipeline",
    href: "/projects",
  },
  {
    id: "004",
    name: "Williamsburg Gentrification",
    stack: "ArcGIS, Census Data",
    metric: "Interactive map",
    href: "/projects",
  },
];

const instruments = [
  "Python", "R", "SQL", "MATLAB", "JavaScript", "TypeScript",
  "React", "Next.js", "FastAPI", "Docker", "PostgreSQL", "Git",
  "Excel / VBA", "Power BI", "Tableau",
];

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function MailIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export default function HomePage() {
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    setLastUpdated(
      new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    );
  }, []);

  return (
    <div className="space-y-16">
      {/* ── Status bar ── */}
      <motion.div
        variants={fade}
        initial="hidden"
        animate="show"
        custom={0}
        className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] tracking-wider text-txt-muted"
      >
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-t-green pulse-dot" />
          SYSTEM ONLINE
        </span>
        <span>·</span>
        <span>LAST UPDATED: {lastUpdated}</span>
        <span>·</span>
        <span className="text-t-amber">CURRENT FOCUS: Portfolio Analytics & Risk Intelligence</span>
      </motion.div>

      {/* ── Hero ── */}
      <motion.div variants={fade} initial="hidden" animate="show" custom={1}>
        <h1 className="text-3xl sm:text-5xl font-bold text-t-green glow leading-tight tracking-tight">
          ANIRUDH KUMAR MANDALA<span className="cursor-blink">_</span>
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-txt-secondary font-sans">
          I build financial analytics tools and quantitative models. Double-major in
          Applied Mathematics (Data Science) and Quantitative Economics at UC Irvine.
          Interested in portfolio construction, risk decomposition, and systematic
          investment strategies.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded border border-t-green/30 bg-t-green/5 px-5 py-2 text-[11px] font-medium text-t-green tracking-wider transition hover:bg-t-green/10 hover:border-t-green/50"
          >
            VIEW PROJECTS
          </Link>
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 rounded border border-line px-5 py-2 text-[11px] font-medium text-txt-secondary tracking-wider transition hover:border-line-hover hover:text-txt"
          >
            EXPERIENCE
          </Link>
        </div>

        {/* Social links */}
        <div className="mt-6 flex items-center gap-4">
          <a href="https://github.com/anirudhkmandala9" target="_blank" rel="noopener noreferrer" className="text-txt-muted hover:text-t-green transition">
            <GithubIcon />
          </a>
          <a href="mailto:akmandal@uci.edu" className="text-txt-muted hover:text-t-green transition">
            <MailIcon />
          </a>
          <a href="https://linkedin.com/in/anirudhkmandala" target="_blank" rel="noopener noreferrer" className="text-txt-muted hover:text-t-green transition">
            <LinkedinIcon />
          </a>
        </div>
      </motion.div>

      {/* ── About ── */}
      <motion.section variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0}>
        <div className="text-[10px] tracking-widest text-txt-muted mb-4">ABOUT</div>
        <div className="max-w-2xl space-y-3 text-[13px] font-sans leading-relaxed text-txt-secondary">
          <p>
            I&apos;m building at the intersection of finance and software engineering --
            turning quantitative ideas into tools that surface real insight. My most
            recent project is a full-stack portfolio risk dashboard with Monte Carlo
            simulation, Fama-French factor analysis, and efficient frontier optimization.
          </p>
          <p>
            Previously interned in private equity doing deal screening and financial modeling.
            Currently an incoming GLP intern at Profit Recovery Partners for Spring/Summer 2026.
            CFA Level I candidate.
          </p>
        </div>
      </motion.section>

      {/* ── Current Roles ── */}
      <motion.section variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0}>
        <div className="text-[10px] tracking-widest text-txt-muted mb-4">CURRENT ROLES</div>
        <div className="space-y-2">
          {[
            { role: "GLP Intern (Incoming)", org: "Profit Recovery Partners", note: "Spring/Summer 2026" },
            { role: "External Relations VP", org: "Venture Capital Society at UCI", note: "May 2025 — Present" },
          ].map((r) => (
            <div key={r.role} className="flex items-start gap-3 text-[13px]">
              <span className="text-t-green mt-0.5 shrink-0">▸</span>
              <div>
                <span className="text-txt font-medium">{r.role}</span>
                <span className="text-txt-muted mx-2">—</span>
                <span className="text-txt-secondary">{r.org}</span>
                <span className="ml-2 text-[10px] text-txt-muted">{r.note}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── Key Metrics ── */}
      <motion.section variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0}>
        <div className="text-[10px] tracking-widest text-txt-muted mb-4">KEY METRICS</div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "PROJECTS", value: "4", sub: "built" },
            { label: "DEAN'S LIST", value: "5×", sub: "consecutive" },
            { label: "CERTIFICATIONS", value: "4", sub: "earned" },
            { label: "CFA", value: "L1", sub: "candidate" },
          ].map((m) => (
            <div key={m.label} className="t-card rounded p-4">
              <div className="text-[10px] tracking-wider text-txt-muted mb-2">{m.label}</div>
              <div className="text-2xl font-bold text-t-green glow">{m.value}</div>
              <div className="text-[10px] text-txt-muted mt-1">{m.sub}</div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── Recent Projects (data table) ── */}
      <motion.section variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0}>
        <div className="flex items-center justify-between mb-4">
          <div className="text-[10px] tracking-widest text-txt-muted">RECENT PROJECTS</div>
          <Link href="/projects" className="text-[10px] tracking-wider text-txt-muted hover:text-t-green transition">
            VIEW ALL →
          </Link>
        </div>

        {/* Table header */}
        <div className="hidden sm:grid grid-cols-[48px_1fr_180px_120px] border-b border-line pb-2 mb-1 text-[10px] tracking-widest text-txt-muted">
          <span>ID</span>
          <span>PROJECT</span>
          <span>STACK</span>
          <span className="text-right">METRIC</span>
        </div>

        {/* Table rows */}
        <div className="divide-y divide-line">
          {projects.map((p) => (
            <Link
              key={p.id}
              href={p.href}
              className="group grid sm:grid-cols-[48px_1fr_180px_120px] gap-y-1 py-3 text-[12px] transition hover:bg-bg-hover rounded-sm px-1 -mx-1"
            >
              <span className="text-txt-muted font-mono">{p.id}</span>
              <span className="text-txt group-hover:text-t-green transition font-medium">{p.name}</span>
              <span className="text-txt-secondary text-[11px]">{p.stack}</span>
              <span className="text-t-amber text-[11px] sm:text-right">{p.metric}</span>
            </Link>
          ))}
        </div>
      </motion.section>

      {/* ── Instruments ── */}
      <motion.section variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0}>
        <div className="text-[10px] tracking-widest text-txt-muted mb-4">INSTRUMENTS</div>
        <div className="flex flex-wrap gap-2">
          {instruments.map((s) => (
            <span
              key={s}
              className="rounded border border-line px-3 py-1.5 text-[11px] text-txt-secondary transition hover:border-line-hover hover:text-txt"
            >
              {s}
            </span>
          ))}
        </div>
      </motion.section>

      {/* ── Resume ── */}
      <motion.section variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0}>
        <a
          href="/resume.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 text-[11px] tracking-wider text-txt-muted hover:text-t-green transition"
        >
          <span className="text-t-green/40">&gt;</span> DOWNLOAD RESUME.PDF
        </a>
      </motion.section>

      {/* ── Footer ── */}
      <footer className="border-t border-line pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-txt-muted">
        <span>© {new Date().getFullYear()} Anirudh Kumar Mandala</span>
        <span>Built with Next.js + Tailwind CSS</span>
      </footer>
    </div>
  );
}
