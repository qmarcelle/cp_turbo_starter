
import { Switch } from '@headlessui/react'
import { ReactNode } from 'react'

export interface CheckboxProps {
  selected?: boolean;
  callback?: (checked: boolean) => void;
  label: string;
  value?: string;
  className?: string;
  checkClassName?: string;
  body?: ReactNode;
  disabled?: boolean;
  id?: string;
  required?: boolean;
  'aria-describedby'?: string;
}

export const Checkbox = ({
  label,
  body,
  callback,
  selected = false,
  className,
  disabled,
  id = crypto.randomUUID(),
  required,
  'aria-describedby': ariaDescribedby,
}: CheckboxProps) => {
  return (
    <div className={`relative flex items-start py-2 ${disabled ? 'opacity-50' : ''}`}>
      <div className="flex h-6 items-center">
        <Switch
          checked={selected}
          onChange={callback}
          disabled={disabled}
          className={`${
            selected ? 'bg-primary-600' : 'bg-gray-200'
          } relative inline-flex h-5 w-5 shrink-0 cursor-pointer rounded border border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2`}
          id={id}
          aria-describedby={ariaDescribedby}
          required={required}
        >
          <span
            className={`${
              selected ? 'opacity-100' : 'opacity-0'
            } pointer-events-none relative inline-block h-4 w-4 transform rounded-sm bg-white transition duration-200 ease-in-out`}
          >
            <svg
              className="h-4 w-4 text-primary-600"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </Switch>
      </div>
      <div className="ml-3 text-sm leading-6">
        <label htmlFor={id} className={`font-medium text-gray-900 ${className}`}>
          {label}
        </label>
        {body && <div className="text-gray-500">{body}</div>}
      </div>
    </div>
  );
};
