import Education from "@/components/Education";
import PageIntro from "@/components/PageIntro";
import Seo from "@/components/Seo";
import SiteLayout from "@/components/SiteLayout";

const EducationPage = () => (
  <SiteLayout>
    <Seo pathname="/education" />
    <PageIntro
      title="Education & Qualifications"
      description="My academic background includes ongoing Computer Science and Engineering studies and a completed diploma in Computer Science and Technology."
      breadcrumb={[{ label: "Home", href: "/" }, { label: "Education" }]}
    />
    <Education />
  </SiteLayout>
);

export default EducationPage;
