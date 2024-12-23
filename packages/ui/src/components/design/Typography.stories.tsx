
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TypographyDisplay } from './TypographyDisplay';

const meta = {
  title: 'Design System/Typography',
  component: TypographyDisplay,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof TypographyDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    showAllStyles: true,
  },
};

Default.storyName = 'Typography Styles';
