import Image from 'next/image';
import rightIcon from '../../../public/assets/right.svg';

export interface LinkRowProps {
  label: string;
  description?: JSX.Element;
  icon?: JSX.Element;
  divider?: boolean;
  onClick?: () => void | Promise<void>;
}

export const LinkRow = ({
  label,
  description,
  icon = <Image src={rightIcon} alt="link" />,
  divider = false,
  onClick,
}: LinkRowProps) => {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col p-1 ${divider && 'link-row'} cursor-pointer link-row-container`}
    >
      <div className="flex flex-row m-2">
        <p className="link-row-head mr-2" tabIndex={0}>
          {label}
        </p>
        {icon}
      </div>
      {description && <div className="m-2">{description}</div>}
    </div>
  );
};
