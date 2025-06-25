import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 95 },
        { name: "SQL", level: 90 },
        { name: "Python", level: 75 },
        { name: "JavaScript", level: 70 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "Spring Boot", level: 95 },
        { name: "Spring Security", level: 85 },
        { name: "Hibernate/JPA", level: 90 },
        { name: "Apache Kafka", level: 80 }
      ]
    },
    {
      title: "Databases & Caching",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MySQL", level: 85 },
        { name: "Redis", level: 85 },
        { name: "MongoDB", level: 75 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Docker", level: 85 },
        { name: "AWS", level: 80 },
        { name: "Git", level: 95 },
        { name: "Maven/Gradle", level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across various technologies and frameworks
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-white mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'REST APIs', 'GraphQL', 'Microservices', 'System Design', 'JUnit', 'Mockito',
              'Jenkins', 'ElasticSearch', 'RabbitMQ', 'Kubernetes', 'Linux', 'Agile/Scrum'
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-slate-700/50 text-gray-300 rounded-full text-sm border border-slate-600 hover:border-blue-500/50 hover:text-white transition-all duration-200 hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
