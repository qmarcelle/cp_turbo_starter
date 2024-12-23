
import React from 'react';
import { Input } from '../../atoms/Input/Input';
import { Button } from '../../atoms/Button/Button';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

export interface LoginFormProps {
  onSubmit: (values: { username: string; password: string }) => void;
  error?: string;
  isLoading?: boolean;
}

export const LoginForm = ({ onSubmit, error, isLoading }: LoginFormProps) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [values, setValues] = React.useState({ username: '', password: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Username"
        value={values.username}
        onChange={(e) => setValues({ ...values, username: e.target.value })}
        autoComplete="username"
      />
      <Input
        label="Password"
        type={showPassword ? 'text' : 'password'}
        value={values.password}
        onChange={(e) => setValues({ ...values, password: e.target.value })}
        autoComplete="current-password"
        icon={
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-gray-400 hover:text-gray-600"
          >
            {showPassword ? (
              <EyeSlashIcon className="h-5 w-5" />
            ) : (
              <EyeIcon className="h-5 w-5" />
            )}
          </button>
        }
      />
      {error && (
        <div className="text-red-500 text-sm flex items-center gap-2">
          <div className="h-5 w-5 text-red-500">⚠</div>
          {error}
        </div>
      )}
      <Button type="submit" fullWidth disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Log In'}
      </Button>
      <div className="flex flex-col gap-2 text-center">
        <Button variant="link" type="button">
          Forgot Username/Password?
        </Button>
        <Button variant="link" type="button">
          Register a New Account
        </Button>
      </div>
    </form>
  );
};
