import type { Meta, StoryObj } from "@storybook/react";

import { Accordion } from "./Accordion";
import { useState } from "react";

export default {
  component: Accordion
};

type Story = StoryObj<typeof Accordion>;


export const FirstStory: Story = {
    args: {
        titleValue: "Accordion Title",
        collapsed: false,
        onChange: () => {}
    }
}

export const SecondStory: Story = {

    args: {
        titleValue: "Accordion Title",
        collapsed: true,
        onChange: () => {}
    }
}

export const CollapsedAccordion = () => {
  return (
    <Accordion
      titleValue="Collapsed Accordion"
      collapsed={true}
      onChange={() => {}}
    />
  );
};

export const OpenAccordion = () => {
  let [collapsed, setCollapsed] = useState(false);

  return (
    <Accordion
      titleValue="Open Accordion"
      collapsed={collapsed}
      onChange={() => setCollapsed(!collapsed)}
    />
  );
};
