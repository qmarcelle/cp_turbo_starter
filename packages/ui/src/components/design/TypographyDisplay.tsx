
import React from 'react';

interface TypographyDisplayProps {
  showAllStyles?: boolean;
}

export const TypographyDisplay: React.FC<TypographyDisplayProps> = ({ showAllStyles = true }) => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">Heading 1</h1>
        <p className="text-sm text-gray-500 mt-1">text-4xl font-bold</p>
      </div>
      <div>
        <h2 className="text-3xl font-semibold">Heading 2</h2>
        <p className="text-sm text-gray-500 mt-1">text-3xl font-semibold</p>
      </div>
      <div>
        <h3 className="text-2xl font-medium">Heading 3</h3>
        <p className="text-sm text-gray-500 mt-1">text-2xl font-medium</p>
      </div>
      <div>
        <h4 className="text-xl font-medium">Heading 4</h4>
        <p className="text-sm text-gray-500 mt-1">text-xl font-medium</p>
      </div>
      <div>
        <p className="text-base">Body Text</p>
        <p className="text-sm text-gray-500 mt-1">text-base</p>
      </div>
      <div>
        <p className="text-sm">Small Text</p>
        <p className="text-sm text-gray-500 mt-1">text-sm</p>
      </div>
    </div>
  );
};
