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

const experiences = [
  {
    title: "GLP Intern",
    company: "Profit Recovery Partners",
    location: "Santa Ana, CA",
    period: "Spring / Summer 2026",
    status: "INCOMING",
    statusColor: "text-t-amber",
    bullets: [],
  },
  {
    title: "Private Equity Intern",
    company: "VerdeVista Partners",
    location: "West Grove, PA",
    period: "Oct 2025 — Mar 2026",
    status: "COMPLETED",
    statusColor: "text-t-green",
    bullets: [
      "Screened 50+ lower-middle-market acquisition targets across industrial and service sectors against investment criteria.",
      "Built integrated 3-statement and DCF models to evaluate IRR, downside risk, and scenario sensitivity.",
      "Conducted market sizing, competitive analysis, and management diligence; supported IC materials and deal execution.",
    ],
  },
  {
    title: "External Relations Vice President",
    company: "Venture Capital Society at UC Irvine",
    location: "Irvine, CA",
    period: "May 2025 — Present",
    status: "ACTIVE",
    statusColor: "text-t-green",
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
    status: "COMPLETED",
    statusColor: "text-t-green",
    bullets: [
      "Directed 15-person executive board and managed $25,000 budget for a 1,300+ attendee campus event.",
      "Applied regression analysis to operational and community data to support budgeting decisions and resource allocation.",
    ],
  },
];

const education = [
  {
    degree: "B.S. Applied Mathematics & Computational Sciences",
    track: "Data Science Track",
    school: "University of California, Irvine",
    year: "Expected 2027",
  },
  {
    degree: "B.A. Quantitative Economics",
    track: null,
    school: "University of California, Irvine",
    year: "Expected 2027",
  },
];

const honors = ["Spring 2024", "Fall 2024", "Winter 2025", "Spring 2025", "Fall 2025"];

const certifications = [
  { name: "CFA Level I Candidate", org: "CFA Institute — May 2026" },
  { name: "Financial Markets", org: "Yale University" },
  { name: "Machine Learning", org: "University of London" },
  { name: "Marketing", org: "Wharton School" },
];

const awards = [
  { name: "RHA President of the Year", org: "PACURH — 2023" },
];

export default function ExperiencePage() {
  return (
    <div className="space-y-16">
      {/* Header */}
      <motion.div variants={fade} initial="hidden" animate="show" custom={0}>
        <Link href="/" className="text-[10px] tracking-wider text-txt-muted hover:text-t-green transition">
          ← BACK TO HOME
        </Link>
        <h1 className="mt-4 text-2xl font-bold text-txt tracking-tight">Experience</h1>
        <p className="mt-2 text-[13px] font-sans text-txt-secondary max-w-xl">
          Professional roles, education, certifications, and awards.
        </p>
      </motion.div>

      {/* ── Work Experience ── */}
      <motion.section variants={fade} initial="hidden" animate="show" custom={1}>
        <div className="flex items-center gap-3 mb-4">
          <div className="text-[10px] tracking-widest text-txt-muted">WORK EXPERIENCE</div>
          <div className="flex-1 border-t border-line" />
          <span className="text-[10px] text-txt-muted">{experiences.length} RECORDS</span>
        </div>

        <div className="space-y-3">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              variants={fade}
              initial="hidden"
              animate="show"
              custom={i + 2}
              className="t-card rounded p-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
                <div>
                  <div className="text-[14px] font-bold text-txt">{exp.title}</div>
                  <div className="text-[12px] text-t-amber/80 mt-0.5">{exp.company}</div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-[11px] text-txt-muted">{exp.period}</span>
                  <span className={`text-[10px] font-bold tracking-wider ${exp.statusColor}`}>
                    [{exp.status}]
                  </span>
                </div>
              </div>
              <div className="text-[11px] text-txt-muted mb-3">{exp.location}</div>

              {exp.bullets.length > 0 && (
                <div className="space-y-2 border-t border-line pt-3">
                  {exp.bullets.map((b, j) => (
                    <div key={j} className="flex gap-2 text-[11px] font-sans text-txt-secondary leading-relaxed">
                      <span className="text-t-green/40 mt-px shrink-0">▸</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── Education ── */}
      <motion.section variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0}>
        <div className="flex items-center gap-3 mb-4">
          <div className="text-[10px] tracking-widest text-txt-muted">EDUCATION</div>
          <div className="flex-1 border-t border-line" />
        </div>

        <div className="space-y-3">
          {education.map((d, i) => (
            <div key={i} className="t-card rounded p-5">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <div className="text-[14px] font-bold text-txt">{d.degree}</div>
                  {d.track && <div className="text-[11px] text-t-amber/80 mt-0.5">{d.track}</div>}
                  <div className="text-[11px] text-txt-muted mt-1">{d.school}</div>
                </div>
                <span className="text-[11px] text-txt-muted shrink-0">{d.year}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Dean's List */}
        <div className="mt-4 t-card rounded p-5">
          <div className="text-[10px] font-bold tracking-widest text-t-amber mb-3">DEAN&apos;S HONORS LIST</div>
          <div className="flex flex-wrap gap-2">
            {honors.map((h) => (
              <span key={h} className="rounded border border-t-amber/15 bg-t-amber/5 px-3 py-1 text-[11px] text-t-amber/80">
                {h}
              </span>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── Certifications & Awards ── */}
      <motion.section variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0}>
        <div className="flex items-center gap-3 mb-4">
          <div className="text-[10px] tracking-widest text-txt-muted">CERTIFICATIONS & AWARDS</div>
          <div className="flex-1 border-t border-line" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="t-card rounded p-5">
            <div className="text-[10px] font-bold tracking-widest text-t-green mb-3">CERTIFICATIONS</div>
            <div className="space-y-2.5">
              {certifications.map((c) => (
                <div key={c.name} className="flex gap-2 text-[12px]">
                  <span className="text-t-green/40 mt-px shrink-0">✓</span>
                  <div>
                    <div className="font-medium text-txt">{c.name}</div>
                    <div className="text-[10px] text-txt-muted">{c.org}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="t-card rounded p-5">
            <div className="text-[10px] font-bold tracking-widest text-t-amber mb-3">AWARDS</div>
            <div className="space-y-2.5">
              {awards.map((a) => (
                <div key={a.name} className="flex gap-2 text-[12px]">
                  <span className="text-t-amber/40 mt-px shrink-0">★</span>
                  <div>
                    <div className="font-medium text-txt">{a.name}</div>
                    <div className="text-[10px] text-txt-muted">{a.org}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
