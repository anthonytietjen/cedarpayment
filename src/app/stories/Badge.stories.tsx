import type { Meta, StoryObj } from "@storybook/react";
import Badge from "../components/Badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "1",
    testId: "badge-1",
    ariaLabel: "Step 1",
    primary: true,
  },
};

export const Secondary: Story = {
  args: {
    text: "1",
    testId: "badge-1",
    ariaLabel: "Step 1",
    primary: false,
  },
};
