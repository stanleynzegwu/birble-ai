"use client";

import React, { useState } from "react";
import { RIGHTSIBEBAR_NEWS_CONTENT } from "../constants";

const RightSideBarNewsScroll = () => {
  const [currentMessage, setCurrentMessage] = useState({ when: "", messageIndex: -1 }); // Initialize with -1 indicating no message is currently being read

  const isCurrentReadMessage = (when, messageIndex) => {
    return currentMessage.when === when && currentMessage.messageIndex === messageIndex;
  };

  return (
    <div className="overflow-y-auto bg-[rgb(47,47,74,0.6)] p-4 rounded-3xl flex flex-col gap-6 text-[12px] min-h-[330px]">
      {RIGHTSIBEBAR_NEWS_CONTENT.map(({ when, messages }, index) => (
        <div className="flex flex-col gap-2" key={index}>
          <span className="capitalize text-[#ABABAB]">{when}</span>
          <div className="flex flex-col gap-3">
            {messages.map(({ time, details }, messageIndex) => (
              <div
                className="flex gap-4 w-full"
                key={messageIndex}
                onMouseEnter={() => setCurrentMessage({ when, messageIndex })}
                onMouseLeave={() => setCurrentMessage({ when: "", messageIndex: -1 })} // Reset when mouse leaves the message
              >
                <div
                  className={`w-[6px] max-w-[6px] min-w-[6px] rounded-[25px] base-transition ${
                    isCurrentReadMessage(when, messageIndex) ? "bg-white" : "bg-[#6565A2]"
                  }`}
                />
                <div className="flex flex-col gap-2 py-2">
                  <span className="text-[#6565A2]">{time}</span>
                  <p className="capitalize line-clamp-2">{details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RightSideBarNewsScroll;
