/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { AtomsIcon2019Close4 } from "../../icons/AtomsIcon2019Close4";
import { Divider } from "../Divider";
import "./style.css";

export const SearchInput = ({
  state,
  className,
  frameClassName,
  icon = <AtomsIcon2019Close4 className="atoms-icon-2019-close-4" />,
  elementsClassName,
  frameClassNameOverride,
}) => {
  return (
    <div className={`search-input ${state} ${className}`}>
      {["active", "complete", "default"].includes(state) && (
        <>
          <div className="frame">
            <div className={`placeholder-text-wrapper ${frameClassName}`}>
              <div className="placeholder-text">Search</div>
            </div>
            {icon}
          </div>
          <div className={`elements ${elementsClassName}`} />
        </>
      )}

      {["disabled", "focus"].includes(state) && (
        <div className="div">
          {state === "disabled" && (
            <>
              <div className={`placeholder-text-wrapper ${frameClassNameOverride}`}>
                <div className="text-wrapper">Search</div>
              </div>
              <AtomsIcon2019Close4 className="atoms-icon-2019-close-4" />
            </>
          )}

          {state === "focus" && (
            <div className="elements-2">
              <div className="frame-2">
                <div className="placeholder-text-2">Search</div>
                <AtomsIcon2019Close4 className="atoms-icon-2019-close-4" />
              </div>
              <Divider className="divider-instance" type="one-PX-grey" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

SearchInput.propTypes = {
  state: PropTypes.oneOf(["active", "default", "focus", "complete", "disabled"]),
};
