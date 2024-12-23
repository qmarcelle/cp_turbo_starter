
import * as React from 'react';

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  onClick?: () => void;
  disabled?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ label, variant = 'primary', onClick, disabled }, ref) => {
    let buttonStyles = 'px-4 py-2 font-semibold rounded shadow focus:outline-none';

    if (variant === 'primary') {
      buttonStyles += ' bg-blue-500 text-white hover:bg-blue-600';
    } else if (variant === 'secondary') {
      buttonStyles += ' bg-gray-500 text-white hover:bg-gray-600';
    } else if (variant === 'tertiary') {
      buttonStyles += ' bg-transparent text-blue-500 border border-blue-500 hover:bg-blue-50';
    }

    if (disabled) {
      buttonStyles += ' opacity-50 cursor-not-allowed';
    }

    return (
      <button
        className={buttonStyles}
        onClick={onClick}
        disabled={disabled}
        ref={ref}
      >
        {label}
      </button>
    );
  }
);

Button.displayName = 'Button';
