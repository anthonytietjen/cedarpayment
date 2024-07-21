interface Props {
  text: string;
  testId: string;
  ariaLabel: string;
}

export default function Badge({ text, testId, ariaLabel }: Props) {
  return (
    <span
      className="flex items-center justify-center h-[24px] w-[24px] rounded-[12px] bg-[#3667E9] text-white text-sm font-bold"
      style={{ fontFamily: "arial" }}
      data-testid={testId}
      aria-label={ariaLabel}
    >
      {text}
    </span>
  );
}
