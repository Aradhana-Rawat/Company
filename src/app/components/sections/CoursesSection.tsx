import React from 'react';
import Button from '../ui/Button';

export default function CoursesSection() {
  const courses = [
    {
      title: 'Chemistry',
      description: 'Master Chemistry concepts with comprehensive practical learning. From molecular structure to advanced reactions, build a strong foundation with hands-on laboratory experience.',
      tutor: 'Aradhana Rawat',
      icon: '🧪',
      gradient: 'from-emerald-400 to-cyan-400',
      levels: ['AS & A-level (CIE, Edexcel, AQA)', '11th & 12th CBSE', '10th Grade CBSE'],
      features: ['Laboratory Techniques', 'Molecular Understanding', 'Exam Strategies', 'Practical Applications']
    },
    {
      title: 'Physics',
      description: 'Explore the fundamental laws of the universe with expert guidance. Build conceptual clarity in mechanics, electricity, magnetism, and modern physics through problem-solving.',
      tutor: 'Anusriya Tyagi',
      icon: '⚛️',
      gradient: 'from-blue-400 to-purple-500',
      levels: ['AS & A-level (CIE, Edexcel, AQA)', '11th & 12th CBSE', 'O-level IGCSE'],
      features: ['Conceptual Clarity', 'Mathematical Problem Solving', 'Experimental Physics', 'Advanced Topics']
    },
    {
      title: 'Mathematics',
      description: 'Develop strong mathematical foundations and problem-solving skills. From algebra to calculus, master the language of science with step-by-step guidance.',
      tutor: 'Aradhana Rawat',
      icon: '📐',
      gradient: 'from-orange-400 to-pink-400',
      levels: ['O-level IGCSE', 'CBSE till 10th Grade', 'Foundation Mathematics'],
      features: ['Step-by-step Methods', 'Conceptual Understanding', 'Problem Solving', 'Application Skills']
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
            Master the Sciences with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Expert Guidance</span>
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive tutoring in Physics, Chemistry, and Mathematics by qualified teachers specializing in CBSE, AS & A-Level, and IGCSE curricula.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mb-16 sm:mb-20">
          {courses.map((course, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r ${course.gradient} rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-neutral-100">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{course.icon}</div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2 group-hover:text-primary transition-colors duration-300">
                    {course.title}
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r ${course.gradient} mx-auto rounded-full"></div>
                </div>
                
                <p className="text-neutral-600 mb-6 leading-relaxed text-center">
                  {course.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-neutral-800 mb-3 text-center">Expert Tutor</h4>
                  <div className="text-center">
                    <span className="inline-block bg-gradient-to-r from-primary to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      {course.tutor}
                    </span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-neutral-800 mb-3">Curriculum Coverage</h4>
                  <div className="flex flex-wrap gap-2">
                    {course.levels.map((level, levelIndex) => (
                      <span key={levelIndex} className="text-xs bg-purple-50 text-primary px-3 py-2 rounded-full border border-purple-200 transition-all duration-300 hover:bg-primary hover:text-white hover:scale-105">
                        {level}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-neutral-800 mb-4">Key Focus Areas</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {course.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-neutral-600">
                        <div className="w-2 h-2 bg-gradient-to-r ${course.gradient} rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-neutral-200 pt-6">
                  <Button 
                    href="/contact" 
                    variant="primary" 
                    fullWidth 
                    className="group-hover:scale-105 transition-transform duration-300"
                  >
                    Start Learning {course.title}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
} 