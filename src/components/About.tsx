import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const About = () => {
  const features = [
    "Custom solutions aligned with your business, drawn from our years of experience",
    "Application growth and scalability baked into the solutions",
    "Best products and approaches for cloud adoption"
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              About Quscend
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We are a core technology company with expertise in jump starting application 
              development, scaling existing applications and cloud adoption.
            </p>
          </div>

          <Card className="bg-gradient-card border-0 shadow-elegant mb-12">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-card-foreground">
                    Our Expertise
                  </h3>
                  
                  <ul className="space-y-4">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-card-foreground leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <div className="bg-primary-light rounded-2xl p-6">
                    <h4 className="text-lg font-semibold text-primary mb-3">
                      Decades of Experience
                    </h4>
                    <p className="text-muted-foreground">
                      We have decades of experience helping clients use SaaS-based web and 
                      mobile solutions to expand their online presence and reach.
                    </p>
                  </div>

                  <div className="bg-tech-cyan-light rounded-2xl p-6">
                    <h4 className="text-lg font-semibold text-tech-cyan mb-3">
                      Scalable Solutions
                    </h4>
                    <p className="text-muted-foreground">
                      Solutions that scale seamlessly as the application features, 
                      user base and business grows.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <Button 
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="bg-gradient-primary hover:opacity-90 text-primary-foreground border-0 px-8 py-6"
                >
                  Know More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;