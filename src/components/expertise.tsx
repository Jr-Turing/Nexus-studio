import type { Metadata } from "next";
import Link from "next/link";

import { PageMain, PageIntro, ModuleFrame } from "@/components/page-shell";

const pageTitle = "Services — Product, Web, AI & Design";
const pageDescription =
  "Product strategy, web platforms, mobile apps, AI systems and brand design — delivered by senior builders in focused sprints.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};

export type ExpertiseItem = {
  n: string;
  title: string;
  body: string;
  items: string[];
};

const EXPERTISE: ExpertiseItem[] = [
  {
    n: "01",
    title: "Web & SaaS",
    body: "Thoughtful digital products built around your users, workflows and long-term growth — from focused websites to scalable SaaS platforms.",
    items: ["Custom web products", "SaaS platforms", "Business dashboards"],
  },
  {
    n: "02",
    title: "App Development",
    body: "Reliable mobile and desktop applications designed to feel natural on every device and support your product as it evolves.",
    items: ["Mobile experiences", "Desktop applications", "Cross-platform builds"],
  },
  {
    n: "03",
    title: "AI & Backend",
    body: "Intelligent features and dependable systems that connect your product, data and users through secure, maintainable technology.",
    items: ["AI-powered experiences", "Custom APIs", "Backend architecture"],
  },
  {
    n: "04",
    title: "Design",
    body: "Clear, expressive visual design that gives your product a distinct identity and makes every interaction feel intentional.",
    items: ["UI/UX design", "Brand identities", "Visual experiences"],
  },
];

export function Expertise() {
  return (
    <section id="expertise" className="relative border-t border-border px-6 py-24 md:px-10 md:py-32">
      <header className="mx-auto max-w-7xl">
        <div className="flex items-center gap-3 font-mono-tech text-[10px] tracking-[0.3em] text-accent md:text-[11px]">
          <span className="h-px w-8 bg-accent" />
          <span>02 // EXPERTISE</span>
        </div>
        <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-3xl text-4xl font-bold leading-[0.92] text-foreground sm:text-6xl md:text-7xl">
            WHAT WE <span className="text-accent">BUILD.</span>
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            From product concept to launch and iteration, we cover the systems, interfaces and
            intelligence needed to move quickly without sacrificing quality.
          </p>
        </div>
      </header>

      <div className="mx-auto mt-16 grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4">
        {EXPERTISE.map((item) => (
          <article
            key={item.n}
            className="group border border-border bg-card/40 p-7 transition-colors hover:border-accent/60 hover:bg-card/60 md:p-8"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono-tech text-[10px] tracking-[0.25em] text-accent">{item.n} / MODULE</span>
              <span className="h-1.5 w-1.5 bg-accent shadow-[0_0_10px_var(--accent)]" />
            </div>
            <h3 className="mt-8 text-2xl font-semibold text-foreground">{item.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            <ul className="mt-8 space-y-2 border-t border-border pt-5">
              {item.items.map((feature) => (
                <li key={feature} className="font-mono-tech text-[9px] tracking-[0.18em] text-muted-foreground">
                  + {feature}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <PageMain>
      <PageIntro
        index="02"
        label="EXPERTISE."
        title="WHAT WE BUILD, END TO END."
        description="Engagements run as focused sprints with a fixed team, a visible backlog and a working build you can open at any point."
        status={["ARCHITECTURE: DISTRIBUTED", "DELIVERY: ITERATIVE", "PROTOCOL: NEXUS-V2"]}
      />

      <section aria-label="Services" className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {EXPERTISE.map((s) => (
          <ModuleFrame key={s.n} className="flex min-h-80 flex-col p-7 md:p-8">
            <div className="flex items-center justify-between">
              <span className="font-mono-tech text-[10px] tracking-[0.25em] text-accent">{s.n} / MODULE</span>
              <span className="h-1.5 w-1.5 bg-accent shadow-[0_0_10px_var(--accent)]" />
            </div>
            <h2 className="mt-8 text-2xl font-semibold text-foreground">{s.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            <ul className="mt-auto space-y-2 border-t border-border pt-5">
              {s.items.map((i) => (
                <li key={i} className="font-mono-tech text-[9px] tracking-[0.18em] text-muted-foreground">
                  + {i}
                </li>
              ))}
            </ul>
          </ModuleFrame>
        ))}
      </section>

      <section className="mt-20 flex flex-col items-start gap-8 border-y border-border py-10 md:flex-row md:items-center md:justify-between">
        <p className="max-w-xl text-2xl font-semibold text-foreground md:text-3xl">
          Have something specific in mind? Tell us the outcome you need.
        </p>
        <Link
          href="/contact"
          className="bg-primary px-7 py-3 font-mono-tech text-[10px] tracking-[0.2em] text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          START A PROJECT ↗
        </Link>
      </section>
    </PageMain>
  );
}
