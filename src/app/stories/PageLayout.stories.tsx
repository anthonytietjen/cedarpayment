import type { Meta, StoryObj } from "@storybook/react";
import PageLayout from "../components/PageLayout";

const meta = {
  title: "Components/PageLayout",
  component: PageLayout,
} satisfies Meta<typeof PageLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div>Hello World</div>,
  },
};
