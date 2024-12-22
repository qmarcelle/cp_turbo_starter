
import React from 'react';
import { Button } from './Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
};

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
