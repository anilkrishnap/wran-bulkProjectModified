/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Path5 } from "../../icons/Path5";
import { Shape2 } from "../../icons/Shape2";
import "./style.css";

export const AtomsIcon = ({ className }) => {
  return (
    <div className={`ATOMS-ICON ${className}`}>
      <div className="ebene-wrapper">
        <div className="ebene">
          <div className="group-2">
            <Shape2 className="shape-2" />
            <Path5 className="path-5" />
          </div>
        </div>
      </div>
    </div>
  );
};
