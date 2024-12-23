import Image from 'next/image';
import { useState } from 'react';
import { Column } from '../../foundation/Column';
import { Row } from '../../foundation/Row';
import { Input } from '../../atoms/Input/Input';
import downIcon from '../../../assets/down.svg';
import resetIcon from '../../../assets/reset.svg';

interface FilterProps {
  filterHeading: string;
  filterItems: FilterItem[];
  buttons?: {
    type: 'primary';
    className: string;
    label: string;
    callback: (isClicked: boolean) => void | Promise<void> | null;
  };
  className?: string;
}

interface FilterItem {
  type: 'dropdown' | 'input';
  label: string;
  value: FilterDetails[] | string;
  selectedValue?: FilterDetails;
}

interface FilterDetails {
  label: string;
  value: string;
}

export const Filter = ({
  className,
  filterHeading,
  filterItems,
  buttons,
}: FilterProps) => {
  const [filterItem, setFilterItem] = useState(filterItems);
  const [reset, setReset] = useState(false);

  return (
    <div className={className}>
      <Column>
        <div className="text-xl font-bold">{filterHeading}</div>
        <div style={{ height: 32 }} />
        {filterItem.map((item, index) => (
          <Column key={index}>
            <div className="text-sm font-medium">{item.label}</div>
            <div style={{ height: 8 }} />
            {item.type === 'dropdown' && (
              <div className="relative">
                {/* Dropdown implementation */}
              </div>
            )}
            {item.type === 'input' && (
              <Input
                value={item.value as string}
                onChange={(e) => {
                  const newItems = [...filterItem];
                  newItems[index].value = e.target.value;
                  setFilterItem(newItems);
                  setReset(true);
                }}
              />
            )}
            <div style={{ height: 16 }} />
          </Column>
        ))}
        {buttons && (
          <Row className="justify-between mt-4">
            <Button
              onClick={() => setReset(false)}
              variant="secondary"
              className="flex items-center"
            >
              <Image src={resetIcon} alt="reset" width={16} height={16} />
              <span className="ml-2">Reset</span>
            </Button>
            <Button
              onClick={() => buttons.callback(true)}
              variant="primary"
              className={buttons.className}
            >
              {buttons.label}
            </Button>
          </Row>
        )}
      </Column>
    </div>
  );
};