import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps, forwardRef } from 'react';

const LabelVarient = cva('text-sm font-medium text-black opacity-90');

type LabelProps = ComponentProps<'label'> & VariantProps<typeof LabelVarient>;

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
	({ className, ...props }, ref) => {
		return <label ref={ref} {...props} className={LabelVarient({ className })} />;
	},
);
