import Image from "next/image";
import Button from "./Button";

interface Props {
  ccNumberLastFour: string;
  onSubmit: () => void;
  isSubmitting: boolean;
  paymentAmount: number;
}

export default function BillingConfirmation({
  ccNumberLastFour,
  onSubmit,
  isSubmitting,
  paymentAmount,
}: Props) {
  return (
    <>
      <div className="text-[20px] leading-6">
        You&apos;re about to make a payment of{" "}
        <span className="font-bold">${paymentAmount.toFixed(2)}</span> dollars.
      </div>

      <div className={"mt-6 font-bold text-[#65657B]"}>Payment method</div>

      <div className="flex gap-3 text-[#171731]">
        <Image
          src="/assets/images/icon-card-type-visa.svg"
          alt="VISA Credit Card Logo"
          width={24}
          height={24}
        />
        <span>Card ending in ••••{ccNumberLastFour}</span>
      </div>

      <div className="mt-6">
        <Button type="submit" disabled={isSubmitting} onClick={onSubmit}>
          Submit
        </Button>
      </div>
    </>
  );
}
