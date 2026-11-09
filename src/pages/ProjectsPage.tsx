import Projects from "@/components/Projects";
import PageIntro from "@/components/PageIntro";
import Seo from "@/components/Seo";
import SiteLayout from "@/components/SiteLayout";

const ProjectsPage = () => (
  <SiteLayout>
    <Seo pathname="/projects" />
    <PageIntro
      title="Selected Projects"
      description="Explore web projects across frontend engineering, CMS platforms, and business applications. Team-based contributions are labeled clearly, and technologies are listed only where documented."
      breadcrumb={[{ label: "Home", href: "/" }, { label: "Projects" }]}
    />
    <Projects />
  </SiteLayout>
);

export default ProjectsPage;
