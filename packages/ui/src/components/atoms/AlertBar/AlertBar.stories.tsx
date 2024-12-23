
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AlertBar } from './AlertBar';

const meta = {
  title: 'Atoms/AlertBar',
  component: AlertBar,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AlertBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleAlert: Story = {
  args: {
    alerts: ['This is a single alert message'],
  },
};

export const MultipleAlerts: Story = {
  args: {
    alerts: [
      'First alert message',
      'Second alert message',
      'Third alert message',
    ],
  },
};

export const ErrorAlerts: Story = {
  args: {
    alerts: ['An error has occurred'],
    variant: 'error',
  },
};
