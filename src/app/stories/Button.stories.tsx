import type { Meta, StoryObj } from "@storybook/react";
import Button from "../components/Button";

const meta = {
  title: "Components/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: () => {
      console.log("clicked");
    },
    children: "Hello World",
    testId: "button-helloworld",
  },
};
