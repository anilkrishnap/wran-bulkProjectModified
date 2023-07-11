import React from "react";
import { Link } from "react-router-dom";
import { Divider } from "../../components/Divider";
import { GlobalHeader } from "../../components/GlobalHeader";
import { AtomsIcon2019Close2 } from "../../icons/AtomsIcon2019Close2";
import { Click2 } from "../../icons/Click2";
import { IconCtaCaretClose27 } from "../../icons/IconCtaCaretClose27";
import { IconExport } from "../../icons/IconExport";
import "./style.css";

export const Screen6 = () => {
  return (
    <div className="screen-6">
      <div className="CBPM-6">
        <div className="global-header-21">
          <GlobalHeader
            ATOMSAvatarDefaultClassName="global-header-23"
            ATOMSIconWrapperGroupClassName="global-header-22"
            searchInputIcon={<AtomsIcon2019Close2 className="icon-instance-node-6" />}
            type="primary"
          />
          <GlobalHeader
            tab="Home"
            tab2="selected"
            tabClassName="global-header-24"
            tabVisible={false}
            tabVisible1={false}
            tabVisible2={false}
            tabVisible3={false}
            tabVisible4={false}
            tabVisible5={false}
            type="secondary"
          />
        </div>
        <div className="overlap-18">
          <div className="link-widget-10">
            <div className="header-and-divider-2">
              <div className="header-with-icon-2">
                <h1 className="h-1">Network Planning Platform</h1>
                <IconExport className="icon-export-instance" />
              </div>
              <Divider className="divider-49" type="four-PX-black" />
            </div>
            <div className="frame-30">
              <div className="link-2">
                <div className="tree-menu-3">
                  <div className="frame-31">
                    <div className="body-text-link-4">Map View</div>
                    <IconCtaCaretClose27 className="icon-instance-node-6" />
                  </div>
                </div>
                <div className="tree-menu-4">
                  <div className="frame-31">
                    <div className="body-text-link-4">Solution Manager</div>
                    <IconCtaCaretClose27 className="icon-instance-node-6" />
                  </div>
                </div>
                <div className="tree-menu-5">
                  <div className="frame-31">
                    <div className="body-text-link-4">Propose Solution</div>
                    <IconCtaCaretClose27 className="icon-instance-node-6" />
                  </div>
                </div>
                <div className="tree-menu-6">
                  <div className="frame-31">
                    <div className="body-text-link-4">Sector Manager</div>
                    <IconCtaCaretClose27 className="icon-instance-node-6" />
                  </div>
                </div>
                <div className="tree-menu-7">
                  <div className="frame-31">
                    <div className="body-text-link-4">Loremipsum</div>
                    <IconCtaCaretClose27 className="icon-instance-node-6" />
                  </div>
                </div>
              </div>
              <div className="link-2">
                <div className="tree-menu-8">
                  <div className="frame-31">
                    <div className="body-text-link-4">Edit Bulk solutions</div>
                    <IconCtaCaretClose27 className="icon-instance-node-6" />
                  </div>
                </div>
                <Link className="tree-menu-9" to="/cbpm-02">
                  <div className="frame-31">
                    <div className="body-text-link-4">Create Bulk Projects</div>
                    <IconCtaCaretClose27 className="icon-instance-node-6" />
                  </div>
                </Link>
                <div className="tree-menu-10">
                  <div className="frame-31">
                    <div className="body-text-link-5">Create/Upload Bulk Solutions</div>
                    <IconCtaCaretClose27 className="icon-instance-node-6" />
                  </div>
                </div>
                <div className="tree-menu-11" />
              </div>
              <div className="scrollbar-4">
                <div className="scroller-4" />
              </div>
            </div>
          </div>
          <div className="user-interaction-4">
            <div className="group-37">
              <div className="group-38">
                <Click2 className="click-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
