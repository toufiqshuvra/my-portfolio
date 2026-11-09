import { Link } from "react-router-dom";
import About from "@/components/About";
import PageIntro from "@/components/PageIntro";
import Seo from "@/components/Seo";
import SiteLayout from "@/components/SiteLayout";

const AboutPage = () => (
  <SiteLayout>
    <Seo pathname="/about" />
    <PageIntro
      title="About Md. Toufiqul Karim"
      description="I am a frontend-focused software engineer in Dhaka, Bangladesh. My work centers on building useful, maintainable web experiences with modern frontend technologies."
      breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
    />
    <About />
    <section className="section-shell bg-gradient-to-b from-secondary/20 to-background">
      <div className="site-container grid gap-8 md:grid-cols-2">
        <article className="glass-card rounded-xl border border-border/50 p-6 sm:p-8">
          <h2 className="mb-4 text-2xl font-bold">How I approach frontend work</h2>
          <p className="leading-relaxed text-muted-foreground">
            I focus on clear information structure, responsive interfaces, and
            maintainable implementation. My portfolio reflects work across
            product dashboards, business websites, CMS-backed experiences, and
            API-connected applications.
          </p>
        </article>
        <article className="glass-card rounded-xl border border-border/50 p-6 sm:p-8">
          <h2 className="mb-4 text-2xl font-bold">Working with teams</h2>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            Several recent project entries are explicitly presented as team
            collaborations. Their pages describe my frontend contribution
            without suggesting sole ownership of the wider product.
          </p>
          <Link className="font-semibold text-primary hover:underline" to="/projects">
            Explore projects and contribution details
          </Link>
        </article>
      </div>
    </section>
  </SiteLayout>
);

export default AboutPage;
