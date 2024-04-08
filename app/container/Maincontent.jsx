"use client";

import MainFeatures from "@/src/components/MainFeatures";
import { ScrollReel } from "@/src/components/ScrollReel";
import { WALLET_DETAILS, plans } from "@/src/constants";
import { useState } from "react";

const MainContent = () => {
  const [selectedPlan, setSelectedPlan] = useState("upgrade");
  return (
    <div className="main-container w-[68.75%] ">
      {/* TOP */}
      <div className="rounded-3xl flex gap-2 h-[220px] w-full">
        <div
          className="rounded-3xl p-6 flex flex-col justify-between w-[72.2%] bg-cover"
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
          className="w-[27.8%] h-full rounded-3xl p-3 bg-cover"
          style={{
            backgroundImage: 'url("/lazer.png")',
          }}
        >
          <div className="bg-[#232343] p-2 h-full w-full rounded-3xl  flex flex-col justify-between">
            <div className="text-sm capitalize">
              <div className="flex justify-between">
                <span>wallet balance</span>
                <img
                  src="/assets/icons/wallet.svg"
                  alt="wallet icon"
                  className="w-[24px] h-[24px]"
                />
              </div>

              <div className="flex flex-col capitalize">
                <span className="text-lg font-bold">9,758.41</span>
                <span className="text-[12px]">birble AI tokens</span>
              </div>
            </div>

            <div className="flex flex-col gap-1 text-sm">
              <span className="text-[12px] flex justify-end">Remaining</span>
              <div className="p-2 flex flex-col bg-[#373A63] rounded-3xl text-sm">
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
      {/* SECOND */}
      <MainFeatures />

      {/* THIRD */}
      <div className="relative w-full h-fit bg-transparent px-3">
        <ScrollReel />
  
      </div>
      <div className="mt-[-170px] rounded-3xl bg-[#11112C] w-full h-fit px-3 pt-[190px] z-10 ">
        <p>Recent Creations</p>
          <p className="h-screen">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus placeat, quasi error iste
            asperiores molestias exercitationem voluptates distinctio odit iure perspiciatis enim
            nostrum eius earum quae, omnis voluptatibus nesciunt delectus!
          </p>

        </div>
    </div>
  );
};

export default MainContent;
