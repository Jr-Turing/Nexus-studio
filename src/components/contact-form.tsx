"use client";

import { useState } from "react";

import { ModuleFrame } from "@/components/page-shell";
import { Button } from "@/components/ui/button";

const BUDGETS = ["< 25K", "25–75K", "75–150K", "150K+"];

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [budget, setBudget] = useState(BUDGETS[1]);

  return (
    <section className="grid gap-12 lg:grid-cols-[1.5fr_0.75fr] lg:gap-16">
      {sent ? (
        <ModuleFrame className="p-8 md:p-12">
          <span className="font-mono-tech text-[11px] tracking-[0.3em] text-accent">
            03.1 / MESSAGE READY
          </span>
          <h2 className="mt-8 text-3xl font-semibold text-foreground">Thanks — that&apos;s noted.</h2>
          <p className="mt-4 max-w-xl border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
            This form isn&apos;t wired to an inbox yet, so nothing was actually sent. Send me the email
            address you want enquiries to land in and I&apos;ll connect it.
          </p>
          <Button
            variant="outline"
            onClick={() => setSent(false)}
            className="mt-8 rounded-none font-mono-tech text-[10px] tracking-[0.2em]"
          >
            ← WRITE ANOTHER
          </Button>
        </ModuleFrame>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="space-y-7"
        >
          <Field label="NAME" name="name" placeholder="Ada Lovelace" />
          <Field label="EMAIL" name="email" type="email" placeholder="you@company.com" />
          <Field label="COMPANY" name="company" placeholder="Optional" required={false} />

          <div>
            <span className="font-mono-tech text-[10px] tracking-[0.3em] text-muted-foreground">
              BUDGET RANGE
            </span>
            <div className="mt-3 grid grid-cols-2 gap-px bg-border sm:grid-cols-4">
              {BUDGETS.map((b) => (
                <Button
                  key={b}
                  type="button"
                  variant="ghost"
                  onClick={() => setBudget(b)}
                  className={`h-auto rounded-none bg-background px-4 py-3 font-mono-tech text-[10px] tracking-[0.18em] ${
                    budget === b ? "bg-accent/10 text-accent" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {b}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="brief" className="font-mono-tech text-[10px] tracking-[0.3em] text-muted-foreground">
              PROJECT BRIEF
            </label>
            <textarea
              id="brief"
              name="brief"
              required
              rows={6}
              placeholder="What are you building, and what does success look like?"
              className="mt-3 w-full border border-border bg-card/40 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent"
            />
          </div>

          <Button type="submit" className="h-auto rounded-none px-7 py-3 font-mono-tech text-[10px] tracking-[0.2em]">
            SEND BRIEF ↗
          </Button>
        </form>
      )}

      <aside className="border-l border-border pl-7 md:pl-9">
        <div className="mb-8 font-mono-tech text-[10px] tracking-[0.25em] text-accent">PROJECT PARAMETERS</div>
        <Detail label="RESPONSE TIME" value="Within 2 working days" />
        <Detail label="ENGAGEMENTS FROM" value="4-week sprints" />
        <Detail label="WORKING HOURS" value="Overlap with CET & EST" />
        <p className="border-t border-border pt-7 text-sm leading-relaxed text-muted-foreground">
          Prefer a call? Include a couple of times that suit you in the brief and we&apos;ll send an
          invite.
        </p>
      </aside>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="font-mono-tech text-[10px] tracking-[0.3em] text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-3 w-full border border-border bg-card/40 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent"
      />
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-border py-7 first:border-t-0 first:pt-0">
      <div className="font-mono-tech text-[10px] tracking-[0.3em] text-muted-foreground">{label}</div>
      <div className="mt-2 text-base font-bold text-foreground">{value}</div>
    </div>
  );
}
