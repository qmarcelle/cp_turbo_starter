
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../../../packages/ui/src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  core: {
    builder: '@storybook/builder-vite'
  },
  viteFinal: async (config) => {
    return {
      ...config,
      define: {
        ...config.define,
        'process.env': {},
      },
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          'react': 'react',
          'react-dom': 'react-dom'
        },
      },
    };
  },
};

export default config;
