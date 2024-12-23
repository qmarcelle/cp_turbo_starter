export interface StatusLabelProps {
  status: 'success' | 'neutral' | 'error' | 'empty' | 'partialapproval';
  label: string;
}

export const StatusLabel = ({ status, label }: StatusLabelProps) => {
  return (
    <div
      className={`${status} flex flex-row justify-center items-center px-2 py-1 rounded`}
    >
      <div className="circle rounded-full w-3 h-3 aspect-square" />
      <p className="font-bold ml-2 body-2">{label}</p>
    </div>
  );
};
