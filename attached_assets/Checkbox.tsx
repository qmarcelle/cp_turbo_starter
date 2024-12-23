import { ReactNode } from 'react';
import { Column } from './Column';

export interface CheckboxProps {
  selected?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  callback?: (val: any) => void;
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any;
  classProps?: string;
  checkProps?: string;
  body?: ReactNode;
}

export const Checkbox = ({
  label,
  body,
  callback,
  selected,
  classProps,
}: CheckboxProps) => {
  return (
    <div
      className={`flex flex-row gap-2 p-2  ${callback == null ? 'checkbox-disabled' : ''}`}
    >
      <label>
        <input
          type="checkbox"
          name=""
          id="myCheckbox"
          onChange={callback}
          checked={selected}
        />
      </label>
      <Column>
        <label htmlFor="myCheckbox">
          <p className={classProps}>{label}</p>
        </label>
        {body}
      </Column>
    </div>
  );
};
