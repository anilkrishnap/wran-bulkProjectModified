/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Checkbox = ({ color = "black", stroke = "black", className }) => {
  return (
    <svg
      className={`checkbox ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect className="rect" fill={color} height="19" width="19" x="0.5" y="0.5" />
      <path
        className="path-25"
        d="M8.62161 11.9517L6.22963 9.41951L5.5 10.1932L8.62161 13.5L14.5 7.27367L13.7704 6.5L8.62161 11.9517Z"
        fill="white"
      />
      <rect className="rect" height="19" stroke={stroke} width="19" x="0.5" y="0.5" />
    </svg>
  );
};

Checkbox.propTypes = {
  color: PropTypes.string,
  stroke: PropTypes.string,
};
