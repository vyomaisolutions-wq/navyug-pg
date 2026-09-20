import React from "react";
import { cn } from "@/utils/cn";

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
  light?: boolean;
  hideLine?: boolean;
}

export default function Heading({
  title,
  subtitle,
  center = false,
  className,
  light = false,
  hideLine = false,
}: HeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 flex flex-col",
        center ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {subtitle && (
        <span
          className={cn(
            "font-extrabold text-xs sm:text-sm tracking-widest uppercase mb-2 block",
            light ? "text-[#FFF200]" : "text-[#1111E8]"
          )}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl font-black tracking-tight relative inline-block uppercase",
          !hideLine && "pb-4",
          light ? "text-white" : "text-[#20242A]"
        )}
      >
        {title}
        {!hideLine && (
          <span
            className={cn(
              "absolute bottom-0 h-1.5 w-16 rounded-full",
              center ? "left-1/2 -translate-x-1/2" : "left-0",
              "bg-gradient-to-r from-[#1111E8] via-[#08089E] to-[#FFF200]"
            )}
          />
        )}
      </h2>
    </div>
  );
}
