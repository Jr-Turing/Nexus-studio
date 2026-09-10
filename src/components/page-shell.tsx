import type { ReactNode } from "react";

export function PageMain({ children }: { children: ReactNode }) {
  return (
    <div className="page-grid min-h-screen">
      <main className="relative mx-auto max-w-7xl px-6 pb-28 pt-32 md:px-10 md:pt-40">{children}</main>
    </div>
  );
}

export function PageIntro({
  index,
  label,
  title,
  description,
  status,
}: {
  index: string;
  label: string;
  title: string;
  description: string;
  status: string[];
}) {
  return (
    <header className="mb-16 border-b border-border pb-10 md:mb-20 md:pb-14">
      <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 font-mono-tech text-[10px] tracking-[0.3em] text-accent md:text-[11px]">
            <span className="h-px w-8 bg-accent" />
            <span>
              {index} {"//"} {label}
            </span>
          </div>
          <h1 className="mt-6 text-5xl font-bold leading-none text-foreground sm:text-7xl md:text-8xl">
            {title}
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        </div>
        <div className="hidden shrink-0 text-right font-mono-tech text-[10px] leading-6 tracking-[0.12em] text-muted-foreground md:block">
          {status.map((line) => (
            <div key={line}>[ {line} ]</div>
          ))}
        </div>
      </div>
    </header>
  );
}

export function ModuleFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`module-frame group relative border border-border bg-card/40 ${className}`}>
      {children}
    </div>
  );
}
