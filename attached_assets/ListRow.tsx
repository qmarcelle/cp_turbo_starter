interface ListRowProps {
  label: JSX.Element;
  icon?: JSX.Element;
  isJustifyBetween?: boolean;
  className?: string;
}

export const ListRow = ({
  label,
  icon,
  isJustifyBetween = true,
  className,
}: ListRowProps) => {
  return (
    <div
      className={`flex flex-row m-2 ${className ?? ''} ${isJustifyBetween ? 'justify-between' : ''}`}
    >
      {label}
      {icon}
    </div>
  );
};
