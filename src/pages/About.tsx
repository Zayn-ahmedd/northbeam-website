import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Compass, Heart, Zap, Users } from "lucide-react";

const values = [
  { icon: Compass, title: "Outcomes over outputs", body: "We're paid to grow your business, not to ship slide decks. Every initiative ties to revenue." },
  { icon: Zap, title: "Ship in weeks", body: "Speed is a moat. We launch experiments in days and compound winners into the playbook." },
  { icon: Heart, title: "Operator empathy", body: "Most of our team has built and scaled brands. We know the late nights — we work like owners." },
  { icon: Users, title: "Small senior pods", body: "No army of juniors. Senior strategists and specialists work directly on your account." },
];

const team = [
  { name: "Ahmed Rashmi", role: "Founder & Strategy", initial: "AR" },
  { name: "Harini", role: "Head of Paid Media", initial: "HA" },
  { name: "Ahamed", role: "Head of SEO", initial: "AH" },
  { name: "Deepika", role: "Lead Creative Strategist", initial: "DE" },
];

const About = () => {
  return (
    <>
      <section className="container pt-16 pb-12">
        <SectionHeading
          eyebrow="About"
          title={<>A senior team obsessed with <span className="text-gradient">measurable growth</span>.</>}
          description="Northbeam was founded in 2025 by operators who'd grown brands from zero to nine figures and were tired of agencies that hid behind vanity metrics."
        />
      </section>

      <section className="container py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card/40 p-6 hover:border-primary/40 transition-smooth">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-20">
        <SectionHeading
          eyebrow="The team"
          title={<>Operators, not <span className="text-gradient">order takers</span>.</>}
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {team.map((m) => (
            <div key={m.name} className="rounded-2xl border border-border bg-card/40 p-6 text-center hover:border-primary/40 transition-smooth">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground font-display text-2xl font-bold shadow-glow">
                {m.initial}
              </div>
              <h4 className="mt-4 font-semibold">{m.name}</h4>
              <p className="text-sm text-muted-foreground">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
};

export default About;
