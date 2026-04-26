import { Hero } from "@/components/site/Hero";
import { LogoMarquee } from "@/components/site/LogoMarquee";
import { Services } from "@/components/site/Services";
import { Stats } from "@/components/site/Stats";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { CtaBanner } from "@/components/site/CtaBanner";

const Index = () => {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <Services />
      <Stats />
      <Process />
      <Testimonials />
      <CtaBanner />
    </>
  );
};

export default Index;
