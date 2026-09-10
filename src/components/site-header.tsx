"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "ABOUT", href: "/about", anchor: "#about" },
  { label: "EXPERTISE", href: "/expertise", anchor: "#expertise" },
  { label: "PRICING", href: "/pricing", anchor: "#pricing" },
  { label: "CONTACT", href: "/contact", anchor: "#contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="text-sm font-extrabold tracking-[0.25em] text-foreground">
          NEXUS®
        </Link>
        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-border text-foreground md:hidden"
        >
          <span className="h-px w-5 bg-current" />
          <span className="h-px w-5 bg-current" />
          <span className="h-px w-5 bg-current" />
        </button>
        <div className="hidden items-center gap-5 md:flex md:gap-8">
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
        {isMenuOpen && (
          <div
            id="mobile-navigation"
            className="absolute right-4 top-full w-[calc(100%-2rem)] max-w-sm border border-border bg-background py-2 shadow-[0_16px_40px_rgba(0,0,0,0.35)] md:hidden"
          >
            {NAV_ITEMS.map((item) => {
              const targetHref = pathname === "/" ? item.anchor : item.href;

              return (
                <Link
                  key={item.label}
                  href={targetHref}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block border-b border-border/60 px-5 py-3.5 font-mono-tech text-xs tracking-[0.2em] transition-colors last:border-b-0 hover:bg-muted hover:text-foreground ${
                    pathname === item.href ? "text-accent" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
}
