import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Esther Group Website",
      description: "Developed full frontend with Svelte + Tailwind CSS, backend with Directus for a modern, scalable CMS-driven platform.",
      technologies: ["Svelte", "Tailwind CSS", "Directus", "CMS"],
      category: "Full Stack"
    },
    {
      title: "JU Reunion (Jahangirnagar University Global Reunion)",
      description: "Designed and developed a complete frontend and backend system for a global alumni reunion website.",
      technologies: ["Svelte", "JavaScript", "Backend API"],
      category: "Full Stack"
    },
    {
      title: "Million Al Minds",
      description: "Created the entire frontend with Svelte + Tailwind CSS for an engaging, fast user experience.",
      technologies: ["Svelte", "Tailwind CSS", "UI/UX"],
      category: "Frontend"
    },
    {
      title: "WordPress Projects Portfolio",
      description: "Maintained and customized several websites including IAJ Online, Esther Ventures, and Goat & Sheep Farmers Association.",
      technologies: ["WordPress", "PHP", "MySQL", "cPanel"],
      category: "WordPress"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in modern web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="glass-card p-6 hover:shadow-glow transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <Badge 
                  variant="secondary"
                  className="bg-accent/10 text-accent hover:bg-accent/20 border-accent/20"
                >
                  {project.category}
                </Badge>
                <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <Badge 
                    key={i}
                    variant="outline"
                    className="border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
