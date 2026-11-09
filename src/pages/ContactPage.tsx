import Contact from "@/components/Contact";
import PageIntro from "@/components/PageIntro";
import Seo from "@/components/Seo";
import SiteLayout from "@/components/SiteLayout";

const ContactPage = () => (
  <SiteLayout>
    <Seo pathname="/contact" />
    <PageIntro
      title="Contact Md. Toufiqul Karim"
      description="For frontend software engineering opportunities and professional collaboration, reach out by email or connect through my profiles."
      breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
    />
    <Contact />
  </SiteLayout>
);

export default ContactPage;
