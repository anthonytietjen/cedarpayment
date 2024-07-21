import { useState } from "react";
import Image from "next/image";

interface Props {
  label: string;
  error: string;
  defaultValue?: string;
  testId: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hasBeenFocusedDefaultValue?: boolean;
}

export default function TextField({
  testId,
  label,
  error,
  defaultValue,
  onChange,
  hasBeenFocusedDefaultValue,
}: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasBeenBlurred, setHasBeenBlurred] = useState(
    hasBeenFocusedDefaultValue
  );

  const handleFocus = () => {
    setIsFocused(true);
    setHasBeenBlurred(false);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setHasBeenBlurred(true);
  };

  const borderClass = error ? "border-[#C34648]" : "border-[#6D7088]";

  return (
    <div className="flex flex-col mb-4" data-testid={testId}>
      <label
        htmlFor={`${testId}-input`}
        className="mb-2 text-sm font-bold text-gray-700"
        style={{ fontFamily: "arial" }}
        test-id={`${testId}-label`}
      >
        {label}
      </label>

      <div className="relative flex flex-col">
        <input
          id={`${testId}-input`}
          test-id={`${testId}-input`}
          className={`w-full h-12 p-3 text-base border ${borderClass} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#171731]`}
          style={{ fontFamily: "arial" }}
          type="text"
          aria-label={label}
          aria-invalid={!!error}
          aria-describedby={error ? `${testId}-error` : undefined}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={onChange}
          defaultValue={defaultValue}
        />

        {hasBeenBlurred && !error && (
          <Image
            src="/assets/images/icon-check.svg"
            alt="Valid field indicator"
            width={24}
            height={24}
            className="absolute right-[16px] top-[11px] text-green-500"
            data-testid={`${testId}-icon-valid`}
          />
        )}

        {error && (
          <Image
            src="/assets/images/icon-error.svg"
            alt="Invalid field indicator"
            width={24}
            height={24}
            className="absolute right-[16px] top-[11px] text-red-500"
            data-testid={`${testId}-icon-valid`}
          />
        )}
      </div>

      {error && (
        <span
          id={`${testId}-error`}
          test-id={`${testId}-error`}
          className="mt-2 text-sm text-[#C34648] font-siz"
        >
          {error}
        </span>
      )}
    </div>
  );
}
