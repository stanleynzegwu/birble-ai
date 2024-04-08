"use client";

import { useState } from "react";

const MultiContentSelector = () => {
  const [multiContentSelector, setMultiContentSelector] = useState("images");
  return (
    <div className="w-[85%] flex justify-between">
      {["images", "music", "video", "campaign", "code"].map((item, index) => (
        <button
          key={index}
          className={`capitalize text-[12px] text-[#BDBDBD] px-8 py-[6px] rounded-[25px] base-transition ${
            multiContentSelector == item && "bg-white text-black font-medium"
          }`}
          onClick={() => setMultiContentSelector(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default MultiContentSelector;
