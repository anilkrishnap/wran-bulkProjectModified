/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconCtaCaretClose27 } from "../../icons/IconCtaCaretClose27";
import { IconExport } from "../../icons/IconExport";
import { Divider } from "../Divider";
import { Scrollbar } from "../Scrollbar";
import { TreeMenu } from "../TreeMenu";
import "./style.css";

export const LinkWidget = ({
  className,
  text = "Placeholder Text",
  treeMenuIcon = <IconCtaCaretClose27 className="icon-CTA-caret-close" />,
  treeMenuText = "Link",
  treeMenuStateNormalFontClassName,
  override = <IconCtaCaretClose27 className="icon-CTA-caret-close" />,
  treeMenuText1 = "Link",
  treeMenuStateNormalFontClassNameOverride,
  treeMenuIcon1 = <IconCtaCaretClose27 className="icon-CTA-caret-close" />,
  treeMenuText2 = "Link",
  treeMenuStateRadioFontClassName,
  treeMenuIcon2 = <IconCtaCaretClose27 className="icon-CTA-caret-close" />,
  treeMenuText3 = "Link",
  treeMenuStateRadioFontClassNameOverride,
  treeMenuIcon3 = <IconCtaCaretClose27 className="icon-CTA-caret-close" />,
  treeMenuText4 = "Link",
  treeMenuStateFocusedFontClassName,
  treeMenuIcon4 = <IconCtaCaretClose27 className="icon-CTA-caret-close" />,
  treeMenuText5 = "Link",
  treeMenuStateFocusedFontClassNameOverride,
  treeMenuIcon5 = <IconCtaCaretClose27 className="icon-CTA-caret-close" />,
  treeMenuText6 = "Link",
  treeMenuDivClassName,
  treeMenuIcon6 = <IconCtaCaretClose27 className="icon-CTA-caret-close" />,
  treeMenuText7 = "Link",
  treeMenuDivClassNameOverride,
  treeMenuBodyTextLinkClassName,
  treeMenuHasBodyTextLink,
  visible = true,
}) => {
  return (
    <div className={`link-widget ${className}`}>
      <div className="header-and-divider">
        <div className="header-with-icon">
          <div className="placeholder-text-3">{text}</div>
          <IconExport className="icon-export" />
        </div>
        <Divider className="design-component-instance-node" type="four-PX-black" />
      </div>
      <div className="frame-6">
        <div className="link">
          <TreeMenu
            bodyTextLinkClassName="tree-menu-instance"
            bodyTextLinkClassNameOverride="tree-menu-2"
            className={treeMenuStateNormalFontClassName}
            collapsible="CLOSED"
            fontSize="BODY"
            icon={treeMenuIcon}
            level="one"
            line
            state="normal"
            text={treeMenuText}
            visible={false}
          />
          <TreeMenu
            bodyTextLinkClassName="tree-menu-instance"
            bodyTextLinkClassNameOverride="tree-menu-2"
            className={treeMenuStateNormalFontClassNameOverride}
            collapsible="CLOSED"
            fontSize="BODY"
            icon={override}
            level="one"
            line
            state="normal"
            text={treeMenuText1}
            visible={false}
          />
          <TreeMenu
            bodyTextLinkClassName="tree-menu-instance"
            bodyTextLinkClassNameOverride="tree-menu-2"
            className={treeMenuStateRadioFontClassName}
            collapsible="CLOSED"
            fontSize="BODY"
            icon={treeMenuIcon1}
            level="one"
            line
            state="normal"
            text={treeMenuText2}
            visible={false}
          />
          <TreeMenu
            bodyTextLinkClassName="tree-menu-instance"
            bodyTextLinkClassNameOverride="tree-menu-2"
            className={treeMenuStateRadioFontClassNameOverride}
            collapsible="CLOSED"
            fontSize="BODY"
            icon={treeMenuIcon2}
            level="one"
            line
            state="normal"
            text={treeMenuText3}
            visible={false}
          />
          <TreeMenu
            bodyTextLinkClassName="tree-menu-instance"
            bodyTextLinkClassNameOverride="tree-menu-2"
            className={treeMenuStateFocusedFontClassName}
            collapsible="CLOSED"
            fontSize="BODY"
            icon={treeMenuIcon3}
            level="one"
            line
            state="normal"
            text={treeMenuText4}
            visible={false}
          />
        </div>
        <div className="link">
          <TreeMenu
            bodyTextLinkClassName="tree-menu-instance"
            bodyTextLinkClassNameOverride="tree-menu-2"
            className={treeMenuStateFocusedFontClassNameOverride}
            collapsible="CLOSED"
            fontSize="BODY"
            icon={treeMenuIcon4}
            level="one"
            line
            state="normal"
            text={treeMenuText5}
            visible={false}
          />
          <TreeMenu
            bodyTextLinkClassName="tree-menu-instance"
            bodyTextLinkClassNameOverride="tree-menu-2"
            className={treeMenuDivClassName}
            collapsible="CLOSED"
            fontSize="BODY"
            icon={treeMenuIcon5}
            level="one"
            line
            state="normal"
            text={treeMenuText6}
            visible={false}
          />
          <TreeMenu
            bodyTextLinkClassName="tree-menu-instance"
            bodyTextLinkClassNameOverride={treeMenuBodyTextLinkClassName}
            className={treeMenuDivClassNameOverride}
            collapsible="CLOSED"
            fontSize="BODY"
            icon={treeMenuIcon6}
            level="one"
            line
            state="normal"
            text={treeMenuText7}
            visible={false}
          />
          <TreeMenu
            bodyTextLinkClassName="tree-menu-instance"
            bodyTextLinkClassNameOverride="tree-menu-2"
            className="icon-CTA-caret-close-wrapper"
            collapsible="CLOSED"
            fontSize="BODY"
            hasBodyTextLink={treeMenuHasBodyTextLink}
            icon={<IconCtaCaretClose27 className="icon-CTA-caret-close" />}
            level="one"
            line
            state="normal"
            text="Link"
            visible={false}
          />
          {visible && (
            <TreeMenu
              bodyTextLinkClassName="tree-menu-instance"
              bodyTextLinkClassNameOverride="tree-menu-2"
              className="icon-CTA-caret-close-wrapper"
              collapsible="CLOSED"
              fontSize="BODY"
              icon={<IconCtaCaretClose27 className="icon-CTA-caret-close" />}
              level="one"
              line
              state="normal"
              text="Link"
              visible={false}
            />
          )}
        </div>
        <Scrollbar alignment="vertical" className="scrollbar-instance" />
      </div>
    </div>
  );
};

LinkWidget.propTypes = {
  text: PropTypes.string,
  treeMenuText: PropTypes.string,
  treeMenuText1: PropTypes.string,
  treeMenuText2: PropTypes.string,
  treeMenuText3: PropTypes.string,
  treeMenuText4: PropTypes.string,
  treeMenuText5: PropTypes.string,
  treeMenuText6: PropTypes.string,
  treeMenuText7: PropTypes.string,
  treeMenuHasBodyTextLink: PropTypes.bool,
  visible: PropTypes.bool,
};
