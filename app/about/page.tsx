"use client";

import Link from "next/link";
import { PageWrapper } from "../../components/PageWrapper";
import { FadeIn } from "../../components/FadeIn";

const skills = [
  { category: "Programming", items: ["Python", "R", "SQL", "MATLAB", "JavaScript", "TypeScript"] },
  { category: "Finance", items: ["Valuation", "DCF Modeling", "M&A", "Due Diligence", "Risk Management"] },
  { category: "Quant", items: ["Monte Carlo", "Regression", "Portfolio Optimization", "FinBERT", "Time Series"] },
  { category: "Engineering", items: ["React", "Next.js", "FastAPI", "Docker", "PostgreSQL", "Git"] },
  { category: "Tools", items: ["Excel / VBA", "Power BI", "Tableau", "ArcGIS"] },
];

const certifications = [
  "CFA Level I Candidate (May 2026)",
  "Financial Markets — Yale University",
  "Machine Learning — University of London",
  "Marketing — Wharton School",
];

const honors = ["Spring 2024", "Fall 2024", "Winter 2025", "Spring 2025", "Fall 2025"];

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className="space-y-16">
        {/* Header */}
        <section>
          <FadeIn>
            <Link href="/" className="text-[13px] text-zinc-500 hover:text-white transition">
              &larr; Home
            </Link>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="mt-6 text-3xl font-bold tracking-tight">About</h1>
          </FadeIn>
        </section>

        {/* Story */}
        <section className="space-y-5">
          <FadeIn>
            <p className="text-[16px] text-zinc-300 leading-relaxed">
              I&apos;m a double-major at the University of California, Irvine -- studying
              Applied Mathematics with a Data Science track, and Quantitative Economics.
              I graduate in 2027.
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <p className="text-[16px] text-zinc-400 leading-relaxed">
              What I care about most is building things that make complex financial
              ideas tangible. My most recent project is a full-stack portfolio
              analytics dashboard that runs Monte Carlo simulations, Fama-French
              factor regressions, and efficient frontier optimization -- the kind
              of tools that used to require a Bloomberg terminal.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-[16px] text-zinc-400 leading-relaxed">
              Before that, I interned at a private equity firm where I screened
              acquisition targets and built DCF models. This spring and summer,
              I&apos;m joining Profit Recovery Partners as a GLP intern. I also lead
              external relations for UCI&apos;s Venture Capital Society, where I run
              workshops on valuation and financial modeling.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-[16px] text-zinc-400 leading-relaxed">
              I&apos;m a CFA Level I candidate sitting in May 2026, and I&apos;ve been on
              the Dean&apos;s Honors List five consecutive quarters.
            </p>
          </FadeIn>
        </section>

        {/* Education */}
        <section>
          <FadeIn>
            <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-6">Education</h2>
          </FadeIn>
          <div className="space-y-4">
            <FadeIn delay={0.05}>
              <div className="glass rounded-xl p-5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <div className="font-medium text-zinc-200">B.S. Applied Mathematics &amp; Computational Sciences</div>
                    <div className="text-[13px] text-accent-1 mt-0.5">Data Science Track</div>
                    <div className="text-[13px] text-zinc-500 mt-1">University of California, Irvine</div>
                  </div>
                  <span className="text-[13px] text-zinc-600 shrink-0">Expected 2027</span>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="glass rounded-xl p-5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <div className="font-medium text-zinc-200">B.A. Quantitative Economics</div>
                    <div className="text-[13px] text-zinc-500 mt-1">University of California, Irvine</div>
                  </div>
                  <span className="text-[13px] text-zinc-600 shrink-0">Expected 2027</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Honors */}
          <FadeIn delay={0.15}>
            <div className="mt-5 glass rounded-xl p-5">
              <div className="text-[13px] font-medium text-zinc-400 mb-3">Dean&apos;s Honors List</div>
              <div className="flex flex-wrap gap-2">
                {honors.map((h) => (
                  <span key={h} className="rounded-full bg-accent-1/10 border border-accent-1/20 px-3 py-1 text-[12px] text-accent-1">
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Skills */}
        <section>
          <FadeIn>
            <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-6">Skills</h2>
          </FadeIn>
          <div className="space-y-5">
            {skills.map((group, gi) => (
              <FadeIn key={group.category} delay={gi * 0.05}>
                <div>
                  <div className="text-[13px] text-zinc-500 mb-2">{group.category}</div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((s) => (
                      <span key={s} className="rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 text-[12px] text-zinc-300">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section>
          <FadeIn>
            <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-6">Certifications</h2>
          </FadeIn>
          <div className="space-y-2.5">
            {certifications.map((c, i) => (
              <FadeIn key={c} delay={i * 0.05}>
                <div className="flex items-center gap-3 text-[14px]">
                  <span className="text-accent-1/60">&#10003;</span>
                  <span className="text-zinc-300">{c}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Awards */}
        <section>
          <FadeIn>
            <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-6">Awards</h2>
          </FadeIn>
          <FadeIn delay={0.05}>
            <div className="flex items-center gap-3 text-[14px]">
              <span className="text-accent-2/60">&#9733;</span>
              <div>
                <span className="text-zinc-300">RHA President of the Year</span>
                <span className="text-zinc-600 ml-2">PACURH, 2023</span>
              </div>
            </div>
          </FadeIn>
        </section>
      </div>
    </PageWrapper>
  );
}
