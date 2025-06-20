import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Button from '../../components/ui/Button';

export default function TutorsPage() {
  const tutors = [
    {
      name: 'Chemistry & Mathematics Specialist',
      subjects: ['Chemistry', 'Mathematics', 'Integrated Science'],
      experience: '8+ years',
      education: 'MSc Chemistry, BSc Mathematics',
      description: 'Our Chemistry and Mathematics specialist focuses on making complex concepts accessible through practical learning approaches. Their expertise spans multiple curricula including CBSE, AS & A-Level, and IGCSE systems.',
      specializations: [
        'AS & A-level Chemistry (CIE, Edexcel, AQA)',
        '11th & 12th CBSE Chemistry',
        'O-level Mathematics (IGCSE)',
        'CBSE Mathematics till 10th Grade',
        '10th Grade Science (Physics, Chemistry, Biology)'
      ],
      achievements: [
        'Expert in practical learning methodologies',
        '95% A-grade success rate for A-Level Chemistry',
        'Specialized in hands-on learning approaches',
        'Problem-solving focused teaching style'
      ],
      image: '/images/placeholder.svg'
    },
    {
      name: 'Physics Specialist',
      subjects: ['Physics', 'Advanced Physics'],
      experience: '6+ years',
      education: 'MSc Physics, BSc Physics',
      description: 'Our Physics specialist is passionate about Physics education and excels in building strong conceptual understanding. Their expertise covers multiple international and national curricula with proven results.',
      specializations: [
        'AS & A-level Physics (CIE, Edexcel, AQA)',
        '11th & 12th CBSE Physics',
        'O-level Physics (IGCSE)',
        'Conceptual Physics understanding',
        'Advanced problem-solving techniques'
      ],
      achievements: [
        'Expert in conceptual clarity and understanding',
        '98% pass rate in A-Level Physics',
        'Specialized in exam preparation techniques',
        'Strong focus on practical applications'
      ],
      image: '/images/placeholder.svg'
    }
  ];

  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-indigo-500 to-purple-600 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">Meet Our Expert Tutors</h1>
          <p className="text-lg sm:text-xl text-purple-100 leading-relaxed">
            Our dedicated educators bring years of experience and proven track records in Chemistry, Physics, and Mathematics education.
          </p>
        </div>
      </section>

      {/* Main Tutors Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Our Teaching Experts</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Meet the qualified professionals who will guide your academic journey to success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {tutors.map((tutor, index) => (
              <div key={index} className="bg-white rounded-xl p-6 sm:p-8 card-shadow hover:border-primary border border-transparent transition-all duration-300 group">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center mb-4 text-white text-2xl font-bold">
                    {tutor.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-2 group-hover:text-primary transition-colors duration-300">{tutor.name}</h2>
                
                  <p className="text-neutral-600 mb-4">{tutor.education}</p>
                  
                  {/* Experience Badge */}
                  <div className="inline-block bg-secondary text-neutral-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                    {tutor.experience} Experience
                  </div>
                </div>

                <p className="text-neutral-700 mb-6 leading-relaxed text-center">{tutor.description}</p>
                
                {/* Subjects */}
                <div className="mb-6">
                  <h3 className="font-semibold text-neutral-900 mb-3">Subjects Taught:</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {tutor.subjects.map((subject, subjectIndex) => (
                      <span key={subjectIndex} className="bg-purple-50 text-primary px-3 py-1 rounded-full text-sm border border-purple-200 hover:bg-primary hover:text-white transition-all duration-300">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Specializations */}
                <div className="mb-6">
                  <h3 className="font-semibold text-neutral-900 mb-3">Specializations:</h3>
                  <ul className="space-y-2">
                    {tutor.specializations.map((spec, specIndex) => (
                      <li key={specIndex} className="flex items-start">
                        <svg className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-neutral-700 text-sm">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h3 className="font-semibold text-neutral-900 mb-3">Key Achievements:</h3>
                  <ul className="space-y-2">
                    {tutor.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start">
                        <svg className="w-4 h-4 text-secondary mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-neutral-700 text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <div className="pt-6 border-t border-neutral-200">
                  <Button 
                    href="/contact"
                    variant="primary" 
                    fullWidth
                    className="hover:scale-105 transform transition-all duration-300"
                  >
                    Book Session with Expert
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Tutors Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Why Our Tutors Make the Difference
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Our carefully selected tutors bring specialized knowledge, proven methodologies, and a commitment to student success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Specialized Expertise</h3>
              <p className="text-neutral-600">Subject-specific mastery in Chemistry, Physics, and Mathematics with multiple curriculum experience.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Practical Learning</h3>
              <p className="text-neutral-600">Hands-on teaching approaches that make complex concepts easy to understand and apply.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Proven Results</h3>
              <p className="text-neutral-600">Consistent track record of helping students achieve excellent grades and gain admission to top institutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Teaching Impact</h2>
            <p className="text-xl text-purple-100">The combined achievements of our expert teaching team</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">100+</div>
              <div className="text-purple-100">Students Taught</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">95%</div>
              <div className="text-purple-100">Average Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">14+</div>
              <div className="text-purple-100">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">3</div>
              <div className="text-purple-100">Curricula Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Ready to Learn from the Best?
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Connect with our expert tutors and discover how personalized instruction can transform your academic journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary">Book Free Trial Class</Button>
            <Button variant="secondary">Schedule a Meeting</Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 