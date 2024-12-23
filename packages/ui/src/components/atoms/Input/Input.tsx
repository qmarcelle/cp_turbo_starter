
import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

const inputVariants = cva(
  "flex h-11 w-full rounded-lg border bg-white px-3.5 py-2 text-gray-900 shadow-sm transition-colors",
  {
    variants: {
      variant: {
        default: "border-gray-200 ring-primary-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500",
        error: "border-red-500 text-red-900 placeholder:text-red-300 focus:border-red-500 focus:ring-red-500 pr-10",
      }
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", label, error, icon, type = "text", variant, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label 
            className="block text-sm font-medium leading-6 text-gray-900 mb-2"
            htmlFor={props.id}
          >
            {label}
          </label>
        )}
        <div className="relative">
          <input
            type={type}
            className={inputVariants({ variant: error ? "error" : "default", className })}
            ref={ref}
            aria-invalid={!!error}
            aria-describedby={error ? `${props.id}-error` : undefined}
            {...props}
          />
          {error && (
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
            </div>
          )}
          {icon && !error && (
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              {icon}
            </div>
          )}
        </div>
        {error && (
          <p className="mt-2 text-sm text-red-600" id={`${props.id}-error`}>
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
