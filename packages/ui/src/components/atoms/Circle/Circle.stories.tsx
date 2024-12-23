import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Circle } from './Circle';

const meta = {
  title: 'Atoms/Circle',
  component: Circle,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Circle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: '#0072CE',
    width: 50,
    height: 50,
  },
};

export const Small: Story = {
  args: {
    color: '#78BE20',
    width: 24,
    height: 24,
  },
};

export const WithOffset: Story = {
  args: {
    color: '#E4002B',
    width: 40,
    height: 40,
    top: 10,
    right: 10,
  },
};