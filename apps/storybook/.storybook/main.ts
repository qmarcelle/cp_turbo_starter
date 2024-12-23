
import type { StorybookConfig } from "@storybook/react-vite";
import { join, dirname } from "path";

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: ["../../../packages/ui/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  docs: {
    autodocs: true
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
          '@/components': '/packages/ui/src/components'
        },
      },
    };
  },
};

export default config;
