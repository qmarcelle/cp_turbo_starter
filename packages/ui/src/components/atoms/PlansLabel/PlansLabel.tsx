
import { Column } from '../../../foundation/Column/Column';

export interface PlansLabelProps {
  label: string;
  color: string;
}

export const PlansLabel = ({ color, label }: PlansLabelProps) => {
  return (
    <Column className={`${color} justify-center items-center bg-sky-100 rounded-md`}>
      <div className="rounded-md">{label}</div>
    </Column>
  );
};
