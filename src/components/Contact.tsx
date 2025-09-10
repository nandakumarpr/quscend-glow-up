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
    <section id="contact" className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,hsl(var(--accent))_40%,hsl(var(--accent))_50%,transparent_50%)] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Want to find out how we can help solve specific business problems for you? Let's talk
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-primary-foreground">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-accent" />
                  <span>Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary-foreground/90">
                  Viman Nagar, Pune 411014<br />
                  Maharashtra, India
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-primary-foreground">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-accent" />
                  <span>Email</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="mailto:info@quscend.com"
                  className="text-accent hover:text-accent/80 transition-colors"
                >
                  info@quscend.com
                </a>
              </CardContent>
            </Card>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                Let's discuss how our expertise in digital transformation can help 
                scale your applications and modernize your technology stack.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl text-primary-foreground">
                Send us a message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white/20 border-white/30 text-primary-foreground placeholder:text-primary-foreground/60"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/20 border-white/30 text-primary-foreground placeholder:text-primary-foreground/60"
                    />
                  </div>
                </div>
                
                <Input
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-white/20 border-white/30 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                
                <Textarea
                  name="message"
                  placeholder="Tell us about your project"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-white/20 border-white/30 text-primary-foreground placeholder:text-primary-foreground/60 resize-none"
                />
                
                <Button 
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground border-0 py-6 text-lg font-semibold"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;