import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "BSc in Computer Science & Engineering",
      institution: "Sonargaon University",
      period: "Currently Pursuing",
      description: "Relevant coursework: Web Development, Database Systems, Software Engineering"
    },
    {
      degree: "Diploma in Engineering in Computer Science & Technology",
      institution: "Ahshanullah Institute of Technical & Vocational Education & Training (AITVET)",
      period: "Graduated: January-March 2023",
      description: "Relevant coursework: Networking, Programming Languages, Computer Architecture"
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <Card 
              key={index}
              className="glass-card p-8 hover:shadow-glow transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                  <p className="text-primary font-semibold mb-1">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mb-3">{edu.period}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{edu.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
