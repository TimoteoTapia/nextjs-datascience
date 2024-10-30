// app/lib/auth.ts
'use server';
import { prisma } from './db';
import bcrypt from 'bcrypt';
import { z } from 'zod';

const SignUpSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
});

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export async function signUp(formData: {
  fullName: string;
  email: string;
  password: string;
}) {
  try {
    const validatedFields = SignUpSchema.parse(formData);
    // Check if user already exists
    const existingUser = await prisma.userAuth.findUnique({
      // Cambiado de user a userAuth
      where: { email: validatedFields.email },
    });
    if (existingUser) {
      throw new Error('User already exists');
    }
    // Hash password
    const hashedPassword = await bcrypt.hash(validatedFields.password, 10);
    // Create user
    const user = await prisma.userAuth.create({
      // Cambiado de user a userAuth
      data: {
        fullName: validatedFields.fullName,
        email: validatedFields.email,
        password: hashedPassword,
      },
    });
    return { success: true, user: { id: user.id, email: user.email } };
  } catch (error) {
    console.error('Error during sign up:', error);
    throw error;
  }
}

export async function login(formData: { email: string; password: string }) {
  try {
    // Validate form fields against the defined LoginSchema
    const validatedFields = LoginSchema.parse(formData);

    // Check if a user exists in the database with the provided email
    const user = await prisma.userAuth.findUnique({
      where: { email: validatedFields.email },
    });

    // If user does not exist, throw an error for incorrect credentials
    if (!user) {
      throw new Error('Incorrect email or password');
    }

    // Validate if the provided password matches the stored hashed password
    const isPasswordValid = await bcrypt.compare(
      validatedFields.password,
      user.password
    );

    // If password is invalid, throw an error for incorrect credentials
    if (!isPasswordValid) {
      throw new Error('Incorrect email or password');
    }

    // Return success if credentials are valid, including basic user info
    return { success: true, user: { id: user.id, email: user.email } };
  } catch (error) {
    // If validation fails, throw a specific error message
    if (error instanceof z.ZodError) {
      throw new Error('Please check your credentials');
    }
    // Rethrow other errors for handling by the caller
    throw error;
  }
}
