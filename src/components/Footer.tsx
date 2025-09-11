const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/464b44ed-c188-48ef-89b7-db02ea3f1fae.png" 
                alt="Quscend Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Digital Business Transformation experts with decades of experience in 
              scalable application development and cloud adoption.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-foreground">Our Services</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Consulting</li>
              <li>Web Development</li>
              <li>Mobile Development</li>
              <li>Cloud Adoption</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © {currentYear} Quscend. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;