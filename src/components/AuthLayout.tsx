// src/components/AuthLayout.tsx
'use client';
import React from 'react';
import Nav from '@/components/Nav';
import { Terminal } from 'lucide-react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className='min-h-screen bg-gray-900'>
      <Nav />
      <div className='pt-24 pb-16'>
        <div className='max-w-md mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-[#1E1E1E] rounded-lg p-8'>
            <div className='flex items-center justify-between mb-8'>
              <Terminal className='w-8 h-8 text-green-500' />
              <div className='flex space-x-2'>
                <div className='w-3 h-3 rounded-full bg-red-500' />
                <div className='w-3 h-3 rounded-full bg-yellow-500' />
                <div className='w-3 h-3 rounded-full bg-green-500' />
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
