import { SectionHeading } from "@/components/site/SectionHeading";
import { services } from "@/components/site/Services";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Launch",
    price: "$4.5k",
    cadence: "/month",
    description: "For early-stage brands ready to put fuel on a working channel.",
    features: ["1 paid channel", "Weekly creative tests", "GA4 + tracking setup", "Bi-weekly reporting"],
  },
  {
    name: "Scale",
    price: "$9k",
    cadence: "/month",
    description: "Our most popular engagement. Multi-channel growth engine.",
    features: ["Up to 3 paid channels", "Landing page CRO sprints", "Server-side tracking", "Weekly strategy calls", "Lifecycle email flows"],
    featured: true,
  },
  {
    name: "Operator",
    price: "Custom",
    cadence: "",
    description: "For 8-figure brands who need a full embedded growth team.",
    features: ["Unlimited channels", "Dedicated pod (4+)", "Custom dashboards", "MMM & incrementality", "Quarterly offsites"],
  },
];

const Services = () => {
  return (
    <>
      <section className="container pt-16 pb-12">
        <SectionHeading
          eyebrow="Services"
          title={<>Everything you need to <span className="text-gradient">grow profitably</span>.</>}
          description="Pick the channels you need today. We'll plug in seamlessly with the rest of your stack and team."
        />
      </section>

      <section className="container pb-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-border bg-card/40 p-6 hover:border-primary/40 transition-smooth">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
              <ul className="mt-4 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-20">
        <SectionHeading
          eyebrow="Engagements"
          title={<>Pick the engagement that <span className="text-gradient">fits your stage</span>.</>}
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl border p-8 transition-smooth ${
                p.featured
                  ? "border-primary bg-card shadow-glow scale-[1.02]"
                  : "border-border bg-card/40 hover:border-primary/40"
              }`}
            >
              {p.featured && (
                <span className="inline-block mb-4 text-xs uppercase tracking-widest bg-primary text-primary-foreground rounded-full px-3 py-1">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-2xl font-semibold">{p.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-display text-4xl font-bold">{p.price}</span>
                <span className="text-muted-foreground">{p.cadence}</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{p.description}</p>
              <ul className="mt-6 space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
};

export default Services;
