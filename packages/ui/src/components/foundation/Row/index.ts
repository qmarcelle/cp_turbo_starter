
import React from 'react';

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: number;
  align?: 'start' | 'center' | 'end';
  justify?: 'start' | 'center' | 'end' | 'between';
}

export const Row: React.FC<RowProps> = ({ 
  children, 
  className = '', 
  gap = 4,
  align = 'center',
  justify = 'start',
  ...props 
}) => {
  return (
    <div 
      className={`flex flex-row items-${align} justify-${justify} gap-${gap} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
