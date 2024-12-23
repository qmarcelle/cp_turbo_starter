
import React, { useState } from 'react';

interface ColorDisplayProps {
  title: string;
  color: string;
  description: string;
}

export const ColorDisplay: React.FC<ColorDisplayProps> = ({ title, color, description }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(color);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getContrastColor = (hexColor: string) => {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 128) ? '#000000' : '#FFFFFF';
  };

  const textColor = getContrastColor(color);

  return (
    <div className="flex flex-col gap-4 p-4 rounded-lg border border-gray-200">
      <div 
        className="w-full h-32 rounded-md transition-all cursor-pointer group relative"
        style={{ backgroundColor: color }}
        onClick={copyToClipboard}
      >
        <div 
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ color: textColor }}
        >
          {copied ? 'Copied!' : 'Click to copy'}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex items-center gap-2 mt-1">
          <code className="text-sm bg-gray-100 px-2 py-1 rounded">{color}</code>
          <button 
            onClick={copyToClipboard}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};
