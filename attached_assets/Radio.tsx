import { ReactElement } from 'react';

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface RadioProps {
  selected: boolean;
  callback?: ((val: any) => void) | null;
  label: string;
  subLabel?: string;
  childBuilder?: (selected: boolean) => ReactElement | undefined;
  value?: any;
}

export const Radio = ({
  selected,
  label,
  childBuilder,
  callback,
  value,
  subLabel,
}: RadioProps) => {
  return (
    <div
      onClick={() => callback?.(value)}
      className={`flex flex-row gap-1 ${callback == null ? 'checkbox-disabled' : ''}`}
    >
      <label>
        <input
          aria-label={label}
          type="radio"
          name=""
          id=""
          checked={selected}
        />
      </label>
      <div className="flex-col m-1">
        <p className={`${subLabel != null ? 'font-bold' : ''}`}>{label}</p>
        {subLabel && <p>{subLabel}</p>}
        {childBuilder && childBuilder(selected)}
      </div>
    </div>
  );
};
