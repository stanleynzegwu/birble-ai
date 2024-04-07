import * as React from "react"
import Image from "next/image"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { HORIZONTALSCROLL_CONTENT } from "../constants"

export const works = [
  {
    artist: "Ornella Binni",
    art: "/Artwork.jpg",
  },
  {
    artist: "Ornella Binni",
    art: "/lazer.png",
  },
  {
    artist: "Ornella Binni",
    art: "/Artwork.jpg",
  },
  {
    artist: "Ornella Binni",
    art: "/Artwork.jpg",
  },
  {
    artist: "Ornella Binni",
    art: "/Artwork.jpg",
  },
  {
    artist: "Ornella Binni",
    art: "/Artwork.jpg",
  },
//   {
//     artist: "Tom Byrom",
//     art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
//   },
//   {
//     artist: "Vladimir Malyavko",
//     art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
//   },
//   {
//     artist: "Vladimir Malyavko",
//     art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
//   },
//   {
//     artist: "Vladimir Malyavko",
//     art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
//   },
]

export function ScrollReel() {
  return (
    <ScrollArea className="w-[100%] border-none whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-6 p-4">
        {HORIZONTALSCROLL_CONTENT.map(({icon,name},index) => (
        //   <figure key={artwork.artist} className="shrink-0 w-[140px] h-[250px] rounded-xl">
        //     <div className="overflow-hidden rounded-xl">
        //       <Image
        //         src={artwork.art}
        //         alt={`Photo by ${artwork.artist}`}
        //         className="aspect-[3/4] h-fit w-fit object-cover rounded-xl"
        //         width={300}
        //         height={400}
        //       />
        //     </div>
        //     <figcaption className="pt-2 text-xs text-muted-foreground">
        //       Photo by{" "}
        //       <span className="font-semibold text-foreground">
        //         {artwork.artist}
        //       </span>
        //     </figcaption>
        //   </figure>
        <div key={index} className="p-6 shrink-0 w-[140px] h-[243px] rounded-3xl bg-[#4646D6] flex flex-col justify-between items-center">
            <img src={icon} alt="icon" className="w-20 h-auto"/>
            <span className="text-sm capitalize text-wrap">{name}</span>
        </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
