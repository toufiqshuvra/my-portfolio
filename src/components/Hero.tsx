import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Award } from "lucide-react";

const profilePhoto = "/images/md-toufiqul-karim-frontend-software-engineer-dhaka-bangladesh.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden py-24 sm:py-28"
      aria-labelledby="home-heading"
    >

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="site-container relative z-10">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-14">

          {/* LEFT */}
          <div className="order-2 animate-slide-up text-center lg:order-1 lg:text-left">

            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium mb-4 shadow-[0_0_25px_hsl(var(--primary)/0.16)] transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/15">
                Available for Software Engineering Opportunities
              </span>
            </div>

            <h1 id="home-heading" className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              Hi, I'm{" "}
              <span className="text-gradient">Md. Toufiqul Karim</span>
            </h1>

            <h2 className="mb-6 text-xl font-medium text-muted-foreground md:text-2xl lg:text-3xl">
              Frontend-Focused Software Engineer | <span className="text-primary font-semibold">React.js</span>,{" "}<span className="text-primary font-semibold">Next.js</span>, <span className="text-primary font-semibold">Svelte</span>, <span className="text-primary font-semibold">Astro</span> Developer
            </h2>

            <p className="mb-8 text-base leading-relaxed text-muted-foreground md:text-lg">
              Frontend-focused Software Engineer with 2+ years of experience in building scalable, SEO-optimized, and performance-driven web applications.
              Specialized in React.js, Next.js, Svelte, Astro, and TypeScript. Experienced in developing production-grade dashboards, enterprise UI systems, and cloud-integrated business solutions.
            </p>


            {/* Buttons */}
            <div className="mb-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow group rounded-full transition-all hover:-translate-y-1 hover:shadow-[0_0_34px_hsl(var(--primary)/0.45)]"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-secondary rounded-full transition-all hover:-translate-y-1 hover:border-primary/40 hover:text-primary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>

            {/* Social */}
            <div className="flex gap-6 justify-center lg:justify-start items-center">

              <a
                href="https://github.com/toufiqshuvra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all hover:-translate-y-1 hover:scale-110"
                aria-label="Visit Md. Toufiqul Karim's GitHub frontend developer portfolio"
                title="Md. Toufiqul Karim GitHub portfolio for React, Next.js, and frontend projects"
              >
                <Github className="h-6 w-6" />
              </a>

              <a
                href="https://www.linkedin.com/in/md-toufiqul-karim-ba1952179/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all hover:-translate-y-1 hover:scale-110"
                aria-label="Visit Md. Toufiqul Karim's LinkedIn frontend software engineer profile"
                title="Md. Toufiqul Karim LinkedIn profile - Frontend Software Engineer in Dhaka, Bangladesh"
              >
                <Linkedin className="h-6 w-6" />
              </a>

              <a
                href="https://www.credly.com/users/md-toufiqul-karim"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all hover:-translate-y-1 hover:scale-110"
                aria-label="View Md. Toufiqul Karim's software engineering certifications on Credly"
                title="Md. Toufiqul Karim Credly certifications for software engineering and cloud skills"
              >
                <Award className="h-6 w-6" />
              </a>

            </div>
          </div>

          {/* RIGHT */}
          <div className="order-1 animate-slide-up lg:order-2" style={{ animationDelay: '0.2s' }}>
            <div className="relative">

              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-pulse"></div>

              <img
                src={profilePhoto}
                alt="Md. Toufiqul Karim Shuvra, Frontend Software Engineer in Dhaka, Bangladesh specializing in React, Next.js, Svelte, Astro, and TypeScript portfolio development"
                title="Md. Toufiqul Karim Shuvra, Frontend Software Engineer in Dhaka, Bangladesh"
                width="512"
                height="512"
                loading="eager"
                fetchPriority="high"
                className="mx-auto w-full max-w-[18rem] rounded-2xl border-4 border-primary/20 shadow-elegant transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-primary/50 hover:shadow-glow sm:max-w-sm lg:max-w-md"
              />

            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
