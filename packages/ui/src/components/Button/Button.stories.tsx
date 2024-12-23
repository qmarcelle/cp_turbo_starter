
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Button component that supports multiple variants and states'
      }
    }
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Button text content'
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description: 'Visual style variant of the button'
    },
    disabled: {
      control: 'boolean',
      description: 'Determines if the button is disabled'
    },
    onClick: {
      action: 'clicked'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'primary'
  }
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary'
  }
};

export const Tertiary: Story = {
  args: {
    label: 'Tertiary Button',
    variant: 'tertiary'
  }
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    variant: 'primary',
    disabled: true
  }
};
