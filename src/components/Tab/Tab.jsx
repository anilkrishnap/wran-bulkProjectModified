/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { TabItems } from "../TabItems";
import "./style.css";

export const Tab = ({
  type,
  tabItemsText = "Item Name",
  tabItemsVisible,
  tabItemsBarStateSelectedClassName,
  visible = true,
  visible1 = true,
  visible2 = true,
  visible3 = true,
  visible4 = true,
  visible5 = true,
  tabItemsState = "selected",
  tabItemsTypePrimaryStateClassName,
  tabItemsText1 = "Item Name",
  tabItemsState1 = "default",
  tabItemsText2 = "Item Name",
  tabItemsBarStateSelectedClassNameOverride,
  tabItemsTabItemBar23StyleOverrideClassName,
  tabItemsTabItemBar23StyleOverrideClassNameOverride,
  tabItemsTabItemBar23StyleOverrideClassName1,
  tabItemsTypePrimaryStateClassNameOverride,
  tabItemsTabItemBar23StyleOverrideClassName2,
  tabItemsTypeSecondaryStateClassName,
  tabItemsTabItemBar23StyleOverrideClassName3,
  tabItemsTypeSecondaryStateClassNameOverride,
  tabItemsTabItemBar23StyleOverrideClassName4,
  tabItemsItemNameWrapperClassName,
  tabItemsTabItemBar23StyleOverrideClassName5,
  tabItemsItemNameWrapperClassNameOverride,
}) => {
  return (
    <div className="tab">
      <TabItems
        barStateSelectedClassName={tabItemsBarStateSelectedClassName}
        state={tabItemsState}
        tabItemBar23StyleOverrideClassName={tabItemsTabItemBar23StyleOverrideClassName}
        text={tabItemsText}
        type={type === "secondary" ? "secondary" : "primary"}
        visible={tabItemsVisible}
      />
      {visible && (
        <TabItems
          className={tabItemsTypePrimaryStateClassName}
          state="default"
          tabItemBar23StyleOverrideClassName={tabItemsTabItemBar23StyleOverrideClassNameOverride}
          text={tabItemsText1}
          type={type === "secondary" ? "secondary" : "primary"}
        />
      )}

      {visible1 && (
        <TabItems
          barStateSelectedClassName={tabItemsBarStateSelectedClassNameOverride}
          className={tabItemsTypePrimaryStateClassNameOverride}
          state={tabItemsState1}
          tabItemBar23StyleOverrideClassName={tabItemsTabItemBar23StyleOverrideClassName1}
          text={tabItemsText2}
          type={type === "secondary" ? "secondary" : "primary"}
        />
      )}

      {visible2 && (
        <TabItems
          className={tabItemsTypeSecondaryStateClassName}
          state="default"
          tabItemBar23StyleOverrideClassName={tabItemsTabItemBar23StyleOverrideClassName2}
          text="Item Name"
          type={type === "secondary" ? "secondary" : "primary"}
        />
      )}

      {visible3 && (
        <TabItems
          className={tabItemsTypeSecondaryStateClassNameOverride}
          state="default"
          tabItemBar23StyleOverrideClassName={tabItemsTabItemBar23StyleOverrideClassName3}
          text="Item Name"
          type={type === "secondary" ? "secondary" : "primary"}
        />
      )}

      {visible4 && (
        <TabItems
          className={tabItemsItemNameWrapperClassName}
          state="default"
          tabItemBar23StyleOverrideClassName={tabItemsTabItemBar23StyleOverrideClassName4}
          text="Item Name"
          type={type === "secondary" ? "secondary" : "primary"}
        />
      )}

      {visible5 && (
        <TabItems
          className={tabItemsItemNameWrapperClassNameOverride}
          state="default"
          tabItemBar23StyleOverrideClassName={tabItemsTabItemBar23StyleOverrideClassName5}
          text="Item Name"
          type={type === "secondary" ? "secondary" : "primary"}
        />
      )}
    </div>
  );
};

Tab.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary"]),
  tabItemsText: PropTypes.string,
  tabItemsVisible: PropTypes.bool,
  visible: PropTypes.bool,
  visible1: PropTypes.bool,
  visible2: PropTypes.bool,
  visible3: PropTypes.bool,
  visible4: PropTypes.bool,
  visible5: PropTypes.bool,
  tabItemsState: PropTypes.string,
  tabItemsText1: PropTypes.string,
  tabItemsState1: PropTypes.string,
  tabItemsText2: PropTypes.string,
};
