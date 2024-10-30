'use client';
import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = 'Master Data Science & AI'; //'Learn. Code. Analyze.';
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Animated background */}
      <div className='absolute inset-0 z-0'>
        <div className='matrix-bg absolute inset-0'></div>
      </div>

      {/* Main content */}
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='space-y-8'>
          {/* Typing effect */}
          <h1 className='text-6xl font-bold tracking-tight font-mono'>
            <span>{text}</span>
            <span
              className={`inline-block w-2 h-9 ml-1 bg-blue-500 ${
                isTypingComplete ? 'animate-pulse' : ''
              }`}
            ></span>
          </h1>

          {/* Subtitle */}
          <p className='text-xl max-w-2xl'>
            Accelerate your data science journey with professional courses
            designed for real-world applications.
          </p>

          {/* Button */}
          <button className='bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition'>
            SCHEDULE A CALL
          </button>
        </div>
      </div>
    </div>
  );
}
