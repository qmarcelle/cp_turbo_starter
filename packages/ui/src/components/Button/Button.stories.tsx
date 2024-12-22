
import React from 'react';
import { Button } from './Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Button',
    intent: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    intent: 'secondary',
  },
};
