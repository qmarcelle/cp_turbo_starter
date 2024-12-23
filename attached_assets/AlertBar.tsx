import Image from 'next/image';
import { useState } from 'react';
import AlertIcon from '../../../public/assets/Alert-White.svg';
import CloseIcon from '../../../public/assets/Close-White.svg';

export interface AlertBarProps {
  alerts: string[];
}

const AlertTile = ({
  index,
  label,
  closeCallback,
}: {
  index: number;
  label: string;
  closeCallback: (index: number) => void;
}) => {
  return (
    <div className="flex flex-row py-1 px-2 w-full alert-tile">
      <div>
        <Image src={AlertIcon} className="icon" alt={'AlertIcon'} />
      </div>
      <p className="mx-1 grow">{label}</p>
      <div onClick={() => closeCallback(index)}>
        <Image src={CloseIcon} className="icon" alt={'CloseIcon'} />
      </div>
    </div>
  );
};

export const AlertBar = ({ alerts }: AlertBarProps) => {
  const [items, setItems] = useState(alerts);

  const closeCallback = (index: number) => {
    items.splice(index, 1);
    setItems([...items]);
  };

  if (items.length == 0) {
    return null;
  }

  if (items.length == 1) {
    return (
      <AlertTile
        key={items[0]}
        index={0}
        label={items[0]}
        closeCallback={closeCallback}
      />
    );
  } else {
    return (
      <div className="flex flex-col self-stretch">
        {items.map((item, index) => {
          if (index != alerts.length - 1) {
            return (
              <div key={index}>
                <AlertTile
                  key={item}
                  index={index}
                  label={item}
                  closeCallback={closeCallback}
                />
                <div className="divider"></div>
              </div>
            );
          } else {
            return (
              <AlertTile
                key={item}
                index={index}
                label={item}
                closeCallback={closeCallback}
              />
            );
          }
        })}
      </div>
    );
  }
};
