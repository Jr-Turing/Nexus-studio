"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "ABOUT", href: "/about", anchor: "#about" },
  { label: "EXPERTISE", href: "/expertise", anchor: "#expertise" },
  { label: "PRICING", href: "/pricing", anchor: "#pricing" },
  { label: "CONTACT", href: "/contact", anchor: "#contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="text-sm font-extrabold tracking-[0.25em] text-foreground">
          NEXUS®
        </Link>
        <div className="flex items-center gap-5 md:gap-8">
          {NAV_ITEMS.map((item) => {
            const targetHref = pathname === "/" ? item.anchor : item.href;

            return (
              <Link
                key={item.label}
                href={targetHref}
                className={`font-mono-tech text-[11px] tracking-[0.2em] transition-colors hover:text-foreground ${
                  pathname === item.href ? "text-accent" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="#contact"
            className="hidden border border-border px-4 py-2 font-mono-tech text-[11px] tracking-[0.2em] text-foreground transition-colors hover:border-accent hover:text-accent md:inline-block"
          >
            START A PROJECT ↗
          </Link>
        </div>
      </nav>
    </header>
  );
}
