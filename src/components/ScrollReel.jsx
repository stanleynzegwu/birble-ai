import * as React from "react";
import Image from "next/image";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { HORIZONTALSCROLL_CONTENT } from "../constants";

export function ScrollReel() {
  return (
    <div className="relative w-full h-fit bg-transparent px-3">
      <ScrollArea className="absolute top-0 left-0 w-[100%] border-none whitespace-nowrap rounded-md z-20">
        <div className="flex w-max space-x-4">
          {HORIZONTALSCROLL_CONTENT.map(({ icon, name }, index) => (
            <div
              key={index}
              className="relative p-6 shrink-0 w-[120px] h-[220px] rounded-3xl bg-[#4646D6] flex flex-col justify-between items-center z-10"
            >
              <Image
                src={icon}
                alt="icon"
                width={100}
                height={100}
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <span className="text-sm capitalize text-wrap">{name}</span>

              {/* Light Illumination */}
              <div className="absolute -z-10 top-[45px] left-1/2 transform -translate-x-1/2 h-[25px] w-[25%] rounded-full bg-white opacity-[1] shadow-white" />
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
