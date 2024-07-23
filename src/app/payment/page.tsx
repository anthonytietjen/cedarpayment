"use client";

import { useRouter } from "next/navigation";
import BillingForm, { BillingFormValues } from "../components/BillingForm";
import { useState } from "react";
import BillingConfirmation from "../components/BillingConfirmation";
import { useSubmitPayment } from "../hooks/useSubmitPayment";
import Badge from "../components/Badge";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Home() {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(1);
  const [formValues, setFormValues] = useState<BillingFormValues>({
    cardNumber: "",
    expires: "",
    cvv: "",
    name: "",
    zip: "",
  });

  const { submitPayment, isSubmittingPayment } = useSubmitPayment();

  const handleSubmitBillingForm = (values: BillingFormValues) => {
    setActiveStep(2);
    setFormValues(values);
  };

  const handleSubmitBillingConfirmation = async () => {
    const result = await submitPayment(formValues);

    if (!result.success) {
      // TODO: Handle error
    } else {
      router.push("/thankyou");
    }
  };

  const handleEdit = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    setActiveStep(1);
  };

  const ccNumberLastFour = formValues?.cardNumber.substring(
    formValues?.cardNumber.length - 4
  );

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex-1 w-full md:max-w-[576px] items-center text-sm bg-white rounded-none md:rounded-[32px] md:mt-7">
          <div className="flex flex-col items-center md:p-1">
            <div className="w-full max-w-[376px] flex-col">
              <div
                className="flex items-center h-[81px] gap-4 text-[20px]"
                role="banner"
              >
                <Badge
                  primary
                  text="1"
                  ariaLabel="Step 1"
                  testId="badge-step-1"
                />
                <h2 className="flex-1 font-bold font-arial text-[#171731]">
                  Payment information
                </h2>

                {activeStep === 2 && (
                  <div>
                    <a
                      href=""
                      className="text-[20px] text-[#3667E9] font-bold font-arial"
                      onClick={handleEdit}
                    >
                      Edit
                    </a>
                  </div>
                )}
              </div>

              {activeStep === 1 && (
                <div className="mb-8">
                  <BillingForm
                    onSubmit={handleSubmitBillingForm}
                    initialValues={formValues}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center border-t border-b border-borderGray md:border-b-0">
            <div className="w-full max-w-[376px] flex-col1">
              <div
                className="flex items-center h-[81px] gap-4 text-[20px]"
                role="banner"
              >
                <Badge
                  text="2"
                  ariaLabel="Step 2"
                  testId="badge-step-2"
                  primary={false}
                />
                <h2
                  className={`flex-1 font-bold font-arial ${activeStep === 1 ? "text-gray-400" : "text-gray-700"}`}
                >
                  Review and pay
                </h2>
              </div>

              {activeStep === 2 && (
                <div className="pb-10">
                  <BillingConfirmation
                    onSubmit={handleSubmitBillingConfirmation}
                    ccNumberLastFour={ccNumberLastFour!}
                    isSubmitting={isSubmittingPayment}
                    paymentAmount={600}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {isSubmittingPayment && <LoadingSpinner testId="loading-spinner" />}
    </>
  );
}
