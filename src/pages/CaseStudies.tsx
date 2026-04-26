import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaBanner } from "@/components/site/CtaBanner";
import { TrendingUp, ArrowUpRight } from "lucide-react";

const cases = [
  {
    client: "Lumen Skincare",
    industry: "DTC Beauty",
    result: "5.8× ROAS",
    summary: "Rebuilt Meta + TikTok account structure. 3.1× revenue in 6 months while CAC dropped 41%.",
    metrics: [{ k: "Revenue", v: "+312%" }, { k: "CAC", v: "−41%" }, { k: "ROAS", v: "5.8×" }],
    tint: "from-primary/30 to-accent/20",
  },
  {
    client: "Vanta Apparel",
    industry: "Fashion DTC",
    result: "8-figure scale",
    summary: "Creative engine + lifecycle flows turned a $4M brand into a $14M one without raising blended CAC.",
    metrics: [{ k: "AOV", v: "+22%" }, { k: "LTV/CAC", v: "4.7" }, { k: "Repeat", v: "+38%" }],
    tint: "from-accent/30 to-primary/10",
  },
  {
    client: "Atlas Cloud",
    industry: "B2B SaaS",
    result: "40% of pipeline",
    summary: "Programmatic SEO and LinkedIn ABM built a self-serve pipeline that compounds month over month.",
    metrics: [{ k: "MQLs", v: "+260%" }, { k: "CPL", v: "−54%" }, { k: "Pipeline", v: "40%" }],
    tint: "from-primary/20 to-accent/30",
  },
  {
    client: "Pulse Fitness",
    industry: "Subscription",
    result: "−38% CAC",
    summary: "Migrated to server-side tracking, restructured Google Ads. Subscriber growth doubled in one quarter.",
    metrics: [{ k: "Subs", v: "+108%" }, { k: "CAC", v: "−38%" }, { k: "Churn", v: "−12%" }],
    tint: "from-accent/20 to-primary/30",
  },
];

const CaseStudies = () => {
  return (
    <>
      <section className="container pt-16 pb-12">
        <SectionHeading
          eyebrow="Case studies"
          title={<>Numbers that move <span className="text-gradient">the business</span>.</>}
          description="A snapshot of what compounding marketing looks like in production. Real brands, real dashboards."
        />
      </section>

      <section className="container pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          {cases.map((c) => (
            <article
              key={c.client}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card/40 p-8 hover:border-primary/40 transition-smooth"
            >
              <div className={`absolute -top-32 -right-32 h-64 w-64 rounded-full bg-gradient-to-br ${c.tint} blur-3xl opacity-60 group-hover:opacity-100 transition-smooth`} />
              <div className="relative space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">{c.industry}</p>
                    <h3 className="mt-1 font-display text-2xl font-semibold">{c.client}</h3>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    <TrendingUp className="h-3 w-3" /> {c.result}
                  </span>
                </div>
                <p className="text-muted-foreground">{c.summary}</p>
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-border/60">
                  {c.metrics.map((m) => (
                    <div key={m.k}>
                      <div className="font-display text-2xl font-bold text-gradient">{m.v}</div>
                      <div className="text-xs text-muted-foreground">{m.k}</div>
                    </div>
                  ))}
                </div>
                <a href="#" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
                  Read the full breakdown <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
};

export default CaseStudies;
