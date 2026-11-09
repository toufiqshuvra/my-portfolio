export type Project = {
  slug: string;
  title: string;
  category: string;
  url?: string;
  description: string;
  overview: string;
  contribution: string;
  roleLabel: string;
  teamCollaboration: boolean;
  technologies: string[];
  context?: string;
  highlights?: string[];
  related: string[];
};

export const projects: Project[] = [
  {
    slug: "esther-group",
    title: "Esther Group",
    category: "Full Stack",
    url: "https://www.estherventures.com/",
    description:
      "A CMS-driven web platform built with Svelte and Tailwind CSS, with Directus used for content management.",
    overview:
      "The existing portfolio describes Esther Group as a modern, scalable CMS-driven platform.",
    contribution:
      "The existing portfolio records development of the platform and its CMS integration. It does not specify whether this work was solo or collaborative.",
    roleLabel: "Platform development",
    teamCollaboration: false,
    technologies: ["Svelte", "Tailwind CSS", "Directus", "CMS"],
    context: "The public project is available at estherventures.com.",
    highlights: ["Svelte and Tailwind CSS frontend", "Directus content management integration"],
    related: ["inneed-cloud", "wordpress-projects"],
  },
  {
    slug: "ju-reunion",
    title: "JU Reunion",
    category: "Full Stack",
    url: "https://jureunion.org/",
    description:
      "A global alumni reunion platform with a scalable frontend and backend API integration.",
    overview:
      "The existing portfolio describes JU Reunion as a full-featured platform for the Jahangirnagar University Global Reunion.",
    contribution:
      "The existing portfolio records design and development work on the platform, including frontend architecture and backend API integration. It does not specify whether this work was solo or collaborative.",
    roleLabel: "Frontend and API integration",
    teamCollaboration: false,
    technologies: ["Svelte", "JavaScript", "Backend API"],
    context: "The platform is available at jureunion.org.",
    highlights: ["Scalable frontend architecture", "Backend API integration"],
    related: ["homegrown-platform", "vitalss"],
  },
  {
    slug: "inneed-cloud",
    title: "InNeed Cloud",
    category: "Frontend",
    url: "https://inneedcloud.com/",
    description:
      "A company portfolio website presenting cloud-native solutions, services, and enterprise digital products.",
    overview:
      "The existing portfolio describes work developing and maintaining the InNeed Cloud company website.",
    contribution:
      "The existing portfolio records frontend development and maintenance of the company portfolio, with a focus on a modern, responsive user interface.",
    roleLabel: "Frontend development",
    teamCollaboration: false,
    technologies: ["Svelte", "Next.js", "Tailwind CSS", "UI/UX"],
    context: "The website presents the company's cloud-native solutions, services, and enterprise digital products.",
    highlights: ["Company and services presentation", "Responsive interface"],
    related: ["esther-group", "inneed-ai"],
  },
  {
    slug: "homegrown-platform",
    title: "HomeGrown Platform",
    category: "Frontend",
    url: "https://gohomegrown.org/",
    description:
      "A health-focused digital platform promoting nutrition and physical activity, especially for children with Down syndrome.",
    overview:
      "The existing portfolio describes HomeGrown as a health-focused platform promoting nutrition and physical activity.",
    contribution:
      "The existing portfolio lists this project and describes its user-centered approach, but does not document specific individual responsibilities.",
    roleLabel: "Frontend project",
    teamCollaboration: false,
    technologies: ["Frontend Development", "UI/UX", "Web Optimization"],
    context:
      "The project description identifies children with Down syndrome as a particular focus of its nutrition and physical-activity mission.",
    highlights: ["Health-focused digital experience", "User-centered design approach"],
    related: ["ju-reunion", "my-caregiving-circle"],
  },
  {
    slug: "nokshasemi",
    title: "NokshaSemi",
    category: "Frontend",
    url: "https://nokshasemi.com/",
    description:
      "A high-performance frontend application built with Astro and Tailwind CSS, with a focus on speed, responsiveness, and user experience.",
    overview:
      "The existing portfolio describes a frontend application developed with Astro and Tailwind CSS.",
    contribution:
      "The existing portfolio records frontend development focused on speed, responsiveness, and user experience.",
    roleLabel: "Frontend development",
    teamCollaboration: false,
    technologies: ["Astro", "Tailwind CSS", "UI/UX"],
    context: "The live website is available at nokshasemi.com.",
    highlights: ["Astro frontend", "Responsive design and performance focus"],
    related: ["million-al-minds", "inneed-cloud"],
  },
  {
    slug: "million-al-minds",
    title: "Million Al Minds",
    category: "Frontend",
    url: "https://millionalminds.com/",
    description:
      "A frontend application built with Svelte and Tailwind CSS, with a focus on speed, responsiveness, and user experience.",
    overview:
      "The existing portfolio describes Million Al Minds as a frontend application developed with Svelte and Tailwind CSS.",
    contribution:
      "The existing portfolio records frontend development focused on speed, responsiveness, and user experience.",
    roleLabel: "Frontend development",
    teamCollaboration: false,
    technologies: ["Svelte", "Tailwind CSS", "UI/UX"],
    context: "The live website is available at millionalminds.com.",
    highlights: ["Svelte frontend", "Responsive design and performance focus"],
    related: ["nokshasemi", "esther-group"],
  },
  {
    slug: "wordpress-projects",
    title: "WordPress Projects",
    category: "WordPress",
    description:
      "WordPress maintenance and customization across IAJ Online, Esther Ventures, and Goat & Sheep Farmers Association websites.",
    overview:
      "The existing portfolio groups several WordPress website maintenance and customization projects.",
    contribution:
      "The existing portfolio records WordPress maintenance and customization work, including performance optimization and SEO improvements.",
    roleLabel: "WordPress development and maintenance",
    teamCollaboration: false,
    technologies: ["WordPress", "PHP", "MySQL", "cPanel"],
    context: "The listed sites are IAJ Online, Esther Ventures, and Goat & Sheep Farmers Association.",
    highlights: ["Website maintenance and customization", "Performance and SEO improvements"],
    related: ["esther-group", "inneed-cloud"],
  },
  {
    slug: "vitalss",
    title: "VITALSS",
    category: "Team Collaboration",
    url: "https://vitalss.org/",
    description: "Collaborative frontend development contribution for the VITALSS website.",
    overview:
      "VITALSS is a live website included in the portfolio as a team project.",
    contribution:
      "Frontend development as part of a development team. This is a contribution to a collaborative project, not a claim of sole ownership or authorship.",
    roleLabel: "Frontend Development · Team Collaboration",
    teamCollaboration: true,
    technologies: [],
    related: ["ju-reunion", "translara"],
  },
  {
    slug: "my-caregiving-circle",
    title: "MyCaregivingCircle",
    category: "Team Collaboration",
    url: "https://mycaregivingcircle.org/",
    description: "Team-based frontend development contribution for the MyCaregivingCircle website.",
    overview:
      "MyCaregivingCircle is a live website included in the portfolio as a team project.",
    contribution:
      "Frontend development as part of a development team. This is a contribution to a collaborative project, not a claim of sole ownership or authorship.",
    roleLabel: "Frontend Development · Team Collaboration",
    teamCollaboration: true,
    technologies: [],
    related: ["homegrown-platform", "vitalss"],
  },
  {
    slug: "inneed-ai",
    title: "InNeed AI",
    category: "Team Collaboration",
    url: "https://inneed.ai/",
    description:
      "Frontend development contribution to InNeed AI's enterprise AI services website, delivered with a development team.",
    overview:
      "InNeed AI's public website describes enterprise AI solutions built around governed data, secure architecture, AI agents, enterprise search, and intelligent automation.",
    contribution:
      "Frontend development as part of a development team. The project is presented as a collaborative contribution, not independent ownership of the product.",
    roleLabel: "Frontend Development · Team Collaboration",
    teamCollaboration: true,
    technologies: [],
    context:
      "The public website describes a process spanning assessment, architecture, prototyping, deployment, and scaling. No implementation technologies are asserted here because they were not verified.",
    highlights: ["Enterprise AI services and solutions", "Public website content emphasizes governed data and secure architecture"],
    related: ["inneed-cloud", "translara"],
  },
  {
    slug: "translara",
    title: "Translara",
    category: "Team Collaboration",
    url: "https://translara.io/",
    description:
      "Frontend development contribution to Translara's research-translation platform, delivered with a development team.",
    overview:
      "Translara's public website describes a platform connecting research interventions, participant-facing web and mobile applications, and a governed Research Data Lake.",
    contribution:
      "Frontend development as part of a development team. The project is presented as a collaborative contribution, not independent ownership of the product.",
    roleLabel: "Frontend Development · Team Collaboration",
    teamCollaboration: true,
    technologies: [],
    context:
      "The public website also describes reusable research modules, study workflows, and AI-assisted research operations with human oversight. No implementation technologies are asserted here because they were not verified.",
    highlights: ["Research applications", "Research Data Lake", "Research workflows and reusable modules"],
    related: ["vitalss", "inneed-ai"],
  },
];

export const getProjectBySlug = (slug: string | undefined) =>
  projects.find((project) => project.slug === slug);
