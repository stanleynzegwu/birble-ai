import Image from "next/image";
import { PLANS } from "../constants";
import bgImage from "../../public/mainContentBg.png";
import { useState } from "react";

const Dashboard = () => {
  const [selectedPlan, setSelectedPlan] = useState("upgrade");

  return (
    <div className="relative rounded-3xl p-6 flex flex-col justify-between w-[72.2%]">
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
          {PLANS.map((plan, index) => (
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
  );
};

export default Dashboard;
