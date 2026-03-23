"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

function LinkedinIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center px-6 scanline grid-bg">
      <div className="relative max-w-3xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Status bar */}
          <div className="mb-6 flex items-center gap-3 text-[11px]">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-terminal-green" />
              <span className="text-terminal-green">ONLINE</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-terminal-amber">CFA Level I Candidate — May 2026</span>
          </div>

          {/* Name */}
          <div className="mb-2 text-[11px] text-slate-600 tracking-widest uppercase">
            &gt; system.identify()
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-terminal-green glow-green tracking-tight leading-tight">
            Anirudh Kumar
            <br />
            Mandala
            <span className="cursor-blink text-terminal-green">_</span>
          </h1>

          {/* Tagline */}
          <div className="mt-4 flex items-center gap-2">
            <span className="text-terminal-amber text-sm font-medium glow-amber">Finance × Technology</span>
          </div>

          <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-400 font-sans">
            Double-major at UC Irvine in Applied Mathematics (Data Science) and Quantitative Economics.
            Building at the intersection of financial analysis, quantitative modeling, and software engineering.
          </p>

          {/* Links */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="mailto:akmandal@uci.edu"
              className="flex items-center gap-2 rounded border border-border bg-bg-secondary px-4 py-2 text-[11px] text-slate-300 transition hover:border-terminal-green/40 hover:text-terminal-green"
            >
              <Mail size={13} />
              akmandal@uci.edu
            </a>
            <a
              href="https://linkedin.com/in/anirudhkmandala"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded border border-border bg-bg-secondary px-4 py-2 text-[11px] text-slate-300 transition hover:border-terminal-green/40 hover:text-terminal-green"
            >
              <LinkedinIcon size={13} />
              LinkedIn
            </a>
            <a
              href="https://github.com/anirudhkmandala9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded border border-border bg-bg-secondary px-4 py-2 text-[11px] text-slate-300 transition hover:border-terminal-green/40 hover:text-terminal-green"
            >
              <GithubIcon size={13} />
              GitHub
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="flex items-center gap-2 rounded border border-terminal-green/30 bg-terminal-green/5 px-4 py-2 text-[11px] text-terminal-green transition hover:bg-terminal-green/10"
            >
              &gt; DOWNLOAD RESUME.PDF
            </a>
          </div>

          {/* Terminal prompt */}
          <div className="mt-12 text-[11px] text-slate-600">
            <span className="text-terminal-green/40">anirudh@portfolio</span>
            <span className="text-slate-600">:</span>
            <span className="text-terminal-amber/40">~</span>
            <span className="text-slate-600">$ </span>
            <span className="text-slate-500">scroll down to explore</span>
            <span className="cursor-blink text-terminal-green ml-0.5">▌</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
