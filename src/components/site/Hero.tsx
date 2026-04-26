import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div
        className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "var(--gradient-radial)" }}
      />

      <div className="container relative pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-muted-foreground">Now booking Q3 — 3 spots left</span>
          </div>

          <h1 className="font-display text-4xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            Ad spend that <span className="text-gradient">compounds</span>.
            <br className="hidden md:block" />
            Growth that scales.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Northbeam is a performance marketing partner for ambitious brands.
            We engineer paid media, SEO, CRO, and analytics into one revenue engine.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Book a strategy call <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="rounded-full">
              <Link to="/case-studies">See the results</Link>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-primary" /> 6.4× avg. ROAS</span>
            <span className="hidden sm:block h-1 w-1 rounded-full bg-border" />
            <span>$120M+ tracked revenue</span>
            <span className="hidden sm:block h-1 w-1 rounded-full bg-border" />
            <span>40+ scaling brands</span>
          </div>
        </div>

        <div className="relative mt-16 md:mt-20 mx-auto max-w-5xl animate-fade-up">
          <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-3xl" />
          <div className="relative rounded-3xl overflow-hidden border border-border shadow-card">
            <img
              src={heroImg}
              alt="Performance marketing growth visualization with neon analytics curves"
              width={1600}
              height={1024}
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};
