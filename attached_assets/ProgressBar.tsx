import { IComponent } from '../IComponent';

interface ProgressBarProps extends IComponent {
  height: number;
  completePercent: number;
  backgroundColor?: string;
  progressColor?: string;
}

export const ProgressBar = ({
  height,
  completePercent,
  backgroundColor = 'var(--tertiary-color-5)',
  progressColor = 'var(--primary-color)',
  ariaLabel = 'bar chart',
}: ProgressBarProps) => {
  return (
    <div style={{ backgroundColor: backgroundColor }}>
      <div
        aria-label={ariaLabel}
        style={{
          backgroundColor: progressColor,
          height: `${height}px`,
          width: `${completePercent}%`,
        }}
      ></div>
    </div>
  );
};
