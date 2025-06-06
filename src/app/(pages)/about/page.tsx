import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Button from '../../components/ui/Button';

export default function AboutPage() {
  const team = [
    {
      name: 'Aradhana Rawat',
      role: 'Chemistry & Mathematics Specialist',
      experience: '8+ years',
      description: 'MSc Chemistry, BSc Mathematics. Expert in practical learning and problem-solving approaches.',
      image: '/images/placeholder.svg'
    },
    {
      name: 'Anusriya Tyagi',
      role: 'Physics Specialist',
      experience: '6+ years',
      description: 'MSc Physics, BSc Physics. Passionate about conceptual understanding and exam preparation.',
      image: '/images/placeholder.svg'
    }
  ];

  const values = [
    {
      title: 'Excellence',
      description: 'We strive for the highest standards in teaching Chemistry, Physics, and Mathematics with proven methodologies.'
    },
    {
      title: 'Practical Learning',
      description: 'We embrace hands-on experiments and real-world applications to enhance conceptual understanding.'
    },
    {
      title: 'Individual Attention',
      description: 'We provide personalized guidance and support tailored to each student\'s learning style and pace.'
    },
    {
      title: 'Academic Success',
      description: 'We focus on achieving excellent results in CBSE, AS & A-Level, and IGCSE examinations.'
    }
  ];

  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-indigo-500 to-purple-600 text-white py-20 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
            About Excellence Tuition
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Nurturing Excellence in
            <span className="block text-secondary">Science & Mathematics</span>
          </h1>
          <p className="text-xl sm:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
            Dedicated to inspiring academic success through expert tutoring, practical learning, and personalized attention in Roorkee since our establishment.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 sm:py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-neutral-200">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Our Mission</h2>
              <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
                At Excellence Tuition Center, our mission is to empower students to excel in Chemistry, Physics, and Mathematics 
                through personalized, expert education. We believe that every student can achieve academic excellence with the right guidance and support.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                We are committed to creating an engaging learning environment where students build confidence, 
                develop strong conceptual understanding, and achieve outstanding results in their examinations.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-neutral-200">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-orange-400 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-neutral-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Our Vision</h2>
              <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
                To be the leading science and mathematics tuition center in Roorkee, recognized for our innovative teaching methods, 
                exceptional results, and unwavering commitment to student success across multiple curricula.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                We envision a future where every student we teach becomes a confident, capable learner who excels in their chosen 
                scientific fields and is prepared for university-level studies and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Our Foundation
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Core Values That
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Guide Our Teaching</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              These fundamental principles shape our approach to education and define our commitment to student success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-neutral-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center mb-4">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary transition-colors duration-300">{value.title}</h3>
                  <p className="text-neutral-700 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Meet Our Experts
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Expert Tutors
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Dedicated to Your Success</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our experienced educators bring passion, expertise, and proven track records in Chemistry, Physics, and Mathematics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 justify-center max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-neutral-200 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-24 h-24 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2 group-hover:text-primary transition-colors duration-300">{member.name}</h3>
                  <p className="text-primary font-semibold mb-2">{member.role}</p>
                  <div className="inline-block bg-secondary text-neutral-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                    {member.experience} Experience
                  </div>
                  <p className="text-neutral-700 leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-indigo-500 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Track Record</h2>
            <p className="text-xl text-purple-100">Numbers that speak to our commitment to excellence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl sm:text-5xl font-bold text-secondary mb-2">100+</div>
              <div className="text-purple-100">Students Taught</div>
            </div>
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl sm:text-5xl font-bold text-secondary mb-2">95%</div>
              <div className="text-purple-100">Success Rate</div>
            </div>
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl sm:text-5xl font-bold text-secondary mb-2">14+</div>
              <div className="text-purple-100">Years Combined Experience</div>
            </div>
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl sm:text-5xl font-bold text-secondary mb-2">3</div>
              <div className="text-purple-100">Core Subjects</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-xl border border-neutral-200">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
              Ready to Join Our Learning Community?
            </h2>
            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
              Experience the difference that personalized, expert tutoring can make in your academic journey. Book your free trial class today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" className="text-lg px-8 py-4">Book Free Trial Class</Button>
              <Button href="/contact" variant="secondary" className="text-lg px-8 py-4">Contact Us</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 