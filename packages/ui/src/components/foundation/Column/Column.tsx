import { ReactNode } from 'react';
import { IComponent } from '../../IComponent';

interface ColumnProps extends IComponent {
  children: ReactNode;
}

export const Column = ({
  className = '',
  children,
  onClick,
  tabIndex,
}: ColumnProps) => {
  return (
    <div
      tabIndex={tabIndex}
      onClick={onClick}
      className={`flex flex-col ${className}`}
    >
      {children}
    </div>
  );
};