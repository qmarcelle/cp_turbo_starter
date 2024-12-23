
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
  },
};

export const Selected: Story = {
  args: {
    label: 'Newsletter subscription',
    selected: true,
  },
};

export const WithBody: Story = {
  args: {
    label: 'Additional options',
    body: <p className="text-sm text-gray-500">Click to see more settings</p>,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Unavailable option',
    disabled: true,
  },
};
