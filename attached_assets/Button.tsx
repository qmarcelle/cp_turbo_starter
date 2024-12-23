import { ReactNode } from 'react';
import { IComponent } from '../IComponent';
type ButtonType =
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'rounded'
  | 'pill'
  | 'elevated'
  | 'card';

interface ButtonProps extends IComponent {
  type?: ButtonType;
  id?: string;
  label?: string;
  icon?: ReactNode;
  callback?: () => void | Promise<void> | null;
}

export const Button = ({
  type = 'primary',
  label,
  icon,
  id,
  className,
  callback,
}: ButtonProps) => {
  function computeContent() {
    if (label) {
      return (
        <>
          {label}
          {icon && <p className="ml-2">{icon}</p>}
        </>
      );
    } else {
      return icon;
    }
  }

  return (
    <button
      onClick={callback}
      aria-label={label}
      className={`button-text ${type} text-center flex flex-row justify-center items-center min-w-fit ${callback == null ? 'inactive' : null} ${className}`}
      type="button"
      id={id}
    >
      {computeContent()}
    </button>
  );
};
