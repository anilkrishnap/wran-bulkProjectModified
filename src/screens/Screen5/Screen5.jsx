import React from "react";
import { Link } from "react-router-dom";
import { Divider } from "../../components/Divider";
import { GlobalHeader } from "../../components/GlobalHeader";
import { AtomsIcon2019Close2 } from "../../icons/AtomsIcon2019Close2";
import { Click } from "../../icons/Click";
import { IconCtaCaretClose27 } from "../../icons/IconCtaCaretClose27";
import { Line } from "../../icons/Line";
import "./style.css";

export const Screen5 = () => {
  return (
    <div className="screen-5">
      <div className="CBPM-5">
        <div className="overlap-15">
          <div className="template-create-bulk-2">
            <div className="global-header-17">
              <GlobalHeader
                ATOMSAvatarDefaultClassName="global-header-19"
                ATOMSIconWrapperGroupClassName="global-header-18"
                searchInputIcon={<AtomsIcon2019Close2 className="atoms-icon-2019-close-58" />}
                type="primary"
              />
              <GlobalHeader
                tab="Home"
                tab1="selected"
                tab2="default"
                tab3="Create/Upload Bulk Solutions"
                tab4="Solution Manager"
                tabClassNameOverride="global-header-20"
                tabVisible1={false}
                tabVisible2={false}
                tabVisible3={false}
                tabVisible5={false}
                type="secondary"
              />
            </div>
            <div className="local-swimlane-2">
              <div className="swimlane-5">
                <Divider className="divider-46" type="one-PX-black" />
                <div className="names-5">
                  <div className="step-name-11">
                    <div className="step-name-12">Solution Sites</div>
                  </div>
                  <IconCtaCaretClose27 className="icon-cta-caret-close-8" />
                  <div className="step-name-11">
                    <div className="step-name-13">Solution Details</div>
                  </div>
                  <IconCtaCaretClose27 className="icon-cta-caret-close-8" />
                  <div className="step-name-11">
                    <div className="step-name-13">Project Details</div>
                  </div>
                </div>
                <Divider className="divider-47" type="one-PX-black" />
              </div>
            </div>
            <div className="local-CBP-new-build-2">
              <div className="navigation-window-5">
                <div className="overlap-16">
                  <div className="local-select-wrapper">
                    <div className="local-select-2">
                      <div className="heading-7">
                        <div className="placeholder-text-31">Solution&nbsp;&nbsp;Sites</div>
                      </div>
                      <div className="fields-2">
                        <div className="lable-2">
                          <div className="label-37">Solution Type</div>
                        </div>
                        <div className="radio-button-4">
                          <div className="group-34">
                            <div className="overlap-group-9">
                              <div className="ellipse-4" />
                            </div>
                          </div>
                          <div className="placeholder-text-32">New Build</div>
                        </div>
                        <Link className="radio-button-4" to="/cbpm-3">
                          <div className="ellipse-5" />
                          <div className="placeholder-text-33">Modification</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="navigation-action-5">
                    <div className="overlap-17">
                      <Line className="line-7" />
                      <Line className="line-8" />
                      <div className="label-38">Show All</div>
                      <div className="label-39">Show Next</div>
                      <div className="label-40">Save</div>
                    </div>
                  </div>
                </div>
              </div>
              <Divider className="divider-48" type="one-PX-grey" />
            </div>
          </div>
          <div className="user-interaction-3">
            <div className="group-35">
              <div className="group-36">
                <div className="overlap-group-10">
                  <Click className="click-instance" />
                  <div className="text-wrapper-17">CLICK</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
