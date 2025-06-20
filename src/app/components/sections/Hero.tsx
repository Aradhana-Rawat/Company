import React from 'react';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary via-indigo-500 to-purple-600 text-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Excellence in
            <span className="block text-secondary animate-pulse">Physics, Chemistry & Mathematics</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-purple-100 max-w-4xl mx-auto leading-relaxed">
            Expert Chemistry, Physics & Mathematics tutoring by qualified teachers. 
            Specializing in CBSE, AS & A-Level, and IGCSE curricula.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12">
            <Button 
              href="/contact" 
              variant="primary" 
              className="hover:scale-105 transform transition-all duration-300"
            >
              Book Free Trial Class
            </Button>
            <Button 
              href="/tutors" 
              variant="secondary" 
              className="border-white text-white  hover:text-purple-600 hover:scale-105 transform transition-all duration-300"
            >
              Meet Our Tutors
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-12 sm:mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 text-center">
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-2 animate-bounce">100+</div>
              <div className="text-purple-100 text-sm sm:text-base font-medium">Students Taught</div>
            </div>
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-2 animate-bounce">95%</div>
              <div className="text-purple-100 text-sm sm:text-base font-medium">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      
      
    </section>
  );
} 