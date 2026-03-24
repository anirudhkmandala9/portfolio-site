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
      <div className="mx-auto max-w-3xl px-6 pt-4">
        <div className="flex h-12 items-center justify-between rounded-full border border-[#EDE9E3] bg-white/80 px-5 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
          <Link href="/" className="font-serif text-lg text-navy tracking-tight">
            Anirudh
          </Link>

          <div className="flex items-center gap-1">
            {pages.map((p) => {
              const active = pathname === p.href;
              return (
                <Link
                  key={p.href}
                  href={p.href}
                  className={clsx(
                    "px-3 py-1.5 text-[13px] rounded-full transition-all duration-200",
                    active
                      ? "bg-navy text-white font-medium"
                      : "text-gray-500 hover:text-navy hover:bg-gray-50"
                  )}
                >
                  {p.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
