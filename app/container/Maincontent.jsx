"use client";

import ImagesDisplay from "@/src/components/ImagesDisplay";
import MainFeatures from "@/src/components/MainFeatures";
import MultiContentSelector from "@/src/components/MultiContentSelector";
import { ScrollReel } from "@/src/components/ScrollReel";
import SearchBar from "@/src/components/SearchBar";
import { WALLET_DETAILS, plans } from "@/src/constants";
import { useState } from "react";
import Image from "next/image";
import bgImage from "../../public/mainContentBg.png";
import walletBgImage from "../../public//lazer.png";

const MainContent = () => {
  const [selectedPlan, setSelectedPlan] = useState("upgrade");

  return (
    <div className="main-container relative w-[68.75%] pr-4 z-50">
      {/* TOP */}
      <div className="rounded-3xl flex gap-2 h-[220px] w-full z-10">
        <div
          className="relative rounded-3xl p-6 flex flex-col justify-between w-[72.2%]"
          // style={{
          //   backgroundImage: 'url("/mainContentBg.png")',
          // }}
        >
          <div className="absolute -z-10 top-0 left-0 w-full h-full rounded-3xl">
            <Image
              src={bgImage}
              alt={"backgound image"}
              placeholder="blur"
              width={1000}
              height={1000}
              className="w-full h-full bg-cover object-cover rounded-3xl"
            />
          </div>
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
          className="relative w-[27.8%] h-full rounded-3xl p-3"
          // style={{
          //   backgroundImage: 'url("/lazer.png")',
          // }}
        >
          <div className="absolute -z-10 top-0 left-0 w-full h-full rounded-3xl ">
            <Image
              src={walletBgImage}
              alt={"backgound image"}
              placeholder="blur"
              width={1000}
              height={1000}
              className="w-full h-full bg-cover object-cover rounded-3xl"
            />
          </div>
          <div className="p-2 2xl:p-6 h-full w-full rounded-3xl flex flex-col justify-between bg-gradient-to-bl from-[#1D2641] to-[#1D2E56]">
            <div className="text-sm capitalize">
              <div className="flex justify-between">
                <span>wallet balance</span>
                <Image
                  src={"/assets/icons/empty-wallet.png"}
                  alt={"walet icon"}
                  width={20}
                  height={20}
                  className="bg-cover object-cover"
                />
              </div>

              <div className="flex flex-col capitalize">
                <span className="text-lg font-bold">9,758.41</span>
                <span className="text-[12px] text-[#A7A7BE] tracking-tighter">
                  birble AI tokens
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-1 text-sm">
              <span className="text-[12px] flex justify-end text-[#A7A7BE]">Remaining</span>
              <div className="relative p-2 flex flex-col bg-[#373A63] rounded-2xl text-sm">
                {WALLET_DETAILS.map(({ assetName, amount }, index) => (
                  <div
                    key={index}
                    className="text-[12px] flex justify-between capitalize"
                  >
                    <span className="text-[#A7A7BE]">{assetName}</span>
                    <span className="">{amount}</span>
                  </div>
                ))}

                {/* ABSOLUTELY POSITIONED LINE */}
                <div className="absolute w-full left-4 top-1/2 transform -translate-y-1/2 bg-[rgb(255,255,255,0.1)] h-[1px]" />
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
        <p className="pl-3">Recent Creations</p>
        <div className="rounded-3xl p-3 bg-[rgb(35,35,67,0.8)] my-3 flex flex-col gap-4">
          <SearchBar />
          <MultiContentSelector />
          <ImagesDisplay />
        </div>
      </div>

      {/* Gradient Background */}
      {/* <div className="firstMainContentGradient absolute -z-10 top-[150px] left-0 h-[350px] w-full" /> */}
      <div className="absolute -z-10 top-[150px] left-0 h-[350px] w-full bg-gradient-to-r from-[#131623] from-10% via-[#1C2570] via-50% to-bottom-transparent to-transparent to-100%" />
    </div>
  );
};

export default MainContent;
