import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 lg:px-24 h-16">
        <a
          href="#"
          className="font-display font-bold text-xl text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
        >
          OT
        </a>
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:text-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="https://www.linkedin.com/in/oleksandr-tkach"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex text-sm text-primary hover:text-accent transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
        >
          LinkedIn<span className="sr-only"> (opens in a new tab)</span>
          <span aria-hidden="true" className="ml-0.5">
            ↗
          </span>
        </a>
        <button
          type="button"
          className="md:hidden text-foreground p-2 -mr-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} aria-hidden /> : <Menu size={24} aria-hidden />}
        </button>
      </div>
      {mobileOpen && (
        <nav
          id="mobile-nav"
          className="md:hidden w-full bg-background border-b border-border"
          aria-label="Mobile primary"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pb-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1 focus-visible:outline-none focus-visible:text-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.linkedin.com/in/oleksandr-tkach"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="text-sm text-primary font-medium py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
            >
              LinkedIn<span className="sr-only"> (opens in a new tab)</span>
              <span aria-hidden="true" className="ml-0.5">
                ↗
              </span>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
