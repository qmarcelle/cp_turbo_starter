
import type { StorybookConfig } from "@storybook/react-vite";
import { join, dirname } from "path";

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: ["../../../packages/ui/src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {}
  },
  core: {
    builder: '@storybook/builder-vite'
  },
  viteFinal: async (config) => {
    return {
      ...config,
      define: {
        'process.env': {},
      },
      resolve: {
        alias: {
          react: 'react',
          'react-dom': 'react-dom',
        },
      },
    };
  },
};

export default config;
