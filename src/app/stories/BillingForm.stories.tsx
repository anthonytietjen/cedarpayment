import type { Meta, StoryObj } from "@storybook/react";
import BillingForm from "../components/BillingForm";

const meta = {
  title: "Components/BillingForm",
  component: BillingForm,
} satisfies Meta<typeof BillingForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit(values) {
      console.log(values);
    },
    initialValues: {
      cardNumber: "",
      expires: "",
      cvv: "",
      name: "",
      zip: "",
    },
  },
};
