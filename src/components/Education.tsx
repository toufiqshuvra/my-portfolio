import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science & Engineering (BSc in CSE)",
      institution: "Sonargaon University, Dhaka",
      period: "Currently Pursuing",
      description:
        "Focused on Software Engineering, Web Development, Database Systems, Algorithms, and Modern Application Architecture."
    },
    {
      degree:
        "Diploma in Engineering in Computer Science & Technology",
      institution:
        "Ahsanullah Institute of Technical & Vocational Education & Training (AITVET)",
      period: "Completed: January – March 2023",
      description:
        "Studied Computer Programming, Networking, Computer Architecture, and System Fundamentals with practical implementation experience."
    }
  ];

  return (
    <section
      id="education"
      className="py-20 px-6"
    >
      <div className="container mx-auto max-w-6xl">

        {/* Heading */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Academic background in Computer Science and Engineering with strong foundations in software development, systems design, and modern web technologies.
          </p>
        </div>

        {/* Education cards */}
        <div className="grid md:grid-cols-2 gap-6">

          {education.map((edu, index) => (
            <Card
              key={index}
              className="glass-card p-8 hover:shadow-glow transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >

              <div className="flex items-start gap-4">

                {/* Icon */}
                <div className="bg-primary/10 p-3 rounded-lg">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1">

                  <h3 className="text-xl font-bold mb-2">
                    {edu.degree}
                  </h3>

                  <p className="text-primary font-semibold mb-1">
                    {edu.institution}
                  </p>

                  <p className="text-sm text-muted-foreground mb-3">
                    {edu.period}
                  </p>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {edu.description}
                  </p>

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