
import { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const typographyVariants = cva('text-gray-900', {
  variants: {
    variant: {
      h1: 'text-4xl font-bold',
      h2: 'text-3xl font-semibold',
      h3: 'text-2xl font-semibold',
      body: 'text-base',
      small: 'text-sm',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
});

interface TypographyProps extends VariantProps<typeof typographyVariants> {
  children: ReactNode;
  className?: string;
}

export const Typography = ({ children, variant, className }: TypographyProps) => {
  return <div className={typographyVariants({ variant, className })}>{children}</div>;
};
