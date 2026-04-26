import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CtaBanner = () => {
  return (
    <section className="container py-20">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card/40 p-10 md:p-16 text-center shadow-card">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute -inset-px rounded-3xl bg-gradient-primary opacity-10 blur-2xl" />
        <div className="relative space-y-6 max-w-2xl mx-auto">
          <h3 className="font-display text-3xl md:text-5xl font-bold leading-tight">
            Ready to make every dollar <span className="text-gradient">work harder?</span>
          </h3>
          <p className="text-muted-foreground md:text-lg">
            Free 30-minute audit. We'll show you three growth levers we'd pull in your account this quarter — no pitch deck required.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">Book your audit <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="rounded-full">
              <Link to="/case-studies">View case studies</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
