import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import WhyQuscend from "@/components/WhyQuscend";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TechStack />
      <About />
      <WhyQuscend />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
