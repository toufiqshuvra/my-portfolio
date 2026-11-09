export type SitePage = {
  path: string;
  title: string;
  description: string;
  heading: string;
  intro: string;
};

export const sitePages: SitePage[] = [
  {
    path: "/",
    title: "Md. Toufiqul Karim | Frontend-Focused Software Engineer",
    description:
      "Portfolio of Md. Toufiqul Karim Shuvra, a Dhaka-based frontend-focused software engineer working with React, Next.js, Svelte, Astro, and TypeScript.",
    heading: "Home",
    intro: "Frontend-focused software engineering, selected work, and professional profile.",
  },
  {
    path: "/about",
    title: "About Md. Toufiqul Karim | Frontend Engineer",
    description:
      "Learn about Md. Toufiqul Karim's frontend engineering background, development approach, and professional focus in Dhaka, Bangladesh.",
    heading: "About Me",
    intro:
      "My background, the kind of frontend work I enjoy, and the principles I bring to building digital products.",
  },
  {
    path: "/experience",
    title: "Professional Experience | Md. Toufiqul Karim",
    description:
      "Professional experience in frontend applications, dashboards, UI systems, WordPress, analytics, and cloud-based delivery.",
    heading: "Professional Experience",
    intro:
      "A record of my software engineering role, responsibilities, and technologies documented in my portfolio.",
  },
  {
    path: "/projects",
    title: "Projects | Md. Toufiqul Karim",
    description:
      "Selected frontend, CMS, and web projects, including clearly attributed team collaboration contributions.",
    heading: "Projects",
    intro:
      "A collection of websites and digital products with project descriptions and contribution details where available.",
  },
  {
    path: "/skills",
    title: "Technical Skills | Md. Toufiqul Karim",
    description:
      "Frontend frameworks, programming languages, CMS platforms, cloud technologies, analytics, and development tools.",
    heading: "Technical Skills",
    intro:
      "Technologies and tools reflected in my professional portfolio, grouped by the work they support.",
  },
  {
    path: "/education",
    title: "Education | Md. Toufiqul Karim",
    description:
      "Computer Science and Engineering studies and Computer Science and Technology diploma qualifications.",
    heading: "Education & Qualifications",
    intro:
      "My academic background in computer science, software development, and systems fundamentals.",
  },
  {
    path: "/contact",
    title: "Contact Md. Toufiqul Karim | Frontend Engineer",
    description:
      "Contact Md. Toufiqul Karim in Dhaka, Bangladesh about frontend software engineering opportunities and collaboration.",
    heading: "Contact",
    intro:
      "For professional opportunities and collaboration, get in touch by email or connect through my professional profiles.",
  },
];

export const getSitePage = (pathname: string) => {
  const path = pathname.replace(/\/+$/, "") || "/";
  return sitePages.find((page) => page.path === path);
};
