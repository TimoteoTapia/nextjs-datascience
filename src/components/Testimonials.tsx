import React from 'react';
import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Data Analyst at Tech Corp',
      quote:
        'This course transformed my career. The practical projects and real-world applications gave me the confidence to tackle complex data challenges.',
      image: '/api/placeholder/64/64',
    },
    {
      name: 'Michael Chen',
      role: 'Machine Learning Engineer',
      quote:
        "The instructors' expertise and hands-on approach made complex concepts accessible. I went from basics to building production-ready models.",
      image: '/api/placeholder/64/64',
    },
    {
      name: 'Emma Williams',
      role: 'Business Intelligence Analyst',
      quote:
        'The course perfectly balanced theory with practical applications. The community support was invaluable for my learning journey.',
      image: '/api/placeholder/64/64',
    },
  ];

  return (
    <section className='py-24 bg-gray-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-4xl font-bold text-center mb-16'>
          Student Success Stories
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className='bg-black/50 backdrop-blur-sm p-8 rounded-lg'
            >
              <div className='flex items-center mb-4'>
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={64}
                  height={64}
                  className='rounded-full'
                />
                <div className='ml-4'>
                  <h3 className='font-semibold'>{testimonial.name}</h3>
                  <p className='text-gray-400'>{testimonial.role}</p>
                </div>
              </div>
              <p className='text-gray-300 italic'>
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
