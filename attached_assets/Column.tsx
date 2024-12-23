import { ReactNode } from 'react';
import { IComponent } from '../IComponent';

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
      className={`flex flex-col ${className}`.trimEnd()}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
