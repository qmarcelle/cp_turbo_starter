
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
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="story-wrapper">
        <Story />
      </div>
    ),
  ],
};

export default preview;
