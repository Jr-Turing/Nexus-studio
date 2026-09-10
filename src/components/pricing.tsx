import Link from "next/link";

export type PricingTier = {
  index: string;
  name: string;
  price: string;
  cadence: string;
  summary: string;
  features: string[];
  cta: string;
  featured: boolean;
};

const TIERS: PricingTier[] = [
  {
    index: "01",
    name: "Basic",
    price: "₹50k/start",
    cadence: "/ project",
    summary: "A focused build for founders shipping their first public surface.",
    features: [
      "Responsive Landing Page",
      "UI Design System",
      "Basic Animations",
      "Performance Setup",
      "Delivery in 2 weeks",
    ],
    cta: "START SMALL",
    featured: false,
  },
  {
    index: "02",
    name: "Standard",
    price: "₹1.5L/start",
    cadence: "/ project",
    summary: "Multi-surface product work with real data, auth and integrations.",
    features: [
      "Full Web Application",
      "Backend Architecture",
      "Advanced Interactions",
      "Database Integration",
      "Delivery in 4-6 weeks",
    ],
    cta: "MOST CHOSEN",
    featured: true,
  },
  {
    index: "03",
    name: "PARTNER",
    price: "Custom",
    cadence: "/ monthly",
    summary: "An embedded builder network working alongside your team.",
    features: [
      "Dedicated multi-skill squad",
      "AI and automation workstreams",
      "Weekly release cadence",
      "Direct channel access",
      "Rolling monthly engagement",
    ],
    cta: "TALK TO US",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative border-t border-border px-6 py-24 md:px-10 md:py-32">
      <header className="mx-auto max-w-7xl">
        <div className="flex items-center gap-3 font-mono-tech text-[10px] tracking-[0.3em] text-accent md:text-[11px]">
          <span className="h-px w-8 bg-accent" />
          <span>03 // PRICING</span>
        </div>
        <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-3xl text-4xl font-bold leading-[0.92] text-foreground sm:text-6xl md:text-7xl">
            PICK YOUR <span className="text-accent">UNFAIR ADVANTAGE.</span>
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            No bloated retainers. No mystery invoices. Choose the launch speed that fits your ambition,
            then get a clear scope, sharp build, and a team invested in making it impossible to ignore.
          </p>
        </div>
      </header>

      <div className="mx-auto mt-16 grid max-w-7xl gap-px border border-border bg-border md:mt-20 md:grid-cols-3">
        {TIERS.map((tier) => (
          <article
            key={tier.name}
            className={`group relative flex flex-col bg-background p-8 transition-colors md:p-10 ${
              tier.featured ? "bg-card/60" : "hover:bg-card/40"
            }`}
          >
            {tier.featured && (
              <span className="absolute right-0 top-0 bg-primary px-3 py-1 font-mono-tech text-[10px] tracking-[0.25em] text-primary-foreground">
                RECOMMENDED
              </span>
            )}

            <div className="font-mono-tech text-[10px] tracking-[0.3em] text-muted-foreground">
              {tier.index} / {tier.name}
            </div>

            <div className="mt-8 flex items-end gap-2">
              <span className="text-4xl font-bold leading-none text-foreground md:text-5xl">
                {tier.price}
              </span>
              <span className="font-mono-tech text-[11px] tracking-[0.2em] text-muted-foreground">
                {tier.cadence}
              </span>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{tier.summary}</p>

            <ul className="mt-8 flex-1 space-y-3 border-t border-border pt-8">
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
                  <span className="font-mono-tech text-[11px] text-accent">+</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="#contact"
              className={`mt-10 inline-flex items-center justify-between px-5 py-3 font-mono-tech text-xs tracking-[0.2em] transition-colors ${
                tier.featured
                  ? "bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground"
                  : "border border-border text-foreground hover:border-accent hover:text-accent"
              }`}
            >
              <span>{tier.cta}</span>
              <span className="transition-transform group-hover:translate-x-1">↗</span>
            </Link>
          </article>
        ))}
      </div>

      <p className="mx-auto mt-10 max-w-7xl font-mono-tech text-[10px] tracking-[0.25em] text-muted-foreground/70">
        [ ALL TIERS INCLUDE SOURCE HANDOVER + 30 DAYS POST-LAUNCH SUPPORT ]
      </p>
    </section>
  );
}
