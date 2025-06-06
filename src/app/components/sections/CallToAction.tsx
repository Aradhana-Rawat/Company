import React from 'react';
import Button from '../ui/Button';

export default function CallToAction() {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-br from-primary via-indigo-500 to-purple-600 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10">
        <div className="grid grid-cols-8 gap-4 h-full">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="bg-white/5 rounded-lg animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
          Start Your Journey Today
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Ready to Excel in
          <span className="block text-secondary">Science & Mathematics?</span>
        </h2>
        
        <p className="text-lg sm:text-xl mb-12 text-purple-100 leading-relaxed max-w-4xl mx-auto">
          Join students in Roorkee who have achieved excellent results with our expert tutors Aradhana Rawat and Anusriya Tyagi. 
          Book your free trial class today and experience the difference personalized learning can make.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button 
            href="/contact"
            variant="secondary" 
            className="bg-white text-primary hover:bg-neutral-100 border-white hover:scale-105 transform transition-all duration-300 text-lg px-8 py-4"
          >
            Book Free Trial Class
          </Button>
          <Button 
            href="tel:+919876543210"
            variant="secondary" 
            className="border-white text-white hover:bg-white hover:text-primary hover:scale-105 transform transition-all duration-300 text-lg px-8 py-4"
          >
            Call +91 98765 43210
          </Button>
        </div>

        {/* Enhanced Trust Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="group">
            <div className="flex flex-col items-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-neutral-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold mb-3 text-white text-lg">Free Trial Class</h3>
              <p className="text-purple-100 text-sm leading-relaxed">Experience our teaching methodology with a complimentary trial session</p>
            </div>
          </div>
          
          <div className="group">
            <div className="flex flex-col items-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-neutral-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-bold mb-3 text-white text-lg">Expert Tutors</h3>
              <p className="text-purple-100 text-sm leading-relaxed">Qualified teachers specializing in CBSE, AS & A-Level, and IGCSE curricula</p>
            </div>
          </div>
          
          <div className="group">
            <div className="flex flex-col items-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-neutral-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-bold mb-3 text-white text-lg">Proven Results</h3>
              <p className="text-purple-100 text-sm leading-relaxed">95% of our students achieve significant grade improvements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 