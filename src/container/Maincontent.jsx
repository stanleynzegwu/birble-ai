"use client";

import ImagesDisplay from "@/src/components/ImagesDisplay";
import MainFeatures from "@/src/components/MainFeatures";
import MultiContentSelector from "@/src/components/MultiContentSelector";
import { ScrollReel } from "@/src/components/ScrollReel";
import SearchBar from "@/src/components/SearchBar";
import Wallet from "@/src/components/Wallet";
import Dashboard from "@/src/components/Dashboard";

const MainContent = () => {
  return (
    <div className="main-container relative w-[68.75%] pr-4 z-50">
      {/* TOP */}
      <div className="rounded-3xl flex gap-2 h-[220px] w-full z-10">
        <Dashboard />
        <Wallet />
      </div>
      <MainFeatures />
      <ScrollReel />
      <div className="mt-[-170px] rounded-3xl bg-[#11112C] w-full h-fit px-3 pt-[190px] z-10 ">
        <p className="pl-3">Recent Creations</p>
        <div className="rounded-3xl p-3 bg-[rgb(35,35,67,0.8)] my-3 flex flex-col gap-4">
          <SearchBar />
          <MultiContentSelector />
          <ImagesDisplay />
        </div>
      </div>

      {/* Gradient Background */}
      <div className="absolute -z-10 top-[150px] left-0 h-[350px] w-full bg-gradient-to-r from-[#131623] from-10% via-[#1C2570] via-50% to-bottom-transparent to-transparent to-100%" />
    </div>
  );
};

export default MainContent;
