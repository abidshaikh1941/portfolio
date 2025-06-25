import React from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">JB</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Java Backend
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Engineer
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Building scalable, high-performance backend systems with 3+ years of experience in Java, Spring Boot, and distributed architectures.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center gap-2">
              <Download size={20} />
              Download Resume
            </button>
            
            <div className="flex gap-4">
              <a href="mailto:your.email@example.com" className="p-3 bg-slate-800 text-gray-300 rounded-lg hover:text-white hover:bg-slate-700 transition-all duration-200 hover:scale-110">
                <Mail size={24} />
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 text-gray-300 rounded-lg hover:text-white hover:bg-slate-700 transition-all duration-200 hover:scale-110">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 text-gray-300 rounded-lg hover:text-white hover:bg-slate-700 transition-all duration-200 hover:scale-110">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">3+</h3>
              <p className="text-gray-400">Years Experience</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">15+</h3>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">99.9%</h3>
              <p className="text-gray-400">System Uptime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
