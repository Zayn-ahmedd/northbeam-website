const logos = ["LUMEN", "NORDIC&CO", "VANTA*", "PULSE/", "ATLAS", "NOVA·", "RIVET", "HALO+"];

export const LogoMarquee = () => {
  return (
    <section className="py-12 border-y border-border/60 bg-secondary/20">
      <div className="container">
        <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-8">
          Trusted by category leaders & funded challengers
        </p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex gap-16 animate-marquee w-max">
            {[...logos, ...logos].map((l, i) => (
              <span
                key={i}
                className="font-display text-2xl md:text-3xl font-semibold text-muted-foreground/70 hover:text-foreground transition-smooth whitespace-nowrap"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
