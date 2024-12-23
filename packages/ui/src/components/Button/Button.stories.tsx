
import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Button component provides clickable elements that trigger actions. Available in different variants and sizes to accommodate various use cases throughout the application.'
      }
    }
  },
  argTypes: {
    intent: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Determines the visual style and emphasis of the button'
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Controls the button size - small (sm) or medium (md)'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the button'
    },
    disabled: {
      control: 'boolean',
      description: 'When true, prevents user interaction and applies a disabled style'
    },
    children: {
      control: 'text',
      description: 'The content to be displayed inside the button'
    }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    intent: 'primary',
    size: 'md'
  }
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    intent: 'secondary',
    size: 'md'
  }
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    intent: 'primary',
    size: 'sm'
  }
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    intent: 'primary',
    size: 'md',
    disabled: true
  }
};
