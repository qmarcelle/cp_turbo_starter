
import { Meta, StoryObj } from '@storybook/react';
import { LoginPage } from './LoginPage';

const meta: Meta<typeof LoginPage> = {
  component: LoginPage,
  title: 'Pages/LoginPage',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof LoginPage>;

export const Default: Story = {
  args: {
    onLogin: (credentials) => console.log('Login:', credentials),
  },
};

export const WithError: Story = {
  args: {
    onLogin: (credentials) => console.log('Login:', credentials),
    error: 'Invalid username or password',
  },
};

export const Loading: Story = {
  args: {
    onLogin: (credentials) => console.log('Login:', credentials),
    isLoading: true,
  },
};
