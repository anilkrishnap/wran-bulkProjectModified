/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Divider = ({ type, className }) => {
  return <div className={`divider ${type} ${className}`} />;
};

Divider.propTypes = {
  type: PropTypes.oneOf(["two-PX-black", "one-PX-black", "three-PX-black", "four-PX-black", "one-PX-grey"]),
};
