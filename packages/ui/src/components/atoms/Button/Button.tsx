
import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-sm hover:shadow-md active:scale-95',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white hover:bg-primary-dark focus-visible:ring-primary shadow-primary/30',
        secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-500',
        success: 'bg-secondary-green text-white hover:bg-secondary-green/90 focus-visible:ring-secondary-green',
        warning: 'bg-secondary-yellow text-gray-900 hover:bg-secondary-yellow/90 focus-visible:ring-secondary-yellow',
        danger: 'bg-secondary-red text-white hover:bg-secondary-red/90 focus-visible:ring-secondary-red',
        outline: 'border-2 border-gray-300 bg-white hover:bg-gray-50 focus-visible:ring-gray-500',
        ghost: 'hover:bg-gray-100 hover:text-gray-900 focus-visible:ring-gray-500',
      },
      size: {
        xs: 'h-7 px-2.5 text-xs',
        sm: 'h-9 px-3',
        md: 'h-10 px-4',
        lg: 'h-11 px-6',
        xl: 'h-12 px-8',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={clsx(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
