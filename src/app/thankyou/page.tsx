"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center pt-[86px] pb-[40px]">
        <div className="w-full max-w-[376px] flex-col">
          <h1
            className="text-[28px] mb-[16px] text-center text-[#13126C] font-georgia font-bold"
          >
            Thank you for your payment!
          </h1>
        </div>
      </div>
    </div>
  );
}
