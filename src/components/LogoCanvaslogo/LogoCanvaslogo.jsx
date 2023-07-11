/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Path13 } from "../../icons/Path13";
import { Path28 } from "../../icons/Path28";
import { Path29 } from "../../icons/Path29";
import { Path38 } from "../../icons/Path38";
import { Path6 } from "../../icons/Path6";
import { Shape561 } from "../../icons/Shape561";
import "./style.css";

export const LogoCanvaslogo = ({ className, overlapClassName }) => {
  return (
    <div className={`logo-canvaslogo ${className}`}>
      <div className={`overlap ${overlapClassName}`}>
        <Path6 className="path" />
        <div className="group">
          <Path13 className="path-13" />
          <Shape561 className="shape" />
          <Path38 className="path-38" />
          <div className="overlap-group">
            <Path28 className="path-28" />
            <Shape561 className="shape-561" />
          </div>
          <Path29 className="path-29" />
        </div>
      </div>
    </div>
  );
};
