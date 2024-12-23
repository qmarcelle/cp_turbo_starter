import { ReactNode } from 'react';
import { IComponent } from '../IComponent';

interface RichTextProps extends IComponent {
  spans: ReactNode[];
  type?: 'title-1' | 'title-2' | 'title-3' | 'body-1' | 'body-2';
}

export const RichText = ({
  spans,
  className,
  type = 'body-1',
}: RichTextProps) => {
  return (
    <span className={`rich-text ${type} ${className}`.trimEnd()}>{spans}</span>
  );
};
