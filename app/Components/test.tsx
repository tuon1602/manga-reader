
import React from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
 
export function HoverBorderGradientDemo() {
  return (
    <div className=" flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-primary bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <span>Aceternity UI</span>
      </HoverBorderGradient>
    </div>
  );
}
 