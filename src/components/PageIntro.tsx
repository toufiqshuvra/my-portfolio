import Breadcrumbs, { type BreadcrumbItem } from "@/components/Breadcrumbs";

type PageIntroProps = {
  title: string;
  description: string;
  breadcrumb: BreadcrumbItem[];
  kicker?: string;
};

const PageIntro = ({
  title,
  description,
  breadcrumb,
  kicker = "Md. Toufiqul Karim",
}: PageIntroProps) => (
  <section className="pb-8 pt-28 sm:pb-10 sm:pt-32">
    <div className="site-container">
      <Breadcrumbs items={breadcrumb} />
      <div className="max-w-3xl animate-slide-up">
        <span className="section-kicker mx-0">{kicker}</span>
        <h1 className="mb-5 text-4xl font-bold leading-tight md:text-5xl">
          {title}
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  </section>
);

export default PageIntro;
