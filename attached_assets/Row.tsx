import { ReactNode } from 'react';
import { IComponent } from '../IComponent';

interface RowProps extends IComponent {
  children: ReactNode;
}

export const Row = ({
  className = '',
  children,
  onClick,
  tabIndex,
}: RowProps) => {
  return (
    <div
      tabIndex={tabIndex}
      onClick={onClick}
      className={`flex flex-row ${className}`.trimEnd()}
    >
      {children}
    </div>
  );
};
