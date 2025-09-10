const TechStack = () => {
  const technologies = [
    { name: "Java", icon: "☕" },
    { name: "Angular", icon: "🅰️" },
    { name: "React", icon: "⚛️" },
    { name: "Redux", icon: "🔄" },
    { name: "Spring Boot", icon: "🍃" },
    { name: "AWS", icon: "☁️" },
    { name: "Docker", icon: "🐳" },
    { name: "Kubernetes", icon: "⚙️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Android", icon: "🤖" },
    { name: "iOS", icon: "📱" },
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technologies We Master
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge tools and frameworks to power your digital transformation
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group bg-card hover:bg-primary/5 rounded-2xl p-6 text-center border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <h3 className="text-sm font-semibold text-card-foreground group-hover:text-primary transition-colors">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;