
import type { Meta, StoryObj } from '@storybook/react';
import { TypographyDisplay } from './TypographyDisplay';

const meta = {
  title: 'Design System/Typography',
  component: TypographyDisplay,
  parameters: {
    layout: 'padded',
  },
} as Meta<typeof TypographyDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <TypographyDisplay showAllStyles={true} />,
};

Default.storyName = 'Typography Styles';
