"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";

const tabs = [
  { id: "home", label: "HOME", href: "#home" },
  { id: "experience", label: "EXPERIENCE", href: "#experience" },
  { id: "projects", label: "PROJECTS", href: "#projects" },
  { id: "skills", label: "SKILLS", href: "#skills" },
  { id: "education", label: "EDUCATION", href: "#education" },
  { id: "contact", label: "CONTACT", href: "#contact" },
];

export function TerminalNav() {
  const [active, setActive] = useState("home");
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0.1 }
    );

    for (const tab of tabs) {
      const el = document.getElementById(tab.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-bg-primary/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-1.5">
          <span className="text-terminal-green font-bold text-sm tracking-tight">AKM</span>
          <span className="text-[10px] text-terminal-green/40">TERMINAL</span>
        </div>

        <div className="hidden items-center gap-0.5 md:flex">
          {tabs.map((tab) => (
            <a
              key={tab.id}
              href={tab.href}
              onClick={() => setActive(tab.id)}
              className={clsx(
                "px-3 py-1.5 text-[11px] font-medium tracking-wider transition-all",
                active === tab.id
                  ? "bg-terminal-green/10 text-terminal-green border-b-2 border-terminal-green"
                  : "text-slate-500 hover:text-slate-300 hover:bg-white/[0.03]"
              )}
            >
              {tab.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[10px] tabular-nums text-terminal-green/60">{time}</span>
          <span className="h-2 w-2 rounded-full bg-terminal-green animate-pulse" />
        </div>
      </div>
    </nav>
  );
}
