import React from "react";
import { Divider } from "../../components/Divider";
import { GlobalHeader } from "../../components/GlobalHeader";
import { AtomsIcon2019Close2 } from "../../icons/AtomsIcon2019Close2";
import { AtomsIcon2019Close578 } from "../../icons/AtomsIcon2019Close578";
import { AtomsIcon2019Close579 } from "../../icons/AtomsIcon2019Close579";
import { AtomsIcon2019Close68 } from "../../icons/AtomsIcon2019Close68";
import { AtomsIcon2019Close702 } from "../../icons/AtomsIcon2019Close702";
import { AtomsIcon2019Close71 } from "../../icons/AtomsIcon2019Close71";
import { AtomsIcon2019Close94 } from "../../icons/AtomsIcon2019Close94";
import { Click7 } from "../../icons/Click7";
import { IconClose50 } from "../../icons/IconClose50";
import { IconCtaCaretClose27 } from "../../icons/IconCtaCaretClose27";
import { IconCtaCaretOpen } from "../../icons/IconCtaCaretOpen";
import { IconInfo3 } from "../../icons/IconInfo3";
import { Line } from "../../icons/Line";
import { Path414 } from "../../icons/Path414";
import { Path415 } from "../../icons/Path415";
import "./style.css";
import {Link} from "react-router-dom";

export const CbpmScreen = () => {
  return (
    <div className="CBPM-screen">
      <div className="overlap-wrapper">
        <div className="overlap-3">
          <div className="overlap-group-wrapper">
            <div className="overlap-3">
              <div className="template-project-wrapper">
                <div className="template-project">
                  <div className="div-4">
                    <GlobalHeader
                      ATOMSAvatarDefaultClassName="global-header-4"
                      ATOMSIconWrapperGroupClassName="atoms-icon-2019-close-wrapper"
                      searchInputIcon={<AtomsIcon2019Close2 className="ATOMS-ICON-2" />}
                      type="primary"
                    />
                    <GlobalHeader
                      tab="Home"
                      tab1="selected"
                      tab2="default"
                      tab3="Create/Upload Bulk Solutions"
                      tab4="Solution Manager"
                      tabClassNameOverride="global-header-5"
                      tabVisible1={false}
                      tabVisible2={false}
                      tabVisible3={false}
                      tabVisible5={false}
                      type="secondary"
                    />
                  </div>
                  <div className="div-5">
                    <div className="swimlane">
                      <Divider className="divider-3" type="one-PX-black" />
                      <div className="names">
                        <div className="step-name">
                          <div className="step-name-2">Solution Sites</div>
                        </div>
                        <IconCtaCaretClose27 className="icon-right" />
                        <div className="step-name">
                          <div className="step-name-3">Solution Details</div>
                        </div>
                        <IconCtaCaretClose27 className="icon-right" />
                        <div className="step-name">
                          <div className="step-name-2">Project Details</div>
                        </div>
                      </div>
                      <Divider className="divider-4" type="one-PX-black" />
                    </div>
                  </div>
                  <div className="div-5">
                    <div className="navigation-window">
                      <div className="overlap-4">
                        <div className="body">
                          <div className="local-solution">
                            <div className="heading">
                              <div className="heading-2">
                                <div className="placeholder-text-4">Project Details</div>
                              </div>
                            </div>
                            <div className="frame-7">
                              <div className="inputs">
                                <div className="label">
                                  <div className="label-2">Solution Type</div>
                                  <div className="required">
                                    <div className="text-wrapper-2">*</div>
                                  </div>
                                </div>
                                <div className="input-fields">
                                  <div className="frame-8">
                                    <div className="placeholder-text-5">New Build</div>
                                    <IconCtaCaretOpen className="ATOMS-ICON-3" />
                                  </div>
                                  <div className="elements-3" />
                                </div>
                              </div>
                              <div className="inputs-2">
                                <div className="label">
                                  <div className="label-2">Requested Year</div>
                                  <div className="required">
                                    <div className="text-wrapper-2">*</div>
                                  </div>
                                </div>
                                <div className="input-fields">
                                  <div className="frame-8">
                                    <div className="placeholder-text-5">2023</div>
                                    <IconCtaCaretOpen className="ATOMS-ICON-3" />
                                  </div>
                                  <div className="elements-4" />
                                </div>
                              </div>
                              <div className="inputs-2">
                                <div className="label">
                                  <div className="label-2">Primary Rationale</div>
                                  <div className="required">
                                    <div className="text-wrapper-2">*</div>
                                  </div>
                                </div>
                                <div className="input-fields">
                                  <div className="frame-8">
                                    <div className="placeholder-text-5">Lorem</div>
                                    <IconClose50 className="ATOMS-ICON-3" />
                                  </div>
                                  <div className="elements-4" />
                                </div>
                              </div>
                              <div className="inputs">
                                <div className="label">
                                  <div className="label-2">Legal Due Date</div>
                                  <div className="required">
                                    <div className="text-wrapper-2">*</div>
                                  </div>
                                </div>
                                <div className="input-fields">
                                  <div className="frame-8">
                                    <div className="placeholder-text-5">14 Feb 2023</div>
                                    <div className="ATOMS-ICON-2">
                                      <div className="group-8">
                                        <div className="ebene-2">
                                          <div className="group-9">
                                            <Path414 className="path-414" />
                                            <Path415 className="path-415" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="elements-3" />
                                </div>
                              </div>
                            </div>
                            <Divider className="divider-5" type="one-PX-grey" />
                            <div className="heading">
                              <div className="heading-2">
                                <div className="placeholder-text-4">Contact Information</div>
                              </div>
                            </div>
                            <div className="input-fields-wrapper">
                              <div className="elements-wrapper">
                                <div className="elements-5">
                                  <div className="frame-8">
                                    <div className="placeholder-text-6">Search for associate enodeb</div>
                                    <div className="ATOMS-ICON-2">
                                      <div className="group-10" />
                                    </div>
                                  </div>
                                  <div className="divider-6" />
                                </div>
                              </div>
                            </div>
                            <div className="frame-9">
                              <div className="table">
                                <div className="div-6">
                                  <div className="inputs-3">
                                    <img
                                      className="icon-cta-caret-close-27"
                                      alt="Accordion margin"
                                      src="/img/accordion-margin.png"
                                    />
                                    <div className="row-data">
                                      <div className="column-header">
                                        <div className="text">
                                          <div className="label-3">Name</div>
                                        </div>
                                      </div>
                                      <div className="column-header">
                                        <div className="text">
                                          <div className="label-3">Company</div>
                                        </div>
                                      </div>
                                      <div className="column-header">
                                        <div className="text">
                                          <div className="label-3">Contact Type</div>
                                        </div>
                                      </div>
                                      <div className="column-header">
                                        <div className="text">
                                          <div className="label-3">Phone</div>
                                        </div>
                                      </div>
                                      <div className="column-header">
                                        <div className="text">
                                          <div className="label-3">Email</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <Divider className="divider-7" type="three-PX-black" />
                                </div>
                                <div className="div-6">
                                  <div className="inputs-3">
                                    <IconCtaCaretClose27 className="icon-cta-caret-close-27" />
                                    <div className="row-data">
                                      <div className="cell-text">
                                        <div className="text-icon">
                                          <div className="label-4">Jason Cham</div>
                                        </div>
                                      </div>
                                      <div className="cell-text">
                                        <div className="text-icon">
                                          <div className="label-4">VERIZON</div>
                                        </div>
                                      </div>
                                      <div className="cell-text-2">
                                        <div className="frame-10">
                                          <div className="frame-11">
                                            <div className="placeholder-text-7">RF</div>
                                          </div>
                                          <AtomsIcon2019Close702 className="ATOMS-ICON-3" />
                                        </div>
                                        <div className="elements-6" />
                                      </div>
                                      <div className="cell-text">
                                        <div className="text-icon">
                                          <div className="label-4">8987654322</div>
                                        </div>
                                      </div>
                                      <div className="cell-text">
                                        <div className="text-icon">
                                          <div className="label-4">josh@verizon.com</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <Divider className="divider-8" type="one-PX-grey" />
                                </div>
                                <div className="div-6">
                                  <div className="inputs-3">
                                    <IconCtaCaretClose27 className="icon-cta-caret-close-27" />
                                    <div className="row-data">
                                      <div className="cell-text">
                                        <div className="text-icon">
                                          <div className="label-4">Jack Hermasson</div>
                                        </div>
                                      </div>
                                      <div className="cell-text">
                                        <div className="text-icon">
                                          <div className="label-4">VERIZON</div>
                                        </div>
                                      </div>
                                      <div className="cell-text-2">
                                        <div className="frame-10">
                                          <div className="frame-11">
                                            <div className="placeholder-text-7">RF</div>
                                          </div>
                                          <AtomsIcon2019Close702 className="ATOMS-ICON-3" />
                                        </div>
                                        <div className="elements-6" />
                                      </div>
                                      <div className="cell-text">
                                        <div className="text-icon">
                                          <div className="label-4">XXXXXXXXXX</div>
                                        </div>
                                      </div>
                                      <div className="cell-text">
                                        <div className="text-icon">
                                          <div className="label-4">abc@verizon.com</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <Divider className="divider-8" type="one-PX-grey" />
                                </div>
                                <div className="div-6">
                                  <div className="inputs-3">
                                    <IconCtaCaretClose27 className="icon-cta-caret-close-27" />
                                    <div className="row-data">
                                      <div className="cell-text">
                                        <div className="text-icon">
                                          <div className="label-4">James</div>
                                        </div>
                                      </div>
                                      <div className="cell-text">
                                        <div className="text-icon">
                                          <div className="label-4">VERIZON</div>
                                        </div>
                                      </div>
                                      <div className="cell-text-2">
                                        <div className="frame-10">
                                          <div className="frame-11">
                                            <div className="placeholder-text-7">RF</div>
                                          </div>
                                          <AtomsIcon2019Close702 className="ATOMS-ICON-3" />
                                        </div>
                                        <div className="elements-6" />
                                      </div>
                                      <div className="cell-text">
                                        <div className="text-icon">
                                          <div className="label-4">XXXXXXXXXX</div>
                                        </div>
                                      </div>
                                      <div className="cell-text">
                                        <div className="text-icon">
                                          <div className="label-4">abc@verizon.com</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <Divider className="divider-8" type="one-PX-grey" />
                                </div>
                                <div className="scroller-wrapper">
                                  <div className="scroller-2" />
                                </div>
                                <div className="pagination">
                                  <div className="div-7">
                                    <div className="div-4">
                                      <div className="input-fields-2">
                                        <div className="elements-7">
                                          <div className="frame-8">
                                            <div className="placeholder-text-8">0</div>
                                            <AtomsIcon2019Close94 className="icon-instance-node-2" color="black" />
                                          </div>
                                          <Divider className="divider-9" type="one-PX-grey" />
                                        </div>
                                      </div>
                                    </div>
                                    <p className="displaying-of">Displaying 2 of 2 Rows</p>
                                  </div>
                                  <div className="page">
                                    <div className="pages">
                                      <div className="arrow">
                                        <AtomsIcon2019Close68 className="icon-instance-node-2" />
                                        <Divider className="divider-10" type="one-PX-grey" />
                                        <AtomsIcon2019Close578 className="icon-instance-node-2" />
                                      </div>
                                      <div className="page-number">
                                        <div className="placeholder-text-9">1</div>
                                      </div>
                                      <div className="page-number-2">
                                        <div className="placeholder-text-10">2</div>
                                      </div>
                                      <div className="arrow">
                                        <AtomsIcon2019Close579 className="icon-instance-node-2" />
                                        <Divider className="divider-10" type="one-PX-grey" />
                                        <AtomsIcon2019Close71 className="icon-instance-node-2" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="div-7">
                                    <div className="input-fields-3">
                                      <div className="page-number-3">
                                        <div className="placeholder-text-11">2</div>
                                      </div>
                                      <Divider className="divider-11" type="one-PX-grey" />
                                    </div>
                                    <div className="text-wrapper-3">/ 20</div>
                                  </div>
                                  <div className="button">
                                    <div className="content">
                                      <div className="text-2">Export</div>
                                    </div>
                                    <div className="dropdown">
                                      <div className="rectangle-2" />
                                      <AtomsIcon2019Close94 className="icon-CTA-caret-open" color="white" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-12" type="one-PX-grey" />
                            </div>
                          </div>
                        </div>
                        <div className="navigation-action">
                          <div className="overlap-group-2">
                            <Line className="line-40" />
                            <Line className="line-instance" />
                            <div className="label-5">Show All</div>
                            <div className="label-6">Show Next</div>
                            <div className="label-7">Save</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overlay" />
            </div>
          </div>
          <div className="frame-12">
            <div className="overlap-5">
              <div className="group-11">
              <Link to="/Cbpm-16">
                <div className="button-2">
                  <div className="content">
                    <div className="text-3">Confirm</div>
                  </div>
                </div>
                </Link>
                <div className="button-3">
                  <div className="content">
                    <div className="text-4">Cancel</div>
                  </div>
                </div>
              </div>
              <div className="group-12">
                <p className="p">Note: 1 invalid solution(s) will be discarded.</p>
                <IconInfo3 className="icon-info" />
              </div>
              <div className="user-interaction-2">
                <div className="group-13">
                  <div className="group-14">
                    <Click7 className="click-7" />
                  </div>
                </div>
              </div>
            </div>
            <div className="group-15">
              <div className="input-fields-4">
                <div className="elements-8">
                  <div className="frame-13">
                    <div className="placeholder-text-12">Submit Valid Projects</div>
                    <IconClose50 className="icon-instance-node-2" />
                  </div>
                </div>
              </div>
              <Divider className="divider-13" type="one-PX-grey" />
            </div>
            <div className="flex-container">
              <div className="text-5">
                <span className="span">Are you sure you want to proceed with 29 valid projects?</span>
            
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
