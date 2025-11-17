import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Award } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left side - Text content */}
          <div className="animate-slide-up text-center lg:text-left order-2 lg:order-1">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium mb-4">
                Available for Opportunities
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="text-gradient">Toufiqul Md. Karim</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium mb-6">
              Frontend Developer & Software Engineer
            </h2>
            
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
              Crafting responsive, scalable applications with{" "}
              <span className="text-primary font-semibold">Svelte</span>,{" "}
              <span className="text-primary font-semibold">JavaScript</span>, and modern web technologies.
              Specialized in UI/UX design and WordPress solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow group"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-border hover:bg-secondary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex gap-6 justify-center lg:justify-start items-center">
              <a 
                href="https://github.com/toufiqshuvra" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/md-toufiqul-karim-ba1952179/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://www.credly.com/users/md-toufiqul-karim" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Credly Certifications"
              >
                <Award className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Right side - Profile photo */}
          <div className="animate-slide-up order-1 lg:order-2" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Glow effect behind the image */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-pulse"></div>
              
              {/* Profile image container */}
              <div className="relative">
                <img 
                  src={profilePhoto} 
                  alt="Toufiqul Md. Karim - Frontend Developer"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-elegant border-4 border-primary/20 hover:border-primary/40 transition-all duration-300"
                />
              </div>
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
