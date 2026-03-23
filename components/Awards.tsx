"use client";

import { motion } from "framer-motion";
import { Award, BookOpen } from "lucide-react";

const awards = [
  {
    title: "RHA President of the Year",
    org: "PACURH",
    year: "2023",
    icon: Award,
  },
  {
    title: "CFA Level I Candidate",
    org: "CFA Institute",
    year: "May 2026",
    icon: BookOpen,
  },
];

const certificates = [
  { name: "Financial Markets", issuer: "Yale University" },
  { name: "Machine Learning", issuer: "University of London" },
  { name: "Marketing", issuer: "Wharton School" },
];

export function Awards() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center gap-3">
          <span className="text-terminal-green text-[11px]">&gt;</span>
          <h2 className="text-lg font-bold text-terminal-green glow-green tracking-wide">AWARDS & CERTIFICATIONS</h2>
          <div className="flex-1 border-t border-border" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="grid gap-4 md:grid-cols-2"
        >
          {/* Awards */}
          <div className="terminal-card rounded p-5">
            <div className="text-[10px] font-bold tracking-widest text-terminal-amber mb-4">[AWARDS]</div>
            <div className="space-y-3">
              {awards.map((a) => (
                <div key={a.title} className="flex items-center gap-3">
                  <a.icon size={14} className="text-terminal-amber/60 shrink-0" />
                  <div>
                    <div className="text-[12px] font-semibold text-slate-200">{a.title}</div>
                    <div className="text-[10px] text-slate-500">
                      {a.org} — {a.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div className="terminal-card rounded p-5">
            <div className="text-[10px] font-bold tracking-widest text-terminal-green mb-4">[CERTIFICATES]</div>
            <div className="space-y-3">
              {certificates.map((c) => (
                <div key={c.name} className="flex items-center gap-3">
                  <span className="text-terminal-green/50 text-[10px] shrink-0">✓</span>
                  <div>
                    <div className="text-[12px] font-semibold text-slate-200">{c.name}</div>
                    <div className="text-[10px] text-slate-500">{c.issuer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
