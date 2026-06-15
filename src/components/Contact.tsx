import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, Award, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shuvrasarker54@gmail.com",
      href: "mailto:shuvrasarker54@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "01302612486",
      href: "tel:01302612486"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gulshan 1, Dhaka, Bangladesh",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/toufiqshuvra"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/md-toufiqul-karim-ba1952179/"
    },
    {
      icon: Award,
      label: "Credly",
      href: "https://www.credly.com/users/md-toufiqul-karim"
    }
  ];

  return (
    <section
      id="contact"
      className="section-shell bg-gradient-to-b from-background to-secondary/20"
      aria-labelledby="contact-heading"
    >
      <div className="site-container">
        <div className="section-heading animate-slide-up">
          <span className="section-kicker">Start a Conversation</span>
          <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="section-underline"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I'm currently available for freelance work and full-time opportunities. 
            Let's discuss how we can work together!
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2 lg:gap-8">
          <Card className="glass-card interactive-card p-6 animate-slide-up sm:p-8">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="group flex min-w-0 items-center gap-4 rounded-lg p-2 transition-colors hover:bg-secondary/30">
                  <div className="icon-tile">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="break-words font-medium transition-colors hover:text-primary"
                        title={`Contact Md. Toufiqul Karim via ${item.label.toLowerCase()} for frontend software engineering work`}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="glass-card interactive-card p-6 animate-slide-up sm:p-8" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Md. Toufiqul Karim's ${social.label} profile for frontend software engineering work`}
                  title={`Md. Toufiqul Karim ${social.label} profile - Frontend Software Engineer in Dhaka, Bangladesh`}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-all duration-200 hover:-translate-y-1 group"
                >
                  <div className="icon-tile">
                    <social.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium group-hover:text-primary transition-colors">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <Button 
                className="w-full bg-gradient-primary hover:opacity-95 text-primary-foreground shadow-glow rounded-full transition-all hover:-translate-y-1 hover:shadow-[0_0_34px_hsl(var(--primary)/0.45)]"
                size="lg"
                onClick={() => window.location.href = 'mailto:shuvrasarker54@gmail.com'}
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Me an Email
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
