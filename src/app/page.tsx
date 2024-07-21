"use client";

import { useState } from "react";
import Button from "./components/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen items-center">
      <div className="flex flex-col items-center pt-[86px] pb-[40px]">
        <div className="w-full max-w-[376px] flex-col">
          <h1
            className="text-[28px] mb-[16px] text-center text-[#13126C] font-bold"
            style={{ fontFamily: "georgia" }}
          >
            Hi, Taylor
          </h1>

          <p className="text-sm text-center font-sans">
            You have You have 6 medical bills ready from ABC Health System. You
            can pay your bills here or verify your identity to view full bill
            details.
          </p>
        </div>
      </div>

      <div className="flex-1 w-full items-center text-sm bg-white rounded-tl-[32px] rounded-tr-[32px]">
        <div className="flex flex-col items-center p-8">
          <div className="w-full max-w-[376px] flex-col">
            <div className="flex justify-between">
              <div className="text-base font-sans">Total due</div>
              <div className="text-[28px]" style={{ fontFamily: "georgia" }}>
                $600.00
              </div>
            </div>
            <div className="mt-6">
              {/* Could use a <Link /> here instead. Could make a LinkButton component for it to match the Button component style */}
              <Button
                handleClick={() => {
                  router.push("/payment");
                }}
                label="Pay total"
                testId="button-paytotal"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
