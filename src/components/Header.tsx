import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
];

const contactLink = { label: "Contact", href: "#contact" };

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/85 shadow-[0_10px_35px_hsl(0_0%_0%/0.18)] backdrop-blur-xl">
      <div className="site-container flex h-16 items-center justify-between">
        <a
          href="#home"
          className="group text-base font-bold text-foreground transition-colors hover:text-primary sm:text-lg"
          onClick={closeMenu}
          aria-label="Go to home section"
          title="Md. Toufiqul Karim frontend developer portfolio homepage"
        >
          Toufiqul <span className="text-primary transition-colors group-hover:text-white">Karim</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-hover-link"
              title={`Go to ${item.label} section of Md. Toufiqul Karim's frontend developer portfolio`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={contactLink.href}
            className="ml-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-[0_0_30px_hsl(var(--primary)/0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            title="Contact Md. Toufiqul Karim for frontend software engineering opportunities in Dhaka, Bangladesh"
          >
            {contactLink.label}
          </a>
        </nav>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="rounded-full transition-transform hover:scale-105 lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      <nav
        id="mobile-navigation"
        className={`border-t border-border/50 bg-background/95 px-4 py-3 shadow-elegant transition-all duration-300 lg:hidden ${
          isOpen ? "block animate-slide-up" : "hidden"
        }`}
        aria-label="Mobile navigation"
      >
        <div className="site-container grid grid-cols-2 gap-2 min-[520px]:grid-cols-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-hover-link"
              onClick={closeMenu}
              title={`Go to ${item.label} section of Md. Toufiqul Karim's frontend developer portfolio`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={contactLink.href}
            className="rounded-full bg-primary px-3 py-2 text-center text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            onClick={closeMenu}
            title="Contact Md. Toufiqul Karim for frontend software engineering opportunities in Dhaka, Bangladesh"
          >
            {contactLink.label}
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
