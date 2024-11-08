import { useState } from 'react';
import { Link } from 'react-router-dom';

import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { handleApiError } from '@/utils';
import { useUserLogin } from '../hooks/useLogin';
import { Button, Checkbox, Input, Label } from '@/components';
import { LoginRequestSchema, TLoginRequestSchema } from '../validators';

export const LoginForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<TLoginRequestSchema>({
		resolver: zodResolver(LoginRequestSchema),
	});

	const [isChecked, setIsChecked] = useState(false);

	const { mutate: handleLogin, isPending: isLoginLoading } = useUserLogin();

	async function onSubmit(data: TLoginRequestSchema) {
		handleLogin(
			{ ...data, role: 'USER' },
			{
				onSuccess: () => {
					toast.success('Welcome to bookshelf 😁');
				},
				onError: (error) => {
					toast.error(handleApiError(error));
				},
			},
		);
		reset();
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
			<Button type='submit'>{isLoginLoading ? 'Logging in...' : 'Login'}</Button>
		</form>
	);
};

export const ErrorMessage = ({ children }: { children: React.ReactNode }) => {
	return <span className='text-red-400 text-sm font-normal'>{children}</span>;
};

const Group = ({ children }: { children: React.ReactNode }) => (
	<div className='flex gap-1 flex-col'>{children}</div>
);
