import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import React from "react";

interface Shape3Props {
  className?: ClassValue;
}

function Shape3({ className = "w-24 h-24" }: Shape3Props): JSX.Element {
  return (
    <svg
      className={cn(className)}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {" "}
      <g clipPath="url(#clip0_221_10)">
        {" "}
        <path
          d="M0 0H100C155.228 0 200 44.7715 200 100V200H100C44.7715 200 0 155.228 0 100V0Z"
          fill="url(#paint0_linear_221_10)"
        />{" "}
      </g>{" "}
      <defs>
        {" "}
        <linearGradient
          id="paint0_linear_221_10"
          x1="100"
          y1="0"
          x2="100"
          y2="200"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#A7B5FF" /> <stop offset="1" stopColor="#F3ACFF" />{" "}
        </linearGradient>{" "}
        <clipPath id="clip0_221_10">
          {" "}
          <rect width="200" height="200" fill="white" />{" "}
        </clipPath>{" "}
      </defs>{" "}
    </svg>
  );
}

export default Shape3;
