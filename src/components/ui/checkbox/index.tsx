import { Label, Input } from '@/components';

type CheckboxProps = {
	label: string;
	checked: boolean;
	onChange: (checked: boolean) => void;
};

export const Checkbox = ({ checked, onChange, label }: CheckboxProps) => {
	return (
		<Label className='flex items-center cursor-pointer'>
			<Input
				type='checkbox'
				checked={checked}
				onChange={(e) => onChange(e.target.checked)}
				className='hidden'
			/>
			<span
				className={`w-4 h-4 inline-block rounded border-2 transition-colors ${
					checked ? 'bg-[#FA7C54] border-[#FA7C54]' : 'bg-white border-gray-300'
				}`}
			>
				{checked && (
					<svg
						className='w-4.5 h-4.5 text-white mx-auto my-auto'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M5 13l4 4L19 7'
						/>
					</svg>
				)}
			</span>
			<span className='mx-2'>{label}</span>
		</Label>
	);
};
