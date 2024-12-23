
import { useState } from 'react';
import { cva } from 'class-variance-authority';

const alertStyles = cva(
  "flex flex-row py-1 px-2 w-full alert-tile items-center",
  {
    variants: {
      variant: {
        default: "bg-blue-100 text-blue-900",
        error: "bg-red-100 text-red-900",
        success: "bg-green-100 text-green-900"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

interface AlertTileProps {
  index: number;
  label: string;
  onClose: (index: number) => void;
}

const AlertTile = ({ index, label, onClose }: AlertTileProps) => (
  <div 
    className={alertStyles()}
    role="alert"
  >
    <span className="mx-1 grow">{label}</span>
    <button
      onClick={() => onClose(index)}
      className="p-1"
      aria-label="Close alert"
    >
      ✕
    </button>
  </div>
);

export interface AlertBarProps {
  alerts: string[];
  variant?: 'default' | 'error' | 'success';
}

export const AlertBar = ({ alerts, variant = 'default' }: AlertBarProps) => {
  const [items, setItems] = useState(alerts);

  const handleClose = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  if (items.length === 0) return null;

  return (
    <div 
      className="flex flex-col gap-2" 
      role="region" 
      aria-label="Notifications"
    >
      {items.map((item, index) => (
        <AlertTile
          key={`${item}-${index}`}
          index={index}
          label={item}
          onClose={handleClose}
        />
      ))}
    </div>
  );
};
