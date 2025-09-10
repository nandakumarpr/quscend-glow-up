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
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden pt-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-tech-cyan/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl animate-pulse-glow"></div>
      </div>
      
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-display-2xl md:text-display-xl lg:text-display-2xl font-black text-primary-foreground leading-[0.9] tracking-tight">
                Business.
                <span className="block bg-gradient-accent bg-clip-text text-transparent">Transformed.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed max-w-2xl font-medium">
                We transform businesses with cutting-edge technology, scalable solutions, 
                and decades of expertise in digital innovation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg"
                onClick={() => scrollToSection("about")}
                className="bg-gradient-accent hover:opacity-90 text-white border-0 px-10 py-6 text-lg font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                Transform Now
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("services")}
                className="border-primary-foreground/30 bg-white/10 backdrop-blur-sm text-primary-foreground hover:bg-white/20 px-10 py-6 text-lg font-semibold transition-all hover:scale-105"
              >
                Our Solutions
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-40 animate-pulse-glow"></div>
              <div className="relative bg-gradient-glass backdrop-blur-glass rounded-3xl p-2 shadow-glass">
                <img
                  src={heroImage}
                  alt="Digital transformation illustration with business professionals working on modern technology solutions"
                  className="rounded-2xl shadow-2xl max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;