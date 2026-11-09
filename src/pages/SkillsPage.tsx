import { Link } from "react-router-dom";
import Skills from "@/components/Skills";
import PageIntro from "@/components/PageIntro";
import Seo from "@/components/Seo";
import SiteLayout from "@/components/SiteLayout";

const SkillsPage = () => (
  <SiteLayout>
    <Seo pathname="/skills" />
    <PageIntro
      title="Technical Skills"
      description="A practical toolkit across frontend development, content platforms, cloud services, databases, analytics, and web delivery."
      breadcrumb={[{ label: "Home", href: "/" }, { label: "Skills" }]}
    />
    <Skills />
    <section className="section-shell">
      <div className="site-container mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-2xl font-bold">Skills in context</h2>
        <p className="mb-6 leading-relaxed text-muted-foreground">
          The project archive connects these technologies with the work
          documented in my portfolio. Where a project's stack is not verified,
          its detail page leaves the technology list unspecified.
        </p>
        <Link className="font-semibold text-primary hover:underline" to="/projects">
          Explore project details
        </Link>
      </div>
    </section>
  </SiteLayout>
);

export default SkillsPage;
