
import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label className="text-sm font-medium text-gray-700">{label}</label>
        )}
        <div className="relative">
          <input
            ref={ref}
            className={`w-full px-3 py-2 border rounded-md ${
              error ? 'border-red-500' : 'border-gray-300'
            } ${icon ? 'pr-10' : ''}`}
            {...props}
          />
          {icon && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              {icon}
            </div>
          )}
        </div>
        {error && <span className="text-sm text-red-500">{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';
