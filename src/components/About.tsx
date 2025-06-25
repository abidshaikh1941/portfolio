import React from 'react';
import { Code, Database, Server, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Backend Development",
      description: "Expert in Java ecosystem with Spring Boot, building robust and scalable APIs"
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Proficient in SQL databases, data modeling, and optimization techniques"
    },
    {
      icon: Server,
      title: "System Architecture",
      description: "Experience in designing distributed systems and microservices architecture"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Focus on high-performance applications with caching and optimization strategies"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Java Backend Engineer with over 3 years of experience building enterprise-grade applications. 
              My expertise lies in creating scalable, maintainable, and high-performance backend systems that power modern web applications.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Throughout my career, I've worked with diverse technologies including Spring Boot, Apache Kafka, Redis, and various databases. 
              I have a strong foundation in system design, API development, and implementing best practices for code quality and performance optimization.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm always eager to learn new technologies and tackle challenging problems. My goal is to contribute to innovative projects 
              that make a real impact while continuously growing as a software engineer.
            </p>

            <div className="pt-6">
              <h3 className="text-xl font-semibold text-white mb-4">Key Strengths</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  RESTful API Design & Development
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Microservices Architecture
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Database Design & Optimization
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Performance Tuning & Monitoring
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <highlight.icon className="text-blue-400 mb-4" size={32} />
                <h3 className="text-lg font-semibold text-white mb-2">{highlight.title}</h3>
                <p className="text-gray-400 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
