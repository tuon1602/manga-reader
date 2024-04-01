import React from "react";
import { HoverBorderGradientDemo } from "./test";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const GridBox = () => {
    const gridItems = [
        {
            className: "rounded-md bg-primary col-span-2 row-[span_15_/_span_15]",
        },
        {
            className: "rounded-md bg-primary col-span-1 row-span-5",
        },
        {
            className: "rounded-md bg-primary col-span-1 row-span-5",
        },
        {
          className: "rounded-md bg-primary col-span-2 row-span-10",
        },
        {
          className: "rounded-md bg-primary col-span-1 row-[span_16_/_span_16]",
        },
        {
          className: "rounded-md bg-primary col-span-1 row-[span_16_/_span_16]",
        },
        {
          className: "rounded-md bg-primary col-span-1 row-[span_25/_span_25]"
        }
    ]
  return (
    <section className="flex py-10 px-20">
      <div className="grid grid-cols-4 gap-4 w-full h-full ">
        {gridItems.map((gridItem,index)=>(
            <div className={`${gridItem.className}`}>
                wtf
            </div>
        ))}
      </div>
    </section>
  );
};

export default GridBox;
