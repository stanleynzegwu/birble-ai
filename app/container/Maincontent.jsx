"use client";

import { ScrollReel } from "@/src/components/ScrollReel";
import { WALLET_DETAILS, mainfeatures, plans } from "@/src/constants";
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

      <div className="w-full h-[140px] p-3 flex gap-4 rounded-3xl bg-[#11112C]">
        {mainfeatures.map(({title,description,bgColor,imagePath},index) => (
        <div className={`relative w-full rounded-3xl p-4`} key={index} style={{backgroundColor: bgColor}}>
          <div className="w-full h-full flex flex-col justify-end">
            <h3 className="font-semibold text-lg capitalize">{title}</h3>
            <p className="text-[rgb(255,255,255,0.5)] text-[12px]">{description}</p>
          </div>
          <img src={imagePath} alt="solar" className="absolute top-[-22px] right-[-15px] w-[150px] h-auto"/>
        </div>
        ))}
      </div>

      {/* THIRD */}
      <ScrollReel />

      <div className="rounded-3xl bg-[#11112C] w-full min-h-screen p-3">
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

// {/* SECOND */}
// <div className="w-full flex gap-2 ">
//   <div className="w-full rounded-xl p-2 bg-blue-100">
//     <h3>Business center</h3>
//     <p>Create Business Plans, White Paper and more</p>
//   </div>
//   <div className="w-full rounded-xl p-2 bg-red-200">
//     <h3>Web3</h3>
//     <p>Create Smart Contracts and NTFs</p>
//   </div>
// </div>
