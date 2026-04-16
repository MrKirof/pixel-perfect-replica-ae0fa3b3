import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { lazy, Suspense } from "react";
import { usePerformanceTier } from "@/hooks/usePerformanceTier";

const FooterVortex = lazy(() => import("./FooterVortex"));

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Work", path: "/work" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const socialLinks = [
  { label: "Behance", href: "https://www.behance.net/mrkirof" },
  { label: "LinkedIn", href: "https://www.linkedin.com" },
];

const Footer = () => {
  const { config } = usePerformanceTier();

  return (
    <footer className="surface relative border-t border-border/70 bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 lg:px-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(320px,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <div className="flex justify-center lg:justify-start">
            {config.enableFooterVortex ? (
              <Suspense fallback={<div className="h-[280px] w-full max-w-[320px] rounded-full bg-muted/20" />}>
                <FooterVortex />
              </Suspense>
            ) : (
              <div className="relative h-[220px] w-full max-w-[280px] overflow-hidden rounded-full border border-border/40 bg-muted/20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--accent)/0.18),transparent_62%)]" />
                <div className="absolute inset-8 rounded-full border border-border/30" />
                <div className="absolute inset-[30%] rounded-full bg-accent/20 blur-2xl" />
              </div>
            )}
          </div>

          <div className="grid gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <section>
              <h4 className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">
                Navigation
              </h4>
              <nav className="grid gap-3" aria-label="Footer navigation links">
                {navLinks.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    className="group relative inline-flex w-fit pb-1 text-base text-foreground/80 transition-colors duration-300 hover:text-foreground"
                    data-cursor-hover
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
                  </Link>
                ))}
              </nav>
            </section>

            <div className="space-y-7">
              <section>
                <h4 className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  Connect
                </h4>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center rounded-full border border-border bg-background px-4 py-2.5 text-sm sm:text-base text-foreground/80 transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background"
                      data-cursor-hover
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </section>

              <section>
                <h4 className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  Email
                </h4>
                <a
                  href="mailto:hello@mrkirof.com"
                  className="text-base text-foreground transition-colors duration-300 hover:text-primary break-all"
                  data-cursor-hover
                >
                  hello@mrkirof.com
                </a>
              </section>

              <section className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success/70" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-success" />
                </span>
                <span className="text-sm sm:text-base text-foreground/75">Currently accepting projects</span>
              </section>

              <Button size="lg" className="h-12 w-full sm:w-fit rounded-full px-7 font-display text-base font-bold" data-cursor-hover onClick={() => window.dispatchEvent(new Event('open-start-project'))}>
                Start a Project
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground/20 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border/70 pt-6 md:mt-14 md:flex-row md:items-center md:justify-between">
          <p className="text-sm sm:text-base text-muted-foreground">© 2026 All rights reserved. Crafted with obsession.</p>
          <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.24em] text-muted-foreground">
            REMOTE-FIRST · EST. 2013
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
