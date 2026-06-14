import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">

        {/* Heading */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="section-kicker">Who I Am</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="section-underline"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT - Summary */}
          <div className="animate-slide-up">

            <Card className="glass-card interactive-card p-8 shadow-elegant">

              <h3 className="text-2xl font-bold mb-4 text-primary">
                Professional Summary
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-4">
                I am a Frontend-focused Software Engineer with 2+ years of experience
                building scalable, SEO-optimized, and performance-driven web applications.
                I specialize in creating production-grade UI systems and business dashboards
                using modern frontend technologies.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                My core expertise includes React.js, Next.js, Svelte, Astro, and TypeScript.
                I also have hands-on experience in WordPress development, API integration,
                and cloud-based deployment workflows using AWS and CI/CD tools.
                I focus on delivering clean, maintainable, and user-centric digital solutions.
              </p>

            </Card>
          </div>

          {/* RIGHT - Cards */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>

            {/* Frontend */}
            <Card className="glass-card interactive-card group p-6">
              <div className="flex items-start gap-4">

                <div className="icon-tile">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    Frontend Engineering
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    React.js, Next.js, Svelte, Astro, TypeScript, Tailwind CSS, and modern UI architecture
                  </p>
                </div>

              </div>
            </Card>

            {/* UI/UX */}
            <Card className="glass-card interactive-card group p-6">
              <div className="flex items-start gap-4">

                <div className="icon-tile bg-accent/10 group-hover:bg-accent/20">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    UI/UX & Product Design
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Designing responsive, accessible, and user-friendly interfaces focused on real-world usability
                  </p>
                </div>

              </div>
            </Card>

            {/* WordPress / CMS */}
            <Card className="glass-card interactive-card group p-6">
              <div className="flex items-start gap-4">

                <div className="icon-tile">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    CMS & WordPress Development
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Custom WordPress development, website optimization, maintenance, and CMS integrations
                  </p>
                </div>

              </div>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
