import Button from "./Button";

interface Props {
  ccNumberLastFour: string;
  onSubmit: () => void;
  isSubmitting: boolean;
}

export default function BillingConfirmation({
  ccNumberLastFour,
  onSubmit,
  isSubmitting,
}: Props) {
  return (
    <>
      <div>{ccNumberLastFour}</div>

      <div className="mt-6">
        <Button type="submit" disabled={isSubmitting} onClick={onSubmit}>
          Submit
        </Button>
      </div>
    </>
  );
}
