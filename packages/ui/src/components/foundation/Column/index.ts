
import React from 'react';

export interface ColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: number;
  align?: 'start' | 'center' | 'end';
}

export const Column: React.FC<ColumnProps> = ({ 
  children, 
  className = '', 
  gap = 4,
  align = 'start',
  ...props 
}) => {
  return (
    <div 
      className={`flex flex-col items-${align} gap-${gap} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
