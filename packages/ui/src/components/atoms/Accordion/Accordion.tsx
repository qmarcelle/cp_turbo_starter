
import { ReactNode, useState } from 'react';
import { cva } from 'class-variance-authority';

const accordionStyles = cva(
  "flex flex-col",
  {
    variants: {
      type: {
        normal: "",
        card: "card-main-elevated p-1 cursor-pointer"
      }
    },
    defaultVariants: {
      type: "normal"
    }
  }
);

export interface AccordionProps {
  icon?: ReactNode;
  closeIcon?: ReactNode;
  openIcon?: ReactNode;
  label: ReactNode;
  subLabel?: ReactNode;
  children: ReactNode;
  initialOpen?: boolean;
  type?: 'normal' | 'card';
  className?: string;
}

export const Accordion = ({
  className,
  icon,
  closeIcon,
  openIcon,
  label,
  subLabel,
  children,
  initialOpen = false,
  type = 'normal',
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(initialOpen);

  return (
    <div className={accordionStyles({ type, className })}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-row m-1 accordion-head items-center"
        aria-expanded={isOpen}
        aria-controls="accordion-content"
      >
        {icon && <span className="mr-1" aria-hidden="true">{icon}</span>}
        <span className="mr-2 flex-grow">{label}</span>
        <span aria-hidden="true">{isOpen ? closeIcon : openIcon}</span>
      </button>
      
      {!isOpen && subLabel && (
        <div className="mr-2 flex-grow" role="note">{subLabel}</div>
      )}
      
      {isOpen && (
        <div 
          id="accordion-content"
          className="m-1"
          role="region"
          aria-labelledby="accordion-header"
        >
          {children}
        </div>
      )}
      
      {type === 'normal' && <div className="divider" role="separator" />}
    </div>
  );
};
