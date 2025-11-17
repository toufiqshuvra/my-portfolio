import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Engineer",
      company: "InNeed Intelligent Cloud",
      period: "March 2023 - Present",
      achievements: [
        "Developed responsive and scalable applications using Svelte (v5), Tailwind CSS, and JavaScript",
        "Led custom development projects including Esther Group, JU Reunion, Moonbase Organics, and Million Al Minds from design to deployment",
        "Revamped and maintained multiple WordPress websites, including Old IAJ Online, Esther Finance, and Mountain of Fire and Miracles Ministries",
        "Integrated Google Analytics and Search Console into over 20 projects for performance tracking and SEO optimization",
        "Managed and updated content for platforms like Bucket Platforms, Olde Jamaica Tours, and Booking Insurance Association of Jamaica",
        "Provided ongoing support and enhancements for client projects, ensuring high-quality solutions and customer satisfaction",
        "Implemented GoHighLevel for email campaigns, form management, and workflow automation"
      ],
      technologies: ["Svelte", "JavaScript", "Tailwind CSS", "WordPress", "Google Analytics", "GoHighLevel"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="glass-card p-8 hover:shadow-glow transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="bg-primary/10 p-4 rounded-lg self-start">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                    <p className="text-xl text-primary font-semibold mb-1">{exp.company}</p>
                    <p className="text-muted-foreground">{exp.period}</p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-primary mt-1.5">▹</span>
                        <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20"
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
