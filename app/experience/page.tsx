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
    badgeColor: "bg-accent-2/10 text-accent-2 border-accent-2/20",
    bullets: [],
  },
  {
    title: "Private Equity Intern",
    company: "VerdeVista Partners",
    location: "West Grove, PA",
    period: "Oct 2025 — Mar 2026",
    badge: null,
    badgeColor: "",
    bullets: [
      "Screened 50+ lower-middle-market acquisition targets across industrial and service sectors against firm investment criteria.",
      "Built integrated 3-statement and DCF models to evaluate IRR, downside risk, and scenario sensitivity for each target.",
      "Conducted market sizing, competitive analysis, and management diligence; supported IC materials and deal execution.",
    ],
  },
  {
    title: "External Relations Vice President",
    company: "Venture Capital Society at UC Irvine",
    location: "Irvine, CA",
    period: "May 2025 — Present",
    badge: null,
    badgeColor: "",
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
    badge: null,
    badgeColor: "",
    bullets: [
      "Directed 15-person executive board and managed $25,000 budget for a 1,300+ attendee campus event.",
      "Applied regression analysis to operational and community data to support budgeting decisions and resource allocation.",
    ],
  },
];

export default function ExperiencePage() {
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
            <h1 className="mt-6 text-3xl font-bold tracking-tight">Experience</h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-3 text-[16px] text-zinc-400 max-w-xl leading-relaxed">
              Where I&apos;ve worked and what I&apos;ve done.
            </p>
          </FadeIn>
        </section>

        {/* Timeline */}
        <section>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[7px] top-3 bottom-3 w-px bg-zinc-800/80 hidden sm:block" />

            <div className="space-y-10">
              {experiences.map((exp, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <div className="relative sm:pl-10">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-2 hidden sm:block">
                      <div className="h-[15px] w-[15px] rounded-full border-2 border-zinc-700 bg-bg flex items-center justify-center">
                        <div className="h-[5px] w-[5px] rounded-full bg-accent-1" />
                      </div>
                    </div>

                    <div className="glass rounded-xl p-5 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
                        <div>
                          <div className="flex items-center gap-2.5 flex-wrap">
                            <h3 className="text-[16px] font-semibold text-zinc-100">{exp.title}</h3>
                            {exp.badge && (
                              <span className={`text-[10px] font-medium rounded-full border px-2 py-0.5 ${exp.badgeColor}`}>
                                {exp.badge}
                              </span>
                            )}
                          </div>
                          <div className="text-[14px] text-accent-1/80 mt-0.5">{exp.company}</div>
                        </div>
                        <div className="text-[12px] text-zinc-600 shrink-0">{exp.period}</div>
                      </div>
                      <div className="text-[12px] text-zinc-600 mb-3">{exp.location}</div>

                      {exp.bullets.length > 0 && (
                        <div className="space-y-2.5 pt-3 border-t border-zinc-800/60">
                          {exp.bullets.map((b, j) => (
                            <div key={j} className="flex gap-2.5 text-[13px] text-zinc-400 leading-relaxed">
                              <span className="text-accent-1/40 mt-0.5 shrink-0">&#8250;</span>
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

        {/* CTA */}
        <FadeIn>
          <div className="text-center pt-4">
            <a
              href="/resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/60 px-5 py-2.5 text-[13px] text-zinc-300 transition hover:border-accent-1/40 hover:text-white"
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
