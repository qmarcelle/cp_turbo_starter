
import React from 'react';
import { Input } from '../../atoms/Input/Input';

export interface LoginFormProps {
  onSubmit: (credentials: { username: string; password: string }) => void;
  isLoading?: boolean;
  error?: string;
}

export const LoginForm = ({ onSubmit, isLoading, error }: LoginFormProps) => {
  const [credentials, setCredentials] = React.useState({ username: '', password: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(credentials);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        label="Username"
        value={credentials.username}
        onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
      />
      <Input
        label="Password"
        type="password"
        value={credentials.password}
        onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
      />
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <button
        type="submit"
        disabled={isLoading}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        {isLoading ? 'Loading...' : 'Login'}
      </button>
    </form>
  );
};
