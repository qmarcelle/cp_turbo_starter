
import type { Meta, StoryObj } from '@storybook/react';
import { ColorDisplay } from './Colors';

const meta = {
  title: 'Design System/Colors',
  component: ColorDisplay,
} satisfies Meta<typeof ColorDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Primary',
    color: '#0072CE',
    description: 'Used for primary buttons and links.',
  },
};

export const DarkBlue: Story = {
  args: {
    title: 'Dark Blue',
    color: '#0056A3',
    description: 'Used for emphasis and headers.',
  },
};

export const LightBlue: Story = {
  args: {
    title: 'Light Blue',
    color: '#E6F2FA',
    description: 'Background for sections and panels.',
  },
};

export const Green: Story = {
  args: {
    title: 'Green',
    color: '#78BE20',
    description: 'Used for success and confirmation messages.',
  },
};

export const Yellow: Story = {
  args: {
    title: 'Yellow',
    color: '#FFC20E',
    description: 'Used for warnings and caution indicators.',
  },
};

export const Red: Story = {
  args: {
    title: 'Red',
    color: '#E4002B',
    description: 'Used for error states and critical alerts.',
  },
};

export const DarkGray: Story = {
  args: {
    title: 'Dark Gray',
    color: '#4D4D4D',
    description: 'Used for primary text.',
  },
};

export const MediumGray: Story = {
  args: {
    title: 'Medium Gray',
    color: '#B3B3B3',
    description: 'Used for UI elements and borders.',
  },
};

export const LightGray: Story = {
  args: {
    title: 'Light Gray',
    color: '#E6E6E6',
    description: 'Used for background elements and cards.',
  },
};

export const White: Story = {
  args: {
    title: 'White',
    color: '#FFFFFF',
    description: 'Default background color.',
  },
};
