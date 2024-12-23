import { IComponent } from '../IComponent';

interface CardProps extends IComponent {
  backgroundColor?: string;
  type?: 'main' | 'highlight' | 'neutral' | 'elevated' | 'info';
  children: JSX.Element;
}

export const Card = ({
  backgroundColor,
  children,
  type = 'main',
  className,
  onClick,
}: CardProps) => {
  return (
    <div
      className={`card-${type} ${className}`}
      onClick={onClick}
      style={{ ...(backgroundColor && { backgroundColor: backgroundColor }) }}
    >
      {children}
    </div>
  );
};
