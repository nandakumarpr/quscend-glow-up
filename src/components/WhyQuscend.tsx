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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose Quscend?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technical expertise aligned to your goals with decades of experience 
            contributing to highly scalable applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <Card 
                key={reason.number}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-card"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {/* Number Badge */}
                    <div className="flex items-center justify-between">
                      <Badge 
                        variant="outline" 
                        className={`text-lg px-4 py-2 border-${reason.color} text-${reason.color} bg-${reason.color}-light/10`}
                      >
                        {reason.number}
                      </Badge>
                      <div className={`p-3 rounded-xl bg-${reason.color}-light/20`}>
                        <IconComponent className={`w-8 h-8 text-${reason.color}`} />
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
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyQuscend;