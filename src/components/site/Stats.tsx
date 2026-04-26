const stats = [
  { value: "6.4×", label: "Avg. blended ROAS across active accounts" },
  { value: "$120M+", label: "Tracked revenue generated for clients" },
  { value: "−38%", label: "Average CAC reduction in first 90 days" },
  { value: "94%", label: "Client retention after 12 months" },
];

export const Stats = () => {
  return (
    <section className="container py-20">
      <div className="rounded-3xl border border-border bg-card/40 p-8 md:p-12 shadow-card">
        <div className="grid gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="space-y-2">
              <div className="font-display text-4xl md:text-5xl font-bold text-gradient">
                {s.value}
              </div>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
