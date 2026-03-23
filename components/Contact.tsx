"use client";

import { motion } from "framer-motion";
import { Mail, FileText } from "lucide-react";

function LinkedinIcon(props: React.SVGProps<SVGSVGElement> & { size?: number }) {
  const { size = 24, ...rest } = props;
  return (
    <svg {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon(props: React.SVGProps<SVGSVGElement> & { size?: number }) {
  const { size = 24, ...rest } = props;
  return (
    <svg {...rest} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const links = [
  {
    label: "Email",
    value: "akmandal@uci.edu",
    href: "mailto:akmandal@uci.edu",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/anirudhkmandala",
    href: "https://linkedin.com/in/anirudhkmandala",
    icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    value: "github.com/anirudhkmandala9",
    href: "https://github.com/anirudhkmandala9",
    icon: GithubIcon,
  },
];

export function Contact() {
  return (
    <section id="contact" className="px-6 py-20 bg-bg-secondary/30">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center gap-3">
          <span className="text-terminal-green text-[11px]">&gt;</span>
          <h2 className="text-lg font-bold text-terminal-green glow-green tracking-wide">CONTACT</h2>
          <div className="flex-1 border-t border-border" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="terminal-card rounded p-6 text-center">
            <p className="text-sm font-sans text-slate-400 max-w-md mx-auto leading-relaxed">
              Open to conversations about internships, projects, or anything at the
              intersection of finance and technology.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("mailto") ? undefined : "_blank"}
                rel={l.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="terminal-card rounded p-4 flex items-center gap-3 group"
              >
                <l.icon size={16} className="text-terminal-green/50 group-hover:text-terminal-green transition shrink-0" />
                <div className="min-w-0">
                  <div className="text-[10px] text-slate-600 uppercase tracking-widest">{l.label}</div>
                  <div className="text-[11px] text-slate-300 truncate">{l.value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Resume download */}
          <div className="text-center">
            <a
              href="/resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 rounded border border-terminal-green/30 bg-terminal-green/5 px-6 py-3 text-sm text-terminal-green font-medium transition hover:bg-terminal-green/10 hover:border-terminal-green/50"
            >
              <FileText size={16} />
              &gt; DOWNLOAD RESUME.PDF
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
