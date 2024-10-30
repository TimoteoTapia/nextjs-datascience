'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Terminal } from 'lucide-react';

export default function TerminalSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [skillsText, setSkillsText] = useState('');
  const sectionRef = useRef(null);

  const skills = `
> Learning Path:
  - Python Programming Fundamentals
  - Data Analysis & Statistical Methods
  - Machine Learning Algorithms
  - Deep Learning & Neural Networks
  - Data Visualization
  - Big Data Technologies
  - Cloud Computing for Data Science
> Career Ready: Upon completion, you'll be equipped for roles in AI, ML, and Data Analysis.
`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= skills.length) {
          setSkillsText(skills.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 50);

      return () => clearInterval(typingInterval);
    }
  }, [isVisible, skills]); // Asegúrate de que 'skills' siempre esté presente

  const careers = [
    {
      title: 'Data Scientist',
      description: 'Lead data-driven decision making',
      salary: '$120,000 - $180,000',
      skills: ['Python', 'Machine Learning', 'Statistical Analysis'],
    },
    {
      title: 'ML Engineer',
      description: 'Build and deploy AI models',
      salary: '$130,000 - $200,000',
      skills: ['Deep Learning', 'MLOps', 'Cloud Computing'],
    },
    {
      title: 'Data Analyst',
      description: 'Transform data into insights',
      salary: '$80,000 - $120,000',
      skills: ['SQL', 'Data Visualization', 'Business Intelligence'],
    },
  ];

  return (
    <div ref={sectionRef} className='bg-gray-900 py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Career Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
          {careers.map((career, index) => (
            <div
              key={index}
              className={`bg-[#1E1E1E] p-6 rounded-lg transform transition-all duration-1000 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className='flex items-center justify-between mb-4'>
                <Terminal className='w-6 h-6 text-blue-500' />
              </div>
              <h3 className='text-xl font-bold text-white mb-2'>
                {career.title}
              </h3>
              <p className='text-gray-400 mb-4'>{career.description}</p>
              <div className='text-green-500 font-mono mb-4'>
                {career.salary}
              </div>
              <div className='flex flex-wrap gap-2'>
                {career.skills.map((skill, i) => (
                  <span
                    key={i}
                    className='px-2 py-1 text-sm bg-blue-900 text-blue-300 rounded'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Terminal */}
        <div
          className={`bg-[#1E1E1E] p-6 rounded-lg max-w-3xl mx-auto transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <div className='flex items-center justify-between mb-4'>
            <Terminal className='w-8 h-8 text-blue-500' />
            <div className='flex space-x-2'>
              <div className='w-3 h-3 rounded-full bg-red-500' />
              <div className='w-3 h-3 rounded-full bg-yellow-500' />
              <div className='w-3 h-3 rounded-full bg-green-500' />
            </div>
          </div>
          <pre className='font-mono text-sm text-white-500 whitespace-pre-wrap'>
            {skillsText}
          </pre>
          <span className='inline-block w-1 h-4 bg-gray-500 animate-pulse' />
        </div>
      </div>
    </div>
  );
}
