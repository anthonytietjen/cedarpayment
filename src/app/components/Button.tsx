interface Props {
  handleClick: () => void;
  label: string;
  testId?: string;
}

export default function Button({ handleClick, label, testId }: Props) {
  return (
    <button
      className="w-full h-[48px] px-[40] py-[40] gap-[8px] rounded-[12px] bg-[#3667E9] cursor-pointer"
      data-testid={testId}
      onClick={handleClick}
    >
      <span
        className="font-bold text-[16px] leading-[24px] tracking-[0.2px] text-center"
        style={{ fontFamily: "Arial" }}
      >
        {label}
      </span>
    </button>
  );
}
