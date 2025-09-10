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
    <section id="services" className="py-32 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-full h-full bg-[radial-gradient(circle_at_20%_30%,hsl(var(--accent)_/_0.05),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-1/4 w-full h-full bg-[radial-gradient(circle_at_80%_70%,hsl(var(--tech-cyan)_/_0.05),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-display-lg md:text-display-xl font-black text-foreground mb-6 tracking-tight">
            Our
            <span className="block bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium">
            We excel in architecting and implementing SaaS-based solutions, delivered via 
            the web and mobile platforms, for enterprises of all sizes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.title}
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative bg-gradient-glass backdrop-blur-glass rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-4 shadow-glass hover:shadow-xl h-full">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity rounded-3xl`}></div>
                  
                  <div className="relative z-10 space-y-6">
                    <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${service.gradient} blur-xl scale-110 -z-10`}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;