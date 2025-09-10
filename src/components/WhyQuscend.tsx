import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Puzzle, TrendingUp } from "lucide-react";

const WhyQuscend = () => {
  const reasons = [
    {
      number: "01",
      title: "Expertise with Experience",
      description: "We not only have software and technology experts, we bring about two decades of experience in implementing software solutions in corporates and small and medium scale businesses. This allows us to use our expertise more efficiently to design new business solutions.",
      icon: Award,
      color: "primary"
    },
    {
      number: "02", 
      title: "Custom made Solutions",
      description: "We tailor our solutions and the technologies to effectively utilize your current systems and to target the problems specific to your business needs. Our experts listen, understand and align to the technology needs of your business.",
      icon: Puzzle,
      color: "tech-cyan"
    },
    {
      number: "03",
      title: "Constant Application Modernization and Scaling",
      description: "We follow the principle of constant change in both our products and our technical solutions. We make sure that the ability to upgrade and the ability to scale is built into the technical architecture rather than being an after thought.",
      icon: TrendingUp,
      color: "accent"
    }
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-primary opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-gradient-accent opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-display-lg md:text-display-xl font-black text-foreground mb-6 tracking-tight">
            Why Choose
            <span className="block bg-gradient-accent bg-clip-text text-transparent">Quscend?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-medium">
            Technical expertise aligned to your goals with decades of experience 
            contributing to highly scalable applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div 
                key={reason.number}
                className="group relative"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative bg-gradient-glass backdrop-blur-glass rounded-3xl p-10 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-4 shadow-glass hover:shadow-xl">
                  <div className="space-y-8">
                    {/* Number & Icon */}
                    <div className="flex items-center justify-between">
                      <div className="text-6xl font-black text-primary/20 group-hover:text-primary/30 transition-colors">
                        {reason.number}
                      </div>
                      <div className={`p-4 rounded-2xl bg-gradient-${reason.color === 'primary' ? 'primary' : reason.color === 'tech-cyan' ? 'primary' : 'accent'} shadow-lg`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-card-foreground leading-tight">
                      {reason.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-primary blur-xl scale-110 -z-10"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyQuscend;