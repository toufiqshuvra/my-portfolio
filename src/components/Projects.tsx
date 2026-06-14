import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Esther Group Website",
      url: "https://www.estherventures.com/",
      description:
        "Developed a modern, scalable CMS-driven platform with Svelte and Tailwind CSS, integrating Directus for content management and performance optimization.",
      technologies: ["Svelte", "Tailwind CSS", "Directus", "CMS"],
      category: "Full Stack"
    },
    {
      title: "JU Reunion (Jahangirnagar University Global Reunion)",
      url: "https://jureunion.org/",
      description:
        "Designed and developed a full-featured alumni reunion platform with scalable frontend architecture and backend API integration for global users.",
      technologies: ["Svelte", "JavaScript", "Backend API"],
      category: "Full Stack"
    },

    // NEW PROJECT 1
    {
      title: "InNeed Cloud Website",
      url: "https://inneedcloud.com/",
      description:
        "Developed and maintained the company portfolio website showcasing cloud-native solutions, services, and enterprise digital products with modern responsive UI.",
      technologies: ["React.js", "Next.js", "Tailwind CSS", "UI/UX"],
      category: "Frontend"
    },

    // NEW PROJECT 2
    {
      title: "HomeGrown Platform",
      url: "https://gohomegrown.org/",
      description:
        "A health-focused digital platform promoting nutrition and physical activity, especially for children with Down syndrome, built with a user-centered design approach.",
      technologies: ["Frontend Development", "UI/UX", "Web Optimization"],
      category: "Frontend"
    },

    {
      title: "Million Al Minds",
      description:
        "Built a high-performance frontend application using Svelte and Tailwind CSS, focusing on speed, responsiveness, and user experience.",
      technologies: ["Svelte", "Tailwind CSS", "UI/UX"],
      category: "Frontend"
    },

    {
      title: "WordPress Projects Portfolio",
      description:
        "Maintained and customized multiple WordPress websites including IAJ Online, Esther Ventures, and Goat & Sheep Farmers Association with performance optimization and SEO improvements.",
      technologies: ["WordPress", "PHP", "MySQL", "cPanel"],
      category: "WordPress"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">

        {/* Heading */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="section-kicker">Selected Builds</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>

          <div className="section-underline"></div>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Production-grade web applications built with modern frontend technologies including React, Next.js, Svelte, CMS systems, and scalable enterprise architectures.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">

          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass-card interactive-card p-6 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >

              {/* Header */}
              <div className="flex items-start justify-between mb-4">

                <Badge
                  variant="secondary"
                  className="chip-hover bg-accent/10 text-accent hover:bg-accent/20 border-accent/20"
                >
                  {project.category}
                </Badge>

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live Project Link"
                    className="text-muted-foreground hover:text-primary transition-all hover:-translate-y-1 hover:scale-110"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}

              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className="chip-hover border-border/50 text-muted-foreground hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
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
