
import { Spacer } from '../../foundation/Spacer';
import { TextBox } from '../../foundation/TextBox';

interface ListOrderProps {
  title: string;
  itemData: string[];
}

export const ListOrder = ({ title, itemData }: ListOrderProps) => {
  return (
    <div>
      <TextBox className="body-1 m-4" text={title}></TextBox>
      <ul className="list-disc m-8 mb-0 marker:text-[#5DC1FD]">
        {itemData.map((item, index) => {
          return (
            <div key={index}>
              <li>{item}</li>
              <Spacer size={8} />
            </div>
          );
        })}
      </ul>
    </div>
  );
};
