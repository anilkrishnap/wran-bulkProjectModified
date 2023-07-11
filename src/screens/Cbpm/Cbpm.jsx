import React from "react";
import { Alerts } from "../../components/Alerts";
import { GlobalHeader } from "../../components/GlobalHeader";
import { LinkWidget } from "../../components/LinkWidget";
import { AtomsIcon2019Close2 } from "../../icons/AtomsIcon2019Close2";
import { Click9 } from "../../icons/Click9";
import { IconCtaCaretClose27 } from "../../icons/IconCtaCaretClose27";
import "./style.css";
import {Link} from "react-router-dom";

export const Cbpm = () => {
  return (
    <div className="CBPM">
      <Link to="/Cbpm-02"><div className="linkTo_homePage"></div></Link>
      <div className="div-3">
        <div className="global-header-2">
          <GlobalHeader
            ATOMSAvatarDefaultClassName="atoms-icon-2019-close-2-wrapper"
            ATOMSIconWrapperGroupClassName="global-header-instance"
            searchInputIcon={<AtomsIcon2019Close2 className="icon-instance-node" />}
            type="primary"
          />
          <GlobalHeader
            tab="Home"
            tabClassName="global-header-3"
            tabVisible={false}
            tabVisible1={false}
            tabVisible2={false}
            tabVisible3={false}
            tabVisible4={false}
            tabVisible5={false}
            type="secondary"
          />
        </div>
        <div className="overlap-2">
          <LinkWidget
            className="link-widget-instance"
            override={<IconCtaCaretClose27 className="icon-instance-node" />}
            text="Network Planning Platform"
            treeMenuBodyTextLinkClassName="design-component-instance-node-2"
            treeMenuDivClassName="link-widget-8"
            treeMenuDivClassNameOverride="link-widget-9"
            treeMenuHasBodyTextLink={false}
            treeMenuIcon={<IconCtaCaretClose27 className="icon-instance-node" />}
            treeMenuIcon1={<IconCtaCaretClose27 className="icon-instance-node" />}
            treeMenuIcon2={<IconCtaCaretClose27 className="icon-instance-node" />}
            treeMenuIcon3={<IconCtaCaretClose27 className="icon-instance-node" />}
            treeMenuIcon4={<IconCtaCaretClose27 className="icon-instance-node" />}
            treeMenuIcon5={<IconCtaCaretClose27 className="icon-instance-node" />}
            treeMenuIcon6={<IconCtaCaretClose27 className="icon-instance-node" />}
            treeMenuStateFocusedFontClassName="link-widget-6"
            treeMenuStateFocusedFontClassNameOverride="link-widget-7"
            treeMenuStateNormalFontClassName="link-widget-2"
            treeMenuStateNormalFontClassNameOverride="link-widget-3"
            treeMenuStateRadioFontClassName="link-widget-4"
            treeMenuStateRadioFontClassNameOverride="link-widget-5"
            treeMenuText="Map View"
            treeMenuText1="Solution Manager"
            treeMenuText2="Propose Solution"
            treeMenuText3="Sector Manager"
            treeMenuText4="Loremipsum"
            treeMenuText5="Edit Bulk solutions"
            treeMenuText6="Create Bulk Projects"
            treeMenuText7="Create/Upload Bulk Solutions"
            visible={false}
          />
          <div className="user-interaction">
            <div className="group-6">
              <div className="group-7">
                <Click9 className="click-9" />
              </div>
            </div>
          </div>
          <Alerts
            className="alerts-instance"
            projectClassName="design-component-instance-node-2"
            state="informational"
            text="All the valid projects are being added to the system, you will be notified once done."
          />
        </div>
        
      </div>
      
    </div>
    
  );
};
