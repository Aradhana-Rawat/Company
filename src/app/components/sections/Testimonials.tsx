import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Parent',
      content: 'Excellence Tuition has transformed my daughter\'s approach to mathematics. Her confidence has grown tremendously, and her grades have improved significantly. The tutors are patient and really understand how to connect with students.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Student (Grade 11)',
      content: 'The science tutoring here is amazing! The teachers explain complex concepts in a way that actually makes sense. I went from struggling with chemistry to getting top marks in my class.',
      rating: 5
    },
    {
      name: 'David Wilson',
      role: 'Parent',
      content: 'What sets Excellence Tuition apart is their personalized approach. They identified my son\'s learning style and adapted their teaching methods accordingly. The progress reports keep us informed every step of the way.',
      rating: 5
    },
    {
      name: 'Emma Thompson',
      role: 'Student (Grade 9)',
      content: 'I used to dread English class, but now it\'s one of my favorites! The tutors here make learning fun and interactive. My writing skills have improved so much, and I actually enjoy reading now.',
      rating: 5
    },
    {
      name: 'Robert Martinez',
      role: 'Parent',
      content: 'The flexible scheduling at Excellence Tuition works perfectly for our busy family life. The quality of education is exceptional, and the tutors genuinely care about each student\'s success.',
      rating: 5
    },
    {
      name: 'Lisa Wang',
      role: 'Student (Grade 12)',
      content: 'Thanks to the computer science program here, I feel confident about pursuing engineering at university. The practical projects and coding exercises prepared me well for advanced studies.',
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            What Our Students & Parents Say
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it - hear from the families who have experienced our exceptional tutoring services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6 card-shadow">
              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <svg key={starIndex} className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-neutral-700 mb-4">
                &quot;{testimonial.content}&quot;
              </blockquote>

              {/* Author Info */}
              <div className="border-t border-neutral-200 pt-4">
                <div className="font-semibold text-neutral-900">{testimonial.name}</div>
                <div className="text-sm text-neutral-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Stats */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg p-8 card-shadow inline-block">
            <div className="flex items-center justify-center mb-4">
              <div className="flex mr-4">
                {[...Array(5)].map((_, starIndex) => (
                  <svg key={starIndex} className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-2xl font-bold text-neutral-900">4.9/5</span>
            </div>
            <p className="text-neutral-600">Average rating from 150+ reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
} 