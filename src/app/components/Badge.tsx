interface Props {
  text: string;
  testId: string;
  ariaLabel: string;
  primary: boolean;
}

export default function Badge({ text, testId, ariaLabel, primary }: Props) {
  const textColor = primary ? "text-[#FFFFFF]" : "text-[#65657B]";
  const bgColor = primary ? "bg-[#3667E9]" : "bg-[#E7E9EF]";
  
  return (
    <span
      className={`font-arial flex items-center justify-center h-[24px] w-[24px] rounded-[12px] ${bgColor} ${textColor} text-sm font-bold`}
      data-testid={testId}
      aria-label={ariaLabel}
    >
      {text}
    </span>
  );
}
