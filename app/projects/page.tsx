"use client";

import Link from "next/link";
import { PageWrapper } from "../../components/PageWrapper";
import { FadeIn } from "../../components/FadeIn";

function ExternalIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const projects = [
  {
    title: "Portfolio Risk Intelligence Dashboard",
    tagline: "Institutional-grade portfolio analytics in a web app",
    description: "Upload a portfolio and instantly run VaR, Expected Shortfall, Monte Carlo simulation, Fama-French 3-factor regression, efficient frontier optimization, scenario stress testing, and benchmark comparison against SPY.",
    tech: ["Next.js", "TypeScript", "FastAPI", "Python", "PostgreSQL", "Docker"],
    highlights: [
      "5,000-path Monte Carlo simulation with percentile fan charts",
      "Fama-French 3-factor alpha decomposition",
      "Efficient frontier with min-vol and max-Sharpe optimization",
      "Scenario stress testing with custom sector/holding shocks",
      "Benchmark comparison with rolling beta and tracking error",
    ],
    live: "https://portfolio-risk-intelligence-dashboa.vercel.app",
    github: "https://github.com/anirudhkmandala9/portfolio-risk-intelligence-dashboard",
    featured: true,
  },
  {
    title: "ARBEX AI",
    tagline: "Real-time financial analytics and market data",
    description: "Integrates live market APIs to automate data ingestion, compute risk-adjusted performance metrics, and serve interactive dashboards with minimal latency.",
    tech: ["Python", "React", "PostgreSQL", "REST APIs"],
    highlights: [
      "Live market data ingestion and normalization",
      "Automated risk-adjusted metric computation",
      "Interactive performance dashboards",
    ],
    live: null,
    github: null,
    featured: false,
  },
  {
    title: "Sentinance",
    tagline: "NLP-powered trading sentiment from Reddit",
    description: "Aggregates Reddit financial data and runs it through a FinBERT transformer model to generate real-time trading sentiment signals with event spike detection.",
    tech: ["Python", "FastAPI", "React", "FinBERT", "NLP"],
    highlights: [
      "FinBERT-based financial sentiment classification",
      "Event spike detection across Reddit data streams",
      "Low-latency REST API for signal serving",
    ],
    live: null,
    github: null,
    featured: false,
  },
  {
    title: "Williamsburg Gentrification Analysis",
    tagline: "Interactive geographic analysis of displacement",
    description: "ArcGIS StoryMap integrating ACS demographic data with historical HOLC redlining maps to quantify redevelopment-driven inequality in Williamsburg, Brooklyn.",
    tech: ["ArcGIS", "Census Data", "HOLC Maps"],
    highlights: [
      "ACS demographic overlays with HOLC redlining data",
      "Rezoning impact analysis with displacement metrics",
      "Interactive StoryMap narrative",
    ],
    live: null,
    github: null,
    featured: false,
  },
];

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <div className="space-y-12">
        <section>
          <FadeIn>
            <Link href="/" className="text-[13px] text-gray-400 hover:text-navy transition">&larr; Home</Link>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="mt-6 font-serif text-3xl text-navy tracking-tight">Projects</h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-3 text-[16px] text-gray-500 max-w-xl leading-relaxed">
              Things I&apos;ve built at the intersection of finance, data, and engineering.
            </p>
          </FadeIn>
        </section>

        <div className="space-y-6">
          {projects.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.05}>
              <div className={`card p-6 sm:p-8 ${p.featured ? "border-gold/30" : ""}`}>
                {p.featured && (
                  <div className="tag mb-4">
                    <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-gold inline-block" />
                    Featured
                  </div>
                )}

                <h2 className="text-xl font-semibold text-navy">{p.title}</h2>
                <p className="text-[14px] text-gold-dark mt-1">{p.tagline}</p>
                <p className="text-[14px] text-gray-500 leading-relaxed mt-3">{p.description}</p>

                <div className="mt-4 space-y-2">
                  {p.highlights.map((h) => (
                    <div key={h} className="flex gap-2.5 text-[13px] text-gray-400">
                      <span className="text-gold/70 mt-0.5 shrink-0">&#8250;</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6 pt-5 border-t border-gray-100">
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="text-[11px] text-gray-400 bg-gray-50 border border-gray-100 rounded-full px-2.5 py-0.5">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[12px] text-gray-400 hover:text-navy transition">
                        <ExternalIcon /> Live
                      </a>
                    )}
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[12px] text-gray-400 hover:text-navy transition">
                        <GithubIcon /> Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
