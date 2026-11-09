import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <section id="projects" className="section-shell" aria-labelledby="projects-heading">
      <div className="site-container">

        {/* Heading */}
        <div className="section-heading animate-slide-up">
          <span className="section-kicker">Selected Builds</span>
          <h2 id="projects-heading" className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>

          <div className="section-underline"></div>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Production-grade web applications built with modern frontend technologies including React, Next.js, Svelte, CMS systems, and scalable enterprise architectures.
          </p>
        </div>

        {/* Grid */}
        <div className="grid items-stretch gap-6 md:grid-cols-2">

          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass-card interactive-card group flex h-full flex-col p-5 animate-slide-up sm:p-6"
              style={{ animationDelay: `${index * 0.1}s` }}
            >

              {/* Header */}
              <div className="mb-4 flex items-start justify-between gap-4">

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
                    aria-label={`Visit the live ${project.title} website`}
                    title={`Visit the live ${project.title} website`}
                    className="text-muted-foreground hover:text-primary transition-all hover:-translate-y-1 hover:scale-110"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}

              </div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-bold transition-colors group-hover:text-primary">
                {project.title}
              </h3>

              {project.teamCollaboration && (
                <p className="mb-3 text-sm font-medium text-primary">
                  {project.roleLabel}
                </p>
              )}

              {/* Description */}
              <p className="mb-5 leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              {/* Tech stack */}
              {project.technologies.length > 0 && (
                <ul className="mt-auto flex flex-wrap gap-2" aria-label="Technologies">
                  {project.technologies.map((tech) => (
                    <li key={tech}>
                      <Badge
                        variant="outline"
                        className="chip-hover border-border/50 text-muted-foreground hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                      >
                        {tech}
                      </Badge>
                    </li>
                  ))}
                </ul>
              )}

              <Link
                to={`/projects/${project.slug}`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                aria-label={`Read the ${project.title} project details`}
              >
                View project details
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

            </Card>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;
