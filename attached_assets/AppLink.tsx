import { ReactNode } from 'react';
import { IComponent } from '../IComponent';

export interface LinkProps extends IComponent {
  url?: string;
  label: string;
  icon?: ReactNode | null;
  displayStyle?: string;
  linkUnderline?: string;
  callback?: () => void;
}

export const AppLink = ({
  label,
  icon,
  url,
  callback,
  className,
  linkUnderline,
  displayStyle = 'block',
}: LinkProps) => {
  return (
    <a style={{ display: `${displayStyle}` }} tabIndex={-1} href={url}>
      <button
        onClick={callback}
        style={{
          maxWidth: 'max-content',
          height: 'auto',
          display: `${displayStyle}`,
        }}
        tabIndex={0}
        className={`flex flex-row link-container ${className}`}
      >
        <p
          className={`link ${linkUnderline}`}
          style={{ display: `${displayStyle}` }}
        >
          {label}
        </p>
        {icon && (
          <p className="ml-1" style={{ display: `${displayStyle}` }}>
            {icon}
          </p>
        )}
      </button>
    </a>
  );
};
