
import React from 'react';
import type { Preview } from "@storybook/react";
import "../../../packages/ui/src/styles/tailwind.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <React.StrictMode>
        <Story />
      </React.StrictMode>
    ),
  ],
};

export default preview;
