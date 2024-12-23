import { ReactNode } from 'react';
import { IComponent } from '../IComponent';

export interface InlineLinkProps extends IComponent {
  url?: string;
  label: string;
  icon?: ReactNode | null;
  callback?: () => void;
}

export const InlineLink = ({
  label,
  icon,
  url,
  callback,
  className,
}: InlineLinkProps) => {
  return (
    <a className={`${className}`.trimEnd()} href={url}>
      <button
        className={`${className}`.trimEnd()}
        onClick={callback}
        style={{ maxWidth: 'max-content', height: 'auto' }}
        tabIndex={0}
      >
        <p className="link">{label}</p>
        {icon && <p className="ml-1">{icon}</p>}
      </button>
    </a>
  );
};
