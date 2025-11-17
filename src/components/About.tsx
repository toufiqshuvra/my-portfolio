import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <Card className="glass-card p-8 shadow-elegant">
              <h3 className="text-2xl font-bold mb-4 text-primary">Professional Summary</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a passionate Software Engineer with a strong focus on frontend development 
                and WordPress solutions. My expertise lies in designing and implementing intuitive 
                UI/UX features, responsive layouts, and interactive components.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With experience in modern frameworks like Svelte and technologies like Tailwind CSS 
                and Bootstrap, I create scalable applications that deliver exceptional user experiences. 
                I also specialize in WordPress site customization, database management, and ensuring 
                smooth website functionality.
              </p>
            </Card>
          </div>

          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <Card className="glass-card p-6 hover:shadow-glow transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Frontend Excellence</h4>
                  <p className="text-sm text-muted-foreground">
                    Expert in Svelte, JavaScript, HTML5, CSS3, and modern CSS frameworks
                  </p>
                </div>
              </div>
            </Card>

            <Card className="glass-card p-6 hover:shadow-glow transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">UI/UX Design</h4>
                  <p className="text-sm text-muted-foreground">
                    Creating beautiful, responsive interfaces with focus on user experience
                  </p>
                </div>
              </div>
            </Card>

            <Card className="glass-card p-6 hover:shadow-glow transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">WordPress Specialist</h4>
                  <p className="text-sm text-muted-foreground">
                    Custom development, maintenance, and optimization of WordPress sites
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
