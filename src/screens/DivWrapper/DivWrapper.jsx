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
import { Click6 } from "../../icons/Click6";
import { IconClose50 } from "../../icons/IconClose50";
import { IconCtaCaretClose27 } from "../../icons/IconCtaCaretClose27";
import { IconCtaCaretOpen } from "../../icons/IconCtaCaretOpen";
import { Line } from "../../icons/Line";
import { Path414 } from "../../icons/Path414";
import { Path415 } from "../../icons/Path415";
import "./style.css";
import {Link} from "react-router-dom";

export const DivWrapper = () => {
  return (
    <div className="div-wrapper">
      <div className="CBPM-2">
        <div className="overlap-6">
          <div className="template-project-2">
            <div className="div-8">
              <GlobalHeader
                ATOMSAvatarDefaultClassName="global-header-7"
                ATOMSIconWrapperGroupClassName="global-header-6"
                searchInputIcon={<AtomsIcon2019Close2 className="ATOMS-ICON-4" />}
                type="primary"
              />
              <GlobalHeader
                tab="Home"
                tab1="selected"
                tab2="default"
                tab3="Create/Upload Bulk Solutions"
                tab4="Solution Manager"
                tabClassNameOverride="global-header-8"
                tabVisible1={false}
                tabVisible2={false}
                tabVisible3={false}
                tabVisible5={false}
                type="secondary"
              />
            </div>
            <div className="div-9">
              <div className="swimlane-2">
                <Divider className="divider-14" type="one-PX-black" />
                <div className="names-2">
                  <div className="step-name-wrapper">
                    <div className="step-name-4">Solution Sites</div>
                  </div>
                  <IconCtaCaretClose27 className="icon-right-directional-arrow" />
                  <div className="step-name-wrapper">
                    <div className="step-name-5">Solution Details</div>
                  </div>
                  <IconCtaCaretClose27 className="icon-right-directional-arrow" />
                  <div className="step-name-wrapper">
                    <div className="step-name-4">Project Details</div>
                  </div>
                </div>
                <Divider className="divider-15" type="one-PX-black" />
              </div>
            </div>
            <div className="div-9">
              <div className="navigation-window-2">
                <div className="overlap-7">
                  <div className="local-solution-wrapper">
                    <div className="local-solution-2">
                      <div className="heading-wrapper">
                        <div className="heading-3">
                          <div className="placeholder-text-13">Project Details</div>
                        </div>
                      </div>
                      <div className="frame-14">
                        <div className="inputs-4">
                          <div className="label-8">
                            <div className="label-9">Solution Type</div>
                            <div className="required-2">
                              <div className="text-wrapper-5">*</div>
                            </div>
                          </div>
                          <div className="input-fields-5">
                            <div className="frame-15">
                              <div className="placeholder-text-14">New Build</div>
                              <IconCtaCaretOpen className="ATOMS-ICON-5" />
                            </div>
                            <div className="elements-9" />
                          </div>
                        </div>
                        <div className="inputs-5">
                          <div className="label-8">
                            <div className="label-9">Requested Year</div>
                            <div className="required-2">
                              <div className="text-wrapper-5">*</div>
                            </div>
                          </div>
                          <div className="input-fields-5">
                            <div className="frame-15">
                              <div className="placeholder-text-14">2023</div>
                              <IconCtaCaretOpen className="ATOMS-ICON-5" />
                            </div>
                            <div className="elements-10" />
                          </div>
                        </div>
                        <div className="inputs-5">
                          <div className="label-8">
                            <div className="label-9">Primary Rationale</div>
                            <div className="required-2">
                              <div className="text-wrapper-5">*</div>
                            </div>
                          </div>
                          <div className="input-fields-5">
                            <div className="frame-15">
                              <div className="placeholder-text-14">Lorem</div>
                              <IconClose50 className="ATOMS-ICON-5" />
                            </div>
                            <div className="elements-10" />
                          </div>
                        </div>
                        <div className="inputs-4">
                          <div className="label-8">
                            <div className="label-9">Legal Due Date</div>
                            <div className="required-2">
                              <div className="text-wrapper-5">*</div>
                            </div>
                          </div>
                          <div className="input-fields-5">
                            <div className="frame-15">
                              <div className="placeholder-text-14">14 Feb 2023</div>
                              <div className="ATOMS-ICON-4">
                                <div className="group-16">
                                  <div className="ebene-3">
                                    <div className="group-17">
                                      <Path414 className="path-414-instance" />
                                      <Path415 className="path-415-instance" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="elements-9" />
                          </div>
                        </div>
                      </div>
                      <Divider className="divider-16" type="one-PX-grey" />
                      <div className="heading-wrapper">
                        <div className="heading-3">
                          <div className="placeholder-text-13">Contact Information</div>
                        </div>
                      </div>
                      <div className="frame-16">
                        <div className="input-fields-6">
                          <div className="elements-11">
                            <div className="frame-15">
                              <div className="placeholder-text-15">Search for associate enodeb</div>
                              <div className="ATOMS-ICON-4">
                                <div className="group-18" />
                              </div>
                            </div>
                            <div className="divider-17" />
                          </div>
                        </div>
                      </div>
                      <div className="frame-17">
                        <div className="table-2">
                          <div className="div-10">
                            <div className="inputs-6">
                              <img
                                className="icon-cta-caret-close"
                                alt="Accordion margin"
                                src="/img/accordion-margin.png"
                              />
                              <div className="row-data-2">
                                <div className="column-header-2">
                                  <div className="label-wrapper">
                                    <div className="label-10">Name</div>
                                  </div>
                                </div>
                                <div className="column-header-2">
                                  <div className="label-wrapper">
                                    <div className="label-10">Company</div>
                                  </div>
                                </div>
                                <div className="column-header-2">
                                  <div className="label-wrapper">
                                    <div className="label-10">Contact Type</div>
                                  </div>
                                </div>
                                <div className="column-header-2">
                                  <div className="label-wrapper">
                                    <div className="label-10">Phone</div>
                                  </div>
                                </div>
                                <div className="column-header-2">
                                  <div className="label-wrapper">
                                    <div className="label-10">Email</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Divider className="divider-18" type="three-PX-black" />
                          </div>
                          <div className="div-10">
                            <div className="inputs-6">
                              <IconCtaCaretClose27 className="icon-cta-caret-close" />
                              <div className="row-data-2">
                                <div className="cell-text-3">
                                  <div className="text-icon-2">
                                    <div className="label-11">Jason Cham</div>
                                  </div>
                                </div>
                                <div className="cell-text-3">
                                  <div className="text-icon-2">
                                    <div className="label-11">VERIZON</div>
                                  </div>
                                </div>
                                <div className="cell-text-4">
                                  <div className="frame-18">
                                    <div className="frame-19">
                                      <div className="placeholder-text-16">RF</div>
                                    </div>
                                    <AtomsIcon2019Close702 className="ATOMS-ICON-5" />
                                  </div>
                                  <div className="elements-12" />
                                </div>
                                <div className="cell-text-3">
                                  <div className="text-icon-2">
                                    <div className="label-11">8987654322</div>
                                  </div>
                                </div>
                                <div className="cell-text-3">
                                  <div className="text-icon-2">
                                    <div className="label-11">josh@verizon.com</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Divider className="divider-19" type="one-PX-grey" />
                          </div>
                          <div className="div-10">
                            <div className="inputs-6">
                              <IconCtaCaretClose27 className="icon-cta-caret-close" />
                              <div className="row-data-2">
                                <div className="cell-text-3">
                                  <div className="text-icon-2">
                                    <div className="label-11">Jack Hermasson</div>
                                  </div>
                                </div>
                                <div className="cell-text-3">
                                  <div className="text-icon-2">
                                    <div className="label-11">VERIZON</div>
                                  </div>
                                </div>
                                <div className="cell-text-4">
                                  <div className="frame-18">
                                    <div className="frame-19">
                                      <div className="placeholder-text-16">RF</div>
                                    </div>
                                    <AtomsIcon2019Close702 className="ATOMS-ICON-5" />
                                  </div>
                                  <div className="elements-12" />
                                </div>
                                <div className="cell-text-3">
                                  <div className="text-icon-2">
                                    <div className="label-11">XXXXXXXXXX</div>
                                  </div>
                                </div>
                                <div className="cell-text-3">
                                  <div className="text-icon-2">
                                    <div className="label-11">abc@verizon.com</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Divider className="divider-19" type="one-PX-grey" />
                          </div>
                          <div className="div-10">
                            <div className="inputs-6">
                              <IconCtaCaretClose27 className="icon-cta-caret-close" />
                              <div className="row-data-2">
                                <div className="cell-text-3">
                                  <div className="text-icon-2">
                                    <div className="label-11">James</div>
                                  </div>
                                </div>
                                <div className="cell-text-3">
                                  <div className="text-icon-2">
                                    <div className="label-11">VERIZON</div>
                                  </div>
                                </div>
                                <div className="cell-text-4">
                                  <div className="frame-18">
                                    <div className="frame-19">
                                      <div className="placeholder-text-16">RF</div>
                                    </div>
                                    <AtomsIcon2019Close702 className="ATOMS-ICON-5" />
                                  </div>
                                  <div className="elements-12" />
                                </div>
                                <div className="cell-text-3">
                                  <div className="text-icon-2">
                                    <div className="label-11">XXXXXXXXXX</div>
                                  </div>
                                </div>
                                <div className="cell-text-3">
                                  <div className="text-icon-2">
                                    <div className="label-11">abc@verizon.com</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Divider className="divider-19" type="one-PX-grey" />
                          </div>
                          <div className="scrollbar-2">
                            <div className="scroller-3" />
                          </div>
                          <div className="pagination-2">
                            <div className="div-11">
                              <div className="div-8">
                                <div className="input-fields-7">
                                  <div className="elements-13">
                                    <div className="frame-15">
                                      <div className="placeholder-text-17">0</div>
                                      <AtomsIcon2019Close94 className="ATOMS-ICON-6" color="black" />
                                    </div>
                                    <Divider className="divider-20" type="one-PX-grey" />
                                  </div>
                                </div>
                              </div>
                              <p className="displaying-of-2">Displaying 2 of 2 Rows</p>
                            </div>
                            <div className="pages-wrapper">
                              <div className="pages-2">
                                <div className="arrow-2">
                                  <AtomsIcon2019Close68 className="ATOMS-ICON-6" />
                                  <Divider className="divider-21" type="one-PX-grey" />
                                  <AtomsIcon2019Close578 className="ATOMS-ICON-6" />
                                </div>
                                <div className="page-number-4">
                                  <div className="placeholder-text-18">1</div>
                                </div>
                                <div className="page-number-5">
                                  <div className="placeholder-text-19">2</div>
                                </div>
                                <div className="arrow-2">
                                  <AtomsIcon2019Close579 className="ATOMS-ICON-6" />
                                  <Divider className="divider-21" type="one-PX-grey" />
                                  <AtomsIcon2019Close71 className="ATOMS-ICON-6" />
                                </div>
                              </div>
                            </div>
                            <div className="div-11">
                              <div className="input-fields-8">
                                <div className="page-number-6">
                                  <div className="placeholder-text-20">2</div>
                                </div>
                                <Divider className="divider-22" type="one-PX-grey" />
                              </div>
                              <div className="text-wrapper-6">/ 20</div>
                            </div>
                            <div className="button-4">
                              <div className="content-2">
                                <div className="text-6">Export</div>
                              </div>
                              <div className="dropdown-2">
                                <div className="rectangle-3" />
                                <AtomsIcon2019Close94 className="atoms-icon-2019-close-94" color="white" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <Divider className="divider-23" type="one-PX-grey" />
                      </div>
                    </div>
                  </div>
                  <div className="navigation-action-2">
                    <div className="overlap-group-3">
                      <Line className="line-40-instance" />
                      <Line className="line-2" />
                      <div className="label-12">Show All</div>
                      <div className="label-13">Show Next</div>
                      <div className="label-14"><Link to="/Cbpm-15" style={{color:'inherit', textDecoration:'none'}}>Save</Link></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group-19">
            <div className="group-20">
              <div className="overlap-group-4">
                <Click6 className="click-6" />
                <div className="text-wrapper-7">CLICK</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
