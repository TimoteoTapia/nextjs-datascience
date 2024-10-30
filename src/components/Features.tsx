import React from 'react';
import {
  BeakerIcon,
  ChartBarIcon,
  CodeBracketIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

export default function Features() {
  const features = [
    {
      icon: BeakerIcon,
      title: 'Hands-on Projects',
      description:
        'Work on real-world datasets and build your portfolio with practical projects.',
    },
    {
      icon: UserGroupIcon,
      title: 'Expert Mentorship',
      description:
        'Learn from industry professionals with years of experience in data science.',
    },
    {
      icon: ChartBarIcon,
      title: 'Advanced Analytics',
      description:
        'Master the latest tools and techniques in data analysis and visualization.',
    },
    {
      icon: CodeBracketIcon,
      title: 'Python & R Programming',
      description:
        'Learn the most in-demand programming languages for data science.',
    },
  ];

  return (
    <section className='py-24'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-4xl font-bold text-center mb-16'>
          Why Choose Our Program
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {features.map((feature, index) => (
            <div key={index} className='text-center'>
              <feature.icon className='h-12 w-12 mx-auto mb-4 text-blue-500' />
              <h3 className='text-xl font-semibold mb-2'>{feature.title}</h3>
              <p className='text-gray-400'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
