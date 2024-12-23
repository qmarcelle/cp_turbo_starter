
import React from 'react';
import { LoginForm } from '../../molecules/LoginForm/LoginForm';

export interface LoginPageProps {
  onLogin: (credentials: { username: string; password: string }) => void;
  isLoading?: boolean;
  error?: string;
}

export const LoginPage = ({ onLogin, isLoading, error }: LoginPageProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Welcome Back</h2>
          <p className="mt-2 text-gray-600">Please sign in to your account</p>
        </div>
        <LoginForm onSubmit={onLogin} isLoading={isLoading} error={error} />
      </div>
    </div>
  );
};
