
import React from 'react';
import { Input } from '../../atoms/Input/Input';
import { Button } from '../../atoms/Button/Button';

export interface MFAFormProps {
  onSubmit: (code: string) => void;
  onResend?: () => void;
  onChangeMethod?: () => void;
  destination: string;
  isLoading?: boolean;
  error?: string;
}

export const MFAForm = ({
  onSubmit,
  onResend,
  onChangeMethod,
  destination,
  isLoading,
  error
}: MFAFormProps) => {
  const [code, setCode] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(code);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="text-gray-600">We've sent a code to: {destination}</p>
      <Input
        label="Enter Security Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        error={error}
      />
      <Button type="submit" fullWidth disabled={isLoading}>
        {isLoading ? 'Verifying...' : 'Confirm'}
      </Button>
      <div className="flex flex-col gap-2 text-center">
        <Button variant="link" type="button" onClick={onResend}>
          Resend Code
        </Button>
        <Button variant="link" type="button" onClick={onChangeMethod}>
          Choose a Different Method
        </Button>
      </div>
    </form>
  );
};
