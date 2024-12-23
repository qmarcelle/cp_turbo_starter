
import { IComponent } from '../../../types/IComponent';

export interface ProgressBarProps extends IComponent {
  progress: number;
}

export const ProgressBar = ({ progress, className }: ProgressBarProps) => {
  return (
    <div className={`w-full h-2 bg-gray-200 rounded-full ${className}`}>
      <div 
        className="h-full bg-blue-500 rounded-full transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
