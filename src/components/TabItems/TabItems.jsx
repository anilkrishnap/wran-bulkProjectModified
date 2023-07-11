/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconClose50 } from "../../icons/IconClose50";
import { TabItemBar23 } from "../../icons/TabItemBar23";
import { Bar } from "../Bar";
import "./style.css";

export const TabItems = ({
  type,
  state,
  barStateSelectedClassName,
  text = "Item Name",
  visible = true,
  className,
  tabItemBar23StyleOverrideClassName,
}) => {
  return (
    <div className={`tab-items ${type} state-1-${state} ${className}`}>
      {type === "primary" && (
        <>
          <div className="frame-4">
            {["hover", "selected"].includes(state) && (
              <Bar className={barStateSelectedClassName} state={state === "hover" ? "hover" : "selected"} />
            )}

            {["default", "disabled", "focus"].includes(state) && (
              <TabItemBar23 className={`${state === "focus" ? "class" : "class-2"}`} />
            )}

            <div className="item-name">{text}</div>
          </div>
          <div className="frame-5">
            <TabItemBar23 className={tabItemBar23StyleOverrideClassName} />
            {visible && <IconClose50 className="icon-close" />}
          </div>
        </>
      )}

      {type === "secondary" && <div className="item-name-2">{text}</div>}

      {type === "secondary" && ["hover", "selected"].includes(state) && (
        <Bar className="bar-instance" state={state === "hover" ? "hover" : "selected"} />
      )}
    </div>
  );
};

TabItems.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary"]),
  state: PropTypes.oneOf(["default", "selected", "focus", "hover", "disabled"]),
  text: PropTypes.string,
  visible: PropTypes.bool,
};
