import { Link } from "react-router-dom";
import { Sparkles, Linkedin, Instagram, Facebook } from "lucide-react";

const socials = [
  { Icon: Instagram, href: "https://www.instagram.com/northbeam__/", label: "Instagram" },
  { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61588942620112", label: "Facebook" },
  { Icon: Linkedin, href: "https://www.linkedin.com/company/115914265/admin/dashboard/", label: "LinkedIn" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="container py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 space-y-4">
          <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
            <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary shadow-glow">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </span>
            <span>Northbeam<span className="text-primary">.</span></span>
          </Link>
          <p className="text-muted-foreground max-w-sm text-sm">
            Performance marketing for ambitious brands. We turn ad spend into predictable, compounding revenue.
          </p>
          <div className="flex gap-3 pt-2">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-smooth"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/case-studies" className="hover:text-primary">Case studies</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-4">Get in touch</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="mailto:northbeam.info@gmail.com" className="hover:text-primary">northbeam.info@gmail.com</a></li>
            <li>India · Remote</li>
            <li><Link to="/contact" className="text-primary hover:underline">Start a project →</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container py-6 flex flex-col md:flex-row gap-2 items-center justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Northbeam Growth. All rights reserved.</p>
          <p>Crafted with intent in HSL.</p>
        </div>
      </div>
    </footer>
  );
};
