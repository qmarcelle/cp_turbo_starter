import { useOutsideClickListener } from '@/utils/hooks/outside_click_listener';
import Image from 'next/image';
import { ReactElement, ReactNode, useRef, useState } from 'react';
import { IComponent } from '../IComponent';
import { Card } from './Card';
import { Column } from './Column';
import { Header } from './Header';
import { checkBlueIcon, switchFilterIcon } from './Icons';
import { Row } from './Row';

interface RichDropDownProps<T> extends IComponent {
  headBuilder: (val: T) => ReactNode;
  dropdownHeader?: ReactElement | null;
  dropdownFooter?: ReactElement;
  itemData: T[];
  itemsBuilder: (data: T, index: number, selected: T) => ReactNode;
  selected: T;
  onSelectItem: (val: T) => void;
  onClickFooter?: () => void;
  maxHeight?: string;
  minWidth?: string;
  showSelected?: boolean;
  divider?: boolean;
}

const DefaultDropDownHead = () => {
  return (
    <Row className="h-[72px] p-4 items-center divider-bottom">
      <Header className="grow" type="title-3" text="Switch to..." />
      <Image alt="switch" className="size-5" src={switchFilterIcon} />
    </Row>
  );
};

export const RichDropDown = <T extends { id: string }>({
  headBuilder,
  dropdownHeader = <DefaultDropDownHead />,
  dropdownFooter,
  itemData,
  itemsBuilder,
  selected,
  onSelectItem,
  maxHeight = 'max-h-[420px]',
  minWidth,
  showSelected = true,
  divider = true,
  onClickFooter,
}: RichDropDownProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const listRef = useRef(null);
  const openDropDown = () => {
    if (itemData.length < 2) {
      return;
    }
    setIsOpen(true);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const selectItem = (val: T) => {
    onSelectItem(val);
    closeDropdown();
  };

  useOutsideClickListener(listRef, () => {
    closeDropdown();
  });

  return (
    <div className="rich-dropdown">
      <Column
        tabIndex={1}
        className={`switch-filter ${itemData.length > 1 ? 'default' : 'disabled'}`}
      >
        <div onClick={openDropDown}>{headBuilder(selected)}</div>
      </Column>

      {isOpen && (
        <Card
          type="elevated"
          tabIndex={1}
          className={`switch-filter absolute-dropdown ${minWidth ?? 'min-w-[100%]'} ${itemData.length > 1 ? 'default' : 'disabled'}`}
        >
          <div ref={listRef}>
            <div onClick={closeDropdown}>{dropdownHeader}</div>
            <ul
              className={`${maxHeight} ${minWidth ?? 'min-w-[100%]'} overflow-auto`}
            >
              {itemData.map((item, index) => {
                const isSelcted = selected.id == item.id && showSelected;
                return (
                  <li key={item.id}>
                    <Row
                      tabIndex={1}
                      className={`p-4 ${divider ? 'divider-bottom' : ''} ${isSelcted ? 'selected' : ''} item`}
                      key={item.id}
                      onClick={() => selectItem(item)}
                    >
                      {isSelcted ? (
                        <div className="size-5 mr-2">
                          <Image
                            alt="selcted"
                            className="size-5"
                            src={checkBlueIcon}
                          />
                        </div>
                      ) : (
                        <div
                          className={showSelected ? 'size-5 mr-2' : ''}
                        ></div>
                      )}
                      {itemsBuilder(item, index, selected)}
                    </Row>
                  </li>
                );
              })}
            </ul>
            <div onClick={() => onClickFooter?.()}>{dropdownFooter}</div>
          </div>
        </Card>
      )}
    </div>
  );
};
