import type { Meta, StoryObj } from "@storybook/react";
import TextField from "../components/TextField";

const meta = {
  title: "Components/TextField",
  component: TextField,
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    error: "",
    label: "Hello World",
    testId: "button-helloworld",
    defaultValue: "",
  },
};

export const ValidState: Story = {
  args: {
    error: "",
    label: "Hello World",
    testId: "button-helloworld",
    hasBeenFocusedDefaultValue: true,
    defaultValue: "Valid text entered",
  },
};

export const ErrorState: Story = {
  args: {
    error: "Error message here",
    label: "Hello World",
    testId: "button-helloworld",
    defaultValue: "Invalid text entered",
  },
};
