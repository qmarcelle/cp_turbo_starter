
import React from 'react';

interface ColorDisplayProps {
  title: string;
  color: string;
  description: string;
}

export const ColorDisplay: React.FC<ColorDisplayProps> = ({ title, color, description }) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="w-24 h-24 rounded" style={{ backgroundColor: color }} />
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{color}</p>
        <p className="text-sm mt-1">{description}</p>
      </div>
    </div>
  );
};
