import Link from "next/link";

export type AboutPrinciple = {
  n: string;
  title: string;
  body: string;
};

export type AboutStat = {
  value: string;
  label: string;
};

const PRINCIPLES: AboutPrinciple[] = [
  {
    n: "01",
    title: "Small teams, senior only",
    body: "Every project runs with a compact team of people who have shipped before. No layers, no handoffs, no learning on your budget.",
  },
  {
    n: "02",
    title: "Prototype before promises",
    body: "We put something clickable in front of you in the first weeks. Decisions get made against real screens, not slide decks.",
  },
  {
    n: "03",
    title: "Performance is a feature",
    body: "Speed, accessibility and craft are part of the build, not a cleanup phase. If it feels slow, it isn't finished.",
  },
  {
    n: "04",
    title: "You own everything",
    body: "Code, design files, infrastructure and documentation are yours from day one, structured so another team can pick it up.",
  },
];

const STATS: AboutStat[] = [
  { value: "120+", label: "PRODUCTS SHIPPED" },
  { value: "40", label: "BUILDERS IN NETWORK" },
  { value: "9", label: "TIME ZONES" },
  { value: "2026", label: "ESTABLISHED" },
];

export function About() {
  return (
    <section id="about" className="relative border-t border-border px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center gap-3 font-mono-tech text-[10px] tracking-[0.3em] text-accent md:text-[11px]">
          <span className="h-px w-8 bg-accent" />
          <span>05 // ABOUT</span>
        </div>

        <div className="mb-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <h2 className="max-w-3xl text-4xl font-bold leading-[0.92] text-foreground sm:text-6xl md:text-7xl">
              A NETWORK, <span className="text-accent">NOT A PYRAMID.</span>
            </h2>
          </div>

          <div className="rounded-[24px] border border-border bg-card/40 p-6 md:p-8">
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              We don&apos;t sell bloated retainers or disconnected teams. We build focused squads around
              your problem, so you get senior execution, faster decisions, and better product momentum.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-2 border-l border-t border-border md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="border-b border-r border-border bg-card/40 px-5 py-7 md:px-7 md:py-9">
              <div className="text-3xl font-bold text-foreground md:text-5xl">{stat.value}</div>
              <div className="mt-3 font-mono-tech text-[9px] tracking-[0.22em] text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-20 grid max-w-7xl gap-4 md:grid-cols-2">
          {PRINCIPLES.map((principle) => (
            <article key={principle.n} className="border border-border bg-card/40 p-7 md:p-9">
              <div className="flex items-center justify-between">
                <span className="font-mono-tech text-[10px] tracking-[0.25em] text-accent">
                  {principle.n} / PRINCIPLE
                </span>
                <span className="h-1.5 w-1.5 bg-accent shadow-[0_0_10px_var(--accent)]" />
              </div>
              <h3 className="mt-8 text-2xl font-semibold text-foreground">{principle.title}</h3>
              <p className="mt-4 border-t border-border pt-5 text-sm leading-relaxed text-muted-foreground">
                {principle.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-16 flex max-w-7xl flex-col items-start justify-between gap-8 border-y border-border py-10 md:flex-row md:items-center">
          <p className="max-w-2xl text-2xl font-semibold text-foreground md:text-3xl">
            We build with a clear point of view and a product mindset from day one.
          </p>
          <Link
            href="#contact"
            className="bg-primary px-7 py-3 font-mono-tech text-[10px] tracking-[0.2em] text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            MEET THE STUDIO ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
