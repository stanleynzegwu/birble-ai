import * as React from "react";
import Image from "next/image";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { HORIZONTALSCROLL_CONTENT } from "../constants";

export function ScrollReel() {
  return (
    <ScrollArea className="absolute top-0 left-0 w-[100%] border-none whitespace-nowrap rounded-md z-20">
      <div className="flex w-max space-x-6">
        {HORIZONTALSCROLL_CONTENT.map(({ icon, name }, index) => (
          <div
            key={index}
            className="p-6 shrink-0 w-[130px] h-[233px] rounded-3xl bg-[#4646D6] flex flex-col justify-between items-center"
          >
            <img src={icon} alt="icon" className="h-auto w-30" />
            <span className="text-sm capitalize text-wrap">{name}</span>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
