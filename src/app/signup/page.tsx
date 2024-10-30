// src/app/signup/page.tsx
'use client';
import React, { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';
import AuthLayout from '@/components/AuthLayout';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { signUp } from '@/app/lib/auth'; // Añade esta importación

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };

    // Full name validation
    if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters long';
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Password validation
    if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
      isValid = false;
    }

    // Password confirmation validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const result = await signUp({
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
        });

        if (result.success) {
          router.push('/login');
        }
      } catch (error: unknown) {
        console.error('Signup error:', error);
        //optional: show error message to user
        setErrors((prev) => ({
          ...prev,
          email:
            error instanceof Error ? error.message : 'Error creating account',
        }));
      }
    }
  };

  return (
    <AuthLayout>
      <div className='mb-8'>
        <h2 className='text-2xl font-bold text-white text-center mb-6'>
          Create an account
        </h2>
        <form className='space-y-6' onSubmit={handleSubmit}>
          <div>
            <label className='block text-gray-400 mb-2'>Full Name</label>
            <div className='relative'>
              <User className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
              <input
                type='text'
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                minLength={2}
                className={`w-full bg-gray-800 text-white rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 ${
                  errors.fullName
                    ? 'ring-2 ring-red-500 focus:ring-red-500'
                    : 'focus:ring-blue-500'
                }`}
                placeholder='John Doe'
                required
              />
            </div>
            {errors.fullName && (
              <p className='mt-1 text-red-500 text-sm'>{errors.fullName}</p>
            )}
          </div>
          <div>
            <label className='block text-gray-400 mb-2'>Email</label>
            <div className='relative'>
              <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
              <input
                type='email'
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                pattern='[^@\s]+@[^@\s]+\.[^@\s]+'
                className={`w-full bg-gray-800 text-white rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 ${
                  errors.email
                    ? 'ring-2 ring-red-500 focus:ring-red-500'
                    : 'focus:ring-blue-500'
                }`}
                placeholder='you@example.com'
                required
              />
            </div>
            {errors.email && (
              <p className='mt-1 text-red-500 text-sm'>{errors.email}</p>
            )}
          </div>
          <div>
            <label className='block text-gray-400 mb-2'>Password</label>
            <div className='relative'>
              <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
              <input
                type='password'
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                minLength={8}
                className={`w-full bg-gray-800 text-white rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 ${
                  errors.password
                    ? 'ring-2 ring-red-500 focus:ring-red-500'
                    : 'focus:ring-blue-500'
                }`}
                placeholder='••••••••'
                required
              />
            </div>
            {errors.password && (
              <p className='mt-1 text-red-500 text-sm'>{errors.password}</p>
            )}
          </div>
          <div>
            <label className='block text-gray-400 mb-2'>Confirm Password</label>
            <div className='relative'>
              <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
              <input
                type='password'
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    confirmPassword: e.target.value,
                  })
                }
                className={`w-full bg-gray-800 text-white rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 ${
                  errors.confirmPassword
                    ? 'ring-2 ring-red-500 focus:ring-red-500'
                    : 'focus:ring-blue-500'
                }`}
                placeholder='••••••••'
                required
              />
            </div>
            {errors.confirmPassword && (
              <p className='mt-1 text-red-500 text-sm'>
                {errors.confirmPassword}
              </p>
            )}
          </div>
          <button
            type='submit'
            className='w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-200'
          >
            Sign Up
          </button>
          <p className='mt-4 text-center text-gray-400'>
            Already have an account?{' '}
            <Link href='/login' className='text-blue-500 hover:text-blue-400'>
              Login
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
}
