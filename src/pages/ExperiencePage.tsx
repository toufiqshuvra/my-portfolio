import { Link } from "react-router-dom";
import Experience from "@/components/Experience";
import PageIntro from "@/components/PageIntro";
import Seo from "@/components/Seo";
import SiteLayout from "@/components/SiteLayout";

const ExperiencePage = () => (
  <SiteLayout>
    <Seo pathname="/experience" />
    <PageIntro
      title="Professional Experience"
      description="My current portfolio documents frontend-focused software engineering work spanning web applications, dashboards, UI systems, WordPress, analytics, and delivery."
      breadcrumb={[{ label: "Home", href: "/" }, { label: "Experience" }]}
    />
    <Experience />
    <section className="section-shell">
      <div className="site-container text-center">
        <h2 className="mb-4 text-3xl font-bold">Project work</h2>
        <p className="mx-auto mb-6 max-w-2xl leading-relaxed text-muted-foreground">
          Project pages distinguish documented platform work from the
          explicitly identified frontend contributions made through team
          collaboration.
        </p>
        <Link
          to="/projects"
          className="inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          Browse projects
        </Link>
      </div>
    </section>
  </SiteLayout>
);

export default ExperiencePage;
