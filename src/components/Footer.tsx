import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-black py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div>
            <h3 className='text-xl font-bold mb-4'>DataScience</h3>
            <p className='text-gray-400'>
              Empowering the next generation of data scientists.
            </p>
          </div>
          <div>
            <h4 className='font-semibold mb-4'>Quick Links</h4>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/courses'
                  className='text-gray-400 hover:text-white'
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link href='/about' className='text-gray-400 hover:text-white'>
                  About Us
                </Link>
              </li>
              <li>
                <Link href='/blog' className='text-gray-400 hover:text-white'>
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-4'>Follow Us</h4>
            <ul className='space-y-2'>
              <li>
                <a href='#' className='text-gray-400 hover:text-white'>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-400 hover:text-white'>
                  GitHub
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-400 hover:text-white'>
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-4'>Contact</h4>
            <ul className='space-y-2 text-gray-400'>
              <li>contact@datascience.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className='border-t border-gray-800 mt-12 pt-8 text-center text-gray-400'>
          <p>
            &copy; {new Date().getFullYear()} DataScience Academy. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
