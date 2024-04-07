"use client";

import { useState } from "react";
import { WALLET_DETAILS, plans } from "../constants";

const FirstRow = () => {
  const [selectedPlan, setSelectedPlan] = useState("upgrade");
  return (
    <div className="rounded-xl flex gap-2 h-[220px] w-full">
      <div
        className="rounded-xl p-6 flex flex-col justify-between w-[72.2%] bg-cover"
        style={{
          backgroundImage:
            'url("https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg")',
        }}
      >
        <div className="flex flex-col justify-between">
          <div className="flex flex-col">
            <span className="capitalize font-extrabold text-[32px]">dashboard</span>{" "}
            <span className="tracking-tighter text-[rgb(255,255,255,0.5)]">Mon 22 Jan 2024</span>
          </div>
        </div>
        <div className=" flex justify-between items-center">
          <span className="text-lg">Welcome back , Mima</span>
          <div className="rounded-[25px] flex justify-between items-center p-1 h-[40px] w-[180px] bg-gray-600 capitalize">
            {plans.map((plan, index) => (
              <span
                className={`w-full h-full text-[14px] font-medium flex items-center justify-center cursor-pointer base-transition ${
                  plan === selectedPlan && "bg-white rounded-[25px] text-black"
                }`}
                key={index}
                onClick={() => setSelectedPlan(plan)}
              >
                {plan}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* WALLET */}
      <div
        className="w-[27.8%] h-full rounded-xl p-3 bg-cover"
        style={{
          backgroundImage: 'url("/lazer.png")',
        }}
      >
        <div className="bg-[#232343] p-2 h-full w-full rounded-xl  flex flex-col justify-between">
          <div className="text-sm capitalize">
            <div className="flex justify-between">
              <span>wallet balance</span>
              <img src="/assets/icons/wallet.svg" alt="wallet icon" className="w-[24px] h-[24px]" />
            </div>

            <div className="flex flex-col capitalize">
              <span className="text-lg font-bold">9,758.41</span>
              <span className="text-[12px]">birble AI tokens</span>
            </div>
          </div>

          <div className="flex flex-col gap-1 text-sm">
            <span className="text-[12px] flex justify-end">Remaining</span>
            <div className="p-2 flex flex-col bg-[#373A63] rounded-xl text-sm">
              {WALLET_DETAILS.map(({ assetName, amount }, index) => (
                <div
                  key={index}
                  className="text-[12px] flex justify-between capitalize first:border-b-[.5px] border-gray-100"
                >
                  <span>{assetName}</span>
                  <span>{amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstRow;
