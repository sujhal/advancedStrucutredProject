import { z } from 'zod';

import { APP_CONFIG } from '@config/appConfig';

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(APP_CONFIG.minPasswordLength),
});

export const registerSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(APP_CONFIG.minPasswordLength),
    confirmPassword: z.string().min(APP_CONFIG.minPasswordLength),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });

export const forgotPasswordSchema = z.object({
  email: z.string().email(),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
export type RegisterFormValues = z.infer<typeof registerSchema>;
export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;
