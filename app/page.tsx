"use client";

import { TerminalNav } from "../components/TerminalNav";
import { Hero } from "../components/Hero";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Education } from "../components/Education";
import { Awards } from "../components/Awards";
import { Contact } from "../components/Contact";

export default function HomePage() {
  return (
    <>
      <TerminalNav />
      <main className="pt-14">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Awards />
        <Contact />

        {/* Footer */}
        <footer className="border-t border-border px-6 py-8">
          <div className="mx-auto max-w-4xl flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-[10px] text-slate-600">
              <span className="text-terminal-green/40">anirudh@portfolio</span>
              <span className="text-slate-700">:</span>
              <span className="text-terminal-amber/40">~</span>
              <span className="text-slate-700">$ </span>
              <span>exit 0</span>
            </div>
            <div className="flex items-center gap-4 text-[10px] text-slate-600">
              <span>Built with Next.js + Tailwind CSS</span>
              <span className="text-slate-700">|</span>
              <span>© {new Date().getFullYear()} Anirudh Kumar Mandala</span>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
