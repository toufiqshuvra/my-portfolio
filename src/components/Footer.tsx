const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-6 border-t border-border/50 bg-background/95">
      <div className="container mx-auto max-w-6xl">

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center md:text-left transition-colors hover:text-foreground">
            © {currentYear} Md. Toufiqul Karim. All rights reserved.
          </p>

          {/* Tech stack branding */}
          <p className="text-muted-foreground text-sm text-center md:text-right">
            Built with{" "}
            <span className="chip-hover inline-block text-primary font-medium">Svelte</span>,{" "}
            <span className="chip-hover inline-block text-primary font-medium">React.js</span>,{" "}
            <span className="chip-hover inline-block text-primary font-medium">TypeScript</span>,{" "}
            <span className="chip-hover inline-block text-primary font-medium">Tailwind CSS</span> &{" "}
            <span className="chip-hover inline-block text-primary font-medium">modern frontend architecture</span>
          </p>

        </div>

        {/* SEO / credibility line */}
        <div className="mt-4 text-center">
          <p className="text-xs text-muted-foreground">
            Frontend Software Engineer specializing in scalable web applications, UI/UX engineering, and performance-optimized digital experiences.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
