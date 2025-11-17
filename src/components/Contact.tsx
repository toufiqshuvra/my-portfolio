import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, Award, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shuvrasarker54@gmail.co",
      href: "mailto:shuvrasarker54@gmail.co"
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
      value: "Bangladesh",
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
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I'm currently available for freelance work and full-time opportunities. 
            Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="glass-card p-8 animate-slide-up">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a 
                        href={item.href}
                        className="font-medium hover:text-primary transition-colors"
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

          <Card className="glass-card p-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-all duration-200 group"
                >
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
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
                className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-glow"
                size="lg"
                onClick={() => window.location.href = 'mailto:shuvrasarker54@gmail.co'}
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
