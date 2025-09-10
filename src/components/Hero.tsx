import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-illustration.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,transparent_40%,hsl(var(--primary))_40%,hsl(var(--primary))_50%,transparent_50%)] opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
                Digital Business
                <span className="block text-accent">Transformation</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed max-w-2xl">
                We have expertise in a wide range of software languages, databases, 
                infrastructure and development methodologies
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={() => scrollToSection("about")}
                className="bg-accent hover:bg-accent/90 text-accent-foreground border-0 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Get Started
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("services")}
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-6 text-lg transition-all"
              >
                Our Services
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-30 animate-float"></div>
              <img
                src={heroImage}
                alt="Digital transformation illustration with business professionals working on modern technology solutions"
                className="relative rounded-3xl shadow-2xl max-w-full h-auto animate-float"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;