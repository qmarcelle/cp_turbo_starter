
import React from 'react';
import { Input } from '../../atoms/Input/Input';
import { Button } from '../../atoms/Button/Button';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

export interface LoginFormProps {
  onSubmit: (values: { username: string; password: string }) => void;
  error?: string;
  isLoading?: boolean;
  className?: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({ 
  onSubmit, 
  error, 
  isLoading,
  className = ''
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [values, setValues] = React.useState({ username: '', password: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`space-y-6 w-full max-w-md mx-auto ${className}`}
      noValidate
    >
      <div className="space-y-4">
        <Input
          label="Username"
          value={values.username}
          onChange={(e) => setValues({ ...values, username: e.target.value })}
          autoComplete="username"
          required
          className="w-full"
        />
        <div className="relative">
          <Input
            label="Password"
            type={showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={(e) => setValues({ ...values, password: e.target.value })}
            autoComplete="current-password"
            required
            className="w-full"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-[38px] text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-light rounded-full p-1"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? (
              <EyeSlashIcon className="h-5 w-5" />
            ) : (
              <EyeIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
      {error && (
        <div className="text-secondary-red text-sm flex items-center gap-2 bg-red-50 p-3 rounded-lg" role="alert">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          {error}
        </div>
      )}
      <Button
        type="submit"
        disabled={isLoading}
        className="w-full"
        variant="primary"
      >
        {isLoading ? 'Signing in...' : 'Sign in'}
      </Button>
    </form>
  );
};
