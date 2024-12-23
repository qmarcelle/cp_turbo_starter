import { ReactNode } from 'react';
import { Column } from "../../foundation/Column/Column";

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
  selected,
  className,
  checkClassName,
  disabled,
  id = crypto.randomUUID(),
  required,
  'aria-describedby': ariaDescribedby,
}: CheckboxProps) => {
  return (
    <div className={`flex flex-row gap-2 p-2 ${disabled ? 'opacity-50' : ''}`}>
      <input
        type="checkbox"
        id={id}
        onChange={(e) => callback?.(e.target.checked)}
        checked={selected}
        disabled={disabled}
        className={`form-checkbox h-4 w-4 ${checkClassName}`}
        required={required}
        aria-describedby={ariaDescribedby}
      />
      <Column>
        <label 
          htmlFor={id}
          className={className}
        >
          {label}
        </label>
        {body && <div className="mt-1">{body}</div>}
      </Column>
    </div>
  );
};