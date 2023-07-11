/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { AtomsIcon2019Close94 } from "../../icons/AtomsIcon2019Close94";
import { Checkbox } from "../../icons/Checkbox";
import { IconCtaCaretClose19 } from "../../icons/IconCtaCaretClose19";
import { IconCtaCaretClose27 } from "../../icons/IconCtaCaretClose27";
import { IconCtaCaretOpen } from "../../icons/IconCtaCaretOpen";
import { Divider } from "../Divider";
import "./style.css";

export const TreeMenu = ({
  state,
  fontSize,
  collapsible,
  line,
  level,
  className,
  bodyTextLinkClassName,
  bodyTextLinkClassNameOverride,
  text = "Body Text Link",
  icon = <IconCtaCaretClose19 className="instance-node-2" />,
  visible = true,
  hasBodyTextLink = true,
}) => {
  return (
    <div className={`tree-menu ${level} line-${line} ${collapsible} ${state} ${fontSize} ${className}`}>
      {hasBodyTextLink && (
        <div className={`body-text-link ${bodyTextLinkClassName}`}>
          {fontSize === "BODY" && !line && <>{text}</>}

          {state === "normal" && line && (
            <>
              <div className={`body-text-link-2 ${bodyTextLinkClassNameOverride}`}>
                {fontSize === "BODY" && <>{text}</>}

                {fontSize === "h5" && <>H5 Text Link</>}

                {fontSize === "h6" && <>H6 Text Link</>}
              </div>
              {icon}
            </>
          )}

          {state === "radio" && (
            <>
              <div className="radio-button">
                <div className="ellipse" />
              </div>
              <div className="body-text-link-3">{text}</div>
              <div className="checkbox-wrapper">
                <Checkbox className="checkbox-4" color="black" stroke="black" />
              </div>
            </>
          )}

          {fontSize === "h5" && !line && <>H5 Text Link</>}

          {fontSize === "h6" && !line && <>H6 Text Link</>}
        </div>
      )}

      {visible && (
        <>
          <>
            {collapsible === "CLOSED" && fontSize === "BODY" && !line && (
              <IconCtaCaretClose27 className="instance-node-2" />
            )}

            {line && (
              <Divider
                className={`${collapsible === "CLOSED" && fontSize === "BODY" && state === "normal" && "class-3"} ${
                  state === "radio" && "class-4"
                } ${collapsible === "OPEN" && fontSize === "BODY" && "class-5"} ${fontSize === "h5" && "class-6"} ${
                  fontSize === "h6" && "class-7"
                }`}
                type="one-PX-grey"
              />
            )}

            {collapsible === "OPEN" && fontSize === "BODY" && !line && <IconCtaCaretOpen className="instance-node-2" />}

            {!line && collapsible === "CLOSED" && ["h5", "h6"].includes(fontSize) && (
              <IconCtaCaretClose19 className="instance-node-2" />
            )}

            {!line && collapsible === "OPEN" && ["h5", "h6"].includes(fontSize) && (
              <AtomsIcon2019Close94 className="instance-node-2" color="black" />
            )}
          </>
        </>
      )}
    </div>
  );
};

TreeMenu.propTypes = {
  state: PropTypes.oneOf(["focused", "radio", "normal"]),
  fontSize: PropTypes.oneOf(["BODY", "h5", "h6"]),
  collapsible: PropTypes.oneOf(["CLOSED", "OPEN"]),
  line: PropTypes.bool,
  level: PropTypes.oneOf(["two", "one"]),
  text: PropTypes.string,
  visible: PropTypes.bool,
  hasBodyTextLink: PropTypes.bool,
};
