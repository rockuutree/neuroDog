import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import React from "react";

interface Shape2Props {
  className?: ClassValue;
}

function Shape2({ className = "w-24 h-24" }: Shape2Props): JSX.Element {
  return (
    <svg
      className={cn(className)}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {" "}
      <g clipPath="url(#clip0_227_29)">
        {" "}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M132.136 164.537C122.432 180.711 110.697 188 100 188C89.3026 188 77.5678 180.711 67.8635 164.537C58.3025 148.602 52 125.813 52 100C52 74.1867 58.3025 51.3982 67.8635 35.4633C77.5678 19.2895 89.3026 12 100 12C110.697 12 122.432 19.2895 132.136 35.4633C141.697 51.3982 148 74.1867 148 100C148 125.813 141.697 148.602 132.136 164.537ZM200 100C200 44.7715 155.228 0 100 0C44.7715 0 0 44.7715 0 100C0 155.228 44.7715 200 100 200C155.228 200 200 155.228 200 100ZM12 100C12 135.93 33.5326 166.83 64.3973 180.5C49.5982 162.289 40 133.013 40 100C40 66.9873 49.5982 37.7108 64.3973 19.4995C33.5326 33.1701 12 64.0704 12 100ZM188 100C188 135.93 166.467 166.83 135.603 180.5C150.402 162.289 160 133.013 160 100C160 66.9873 150.402 37.7108 135.603 19.4995C166.467 33.1701 188 64.0704 188 100ZM100 111C106.075 111 111 106.075 111 100C111 93.9249 106.075 89 100 89C93.9249 89 89 93.9249 89 100C89 106.075 93.9249 111 100 111Z"
          fill="url(#paint0_linear_227_29)"
        />{" "}
      </g>{" "}
      <defs>
        {" "}
        <linearGradient
          id="paint0_linear_227_29"
          x1="100"
          y1="0"
          x2="100"
          y2="200"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#B8DBFC" /> <stop offset="1" stopColor="#F8FBFE" />{" "}
        </linearGradient>{" "}
        <clipPath id="clip0_227_29">
          {" "}
          <rect width="200" height="200" fill="white" />{" "}
        </clipPath>{" "}
      </defs>{" "}
    </svg>
  );
}

export default Shape2;
