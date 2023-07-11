/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { AtomsIcon2019Close2 } from "../../icons/AtomsIcon2019Close2";
import { AtomsIcon2019Menu1 } from "../../icons/AtomsIcon2019Menu1";
import { AtomsIcon } from "../AtomsIcon";
import { AtomsIconWrapper } from "../AtomsIconWrapper";
import { Divider } from "../Divider";
import { LogoCanvaslogo } from "../LogoCanvaslogo";
import { SearchInput } from "../SearchInput";
import { Tab } from "../Tab";
import "./style.css";
import {Link} from "react-router-dom";

export const GlobalHeader = ({
  type,
  searchInputIcon = <AtomsIcon2019Close2 className="atoms-icon-2019-close-2" />,
  ATOMSIconWrapperGroupClassName,
  ATOMSAvatarDefaultClassName,
  tabVisible,
  tabVisible1,
  tabVisible2,
  tabVisible3,
  tab = "Item Name",
  tabClassName,
  tabVisible4,
  tabVisible5,
  tab1 = "default",
  tab2 = "selected",
  tab3 = "Item Name",
  tabClassNameOverride,
  tab4 = "Item Name",
}) => {
  return (
    <>
    <Link to="/Cbpm-01"><div className="linkTo_HomePage"></div></Link>
    <div className={`global-header type-${type}`}>
      
      {type === "primary" && (
        <div className="frame-3">
          <div className="menu-logo">
            <AtomsIcon2019Menu1 className="ATOMS-ICON-menu" />
            <LogoCanvaslogo className="override-logo" overlapClassName="logo-canvaslogo-instance" />
          </div>
          <div className="global-search-icons">
            <SearchInput
              className="MOLECULES-FORM"
              elementsClassName="instance-node"
              frameClassName="search-input-instance"
              icon={searchInputIcon}
              state="default"
            />
            <AtomsIcon className="ATOMS-ICON-instance" />
            <AtomsIconWrapper className="ATOMS-ICON-instance" groupClassName={ATOMSIconWrapperGroupClassName} />
            <img className="download" alt="Download" src="/img/download.png" />
            <div className={`ATOMS-AVATAR-DEFAULT ${ATOMSAvatarDefaultClassName}`} />
          </div>
        </div>
      )}

      {type === "secondary" && (
        <>
          <Tab
            tabItemsBarStateSelectedClassName={tabClassName}
            tabItemsBarStateSelectedClassNameOverride={tabClassNameOverride}
            tabItemsItemNameWrapperClassName="tab-4"
            tabItemsItemNameWrapperClassNameOverride="tab-4"
            tabItemsState={tab2}
            tabItemsState1={tab1}
            tabItemsTabItemBar23StyleOverrideClassName="tab-instance"
            tabItemsTabItemBar23StyleOverrideClassName1="tab-3"
            tabItemsTabItemBar23StyleOverrideClassName2="tab-5"
            tabItemsTabItemBar23StyleOverrideClassName3="tab-6"
            tabItemsTabItemBar23StyleOverrideClassName4="tab-7"
            tabItemsTabItemBar23StyleOverrideClassName5="tab-8"
            tabItemsTabItemBar23StyleOverrideClassNameOverride="tab-2"
            tabItemsText={tab}
            tabItemsText1={tab4}
            tabItemsText2={tab3}
            tabItemsTypePrimaryStateClassName="tab-4"
            tabItemsTypePrimaryStateClassNameOverride="tab-4"
            tabItemsTypeSecondaryStateClassName="tab-4"
            tabItemsTypeSecondaryStateClassNameOverride="tab-4"
            tabItemsVisible={false}
            type="primary"
            visible={tabVisible4}
            visible1={tabVisible}
            visible2={tabVisible1}
            visible3={tabVisible5}
            visible4={tabVisible3}
            visible5={tabVisible2}
          />
          <Divider className="divider-2" type="one-PX-grey" />
        </>
      )}

      {type === "default" && (
        <>
          <div className="frame-wrapper">
            <div className="frame-3">
              <div className="menu-logo">
                <AtomsIcon2019Menu1 className="ATOMS-ICON-menu" />
                <LogoCanvaslogo className="override-logo" overlapClassName="logo-canvaslogo-instance" />
              </div>
              <div className="global-search-icons">
                <SearchInput
                  className="MOLECULES-FORM"
                  elementsClassName="instance-node"
                  frameClassName="search-input-instance"
                  icon={<AtomsIcon2019Close2 className="atoms-icon-2019-close-2" />}
                  state="default"
                />
                <AtomsIcon className="ATOMS-ICON-instance" />
                <AtomsIconWrapper className="ATOMS-ICON-instance" groupClassName="ATOMS-ICON-chat" />
                <img className="download" alt="Download" src="/img/download.png" />
                <div className="ATOMS-AVATAR-DEFAULT" />
              </div>
            </div>
          </div>
          <div className="div-2">
            <Tab
              tabItemsBarStateSelectedClassName="tab-10"
              tabItemsItemNameWrapperClassName="tab-4"
              tabItemsItemNameWrapperClassNameOverride="tab-4"
              tabItemsState="selected"
              tabItemsState1="default"
              tabItemsTabItemBar23StyleOverrideClassName="tab-9"
              tabItemsTabItemBar23StyleOverrideClassName1="tab-12"
              tabItemsTabItemBar23StyleOverrideClassName2="tab-13"
              tabItemsTabItemBar23StyleOverrideClassName3="tab-14"
              tabItemsTabItemBar23StyleOverrideClassName4="tab-15"
              tabItemsTabItemBar23StyleOverrideClassName5="tab-16"
              tabItemsTabItemBar23StyleOverrideClassNameOverride="tab-11"
              tabItemsText="Item Name"
              tabItemsText1="Item Name"
              tabItemsText2="Item Name"
              tabItemsTypePrimaryStateClassName="tab-4"
              tabItemsTypePrimaryStateClassNameOverride="tab-4"
              tabItemsTypeSecondaryStateClassName="tab-4"
              tabItemsTypeSecondaryStateClassNameOverride="tab-4"
              tabItemsVisible={false}
              type="primary"
            />
            <Divider className="divider-2" type="one-PX-grey" />
            
          </div>
          
        </>
      )}
    </div>
    </>
  );
};

GlobalHeader.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary", "default"]),
  tabVisible: PropTypes.bool,
  tabVisible1: PropTypes.bool,
  tabVisible2: PropTypes.bool,
  tabVisible3: PropTypes.bool,
  tab: PropTypes.string,
  tabVisible4: PropTypes.bool,
  tabVisible5: PropTypes.bool,
  tab1: PropTypes.string,
  tab2: PropTypes.string,
  tab3: PropTypes.string,
  tab4: PropTypes.string,
};
