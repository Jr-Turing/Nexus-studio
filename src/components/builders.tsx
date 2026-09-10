import Image from "next/image";

export type Builder = {
  n: string;
  name: string;
  role: string;
  body: string;
  image: string;
};

const BUILDERS: Builder[] = [
  {
    n: "01",
    name: "RAJ KUMBHAKAR",
    role: "Founder & Lead Full Stack Engineer",
    body: "Designing and engineering scalable web applications, backend systems, and digital products.",
    image: "/assets/builder-2.jpg",
  },
  {
    n: "02",
    name: "ARVIND KUMAR",
    role: "Founder & AI Engineer",
    body: "Building intelligent products, AI systems, and the technical vision behind NEXUS.",
    image: "/assets/builder-1.jpg",
  },
  {
    n: "03",
    name: "SHUBHAM SRIVASTAVA",
    role: "CO-Founder & Security Engineer",
    body: "Ensuring the reliability, scalability, and performance of our systems through automation and best practices.",
    image: "/assets/builder-2.jpg",
  },
  {
    n: "04",
    name: "SUMIT KUMAR",
    role: "CO-Founder & Product Growth Lead",
    body: "Connecting product strategy, user experience, and growth to turn ideas into impactful products.",
    image: "/assets/builder-3.jpg",
  },
];

export function Builders() {
  return (
    <section id="builders" className="relative border-t border-border px-6 py-24 md:px-10 md:py-32" aria-label="The builders">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center gap-3 font-mono-tech text-[10px] tracking-[0.3em] text-accent md:text-[11px]">
          <span className="h-px w-8 bg-accent" />
          <span>04 // BUILDERS</span>
        </div>

        <div className="mb-6 flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-4xl text-4xl font-bold leading-[0.92] text-foreground sm:text-6xl md:text-7xl">
            TEAM <span className="text-accent">NEXUS.</span>
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {BUILDERS.map((builder) => (
            <article key={builder.name} className="group overflow-hidden rounded-[24px] border border-border/70 bg-card/40">
              <div className="h-52 overflow-hidden border-b border-border/60 bg-[#1b1f22]">
                <Image
                  src={builder.image}
                  alt={builder.name}
                  width={640}
                  height={800}
                  className="h-full w-full scale-110 object-cover object-center grayscale contrast-125"
                />
              </div>

              <div className="space-y-4 p-6">
                <div className="text-center">
                  <h3 className="text-2xl font-light tracking-[-0.04em] text-foreground sm:text-3xl">
                    {builder.name}
                  </h3>
                </div>

                <p className="text-center text-sm text-muted-foreground">{builder.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
