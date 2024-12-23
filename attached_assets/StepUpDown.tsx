import {
  downGrayIcon,
  downIcon,
  upGrayIcon,
  upIcon,
} from '@/components/foundation/Icons';
import Image from 'next/image';
import { KeyboardEvent, useState } from 'react';
import { IComponent } from '../IComponent';

export interface StepUpDownProps extends IComponent {
  label?: string;
  type?: 'number';
  value: number;
  hint?: string;
  valueCallback?: (value: number) => void;
  onFocusCallback?: () => void;
  maxWidth?: number;
  minValue: number;
  maxValue: number;
}

export const StepUpDown = ({
  label,
  type = 'number',
  value,
  valueCallback,
  onFocusCallback,
  maxWidth,
  minValue,
  maxValue,
  className = '',
}: StepUpDownProps) => {
  const [focus, setFocus] = useState(false);
  const [count, setCount] = useState(value);

  const handleIncrement = () => {
    if (count < maxValue) {
      setCount(count + 1);
      valueCallback?.(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > minValue) {
      setCount(count - 1);
      valueCallback?.(count - 1);
    }
  };

  const onKeydown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key == 'ArrowUp') {
      handleIncrement();
    } else if (event.key === 'ArrowDown') {
      handleDecrement();
    } else {
      event.preventDefault();
    }
  };

  return (
    <div
      style={{ ...(maxWidth && { maxWidth: `${maxWidth}px` }) }}
      className="flex flex-col w-full text-field"
    >
      {label && <p>{label}</p>}
      <div
        className={`flex flex-row items-center input ${className} ${
          focus ? 'input-focus' : ''
        }`}
      >
        <input
          aria-label={label}
          onFocus={() => {
            setFocus(true);
            onFocusCallback?.();
          }}
          type={type}
          onBlur={() => setFocus(false)}
          onKeyDown={(event) => onKeydown(event)}
          value={count}
          min={minValue}
          max={maxValue}
          className="title-1 font-bold"
        />
        <div className="flex flex-col items-center">
          <div onClick={() => handleIncrement()}>
            {' '}
            {count >= maxValue ? (
              <Image alt="Up Icon" src={upGrayIcon} />
            ) : (
              <Image alt="Up Icon" src={upIcon} />
            )}
          </div>
          <div onClick={() => handleDecrement()}>
            {' '}
            {count <= minValue ? (
              <Image alt="Down Icon" src={downGrayIcon} />
            ) : (
              <Image alt="Down Icon" src={downIcon} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
