"use client";

import Link from "next/link";
import { PageWrapper } from "../../components/PageWrapper";
import { FadeIn } from "../../components/FadeIn";

const skills = [
  { category: "Programming", items: ["Python", "R", "SQL", "MATLAB", "JavaScript", "TypeScript"] },
  { category: "Finance", items: ["Valuation", "DCF Modeling", "M&A", "Due Diligence", "Risk Management"] },
  { category: "Quant & ML", items: ["Monte Carlo", "Regression", "Portfolio Optimization", "FinBERT", "Time Series"] },
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
        <section>
          <FadeIn>
            <Link href="/" className="text-[13px] text-gray-400 hover:text-navy transition">&larr; Home</Link>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="mt-6 font-serif text-3xl text-navy tracking-tight">About</h1>
          </FadeIn>
        </section>

        {/* Story */}
        <section className="space-y-5">
          <FadeIn>
            <p className="text-[16px] text-gray-600 leading-relaxed">
              I&apos;m a double-major at the University of California, Irvine studying
              Applied Mathematics with a Data Science track and Quantitative Economics.
              I graduate in 2027.
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <p className="text-[16px] text-gray-500 leading-relaxed">
              What I care about most is building things that make complex financial
              ideas tangible. My most recent project is a full-stack portfolio
              analytics dashboard that runs Monte Carlo simulations, Fama-French
              factor regressions, and efficient frontier optimization — the kind
              of tools that used to require a Bloomberg terminal.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-[16px] text-gray-500 leading-relaxed">
              Previously interned at a private equity firm doing deal screening
              and financial modeling. This spring and summer, I&apos;m joining Profit
              Recovery Partners as a GLP intern. I also lead external relations
              for UCI&apos;s Venture Capital Society, running workshops on valuation
              and financial modeling.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-[16px] text-gray-500 leading-relaxed">
              CFA Level I candidate sitting May 2026. Dean&apos;s Honors List five
              consecutive quarters.
            </p>
          </FadeIn>
        </section>

        {/* Education */}
        <section>
          <FadeIn><span className="section-label mb-6 block">Education</span></FadeIn>
          <div className="space-y-4">
            {[
              { degree: "B.S. Applied Mathematics & Computational Sciences", track: "Data Science Track", school: "University of California, Irvine", year: "Expected 2027" },
              { degree: "B.A. Quantitative Economics", track: null, school: "University of California, Irvine", year: "Expected 2027" },
            ].map((d, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="card p-5">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <div className="font-semibold text-navy">{d.degree}</div>
                      {d.track && <div className="text-[13px] text-gold-dark mt-0.5">{d.track}</div>}
                      <div className="text-[13px] text-gray-400 mt-1">{d.school}</div>
                    </div>
                    <span className="text-[13px] text-gray-400 shrink-0">{d.year}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.15}>
            <div className="card p-5 mt-4">
              <div className="text-[13px] font-semibold text-gold-dark mb-3">Dean&apos;s Honors List</div>
              <div className="flex flex-wrap gap-2">
                {honors.map((h) => (
                  <span key={h} className="tag">{h}</span>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Skills */}
        <section>
          <FadeIn><span className="section-label mb-6 block">Skills</span></FadeIn>
          <div className="space-y-5">
            {skills.map((g, gi) => (
              <FadeIn key={g.category} delay={gi * 0.04}>
                <div>
                  <div className="text-[13px] text-gray-400 mb-2.5">{g.category}</div>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <span key={s} className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-[12px] text-gray-600 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
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
          <FadeIn><span className="section-label mb-6 block">Certifications</span></FadeIn>
          <div className="space-y-3">
            {certifications.map((c, i) => (
              <FadeIn key={c} delay={i * 0.04}>
                <div className="flex items-center gap-3 text-[14px]">
                  <span className="text-gold">✓</span>
                  <span className="text-gray-600">{c}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Award */}
        <section>
          <FadeIn><span className="section-label mb-6 block">Awards</span></FadeIn>
          <FadeIn delay={0.04}>
            <div className="flex items-center gap-3 text-[14px]">
              <span className="text-gold">★</span>
              <span className="text-gray-600">RHA President of the Year</span>
              <span className="text-gray-400 text-[12px]">PACURH, 2023</span>
            </div>
          </FadeIn>
        </section>
      </div>
    </PageWrapper>
  );
}
