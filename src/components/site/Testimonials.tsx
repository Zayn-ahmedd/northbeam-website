import { Star } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const testimonials = [
  {
    quote: "Northbeam rebuilt our paid social from the ground up. We hit a 5.8× ROAS in month two and have stayed there for a year.",
    name: "Elin Sandberg",
    role: "VP Growth, Lumen Skincare",
  },
  {
    quote: "They feel like an in-house team that just happens to be sharper than ours. Reporting alone made the engagement worth it.",
    name: "Marcus Hale",
    role: "CEO, Vanta Apparel",
  },
  {
    quote: "Programmatic SEO they shipped now drives 40% of our pipeline. Predictable, compounding, and we own every page.",
    name: "Priya Raman",
    role: "Head of Marketing, Atlas Cloud",
  },
];

export const Testimonials = () => {
  return (
    <section className="container py-24">
      <SectionHeading
        eyebrow="Clients"
        title={<>What founders <span className="text-gradient">say</span>.</>}
      />
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="rounded-2xl border border-border bg-card/40 p-6 flex flex-col gap-4 hover:border-primary/40 transition-smooth"
          >
            <div className="flex gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="text-foreground/90 leading-relaxed">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-auto pt-4 border-t border-border/60">
              <div className="font-semibold">{t.name}</div>
              <div className="text-sm text-muted-foreground">{t.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};
