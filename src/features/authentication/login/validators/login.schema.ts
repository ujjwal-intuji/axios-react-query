import { z } from 'zod';

export const LoginRequestSchema = z.object({
	email: z.string().email().min(1, 'Please enter your email'),
	password: z.string().min(8, 'Password must be at least 8 characters'),
});

export const LoginResponseSchema = z.object({
	access_token: z.string(),
});

export type TLoginRequestSchema = z.infer<typeof LoginRequestSchema>;
export type TLoginResponseSchema = z.infer<typeof LoginResponseSchema>;
