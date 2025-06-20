import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Button from '../../components/ui/Button';

export default function CoursesPage() {
  const courses = [
    {
      title: 'Chemistry',
      description: 'Master the molecular world with comprehensive Chemistry education. From basic atomic structure to advanced organic reactions, develop a deep understanding through practical laboratory work and theoretical excellence.',
      tutor: 'Chemistry Specialist',
      tutorQualification: 'MSc Chemistry, BSc Mathematics',
      icon: '🧪',
      gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
      bgGradient: 'from-emerald-50 to-cyan-50',
      levels: [
        { name: 'AS & A-Level Chemistry', boards: 'CIE, Edexcel, AQA', icon: '🎓' },
        { name: '11th & 12th CBSE Chemistry', boards: 'CBSE Board', icon: '📚' },
        { name: '10th Grade Science', boards: 'CBSE Foundation', icon: '🔬' }
      ],
      duration: '1.5-2 hours per session',
      frequency: '2-3 sessions per week',
      features: [
        'Hands-on laboratory experiments and practical work',
        'Molecular structure visualization and modeling',
        'Stoichiometry and chemical calculations mastery',
        'Organic chemistry mechanisms and reactions',
        'Exam technique and question pattern analysis',
        'Regular assessments and progress tracking'
      ],
      highlights: [
        '95% A-grade success rate in A-Level Chemistry',
        'Fully equipped chemistry laboratory',
        'Practical learning with real experiments',
        'University preparation focus'
      ],
      specializations: [
        'Analytical Chemistry',
        'Organic Synthesis',
        'Physical Chemistry',
        'Laboratory Techniques'
      ]
    },
    {
      title: 'Physics',
      description: 'Explore the fundamental laws that govern our universe. From classical mechanics to modern physics, build conceptual clarity and mathematical problem-solving skills through expert guidance.',
      tutor: 'Physics Specialist',
      tutorQualification: 'MSc Physics, BSc Physics',
      icon: '⚛️',
      gradient: 'from-blue-400 via-indigo-500 to-purple-600',
      bgGradient: 'from-blue-50 to-purple-50',
      levels: [
        { name: 'AS & A-Level Physics', boards: 'CIE, Edexcel, AQA', icon: '🎓' },
        { name: '11th & 12th CBSE Physics', boards: 'CBSE Board', icon: '📚' },
        { name: 'O-Level Physics', boards: 'IGCSE', icon: '🔬' }
      ],
      duration: '1.5-2 hours per session',
      frequency: '2-3 sessions per week',
      features: [
        'Conceptual understanding through visualization',
        'Mathematical problem-solving techniques',
        'Experimental physics and data analysis',
        'Modern physics and quantum concepts',
        'Exam preparation and time management',
        'Physics olympiad preparation'
      ],
      highlights: [
        '98% pass rate in A-Level Physics',
        'Expert in conceptual clarity',
        'Advanced problem-solving methods',
        'University entrance preparation'
      ],
      specializations: [
        'Classical Mechanics',
        'Electromagnetism',
        'Quantum Physics',
        'Astrophysics'
      ]
    },
    {
      title: 'Mathematics',
      description: 'Build strong mathematical foundations from arithmetic to advanced calculus. Develop logical thinking, problem-solving skills, and mathematical intuition that forms the backbone of all sciences.',
      tutor: 'Mathematics Specialist',
      tutorQualification: 'MSc Chemistry, BSc Mathematics',
      icon: '📐',
      gradient: 'from-orange-400 via-pink-500 to-red-500',
      bgGradient: 'from-orange-50 to-pink-50',
      levels: [
        { name: 'O-Level Mathematics', boards: 'IGCSE', icon: '🎓' },
        { name: 'CBSE Mathematics', boards: 'Till 10th Grade', icon: '📚' },
        { name: 'Foundation Mathematics', boards: 'Basic to Advanced', icon: '🔢' }
      ],
      duration: '1.5 hours per session',
      frequency: '2-3 sessions per week',
      features: [
        'Step-by-step problem-solving methods',
        'Conceptual understanding over memorization',
        'Regular practice and assessment',
        'Application-based learning approach',
        'Exam strategies and time management',
        'Mathematical modeling and real-world applications'
      ],
      highlights: [
        'Strong foundation building approach',
        'Individual attention and support',
        'Proven track record in board exams',
        'Confidence building in mathematics'
      ],
      specializations: [
        'Algebra & Geometry',
        'Calculus & Analysis',
        'Statistics & Probability',
        'Applied Mathematics'
      ]
    }
  ];

  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-indigo-500 to-purple-600 text-white py-20 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
            Comprehensive Curriculum
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Master 
            <span className="block text-secondary">Physics, Chemistry & Mathematics</span>
          </h1>
          <p className="text-xl sm:text-2xl text-purple-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Expert tutoring in the core sciences with personalized attention, practical learning, and proven results across CBSE, AS & A-Level, and IGCSE curricula.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" className="text-lg px-8 py-4">
              Book Free Trial Class
            </Button>
            <Button href="/tutors" variant="secondary" className="text-lg px-8 py-4 border-white text-white  hover:text-primary">
              Meet Our Expert Tutors
            </Button>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 sm:py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Our Core Subjects
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Comprehensive education in the fundamental sciences with expert tutors, modern teaching methods, and proven track records.
            </p>
          </div>

          <div className="space-y-16">
            {courses.map((course, index) => (
              <div key={index} className="group">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Content Side */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="text-5xl">{course.icon}</div>
                        <div>
                          <h3 className="text-3xl font-bold text-neutral-900 group-hover:text-primary transition-colors duration-300">
                            {course.title}
                          </h3>
                          <div className={`w-24 h-1 bg-gradient-to-r ${course.gradient} rounded-full mt-2`}></div>
                        </div>
                      </div>
                      
                      <p className="text-lg text-neutral-700 leading-relaxed">
                        {course.description}
                      </p>

                      {/* Tutor Information */}
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-neutral-200">
                        <h4 className="font-semibold text-neutral-900 mb-2">Expert Tutor</h4>
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 bg-gradient-to-r ${course.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                            {course.tutor.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <div className="font-medium text-neutral-900">{course.tutor}</div>
                            <div className="text-sm text-neutral-600">{course.tutorQualification}</div>
                          </div>
                        </div>
                      </div>

                      {/* Session Details */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className={`bg-gradient-to-br ${course.bgGradient} p-4 rounded-xl border border-neutral-200`}>
                          <div className="font-semibold text-neutral-900">{course.duration}</div>
                          <div className="text-sm text-neutral-600">Session Duration</div>
                        </div>
                        <div className={`bg-gradient-to-br ${course.bgGradient} p-4 rounded-xl border border-neutral-200`}>
                          <div className="font-semibold text-neutral-900">{course.frequency}</div>
                          <div className="text-sm text-neutral-600">Weekly Frequency</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Details Side */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-xl border border-neutral-200">
                      {/* Curriculum Levels */}
                      <div className="mb-8">
                        <h4 className="font-bold text-neutral-900 mb-4 text-lg">Curriculum Coverage</h4>
                        <div className="space-y-3">
                          {course.levels.map((level, levelIndex) => (
                            <div key={levelIndex} className="flex items-center gap-3 p-3 bg-white rounded-lg">
                              <div className="text-2xl">{level.icon}</div>
                              <div>
                                <div className="font-medium text-neutral-900">{level.name}</div>
                                <div className="text-sm text-neutral-600">{level.boards}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Key Features */}
                      <div className="mb-8">
                        <h4 className="font-bold text-neutral-900 mb-4 text-lg">What You&apos;ll Learn</h4>
                        <div className="space-y-3">
                          {course.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start gap-3">
                              <div className={`w-2 h-2 bg-gradient-to-r ${course.gradient} rounded-full mt-2 flex-shrink-0`}></div>
                              <span className="text-neutral-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Specializations */}
                      <div className="mb-6">
                        <h4 className="font-bold text-neutral-900 mb-4 text-lg">Specialization Areas</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {course.specializations.map((spec, specIndex) => (
                            <span key={specIndex} className={`text-xs bg-gradient-to-r ${course.bgGradient} px-3 py-2 rounded-full border text-neutral-700 text-center`}>
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>

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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary via-indigo-500 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Excel in Science & Mathematics?</h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Join students who have achieved excellence with our expert tutors. Book your free trial class today and experience personalized learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary" className="bg-white text-primary hover:bg-neutral-100 text-lg px-8 py-4">
              Book Free Trial Class
            </Button>
            <Button href="tel:+919876543210" variant="secondary" className="border-white text-white hover:text-primary text-lg px-8 py-4">
              Call  +91 925 984 4072
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 