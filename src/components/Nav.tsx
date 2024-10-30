'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Nav() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if at top
      setIsAtTop(currentScrollY < 50);

      // Handle nav visibility on scroll
      if (currentScrollY > lastScrollY) {
        setIsNavVisible(false); // Scrolling down
      } else {
        setIsNavVisible(true); // Scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isAtTop ? 'bg-transparent' : 'bg-white/90 backdrop-blur-sm shadow-lg'
      } ${isNavVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Link
              href='/'
              className={`font-bold text-xl ${
                isAtTop ? 'text-white' : 'text-gray-800'
              }`}
            >
              DataScience
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            <Link
              href='/program'
              className={`${
                isAtTop ? 'text-white' : 'text-gray-600'
              } hover:text-blue-500 transition-colors duration-200`}
            >
              PROGRAM
            </Link>
            <Link
              href='/work'
              className={`${
                isAtTop ? 'text-white' : 'text-gray-600'
              } hover:text-blue-500 transition-colors duration-200`}
            >
              WORK
            </Link>
            <Link
              href='/pricing'
              className={`${
                isAtTop ? 'text-white' : 'text-gray-600'
              } hover:text-blue-500 transition-colors duration-200`}
            >
              PRICING
            </Link>
            <Link
              href='/courses'
              className={`${
                isAtTop ? 'text-white' : 'text-gray-600'
              } hover:text-blue-500 transition-colors duration-200`}
            >
              COURSES
            </Link>
            <Link
              href='/contact'
              className={`${
                isAtTop ? 'text-white' : 'text-gray-600'
              } hover:text-blue-500 transition-colors duration-200`}
            >
              CONTACT
            </Link>
            <Link
              href='/login'
              className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200'
            >
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden flex items-center'>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${
                isAtTop ? 'text-white' : 'text-gray-800'
              } hover:text-blue-500`}
            >
              {isMobileMenuOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
          } overflow-hidden`}
        >
          <div className='px-2 pt-2 pb-3 space-y-1'>
            <Link
              href='/services'
              className='block px-3 py-2 text-gray-800 hover:text-blue-500'
            >
              SERVICES
            </Link>
            <Link
              href='/work'
              className='block px-3 py-2 text-gray-800 hover:text-blue-500'
            >
              WORK
            </Link>
            <Link
              href='/pricing'
              className='block px-3 py-2 text-gray-800 hover:text-blue-500'
            >
              PRICING
            </Link>
            <Link
              href='/courses'
              className='block px-3 py-2 text-gray-800 hover:text-blue-500'
            >
              COURSES
            </Link>
            <Link
              href='/contact'
              className='block px-3 py-2 text-gray-800 hover:text-blue-500'
            >
              CONTACT
            </Link>
            <Link
              href='/login'
              className='block px-3 py-2 text-blue-600 hover:text-blue-700'
            >
              LOGIN
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
