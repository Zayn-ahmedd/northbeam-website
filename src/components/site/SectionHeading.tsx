import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading = ({ eyebrow, title, description, align = "center", className }: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        "max-w-3xl space-y-4",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs uppercase tracking-widest text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight text-gradient-soft">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground md:text-lg">{description}</p>
      )}
    </div>
  );
};
