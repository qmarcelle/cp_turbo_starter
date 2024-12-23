import Image from 'next/image';
import { useState } from 'react';
import downIcon from '../../../public/assets/down.svg';
import resetIcon from '../../../public/assets/reset.svg';
import {
  FilterDetails,
  FilterItem,
} from '../../models/filter_dropdown_details';
import { IComponent } from '../IComponent';
import { Card } from '../foundation/Card';
import { Column } from '../foundation/Column';
import { Header } from '../foundation/Header';
import { RichDropDown } from '../foundation/RichDropDown';
import { Row } from '../foundation/Row';
import { Spacer } from '../foundation/Spacer';
import { TextBox } from '../foundation/TextBox';
import { Button } from './Button';
import { TextField } from './TextField';

interface FilterProps extends IComponent {
  filterHeading: string;
  filterItems: FilterItem[];
  buttons?: {
    type: 'primary';
    className: string;
    label: string;
    callback: (isClicked: boolean) => void | Promise<void> | null;
  };
}

const FilterTile = ({ user }: { user: FilterDetails }) => {
  return (
    <Column className="border-none flex-grow">
      <TextBox type="body-1" text={`${user.label}`} />
    </Column>
  );
};

const FilterHead = ({ user }: { user: FilterDetails }) => {
  return (
    <div className="body-1 input">
      <Row className="p-1 items-center">
        <FilterTile user={user} />
        <Image
          src={downIcon}
          className="w-[20px] h-[20px] ml-2 items-end"
          alt=""
        />
      </Row>
    </div>
  );
};

export const Filter = ({
  className,
  filterHeading,
  filterItems,
  buttons,
}: FilterProps) => {
  const [reset, resetFilter] = useState(false);
  const [filterItem, setFilterItem] = useState(filterItems);

  const handleReset = () => {
    resetFilter(false);
    setFilterItem(filterItems);
    buttons?.callback(false);
  };

  const handleDropDownUpdate = (value: FilterDetails, index: number) => {
    const dropdDownCopiedVal = JSON.parse(JSON.stringify(filterItem));
    if (dropdDownCopiedVal[index]) {
      dropdDownCopiedVal[index].selectedValue = value;
    }
    setFilterItem(dropdDownCopiedVal);
    resetFilter(true);
  };

  const handleInputUpdate = (value: string, index: number) => {
    const filterList = JSON.parse(JSON.stringify(filterItem));
    if (filterList[index]) {
      filterList[index].value = value;
    }
    setFilterItem(filterList);
    resetFilter(true);
  };

  const handleCallback = () => {
    buttons?.callback(true);
  };

  return (
    <Card className={className}>
      <Column>
        <Header className="title-2" text={filterHeading} />
        <Spacer size={32} />
        {filterItem.slice(0, filterItem.length).map((item, index) => (
          <>
            <Column key={index}>
              {item.type == 'dropdown' ? (
                <div className="body-1">{item.label} </div>
              ) : null}
              <Spacer size={5} />
              {item.type == 'dropdown' ? (
                <div>
                  <RichDropDown<FilterDetails>
                    headBuilder={(val) => <FilterHead user={val} />}
                    itemData={item.value as FilterDetails[]}
                    itemsBuilder={(data, index) => (
                      <FilterTile user={data} key={index} />
                    )}
                    selected={item.selectedValue ?? ({} as FilterDetails)}
                    onSelectItem={(val) => {
                      handleDropDownUpdate(val, index);
                    }}
                  />
                </div>
              ) : null}
              {item.type == 'input' ? (
                <TextField
                  type="text"
                  label={item.label}
                  value={item.value as string}
                  valueCallback={(value) => {
                    handleInputUpdate(value, index);
                  }}
                ></TextField>
              ) : null}
            </Column>
            <Spacer size={16} />
          </>
        ))}
        <Spacer size={16} />
        {reset && (
          <a className="link flex !no-underline" href="#" onClick={handleReset}>
            <Image
              src={resetIcon}
              className="w-[20px] h-[20px] ml-2 mr-2 items-end"
              alt=""
            />
            Reset Filter
          </a>
        )}
        <Spacer size={16} />
        {buttons ? (
          <Button
            className={buttons.className}
            label={buttons.label}
            type={buttons.type}
            callback={() => handleCallback()}
          ></Button>
        ) : null}
      </Column>
    </Card>
  );
};
