import { Column } from '@/components/foundation/Column';
import { Header } from '@/components/foundation/Header';
import { Row } from '@/components/foundation/Row';
import { Spacer } from '@/components/foundation/Spacer';
import { TextBox } from '@/components/foundation/TextBox';
import { IComponent } from '@/components/IComponent';
import { Button } from './Button';
interface ChildAppModalBodyProps extends IComponent {
  label: string;
  subLabel: string;
  primaryButtonLabel?: string;
  secondaryButtonLabel?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  primaryButtonCallback?: () => any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  secondaryButtonCallback?: () => any;
}

export const ChildAppModalBody = ({
  label,
  subLabel,
  primaryButtonLabel,
  secondaryButtonLabel,
  primaryButtonCallback,
  secondaryButtonCallback,
}: ChildAppModalBodyProps) => {
  return (
    <Column className="items-center ml-7">
      <Header type="title-2" text={label} />
      <Spacer size={16} />
      <TextBox text={subLabel} />
      <Spacer size={32} />
      <Row className="w-full">
        <Button
          label={primaryButtonLabel}
          type="primary"
          callback={primaryButtonCallback}
        ></Button>
        <Spacer axis="horizontal" size={24} />
        <Button
          className="font-bold active"
          label={secondaryButtonLabel}
          type="secondary"
          callback={secondaryButtonCallback}
        ></Button>
        <Spacer size={32} />
      </Row>
    </Column>
  );
};
