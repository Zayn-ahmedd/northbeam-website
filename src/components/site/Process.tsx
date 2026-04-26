import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    n: "01",
    title: "Audit & North Star",
    body: "We tear down your funnel, accounts, and tracking. You leave the kickoff with a 90-day plan tied to one revenue metric.",
  },
  {
    n: "02",
    title: "Build the engine",
    body: "Tracking, creative pipeline, landing pages, and account structure rebuilt from first principles in weeks one to four.",
  },
  {
    n: "03",
    title: "Scale & compound",
    body: "Weekly experiments, monthly strategic reviews. Every win becomes a system the next campaign inherits.",
  },
];

export const Process = () => {
  return (
    <section className="container py-24">
      <SectionHeading
        eyebrow="How we work"
        title={<>A process built to <span className="text-gradient">compound</span>.</>}
        description="No 6-month rebrands. We ship in weeks, measure in days, and report in dollars."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-3 relative">
        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        {steps.map((s) => (
          <div key={s.n} className="relative rounded-2xl border border-border bg-card/40 p-6 hover:border-primary/40 transition-smooth">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground font-display font-bold shadow-glow">
              {s.n}
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
