import { z } from 'zod';

export const logInSchema = z.object({
	email: z.string().email().min(1, 'Please enter your email'),
	password: z.string().min(8, 'Password must be at least 8 characters'),
});

export type TLogInSchema = z.infer<typeof logInSchema>;
