import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button, Checkbox, Input, Label } from '@/components';
import { logInSchema, TLogInSchema } from '../validators/login.schema';

type LogInFormT = {
	email: string;
	password: string;
};

export const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<TLogInSchema>({
		resolver: zodResolver(logInSchema),
	});

	const navigate = useNavigate();

	const [isChecked, setIsChecked] = useState(false);

	async function onSubmit(data: LogInFormT) {
		console.log(data);
		navigate('/home');
	}

	return (
		<form
			className='flex flex-col gap-5 w-full'
			onSubmit={handleSubmit(onSubmit)}
		>
			<Group>
				<Label>Email</Label>
				<Input placeholder='johndoe@gmail.com' {...register('email')} />
				{errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
			</Group>
			<Group>
				<Label>Password</Label>
				<Input placeholder='********' type='password' {...register('password')} />
				{errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
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
