import { useState } from "react";

export function useSubmitPayment() {
  const [loading, setLoading] = useState(false);

  const submitPayment = async () => {
    setLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setLoading(false);

    return { success: true };
  };

  return { submitPayment, isSubmittingPayment: loading };
}
