const TechStack = () => {
  const technologies = [
    { name: "Java", icon: "☕", color: "from-orange to-red-600" },
    { name: "Angular", icon: "🅰️", color: "from-red-600 to-red-700" },
    { name: "React", icon: "⚛️", color: "from-blue-400 to-blue-600" },
    { name: "Redux", icon: "🔄", color: "from-purple-500 to-purple-700" },
    { name: "Spring Boot", icon: "🍃", color: "from-green-500 to-green-700" },
    { name: "AWS", icon: "☁️", color: "from-yellow-400 to-orange" },
    { name: "Docker", icon: "🐳", color: "from-blue-500 to-blue-700" },
    { name: "Kubernetes", icon: "⚙️", color: "from-blue-600 to-indigo-700" },
    { name: "Node.js", icon: "🟢", color: "from-green-400 to-green-600" },
    { name: "Android", icon: "🤖", color: "from-green-500 to-green-700" },
    { name: "iOS", icon: "📱", color: "from-gray-600 to-gray-800" },
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)_/_0.05),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,hsl(var(--tech-cyan)_/_0.05),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-display-lg md:text-display-xl font-black text-foreground mb-6 tracking-tight">
            Technologies We
            <span className="block bg-gradient-primary bg-clip-text text-transparent">Master</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
            Cutting-edge tools and frameworks powering the next generation of digital experiences
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative bg-gradient-glass backdrop-blur-glass rounded-3xl p-8 text-center border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-110 hover:-translate-y-2 shadow-lg hover:shadow-xl">
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-500">
                  {tech.icon}
                </div>
                <h3 className="text-sm font-bold text-card-foreground group-hover:text-primary transition-colors">
                  {tech.name}
                </h3>
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-primary blur-xl scale-110"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;