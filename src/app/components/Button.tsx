interface CustomButtonProps {
  testId?: string;
}

type Props = CustomButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, testId, ...rest }: Props) {
  return (
    <button
      className="w-full h-[48px] px-[40] py-[40] gap-[8px] rounded-[12px] bg-[#3667E9] cursor-pointer text-white focus:outline-none focus:ring-2 focus:ring-blue-700"
      data-testid={testId}
      {...rest}
    >
      <span className="font-arial font-bold text-[16px] leading-[24px] tracking-[0.2px] text-center">
        {children}
      </span>
    </button>
  );
}
