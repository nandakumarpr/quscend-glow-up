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
    <section id="about" className="py-32 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,hsl(var(--primary)_/_0.03)_25%,hsl(var(--primary)_/_0.03)_50%,transparent_50%,transparent_75%,hsl(var(--primary)_/_0.03)_75%)] bg-[length:60px_60px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-display-lg md:text-display-xl font-black text-foreground mb-6 tracking-tight">
              Powering Digital
              <span className="block bg-gradient-primary bg-clip-text text-transparent">Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-medium">
              We are the technology catalyst that transforms ideas into scalable, 
              future-ready digital solutions that drive business growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Main Content */}
            <div className="space-y-8">
              <div className="bg-gradient-glass backdrop-blur-glass rounded-3xl p-10 border border-white/10 shadow-glass">
                <h3 className="text-2xl md:text-3xl font-bold text-card-foreground mb-8">
                  Our Expertise
                </h3>
                
                <ul className="space-y-6">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <span className="text-card-foreground leading-relaxed font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right - Stats & Highlights */}
            <div className="space-y-8">
              <div className="bg-gradient-primary rounded-3xl p-10 text-primary-foreground shadow-xl">
                <h4 className="text-3xl font-bold mb-4">20+ Years</h4>
                <p className="text-primary-foreground/90 text-lg leading-relaxed">
                  Of experience helping clients leverage SaaS-based web and 
                  mobile solutions to expand their digital presence.
                </p>
              </div>

              <div className="bg-gradient-accent rounded-3xl p-10 text-white shadow-xl">
                <h4 className="text-3xl font-bold mb-4">100% Scalable</h4>
                <p className="text-white/90 text-lg leading-relaxed">
                  Solutions that grow seamlessly with your application features, 
                  user base, and business expansion.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button 
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground border-0 px-10 py-6 text-lg font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              Start Your Transformation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;