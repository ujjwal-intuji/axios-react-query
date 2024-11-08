import { z } from 'zod';

export const SignUpRequestSchema = z
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

export const SignUpResponseSchema = z.object({
	message: z.string(),
	email: z.string().email(),
});

export type TSignUpRequestSchema = z.infer<typeof SignUpRequestSchema>;
export type TSignUpResponseSchema = z.infer<typeof SignUpResponseSchema>;
