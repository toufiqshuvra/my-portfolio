import { getProjectBySlug, projects } from "@/data/projects";
import { frequentlyAskedQuestions } from "@/data/faqs";
import { sitePages } from "@/data/sitePages";

export const siteOrigin = "https://toufiqulkarim.netlify.app";
export const personId = `${siteOrigin}/#person`;

const normalizePath = (pathname: string) => pathname.replace(/\/+$/, "") || "/";

export const getMetadata = (pathname: string) => {
  const path = normalizePath(pathname);
  const projectSlug = path.startsWith("/projects/") ? path.split("/").pop() : undefined;
  const project = getProjectBySlug(projectSlug);
  const page = sitePages.find((item) => item.path === path);

  if (project) {
    return {
      title: `${project.title} | Projects by Md. Toufiqul Karim`,
      description: project.description,
      canonical: `${siteOrigin}${path}`,
      path,
      project,
      noindex: false,
    };
  }

  if (page) {
    return {
      title: page.title,
      description: page.description,
      canonical: `${siteOrigin}${page.path}`,
      path: page.path,
      project: undefined,
      noindex: false,
    };
  }

  return {
    title: "Page Not Found | Md. Toufiqul Karim",
    description: "The requested portfolio page could not be found.",
    canonical: undefined,
    path,
    project: undefined,
    noindex: true,
  };
};

const personSchema = {
  "@type": "Person",
  "@id": personId,
  name: "Md. Toufiqul Karim Shuvra",
  url: `${siteOrigin}/`,
  image: `${siteOrigin}/images/md-toufiqul-karim-frontend-software-engineer-dhaka-bangladesh.png`,
  jobTitle: "Frontend-Focused Software Engineer",
  description:
    "Frontend-focused software engineer in Dhaka, Bangladesh, working with React, Next.js, Svelte, Astro, TypeScript, WordPress, and performance-driven web applications.",
  email: "mailto:shuvrasarker54@gmail.com",
  telephone: "+8801302612486",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressRegion: "Dhaka",
    addressCountry: "BD",
  },
  knowsAbout: [
    "React",
    "Next.js",
    "Svelte",
    "Astro",
    "TypeScript",
    "WordPress",
    "SEO",
    "UI/UX Engineering",
    "Frontend Architecture",
    "Performance Optimization",
  ],
  sameAs: [
    "https://github.com/toufiqshuvra",
    "https://www.linkedin.com/in/md-toufiqul-karim-ba1952179/",
    "https://www.credly.com/users/md-toufiqul-karim",
  ],
};

export const getStructuredData = (pathname: string) => {
  const metadata = getMetadata(pathname);
  const { path, project } = metadata;
  const graph: Record<string, unknown>[] = [
    personSchema,
    {
      "@type": "WebSite",
      "@id": `${siteOrigin}/#website`,
      url: `${siteOrigin}/`,
      name: "Md. Toufiqul Karim — Portfolio",
      publisher: { "@id": personId },
    },
  ];

  if (metadata.noindex) {
    return { "@context": "https://schema.org", "@graph": graph };
  }

  const pageType =
    path === "/about"
      ? "ProfilePage"
      : path === "/projects"
        ? "CollectionPage"
        : "WebPage";
  graph.push({
    "@type": pageType,
    "@id": `${siteOrigin}${path}#webpage`,
    url: metadata.canonical,
    name: metadata.title,
    description: metadata.description,
    isPartOf: { "@id": `${siteOrigin}/#website` },
    about: { "@id": personId },
  });

  if (project) {
    graph.push({
      "@type": "CreativeWork",
      "@id": `${siteOrigin}${path}#project`,
      name: project.title,
      description: project.description,
      url: project.url ?? metadata.canonical,
      ...(project.teamCollaboration ? { contributor: { "@id": personId } } : {}),
    });
  }

  const breadcrumbItems = [
    { name: "Home", item: `${siteOrigin}/` },
    ...(project
      ? [
          { name: "Projects", item: `${siteOrigin}/projects` },
          { name: project.title, item: metadata.canonical },
        ]
      : path === "/"
        ? []
        : [{ name: sitePages.find((page) => page.path === path)?.heading ?? "Page", item: metadata.canonical }]),
  ];
  graph.push({
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  });

  if (path === "/") {
    graph.push({
      "@type": "FAQPage",
      mainEntity: frequentlyAskedQuestions.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
  }

  if (path === "/projects") {
    graph.push({
      "@type": "ItemList",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: project.title,
        url: `${siteOrigin}/projects/${project.slug}`,
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
};
