import { useState } from "react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, MapPin, Clock, ArrowRight } from "lucide-react";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thanks — we'll be in touch within one business day.");
    }, 700);
  };

  return (
    <>
      <section className="container pt-16 pb-12">
        <SectionHeading
          eyebrow="Contact"
          title={<>Let's talk about <span className="text-gradient">your growth</span>.</>}
          description="Tell us where you are and where you want to be. We'll come back within one business day with a tailored next step."
        />
      </section>

      <section className="container pb-24">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3 rounded-3xl border border-border bg-card/40 p-8 md:p-10 shadow-card">
            <form 
              action="https://api.web3forms.com/submit" 
              method="POST" 
              className="space-y-5"
            >
              {/* ACCESS KEY - REPLACE WITH YOUR ACTUAL KEY */}
              <input type="hidden" name="access_key" value="235bdb38-3dd8-4213-91b2-1e496fe27b88" />

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Your name</Label>
                  <Input id="name" name="name" required placeholder="Alex Johnson" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Work email</Label>
                  <Input id="email" name="email" type="email" required placeholder="alex@brand.com" />
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" name="company" required placeholder="Brand Co." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budget">Monthly ad spend</Label>
                  <Input id="budget" name="ad_spend" placeholder="$10k–$50k" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">What are you trying to grow?</Label>
                <Textarea id="message" name="message" required rows={5} placeholder="Tell us about your business, goals, and timeline..." />
              </div>
              
              <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto">
                Send message <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </form>
          </div>

          <aside className="lg:col-span-2 space-y-4">
            {[
              { icon: Mail, title: "Email us", body: "hello@northbeam.growth" },
              { icon: MapPin, title: "HQ", body: "Tamil Nadu, India — fully remote team" },
              { icon: Clock, title: "Response time", body: "Within 1 business day, always." },
            ].map((b) => (
              <div key={b.title} className="rounded-2xl border border-border bg-card/40 p-6 flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                  <b.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">{b.title}</h4>
                  <p className="text-sm text-muted-foreground">{b.body}</p>
                </div>
              </div>
            ))}

            <div className="rounded-2xl border border-primary/40 bg-card/40 p-6 shadow-glow">
              <h4 className="font-display text-lg font-semibold">Free 30-min audit</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                We'll review your accounts and surface 3 quick wins — yours to keep, no strings.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Contact;
