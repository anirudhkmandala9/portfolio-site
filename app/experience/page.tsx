"use client";

import Link from "next/link";
import { PageWrapper } from "../../components/PageWrapper";
import { FadeIn } from "../../components/FadeIn";

const experiences = [
  {
    title: "GLP Intern",
    company: "Profit Recovery Partners",
    location: "Santa Ana, CA",
    period: "Spring / Summer 2026",
    badge: "Incoming",
    bullets: [],
  },
  {
    title: "Private Equity Intern",
    company: "VerdeVista Partners",
    location: "West Grove, PA",
    period: "Oct 2025 — Mar 2026",
    badge: null,
    bullets: [
      "Screened 50+ lower-middle-market acquisition targets across industrial and service sectors.",
      "Built integrated 3-statement and DCF models to evaluate IRR, downside risk, and scenario sensitivity.",
      "Conducted market sizing, competitive analysis, and management diligence; supported IC materials and deal execution.",
    ],
  },
  {
    title: "External Relations Vice President",
    company: "Venture Capital Society at UC Irvine",
    location: "Irvine, CA",
    period: "May 2025 — Present",
    badge: null,
    bullets: [
      "Performed diligence on VC firms, quant funds, and investment banks; structured partnerships benefiting 100+ members.",
      "Led workshops on valuation and financial modeling (DCF, comps, sensitivity).",
    ],
  },
  {
    title: "Student President",
    company: "UC Irvine Student Housing",
    location: "Irvine, CA",
    period: "Sep 2023 — Jun 2025",
    badge: null,
    bullets: [
      "Directed 15-person executive board and managed $25,000 budget for a 1,300+ attendee campus event.",
      "Applied regression analysis to operational data to support budgeting decisions.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <PageWrapper>
      <div className="space-y-16">
        <section>
          <FadeIn>
            <Link href="/" className="text-[13px] text-gray-400 hover:text-navy transition">&larr; Home</Link>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="mt-6 font-serif text-3xl text-navy tracking-tight">Experience</h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-3 text-[16px] text-gray-500 max-w-xl leading-relaxed">
              Where I&apos;ve worked and what I&apos;ve done.
            </p>
          </FadeIn>
        </section>

        {/* Timeline */}
        <section>
          <div className="relative">
            <div className="absolute left-[7px] top-3 bottom-3 w-px bg-gray-200 hidden sm:block" />

            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <FadeIn key={i} delay={i * 0.06}>
                  <div className="relative sm:pl-10">
                    <div className="absolute left-0 top-2 hidden sm:block">
                      <div className="h-[15px] w-[15px] rounded-full border-2 border-gray-200 bg-bg flex items-center justify-center">
                        <div className="h-[5px] w-[5px] rounded-full bg-gold" />
                      </div>
                    </div>

                    <div className="card p-5 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
                        <div>
                          <div className="flex items-center gap-2.5 flex-wrap">
                            <h3 className="font-semibold text-navy">{exp.title}</h3>
                            {exp.badge && <span className="tag text-[10px]">{exp.badge}</span>}
                          </div>
                          <div className="text-[14px] text-gold-dark mt-0.5">{exp.company}</div>
                        </div>
                        <div className="text-[12px] text-gray-400 shrink-0">{exp.period}</div>
                      </div>
                      <div className="text-[12px] text-gray-400 mb-3">{exp.location}</div>

                      {exp.bullets.length > 0 && (
                        <div className="space-y-2.5 pt-3 border-t border-gray-100">
                          {exp.bullets.map((b, j) => (
                            <div key={j} className="flex gap-2.5 text-[13px] text-gray-500 leading-relaxed">
                              <span className="text-gold/60 mt-0.5 shrink-0">&#8250;</span>
                              <span>{b}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <FadeIn>
          <div className="text-center pt-4">
            <a
              href="/resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-[13px] text-gray-500 transition hover:border-gold/40 hover:text-navy shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
            >
              Download full resume
              <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" />
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </PageWrapper>
  );
}
