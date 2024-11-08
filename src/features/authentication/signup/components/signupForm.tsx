import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import { zodResolver } from '@hookform/resolvers/zod';

import {
	SignUpRequestSchema,
	TSignUpRequestSchema,
} from '../validators/signup.schema';
import { Button, Checkbox, Input, Label } from '@/components';

export const SignupForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<TSignUpRequestSchema>({
		resolver: zodResolver(SignUpRequestSchema),
	});

	const navigate = useNavigate();

	const [isChecked, setIsChecked] = useState(false);

	async function onSubmit(data: TSignUpRequestSchema) {
		console.log(data);
		navigate('/');
	}

	return (
		<form
			className='flex flex-col gap-4 w-full'
			onSubmit={handleSubmit(onSubmit)}
		>
			<Group>
				<Label>Reg No.</Label>
				<Input {...register('reg_no')} placeholder='College Reg. No.' />
				{errors.reg_no && <ErrorMessage>{errors.reg_no.message}</ErrorMessage>}
			</Group>
			<Group>
				<Label>College Email ID</Label>
				<Input placeholder='username@collegename.ac.in' {...register('email')} />
				{errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
			</Group>
			<Group>
				<Label>Password</Label>
				<Input placeholder='********' type='password' {...register('password')} />
				{errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
			</Group>
			<Group>
				<Label>Confirm Password</Label>
				<Input
					placeholder='********'
					type='password'
					{...register('confirmPassword')}
				/>
				{errors.confirmPassword && (
					<ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
				)}
			</Group>
			<div className='flex justify-between items-center'>
				<Checkbox
					checked={isChecked}
					onChange={setIsChecked}
					label='Remember me?'
				/>
				<Link
					to='/'
					className='text-sm text-slate-500 hover:underline underline-offset-4'
				>
					Forget Password?
				</Link>
			</div>
			<Button type='submit'>{isSubmitting ? 'Logging in...' : 'Login'}</Button>
		</form>
	);
};

export const ErrorMessage = ({ children }: { children: React.ReactNode }) => {
	return <span className='text-red-400 text-sm font-normal'>{children}</span>;
};

const Group = ({ children }: { children: React.ReactNode }) => (
	<div className='flex gap-1 flex-col'>{children}</div>
);
