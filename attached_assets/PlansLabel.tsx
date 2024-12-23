import { Column } from './Column';

export interface PlansLabelProps {
  label: string;
  color: string;
}

export const PlansLabel = ({ color, label }: PlansLabelProps) => {
  return (
    <Column
      className={`${color} justify-center items-center bg-sky-100 rounded-md`}
    >
      {' '}
      <div className="rounded-md">
        <p className="font-bold w-50 h-50 px-10 py-5 text-lg justify-center items-center">
          {label}
        </p>
      </div>
    </Column>
  );
};
