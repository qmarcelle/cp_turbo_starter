import { ReactNode, useState } from 'react';
import { IComponent } from '../IComponent';

export interface AccordionTileProps extends IComponent {
  icon?: ReactNode;
  closeIcon?: ReactNode;
  openIcon?: ReactNode;
  label: ReactNode;
  subLabel?: ReactNode;
  child: ReactNode;
  initialOpen: boolean;
  type?: 'normal' | 'card';
}

export const Accordion = ({
  className,
  icon,
  closeIcon,
  openIcon,
  label,
  subLabel,
  child,
  initialOpen,
  type = 'normal',
}: AccordionTileProps) => {
  const [open, setOpen] = useState(initialOpen);

  return (
    <div
      onClick={type == 'card' ? () => setOpen(!open) : undefined}
      className={`flex flex-col ${type == 'card' && 'card-main-elevated p-1 cursor-pointer'} ${className}`}
    >
      <div
        onClick={() => setOpen(!open)}
        className="flex flex-row m-1 accordion-head"
      >
        {icon && <div className="mr-1">{icon}</div>}
        <p className="mr-2 flex-grow">{label}</p>
        {open ? closeIcon : openIcon}
      </div>
      {!open && <div className="mr-2 flex-grow">{subLabel}</div>}
      {open && <div className="m-1">{child}</div>}
      {type == 'normal' && <div className="divider"></div>}
    </div>
  );
};
