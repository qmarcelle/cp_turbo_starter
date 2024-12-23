
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const meta = {
  title: 'Atoms/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Click to expand',
    children: <p>Accordion content goes here</p>,
    initialOpen: false,
  },
};

export const WithIcons: Story = {
  args: {
    label: 'Accordion with icons',
    children: <p>Content with icons</p>,
    openIcon: '+',
    closeIcon: '-',
    initialOpen: true,
  },
};

export const CardStyle: Story = {
  args: {
    label: 'Card Accordion',
    children: <p>Card style content</p>,
    type: 'card',
    initialOpen: false,
  },
};
