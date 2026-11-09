import { Link, useParams } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageIntro from "@/components/PageIntro";
import Seo from "@/components/Seo";
import SiteLayout from "@/components/SiteLayout";
import { getProjectBySlug } from "@/data/projects";
import NotFound from "@/pages/NotFound";

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <NotFound />;
  }

  const relatedProjects = project.related
    .map((relatedSlug) => getProjectBySlug(relatedSlug))
    .filter((related): related is NonNullable<typeof related> => Boolean(related));

  return (
    <SiteLayout>
      <Seo pathname={`/projects/${project.slug}`} />
      <PageIntro
        title={project.title}
        description={project.description}
        kicker={project.category}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.title },
        ]}
      />

      <section className="section-shell pt-8" aria-labelledby="project-overview">
        <div className="site-container grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(16rem,1fr)]">
          <div className="space-y-8">
            <article>
              <h2 id="project-overview" className="mb-3 text-2xl font-bold">
                Project overview
              </h2>
              <p className="leading-relaxed text-muted-foreground">{project.overview}</p>
              {project.context && (
                <p className="mt-4 leading-relaxed text-muted-foreground">{project.context}</p>
              )}
            </article>

            <article>
              <h2 className="mb-3 text-2xl font-bold">My contribution</h2>
              <Badge className="mb-4 border-primary/20 bg-primary/10 text-primary hover:bg-primary/10">
                {project.roleLabel}
              </Badge>
              <p className="leading-relaxed text-muted-foreground">{project.contribution}</p>
            </article>

            {project.highlights && project.highlights.length > 0 && (
              <article>
                <h2 className="mb-3 text-2xl font-bold">Documented project details</h2>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            )}

            {project.technologies.length > 0 && (
              <article>
                <h2 className="mb-3 text-2xl font-bold">Technologies</h2>
                <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
                  {project.technologies.map((technology) => (
                    <li key={technology}>
                      <Badge variant="outline" className="border-border/70 text-muted-foreground">
                        {technology}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </article>
            )}
          </div>

          <aside className="h-fit rounded-xl border border-border/60 bg-card/50 p-6">
            <h2 className="mb-4 text-xl font-bold">Project links</h2>
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-primary hover:underline"
              >
                Visit live website
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            ) : (
              <p className="text-sm text-muted-foreground">
                This portfolio entry groups multiple WordPress websites.
              </p>
            )}
            <p className="mt-4 text-sm text-muted-foreground">
              Project category: {project.category}
            </p>
          </aside>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="section-shell bg-gradient-to-b from-secondary/20 to-background">
          <div className="site-container">
            <div className="section-heading">
              <span className="section-kicker">Continue Exploring</span>
              <h2 className="mb-4 text-3xl font-bold">Related Projects</h2>
              <div className="section-underline" />
            </div>
            <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
              {relatedProjects.map((related) => (
                <Link
                  key={related.slug}
                  to={`/projects/${related.slug}`}
                  className="glass-card rounded-xl border border-border/50 p-5 transition-transform hover:-translate-y-1"
                >
                  <h3 className="mb-2 text-lg font-semibold">{related.title}</h3>
                  <p className="text-sm text-muted-foreground">{related.description}</p>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link to="/projects" className="font-semibold text-primary hover:underline">
                View all projects
              </Link>
            </div>
          </div>
        </section>
      )}
    </SiteLayout>
  );
};

export default ProjectDetailPage;
