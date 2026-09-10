import type { Metadata } from "next";
import Link from "next/link";

import { About } from "@/components/about";
import { Builders } from "@/components/builders";
import { Contact } from "@/components/contact";
import { Expertise } from "@/components/expertise";
import { ParticleText } from "@/components/particle-text";
import { Pricing } from "@/components/pricing";

export const metadata: Metadata = {
  title: "NEXUS — Next-Generation Freelance Technology Studio",
  description:
    "NEXUS connects ambitious ideas with exceptional builders to create high-performance digital products for the AI era."
};

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Hero */}
      <main className="relative flex min-h-screen flex-col items-center justify-center px-6">
        {/* Fine technical frame lines */}
        <div className="pointer-events-none absolute inset-x-6 top-24 hidden justify-end font-mono-tech text-[10px] tracking-[0.3em] text-muted-foreground/60 md:flex md:inset-x-10">
          <span>EST. 2026</span>
        </div>

        <p className="mb-6 font-mono-tech text-[11px] tracking-[0.35em] text-muted-foreground md:text-xs">
          NEXT-GENERATION FREELANCE STUDIO
        </p>

        {/* Signature particle typography */}
        <ParticleText text="NEXUS" />

        <p className="mt-8 max-w-xl text-center text-base leading-relaxed text-muted-foreground md:text-lg">
          We connect ambitious ideas with exceptional builders to create high-performance digital
          products.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#contact"
            className="bg-primary px-7 py-3 font-mono-tech text-xs tracking-[0.2em] text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            START A PROJECT ↗
          </Link>
          <Link
            href="#expertise"
            className="border border-border px-7 py-3 font-mono-tech text-xs tracking-[0.2em] text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            OUR SERVICES ↗
          </Link>
          <Link
            href="#about"
            className="border border-border px-7 py-3 font-mono-tech text-xs tracking-[0.2em] text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            ABOUT US ↗
          </Link>
        </div>

        <div className="pointer-events-none absolute inset-x-6 bottom-8 hidden justify-between font-mono-tech text-[10px] tracking-[0.3em] text-muted-foreground/60 md:flex md:inset-x-10">
          <span>IDEAS → PEOPLE → SKILLS → PRODUCTS</span>
        </div>
      </main>
      {/* Expertise */}
      <Expertise />

      {/* Pricing */}
      <Pricing />

      {/* Builders */}
      <Builders />

      {/* About */}
      <About />

      {/* Contact */}
      <Contact />
    </div>
  );
}
