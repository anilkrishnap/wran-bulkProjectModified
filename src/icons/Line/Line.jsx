/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Line = ({ className }) => {
  return (
    <svg
      className={`line ${className}`}
      fill="none"
      height="30"
      viewBox="0 0 2 30"
      width="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" opacity="0.542799">
        <path className="path-25" clipRule="evenodd" d="M1 31V1Z" fill="white" fillRule="evenodd" />
        <path
          className="path-25"
          d="M1 31V1"
          stroke="white"
          strokeDasharray="1 1 1"
          strokeLinecap="round"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
};
