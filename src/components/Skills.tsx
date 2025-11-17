import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "💻",
      skills: ["Svelte", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"]
    },
    {
      title: "Cloud & AI Technologies",
      icon: "☁️",
      skills: ["Oracle Cloud", "AWS", "Generative AI", "AI Foundations", "Machine Learning"]
    },
    {
      title: "CMS & Platforms",
      icon: "🔧",
      skills: ["WordPress", "Webiny CMS", "GoHighLevel", "Directus", "CRM Management"]
    },
    {
      title: "Backend & Database",
      icon: "🗄️",
      skills: ["PHP", "MySQL", "MongoDB", "PostgreSQL", "cPanel", "Database Design"]
    },
    {
      title: "Tools & Others",
      icon: "🛠️",
      skills: ["Git", "GitHub", "Google Analytics", "Search Console", "API Integration", "SEO"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="glass-card p-6 hover:shadow-glow transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-secondary/50 text-foreground rounded-md text-sm border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-200"
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
