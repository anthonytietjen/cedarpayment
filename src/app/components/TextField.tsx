import { useState } from "react";
import Image from "next/image";

interface Props {
  label: string;
  error: string | false | undefined;
  testId: string;
  touched?: boolean | undefined
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  name: string;
  value?: string;
}

export default function TextField({
  testId,
  label,
  error,
  touched,
  onChange,
  onBlur,
  onFocus,
  name,
  value,
}: Props) {
  const borderClass = error ? "border-[#C34648]" : "border-[#6D7088]";

  return (
    <div className="flex flex-col mb-4" data-testid={testId}>
      <label
        htmlFor={`${testId}-input`}
        className="mb-2 text-sm font-arial font-bold text-gray-700"
        test-id={`${testId}-label`}
      >
        {label}
      </label>

      <div className="relative flex flex-col">
        <input
          id={`${testId}-input`}
          test-id={`${testId}-input`}
          name={name}
          className={`font-arial w-full h-12 p-3 text-base border ${borderClass} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#171731]`}
          type="text"
          aria-label={label}
          aria-invalid={!!error}
          aria-describedby={error ? `${testId}-error` : undefined}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          value={value}
        />

        {touched && !error && (
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
          className="font-arial mt-2 text-sm text-[#C34648] font-siz"
        >
          {error}
        </span>
      )}
    </div>
  );
}
