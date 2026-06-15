import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "💻",
      skills: [
        "React.js",
        "Next.js",
        "Svelte",
        "Astro",
        "JavaScript (ES6+)",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap"
      ]
    },
    {
      title: "Cloud & AI Technologies",
      icon: "☁️",
      skills: [
        "AWS (S3, CloudFront)",
        "Oracle Cloud Infrastructure (OCI)",
        "Generative AI",
        "AI Foundations",
        "Cloud Deployment",
        "Performance Optimization"
      ]
    },
    {
      title: "CMS & Digital Platforms",
      icon: "🔧",
      skills: [
        "WordPress Development",
        "Webiny CMS",
        "Directus",
        "GoHighLevel CRM",
        "Content Management Systems",
        "Automation Workflows"
      ]
    },
    {
      title: "Backend & Databases",
      icon: "🗄️",
      skills: [
        "PHP (Laravel)",
        "MySQL",
        "MongoDB",
        "PostgreSQL",
        "RESTful APIs",
        "Database Design",
        "cPanel Administration"
      ]
    },
    {
      title: "Analytics, SEO & Tools",
      icon: "🛠️",
      skills: [
        "Google Analytics 4 (GA4)",
        "Google Tag Manager (GTM)",
        "Google Search Console (GSC)",
        "SEO Optimization",
        "Git & GitHub",
        "Postman",
        "Figma",
        "API Integration"
      ]
    }
  ];

  return (
    <section
      id="skills"
      className="section-shell bg-gradient-to-b from-secondary/20 to-background"
      aria-labelledby="skills-heading"
    >
      <div className="site-container">

        {/* Heading */}
        <div className="section-heading animate-slide-up">
          <span className="section-kicker">Toolbox</span>
          <h2 id="skills-heading" className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>

          <div className="section-underline"></div>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Full-stack frontend engineer specializing in scalable web applications, cloud infrastructure, CMS platforms, and SEO-driven digital systems.
          </p>
        </div>

        {/* Skill grid */}
        <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">

          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="glass-card interactive-card group h-full p-5 animate-slide-up sm:p-6"
              style={{ animationDelay: `${index * 0.1}s` }}
            >

              <div className="mb-4 inline-flex text-4xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110">
                {category.icon}
              </div>

              <h3 className="text-xl font-bold mb-4 text-primary">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="chip-hover px-3 py-1 bg-secondary/50 text-foreground rounded-md text-sm border border-border/50 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </Card>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;
