import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Globe, Smartphone, Cloud } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Consulting",
      description: "Consultations to scale your application to support current and future needs in terms of performance and/or user base",
      icon: Users,
      gradient: "from-primary to-primary-dark"
    },
    {
      title: "Web Application Development", 
      description: "Web based solution design using the right tools, software languages, and software development methodologies",
      icon: Globe,
      gradient: "from-tech-cyan to-primary"
    },
    {
      title: "Mobile App Development",
      description: "The best approach to take your existing online web based solution to mobile platforms",
      icon: Smartphone,
      gradient: "from-accent to-tech-cyan"
    },
    {
      title: "Cloud Adoption",
      description: "Deploy new solutions or move your existing solutions to the cloud to take the advantage of the cloud infrastructure to seamlessly scale your applications on demand.",
      icon: Cloud,
      gradient: "from-primary-dark to-accent"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We excel in architecting and implementing SaaS based solutions, delivered via 
            the web and/or mobile platforms, for large and small businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-card relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                
                <CardHeader className="relative z-10 pb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;