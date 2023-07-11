/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconCheckmarkAlt } from "../../icons/IconCheckmarkAlt";
import { IconClose50 } from "../../icons/IconClose50";
import { IconInfo } from "../../icons/IconInfo";
import { Path690 } from "../../icons/Path690";
import "./style.css";

export const Alerts = ({
  state,
  className,
  projectClassName,
  text = "Project 23324823948Y83 could not be created",
}) => {
  return (
    <div className={`alerts ${state} ${className}`}>
      {["danger", "notice"].includes(state) && (
        <div className="icon-alert">
          <div className="group-4">
            <div className="group-wrapper">
              <div className="group-5">
                <Path690 className="path-690" />
                <div className="rectangle" />
              </div>
            </div>
          </div>
        </div>
      )}

      {state === "success" && <IconCheckmarkAlt className="instance-node-3" />}

      {["danger", "notice", "success"].includes(state) && (
        <>
          <p className={`project ${projectClassName}`}>{text}</p>
          <IconClose50 className="icon-close-50" />
        </>
      )}

      {state === "informational" && (
        <>
          <IconInfo className="instance-node-3" />
          <p className={`project-y ${projectClassName}`}>{text}</p>
          <IconClose50 className="icon-close-50" />
        </>
      )}
    </div>
  );
};

Alerts.propTypes = {
  state: PropTypes.oneOf(["danger", "success", "notice", "informational"]),
  text: PropTypes.string,
};
