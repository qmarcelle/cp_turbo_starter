
import { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
  component: LoginForm,
  title: 'Molecules/LoginForm',
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
  args: {
    onSubmit: (credentials) => console.log('Login:', credentials),
  },
};

export const WithError: Story = {
  args: {
    onSubmit: (credentials) => console.log('Login:', credentials),
    error: 'Invalid credentials',
  },
};

export const Loading: Story = {
  args: {
    onSubmit: (credentials) => console.log('Login:', credentials),
    isLoading: true,
  },
};
