
import React from 'react';
import { Input } from '../../atoms/Input/Input';
import { Button } from '../../atoms/Button/Button';
import { EyeIcon, EyeSlashIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { Transition } from '@headlessui/react';

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
          id="username"
          label="Username"
          value={values.username}
          onChange={(e) => setValues({ ...values, username: e.target.value })}
          autoComplete="username"
          required
          className="w-full"
          placeholder="Enter your username"
        />
        <Input
          id="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={(e) => setValues({ ...values, password: e.target.value })}
          autoComplete="current-password"
          required
          className="w-full"
          placeholder="Enter your password"
          icon={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-full p-1"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? (
                <EyeSlashIcon className="h-5 w-5" />
              ) : (
                <EyeIcon className="h-5 w-5" />
              )}
            </button>
          }
        />
      </div>
      
      <Transition
        show={!!error}
        enter="transition-opacity duration-150"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="rounded-lg bg-red-50 p-4 text-sm flex items-center gap-3 text-red-500" role="alert">
          <ExclamationCircleIcon className="h-5 w-5 flex-shrink-0" />
          <span>{error}</span>
        </div>
      </Transition>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full h-11 text-base font-semibold"
        variant="primary"
      >
        {isLoading ? 'Signing in...' : 'Sign in'}
      </Button>
    </form>
  );
};
