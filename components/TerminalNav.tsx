"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const pages = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 z-50 w-full">
      <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-6">
        <Link href="/" className="text-sm font-semibold text-zinc-100 hover:text-white transition">
          AKM
        </Link>

        <div className="flex items-center gap-1 rounded-full glass px-1.5 py-1.5">
          {pages.map((p) => {
            const active = pathname === p.href;
            return (
              <Link
                key={p.href}
                href={p.href}
                className={clsx(
                  "px-3.5 py-1.5 text-[13px] rounded-full transition-all duration-200",
                  active
                    ? "bg-zinc-800 text-white font-medium"
                    : "text-zinc-500 hover:text-zinc-300"
                )}
              >
                {p.label}
              </Link>
            );
          })}
        </div>

        <a
          href="/resume.pdf"
          target="_blank"
          className="text-[13px] text-zinc-500 hover:text-white transition hidden sm:block"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
