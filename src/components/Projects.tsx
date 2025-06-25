import React from 'react';
import { ExternalLink, Github, Server, Database, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Microservices Platform",
      description: "Built a scalable e-commerce backend using Spring Boot microservices architecture with Redis caching, Kafka for event streaming, and PostgreSQL for data persistence. Implemented user authentication, order processing, and inventory management with 99.9% uptime.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Apache Kafka", "Docker"],
      highlights: ["Microservices Architecture", "Event-Driven Design", "High Availability"],
      icon: Server,
      github: "https://github.com/yourusername/ecommerce-microservices",
      demo: "https://your-demo-link.com"
    },
    {
      title: "Real-time Analytics API",
      description: "Developed a high-performance REST API for real-time data analytics processing millions of events per day. Integrated with Apache Kafka for stream processing and implemented custom caching strategies to achieve sub-100ms response times.",
      technologies: ["Java", "Spring Boot", "Kafka", "InfluxDB", "Redis", "AWS"],
      highlights: ["Real-time Processing", "High Performance", "Scalable Architecture"],
      icon: Zap,
      github: "https://github.com/yourusername/analytics-api",
      demo: "https://your-demo-link.com"
    },
    {
      title: "Banking System Backend",
      description: "Created a secure banking application backend with multi-layered security, transaction processing, and audit logging. Implemented ACID compliance, fraud detection algorithms, and comprehensive API documentation with OpenAPI/Swagger.",
      technologies: ["Java", "Spring Security", "MySQL", "JPA", "JWT", "Maven"],
      highlights: ["Security First", "ACID Compliance", "Audit Logging"],
      icon: Database,
      github: "https://github.com/yourusername/banking-system",
      demo: null
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Showcase of backend systems and APIs I've built, demonstrating scalability, performance, and best practices
          </p>
        </div>
        
        <div className="grid lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-lg">
                      <project.icon className="text-blue-400" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  </div>
                  <div className="flex gap-3">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-700 text-gray-300 rounded-lg hover:text-white hover:bg-slate-600 transition-all duration-200"
                    >
                      <Github size={18} />
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-700 text-gray-300 rounded-lg hover:text-white hover:bg-slate-600 transition-all duration-200"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Highlights</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight, hIndex) => (
                      <span
                        key={hIndex}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm hover:bg-slate-600 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
