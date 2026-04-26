import { Link } from "react-router-dom";
import { Megaphone, Search, MousePointerClick, BarChart3, Mail, Sparkles, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export const services = [
  {
    icon: Megaphone,
    title: "Paid Media",
    description: "Meta, Google, TikTok, LinkedIn, YouTube. Full-funnel campaigns engineered for profitable scale.",
    points: ["Creative testing engine", "Account restructure", "MMM & incrementality"],
  },
  {
    icon: Search,
    title: "SEO & Content",
    description: "Programmatic + editorial SEO that captures demand long after the ad budget pauses.",
    points: ["Topical authority maps", "Technical SEO audits", "AI-assisted content ops"],
  },
  {
    icon: MousePointerClick,
    title: "Conversion Optimization",
    description: "Landing pages and on-site experiments that turn traffic into customers, not bounces.",
    points: ["Heuristic + data audits", "A/B testing roadmap", "High-converting LPs"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Tracking",
    description: "Server-side tracking, attribution, and dashboards your CFO will actually trust.",
    points: ["GA4 + server-side GTM", "Attribution modeling", "Looker dashboards"],
  },
  {
    icon: Mail,
    title: "Lifecycle & CRM",
    description: "Email and SMS flows that make every cohort more valuable than the last.",
    points: ["Klaviyo / HubSpot setup", "Retention flows", "Segmentation strategy"],
  },
  {
    icon: Sparkles,
    title: "Creative Strategy",
    description: "Hooks, scripts, and statics built for the algorithm — guided by performance data.",
    points: ["UGC & motion ads", "Concept frameworks", "Weekly iteration sprints"],
  },
];

export const Services = () => {
  return (
    <section className="container py-24" id="services">
      <SectionHeading
        eyebrow="What we do"
        title={<>One team. The full <span className="text-gradient">growth stack.</span></>}
        description="Stop juggling vendors. We operate as your in-house growth team — strategy, execution, and reporting under one roof."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <div
            key={s.title}
            className="group relative rounded-2xl border border-border bg-card/40 p-6 transition-smooth hover:border-primary/50 hover:bg-card/80 hover:-translate-y-1"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none" style={{ background: "var(--gradient-radial)" }} />
            <div className="relative space-y-4">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-semibold">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.description}</p>
              <ul className="space-y-1.5 text-sm">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-muted-foreground">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
        >
          See full service breakdown <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
};
