import { z } from 'zod';

export const signUpRequestSchema = z
	.object({
		reg_no: z.string().min(1, 'Please enter a number'),
		email: z.string().min(1, 'Please enter your college email').email(),
		password: z.string().min(8, 'Password must be at least 8 characters'),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Passwords must match',
		path: ['confirmPassword'],
	});

export type TSignUpRequestSchema = z.infer<typeof signUpRequestSchema>;
