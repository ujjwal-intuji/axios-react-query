import { Link } from 'react-router-dom';

import { INTERNAL_ROUTES } from '@/constants';
import { SignupForm } from './components/signupForm';

export function SignupPage() {
	return (
		<section className='min-h-screen bg-[#E4E5E5] w-full flex items-center justify-center'>
			<div className='min-w-[95%] h-full min-h-[42rem] md:min-w-[30rem] lg:min-h-[48rem] my-5 md:my-8 bg-[#FFFFFF] p-6 md:p-10 flex flex-col items-center gap-10 rounded-md shadow-lg'>
				<figure>
					<img src='/logo.png' alt='website logo' />
				</figure>
				<div className='flex flex-col gap-3 text-center'>
					<h3 className='text-xl text-[#4D4D4D] font-normal'>Registration</h3>
					<p className='text-[#ABABAB] text-sm font-normal'>
						For Both Staff & Students
					</p>
				</div>
				<SignupForm />
				<div className='flex justify-between items-center w-full'>
					<div className='text-[#4D4D4D] flex gap-1 items-center'>
						<span className='font-normal text-sm'>Already a User?</span>
						<Link
							to={INTERNAL_ROUTES.AUTHENTICATION.LOGIN}
							className='font-normal text-sm underline underline-offset-2'
						>
							Login Here
						</Link>
					</div>
					<div className='text-[#4D4D4D]'>
						<Link
							to={INTERNAL_ROUTES.AUTHENTICATION.GUEST_LOGIN}
							className='font-normal text-sm'
						>
							Use as a Guest
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
