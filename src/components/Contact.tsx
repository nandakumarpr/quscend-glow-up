import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-32 bg-gradient-hero relative overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-tech-cyan/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,hsl(var(--accent)_/_0.1)_30%,hsl(var(--accent)_/_0.1)_40%,transparent_40%)] bg-[length:100px_100px] opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-display-lg md:text-display-xl font-black text-primary-foreground mb-6 tracking-tight">
            Ready to
            <span className="block bg-gradient-accent bg-clip-text text-transparent">Transform?</span>
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto font-medium">
            Let's discuss how we can accelerate your digital transformation journey 
            with cutting-edge technology solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-10">
            <div className="bg-gradient-glass backdrop-blur-glass rounded-3xl p-10 border border-white/20 shadow-glass">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-accent flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary-foreground">Location</h3>
              </div>
              <p className="text-primary-foreground/90 text-lg">
                Viman Nagar, Pune 411014<br />
                Maharashtra, India
              </p>
            </div>

            <div className="bg-gradient-glass backdrop-blur-glass rounded-3xl p-10 border border-white/20 shadow-glass">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary-foreground">Email</h3>
              </div>
              <a 
                href="mailto:info@quscend.com"
                className="text-accent hover:text-accent/80 transition-colors text-lg font-medium"
              >
                info@quscend.com
              </a>
            </div>

            <div className="bg-gradient-accent/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20">
              <h3 className="text-2xl font-bold text-primary-foreground mb-6">
                Enterprise Solutions Await
              </h3>
              <p className="text-primary-foreground/90 leading-relaxed text-lg">
                Join hundreds of businesses that have transformed their operations 
                with our scalable, future-ready technology solutions.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-glass backdrop-blur-glass rounded-3xl p-10 border border-white/20 shadow-glass">
            <h3 className="text-3xl font-bold text-primary-foreground mb-8">
              Let's Build Something Amazing
            </h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-white/30 text-primary-foreground placeholder:text-primary-foreground/60 text-lg py-6 rounded-2xl"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-white/30 text-primary-foreground placeholder:text-primary-foreground/60 text-lg py-6 rounded-2xl"
                />
              </div>
              
              <Input
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                className="bg-white/10 border-white/30 text-primary-foreground placeholder:text-primary-foreground/60 text-lg py-6 rounded-2xl"
              />
              
              <Textarea
                name="message"
                placeholder="Tell us about your transformation goals..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="bg-white/10 border-white/30 text-primary-foreground placeholder:text-primary-foreground/60 resize-none text-lg rounded-2xl"
              />
              
              <Button 
                type="submit"
                className="w-full bg-gradient-accent hover:opacity-90 text-white border-0 py-6 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                Start Your Transformation
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;