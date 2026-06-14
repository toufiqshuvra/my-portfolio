import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer (Frontend-focused)",
      company: "InNeed Intelligent Cloud",
      period: "March 2024 - Present",
      achievements: [
        "Developed scalable, SEO-optimized, and performance-driven frontend applications using React.js, Next.js, Astro, Svelte, and TypeScript",
        "Built and delivered production-grade dashboards, enterprise UI systems, and business web applications with modern UI architecture",
        "Led end-to-end development lifecycle from UI/UX design to deployment and production optimization",
        "Maintained and customized WordPress websites with focus on performance, responsiveness, and SEO structure optimization",
        "Integrated Google Analytics 4 (GA4), Google Tag Manager (GTM), and Google Search Console (GSC) for tracking, analytics, and SEO performance insights",
        "Implemented CRM automation workflows using GoHighLevel for email campaigns, lead management, and business process automation",
        "Collaborated with cross-functional teams to deliver clean, scalable, maintainable, and user-centric frontend solutions"
      ],
      technologies: [
        "React.js",
        "Next.js",
        "Astro",
        "Svelte",
        "TypeScript",
        "Tailwind CSS",
        "WordPress",
        "Google Analytics 4",
        "Google Tag Manager",
        "Google Search Console",
        "GoHighLevel"
      ]
    }
  ];

  return (
    <section
      id="experience"
      className="py-20 px-6 bg-gradient-to-b from-background to-secondary/20"
    >
      <div className="container mx-auto max-w-6xl">

        {/* Heading */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="section-kicker">Recent Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="section-underline"></div>
        </div>

        {/* Experience Card */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="glass-card interactive-card group p-8 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">

                {/* Icon */}
                <div className="icon-tile self-start p-4">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1">

                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-2">
                      {exp.title}
                    </h3>

                    <p className="text-xl text-primary font-semibold mb-1">
                      {exp.company}
                    </p>

                    <p className="text-muted-foreground">
                      {exp.period}
                    </p>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-3 mb-6">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-primary mt-1.5">▹</span>
                        <span className="text-muted-foreground leading-relaxed">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="chip-hover bg-primary/10 text-primary hover:bg-primary/20 border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
