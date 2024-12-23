
import { cva } from 'class-variance-authority';

const circleStyles = cva('rounded-full', {
  variants: {
    size: {
      sm: 'w-4 h-4',
      md: 'w-6 h-6',
      lg: 'w-8 h-8',
    }
  },
  defaultVariants: {
    size: 'md'
  }
});

interface CircleProps {
  color: string;
  radius?: number;
  top?: number;
  right?: number;
  width?: number;
  height?: number;
  className?: string;
}

export const Circle = ({
  color,
  radius,
  top,
  right,
  width,
  height,
  className
}: CircleProps) => {
  return (
    <div
      className={circleStyles({ className })}
      style={{
        width,
        height,
        backgroundColor: color,
        borderRadius: radius,
        marginTop: top,
        marginRight: right,
      }}
      role="presentation"
    />
  );
};
