"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const pages = [
  { href: "/", label: "HOME" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/experience", label: "EXPERIENCE" },
];

export function TerminalNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-12 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-t-green font-bold text-sm tracking-tight group-hover:glow transition-all">
            AKM
          </span>
          <span className="hidden sm:inline text-[10px] text-txt-muted tracking-widest">
            TERMINAL
          </span>
        </Link>

        <div className="flex items-center gap-1">
          {pages.map((p) => {
            const active = pathname === p.href;
            return (
              <Link
                key={p.href}
                href={p.href}
                className={clsx(
                  "px-3 py-1.5 text-[11px] tracking-wider transition-all rounded-sm",
                  active
                    ? "text-t-green bg-t-green/8"
                    : "text-txt-muted hover:text-txt-secondary"
                )}
              >
                {p.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-t-green pulse-dot" />
          <span className="text-[10px] text-txt-muted hidden sm:inline">ONLINE</span>
        </div>
      </div>
    </nav>
  );
}
