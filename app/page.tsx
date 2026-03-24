"use client";

import Link from "next/link";
import { PageWrapper } from "../components/PageWrapper";
import { FadeIn } from "../components/FadeIn";

const work = [
  {
    title: "Portfolio Risk Intelligence Dashboard",
    description: "Full-stack analytics platform with Monte Carlo simulation, Fama-French factor analysis, and portfolio optimization.",
    tags: ["Next.js", "FastAPI", "Python"],
    href: "/projects",
  },
  {
    title: "ARBEX AI",
    description: "Real-time financial analytics with automated risk-adjusted metrics and live market data dashboards.",
    tags: ["Python", "React", "PostgreSQL"],
    href: "/projects",
  },
  {
    title: "Sentinance",
    description: "NLP sentiment platform scoring Reddit data with FinBERT for real-time trading signals.",
    tags: ["FastAPI", "FinBERT", "NLP"],
    href: "/projects",
  },
];

function ArrowIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <PageWrapper>
      <div className="space-y-20">
        {/* ── Hero ── */}
        <section className="space-y-6">
          <FadeIn>
            <div className="tag">
              <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block" />
              CFA Level I Candidate &middot; Incoming GLP Intern
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="font-serif text-4xl sm:text-5xl text-navy leading-[1.15] tracking-tight">
              Hi, I&apos;m <span className="text-gradient">Anirudh</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.12}>
            <p className="text-[17px] text-gray-500 leading-relaxed max-w-xl">
              I build financial tools and quantitative models. Studying Applied Math
              and Economics at UC Irvine, working at the intersection of finance,
              data science, and software engineering.
            </p>
          </FadeIn>

          <FadeIn delay={0.16}>
            <div className="flex items-center gap-4 pt-1">
              <a href="https://github.com/anirudhkmandala9" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-navy transition-colors">
                <GithubIcon />
              </a>
              <a href="https://linkedin.com/in/anirudhkmandala" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-navy transition-colors">
                <LinkedinIcon />
              </a>
              <a href="mailto:akmandal@uci.edu" className="text-gray-400 hover:text-navy transition-colors">
                <MailIcon />
              </a>
            </div>
          </FadeIn>
        </section>

        {/* ── Selected Work ── */}
        <section>
          <FadeIn>
            <div className="flex items-center justify-between mb-6">
              <span className="section-label">Selected Work</span>
              <Link href="/projects" className="group text-[13px] text-gray-400 hover:text-navy transition flex items-center gap-1">
                View all <ArrowIcon />
              </Link>
            </div>
          </FadeIn>

          <div className="space-y-4">
            {work.map((w, i) => (
              <FadeIn key={w.title} delay={i * 0.06}>
                <Link href={w.href} className="group card block p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2 min-w-0">
                      <h3 className="font-semibold text-navy group-hover:text-gold-dark transition">
                        {w.title}
                      </h3>
                      <p className="text-[14px] text-gray-500 leading-relaxed">{w.description}</p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {w.tags.map((t) => (
                          <span key={t} className="text-[11px] text-gray-400 bg-gray-50 border border-gray-100 rounded-full px-2.5 py-0.5">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="text-gray-300 group-hover:text-gold transition shrink-0 mt-1">
                      <ArrowIcon />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ── Currently ── */}
        <section>
          <FadeIn>
            <span className="section-label mb-6 block">Currently</span>
          </FadeIn>
          <div className="space-y-4">
            {[
              { role: "Incoming GLP Intern", org: "Profit Recovery Partners", note: "Spring / Summer 2026" },
              { role: "External Relations VP", org: "Venture Capital Society at UCI", note: "2025 — Present" },
            ].map((r, i) => (
              <FadeIn key={r.role} delay={i * 0.06}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-medium text-navy">{r.role}</div>
                    <div className="text-[14px] text-gray-400 mt-0.5">{r.org}</div>
                  </div>
                  <span className="text-[12px] text-gray-400 shrink-0 mt-0.5">{r.note}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ── Quick links ── */}
        <FadeIn>
          <section className="flex flex-wrap gap-x-4 gap-y-2">
            <Link href="/about" className="group text-[13px] text-gray-400 hover:text-navy transition flex items-center gap-1">
              More about me <ArrowIcon />
            </Link>
            <span className="text-gray-200">·</span>
            <Link href="/experience" className="group text-[13px] text-gray-400 hover:text-navy transition flex items-center gap-1">
              Full experience <ArrowIcon />
            </Link>
            <span className="text-gray-200">·</span>
            <a href="/resume.pdf" target="_blank" className="group text-[13px] text-gray-400 hover:text-navy transition flex items-center gap-1">
              Resume <ArrowIcon />
            </a>
          </section>
        </FadeIn>
      </div>
    </PageWrapper>
  );
}
