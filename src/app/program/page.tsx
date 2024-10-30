'use client';
import React, { useState } from 'react';
import Nav from '@/components/Nav';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';

export default function ProgramPage() {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  const modules = [
    {
      title: 'Module 1: Foundations of Data Science',
      duration: '4 weeks',
      topics: [
        'Python Programming Fundamentals',
        'Data Structures & Algorithms',
        'Basic Statistics & Probability',
        'Introduction to Data Analysis',
        'Pandas & NumPy Libraries',
        'Data Cleaning & Preprocessing',
      ],
    },
    {
      title: 'Module 2: Advanced Data Analysis',
      duration: '4 weeks',
      topics: [
        'Exploratory Data Analysis',
        'Statistical Inference',
        'Hypothesis Testing',
        'Regression Analysis',
        'Time Series Analysis',
        'Data Visualization with Matplotlib & Seaborn',
      ],
    },
    {
      title: 'Module 3: Machine Learning Fundamentals',
      duration: '5 weeks',
      topics: [
        'Introduction to Machine Learning',
        'Supervised Learning Algorithms',
        'Unsupervised Learning Algorithms',
        'Model Evaluation & Validation',
        'Feature Engineering',
        'Cross-Validation & Hyperparameter Tuning',
      ],
    },
    {
      title: 'Module 4: Deep Learning & Neural Networks',
      duration: '5 weeks',
      topics: [
        'Neural Network Architecture',
        'Deep Learning Frameworks (TensorFlow/PyTorch)',
        'Convolutional Neural Networks',
        'Recurrent Neural Networks',
        'Transfer Learning',
        'Deep Learning Projects',
      ],
    },
    {
      title: 'Module 5: Big Data & Cloud Computing',
      duration: '4 weeks',
      topics: [
        'Big Data Technologies',
        'Apache Spark',
        'Cloud Platforms (AWS/GCP)',
        'Data Warehousing',
        'ETL Processes',
        'Big Data Architecture',
      ],
    },
    {
      title: 'Module 6: Capstone Project',
      duration: '4 weeks',
      topics: [
        'Project Planning',
        'Data Collection & Processing',
        'Model Development',
        'Project Implementation',
        'Documentation',
        'Final Presentation',
      ],
    },
  ];

  return (
    <div className='min-h-screen bg-gray-900'>
      <Nav />

      <div className='pt-24 pb-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h1 className='text-4xl font-bold text-white mb-4'>
              Program Curriculum
            </h1>
            <p className='text-xl text-gray-400'>
              A comprehensive 6-month journey to become a Data Scientist
            </p>
          </div>

          <div className='space-y-4'>
            {modules.map((module, index) => (
              <div
                key={index}
                className='bg-gray-800 rounded-lg overflow-hidden transition-all duration-300'
              >
                <button
                  className='w-full px-6 py-4 flex items-center justify-between text-left'
                  onClick={() =>
                    setExpandedModule(expandedModule === index ? null : index)
                  }
                >
                  <div>
                    <h3 className='text-xl font-semibold text-white'>
                      {module.title}
                    </h3>
                    <p className='text-gray-400 mt-1'>{module.duration}</p>
                  </div>
                  {expandedModule === index ? (
                    <ChevronUp className='w-6 h-6 text-blue-500' />
                  ) : (
                    <ChevronDown className='w-6 h-6 text-blue-500' />
                  )}
                </button>

                <div
                  className={`px-6 pb-4 transition-all duration-300 ${
                    expandedModule === index ? 'block' : 'hidden'
                  }`}
                >
                  <ul className='space-y-2'>
                    {module.topics.map((topic, topicIndex) => (
                      <li
                        key={topicIndex}
                        className='flex items-center text-gray-300'
                      >
                        <Check className='w-5 h-5 text-green-500 mr-2' />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className='mt-16 text-center'>
            <button className='bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200'>
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
