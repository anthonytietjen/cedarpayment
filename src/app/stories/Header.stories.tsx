import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Header from "../components/Header";

const meta = {
  title: "Components/Header",
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

// Header component doesn't accept any args
export const Default: Story = {}