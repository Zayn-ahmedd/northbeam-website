import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background font-sans">
      {/* Background glow effects - glassmorphism style */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/20 mix-blend-screen blur-[128px]"></div>
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/20 mix-blend-screen blur-[128px]"></div>

      {/* Logo */}
      <div className="absolute top-8 left-8 sm:top-12 sm:left-12 z-10">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary shadow-glow">
            <Sparkles className="h-5 w-5 text-primary-foreground" />
          </span>
          <span className="text-foreground">Northbeam<span className="text-primary">.</span></span>
        </Link>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* 404 Text */}
        <h1 className="text-[8rem] sm:text-[12rem] font-extrabold leading-none tracking-tighter text-gradient drop-shadow-lg">
          404
        </h1>
        
        {/* Headline */}
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
          Looks like you’ve hit the edge.
        </h2>
        
        {/* Subtext */}
        <p className="mt-4 max-w-[500px] text-lg text-muted-foreground">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        
        {/* Call to Action */}
        <div className="mt-10">
          <Button 
            asChild 
            variant="hero" 
            size="xl" 
            className="rounded-full font-bold px-8 py-6 text-lg"
          >
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
