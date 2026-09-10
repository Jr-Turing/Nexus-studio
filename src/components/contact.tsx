export type ContactPoint = {
  label: string;
  value: string;
};

const CONTACT_POINTS: ContactPoint[] = [
  { label: "RESPONSE TIME", value: "Within 2 working days" },
  { label: "ENGAGEMENTS FROM", value: "4-week sprints" },
  { label: "WORKING HOURS", value: "Overlap with CET & EST" },
];

export function Contact() {
  return (
    <section id="contact" className="relative border-t border-border px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-3 font-mono-tech text-[10px] tracking-[0.3em] text-accent md:text-[11px]">
          <span className="h-px w-8 bg-accent" />
          <span>05 // CONTACT</span>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <h2 className="max-w-3xl text-4xl font-bold leading-[0.92] text-foreground sm:text-6xl md:text-7xl">
              <span className="block text-accent">TELL US</span>
              <span className="block">WHAT YOU&apos;RE BUILDING.</span>
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Share your ambition, constraints and timeline. We’ll reply with a realistic path to ship,
              whether it’s a focused launch or a long-term product build.
            </p>
          </div>

          <div className="border border-border bg-card/40 p-6 md:p-8">
            <div className="font-mono-tech text-[10px] tracking-[0.25em] text-accent">PROJECT PARAMETERS</div>
            <div className="mt-6 space-y-6">
              {CONTACT_POINTS.map((point) => (
                <div key={point.label} className="border-t border-border pt-5 first:border-t-0 first:pt-0">
                  <div className="font-mono-tech text-[10px] tracking-[0.3em] text-muted-foreground">
                    {point.label}
                  </div>
                  <div className="mt-2 text-base font-semibold text-foreground">{point.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex w-full justify-center">
          <a
            href="mailto:hello@nexusstudio.me"
            className="inline-flex items-center justify-center border border-accent/40 bg-accent/10 px-7 py-4 text-center font-mono-tech text-base tracking-[0.2em] text-foreground transition-all duration-200 hover:border-accent hover:bg-accent hover:text-background sm:text-lg"
          >
            contact@nexusstudio.me ↗
          </a>
        </div>
      </div>
    </section>
  );
}
