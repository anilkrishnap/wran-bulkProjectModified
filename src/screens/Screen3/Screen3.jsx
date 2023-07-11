import React from "react";
import { Divider } from "../../components/Divider";
import { GlobalHeader } from "../../components/GlobalHeader";
import { Scrollbar } from "../../components/Scrollbar";
import { SearchInput } from "../../components/SearchInput";
import { AtomsIcon2019Close2 } from "../../icons/AtomsIcon2019Close2";
import { AtomsIcon2019Close4 } from "../../icons/AtomsIcon2019Close4";
import { AtomsIcon2019Close62 } from "../../icons/AtomsIcon2019Close62";
import { AtomsIcon2019Close94 } from "../../icons/AtomsIcon2019Close94";
import { Checkbox } from "../../icons/Checkbox";
import { Click5 } from "../../icons/Click5";
import { IconClose50 } from "../../icons/IconClose50";
import { IconCtaCaretClose27 } from "../../icons/IconCtaCaretClose27";
import { IconCtaCaretOpen } from "../../icons/IconCtaCaretOpen";
import { IconFilter } from "../../icons/IconFilter";
import { IconFilterClear } from "../../icons/IconFilterClear";
import { IconMinusLarge } from "../../icons/IconMinusLarge";
import { IconPlusLarge3 } from "../../icons/IconPlusLarge3";
import { IconSaveFloppy } from "../../icons/IconSaveFloppy";
import { Line } from "../../icons/Line";
import "./style.css";
import {Link} from "react-router-dom";


export const Screen3 = () => {
  return (
    <div className="screen-3">
      <div className="CBPM-3">
        <div className="overlap-8">
          <div className="template-solution">
            <div className="global-header-9">
              <GlobalHeader
                ATOMSAvatarDefaultClassName="global-header-11"
                ATOMSIconWrapperGroupClassName="global-header-10"
                searchInputIcon={<AtomsIcon2019Close2 className="ATOMS-ICON-7" />}
                type="primary"
              />
              <GlobalHeader
                tab="Home"
                tab1="selected"
                tab2="default"
                tab3="Create/Upload Bulk Solutions"
                tab4="Solution Manager"
                tabClassNameOverride="global-header-12"
                tabVisible1={false}
                tabVisible2={false}
                tabVisible3={false}
                tabVisible5={false}
                type="secondary"
              />
            </div>
            <div className="swimlane-wrapper">
              <div className="swimlane-3">
                <Divider className="divider-24" type="one-PX-black" />
                <div className="names-3">
                  <div className="div-12">
                    <div className="step-name-6">Solution Sites</div>
                  </div>
                  <IconCtaCaretClose27 className="icon-instance-node-3" />
                  <div className="div-12">
                    <div className="step-name-7">Solution Details</div>
                  </div>
                  <IconCtaCaretClose27 className="icon-instance-node-3" />
                  <div className="div-12">
                    <div className="step-name-8">Project Details</div>
                  </div>
                </div>
                <Divider className="divider-25" type="one-PX-black" />
              </div>
            </div>
            <div className="solution-details">
              <div className="navigation-window-3">
                <div className="overlap-9">
                  <div className="solution-details-wrapper">
                    <div className="solution-details-2">
                      <div className="solution-details-3">
                        <div className="heading-4">
                          <div className="heading-5">
                            <div className="placeholder-text-21">Solution&nbsp;&nbsp;Details</div>
                          </div>
                        </div>
                        <div className="fields">
                          <div className="inputs-7">
                            <div className="label-15">
                              <div className="label-16">Solution Type</div>
                              <div className="required-3">
                                <div className="text-wrapper-8">*</div>
                              </div>
                            </div>
                            <div className="input-fields-9">
                              <div className="frame-20">
                                <div className="placeholder-text-22">Enter solution Name</div>
                                <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                              </div>
                              <div className="elements-14" />
                            </div>
                          </div>
                          <div className="inputs-8">
                            <div className="label-15">
                              <div className="label-16">Requested Year</div>
                              <div className="required-3">
                                <div className="text-wrapper-8">*</div>
                              </div>
                            </div>
                            <div className="input-fields-9">
                              <div className="frame-20">
                                <div className="placeholder-text-22">2023</div>
                                <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                              </div>
                              <div className="elements-15" />
                            </div>
                          </div>
                          <div className="inputs-9">
                            <div className="label-15">
                              <div className="label-16">Primary Rationale</div>
                              <div className="required-3" />
                            </div>
                            <div className="input-fields-9">
                              <div className="frame-20">
                                <div className="placeholder-text-22">Lorem</div>
                                <IconClose50 className="ATOMS-ICON-8" />
                              </div>
                              <div className="elements-14" />
                            </div>
                          </div>
                          <div className="inputs-10">
                            <div className="label-15">
                              <div className="label-16">Legal Due Date</div>
                              <div className="required-3" />
                            </div>
                            <div className="input-fields-9">
                              <div className="elements-16">
                                <div className="frame-20">
                                  <div className="placeholder-text-23">14 Feb 2023</div>
                                  <AtomsIcon2019Close62 className="atoms-icon-2019-close-62" />
                                </div>
                                <div className="divider-26" />
                              </div>
                            </div>
                          </div>
                          <Divider className="divider-27" type="one-PX-grey" />
                        </div>
                        <div className="action-items">
                          <div className="add-carrier">
                            <div className="text-wrapper-9">Add Carrier</div>
                            <div className="frame-21">
                              <div className="checkbox-2">
                                <Checkbox className="checkbox-12" color="black" stroke="black" />
                                <div className="placeholder-text-24">4G</div>
                              </div>
                              <div className="checkbox-2">
                                <Checkbox className="checkbox-12" color="black" stroke="black" />
                                <div className="placeholder-text-24">5G</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="table-3">
                        <div className="action-bar">
                          <div className="overlap-group-5">
                            <div className="action-bar-items">
                              <div className="div-12" />
                              <div className="div-13">
                                <div className="div-13">
                                  <div className="dropdown-input">
                                    <div className="frame-22">
                                      <div className="frame-23">
                                        <div className="placeholder-text-25">Select Template</div>
                                      </div>
                                      <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                    </div>
                                    <div className="elements-17" />
                                  </div>
                                  <IconSaveFloppy className="icon-instance-node-3" />
                                </div>
                                <SearchInput icon={<AtomsIcon2019Close4 className="ATOMS-ICON-7" />} state="default" />
                                <IconFilter className="icon-instance-node-4" />
                                <IconFilterClear className="icon-instance-node-4" />
                              </div>
                            </div>
                            <Divider className="divider-28" type="one-PX-black" />
                          </div>
                        </div>
                        <Divider className="divider-29" type="one-PX-black" />
                        <div className="table-row-elements">
                          <div className="overlap-10">
                            <div className="heading-in-table-wrapper">
                              <div className="heading-in-table">
                                <div className="label-17">5G Carrier</div>
                              </div>
                            </div>
                            <div className="overlap-10">
                              <div className="row" />
                              <div className="row-2" />
                              <div className="row-3" />
                              <div className="row-4" />
                              <div className="row-5" />
                              <div className="row-6" />
                              <div className="row-7" />
                              <div className="row-8" />
                              <div className="row-9" />
                              <div className="row-10" />
                              <div className="row-11" />
                              <div className="row-12" />
                              <div className="row-13" />
                              <div className="row-14" />
                              <div className="row-15" />
                              <div className="row-16" />
                              <div className="row-17" />
                              <div className="row-18" />
                              <div className="row-data-3">
                                <div className="cell-row">
                                  <div className="table-item">
                                    <div className="label-18">Solution Initiatives</div>
                                  </div>
                                  <div className="table-item">
                                    <div className="text-wrapper-10">700</div>
                                  </div>
                                  <div className="table-item">
                                    <div className="text-wrapper-10">850</div>
                                  </div>
                                  <div className="table-item">
                                    <div className="text-wrapper-10">AWS</div>
                                  </div>
                                  <div className="table-item">
                                    <div className="text-wrapper-10">AWS 3</div>
                                  </div>
                                  <div className="table-item">
                                    <div className="text-wrapper-10">PCS</div>
                                  </div>
                                  <div className="table-item">
                                    <div className="text-wrapper-10">AWS3 1st</div>
                                  </div>
                                  <div className="table-item">
                                    <div className="text-wrapper-10">AWS3 2st</div>
                                  </div>
                                </div>
                                <div className="cell-row">
                                  <div className="table-item">
                                    <div className="text-wrapper-10">AWS3 3rd</div>
                                  </div>
                                  <div className="table-item">
                                    <div className="text-wrapper-10">850 1st</div>
                                  </div>
                                  <div className="table-item">
                                    <div className="text-wrapper-10">850 2st</div>
                                  </div>
                                  <div className="table-item">
                                    <div className="text-wrapper-10">700</div>
                                  </div>
                                  <div className="table-item">
                                    <div className="text-wrapper-10">CBRS 1st</div>
                                  </div>
                                  <div className="table-item">
                                    <div className="text-wrapper-10">Label</div>
                                  </div>
                                  <div className="table-item">
                                    <div className="text-wrapper-10">Label</div>
                                  </div>
                                  <div className="table-item">
                                    <div className="text-wrapper-10">Label</div>
                                  </div>
                                </div>
                                <div className="cell-row">
                                  <div className="table-item">
                                    <div className="text-wrapper-10">LAA 2nd</div>
                                  </div>
                                  <div className="table-item">
                                    <div className="text-wrapper-10">Label</div>
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-30" type="one-PX-black" />
                              <IconPlusLarge3 className="icon-plus-large" />
                              <IconMinusLarge className="icon-minus-large" />
                              <IconMinusLarge className="icon-minus-small" />
                              <IconPlusLarge3 className="icon-plus-large-3" />
                              <IconPlusLarge3 className="icon-plus-large-4" />
                              <IconPlusLarge3 className="icon-plus-large-3-instance" />
                              <Divider className="divider-31" type="one-PX-grey" />
                              <Divider className="divider-32" type="one-PX-grey" />
                              <Divider className="divider-33" type="one-PX-grey" />
                              <Divider className="divider-34" type="one-PX-grey" />
                              <Divider className="divider-35" type="one-PX-grey" />
                              <Divider className="divider-36" type="one-PX-grey" />
                              <div className="column-names">
                                <div className="heading-in-table-2">
                                  <div className="label-19">BW</div>
                                </div>
                                <div className="heading-in-table-3">
                                  <div className="label-20">Sectors Applied</div>
                                </div>
                                <div className="heading-in-table-4">
                                  <div className="label-20">Center Channel</div>
                                </div>
                                <div className="heading-in-table-5">
                                  <div className="label-17">Carrier Label</div>
                                </div>
                                <div className="heading-in-table-6">
                                  <div className="label-21">Rationale</div>
                                </div>
                                <div className="heading-in-table-7">
                                  <div className="label-22">Offload</div>
                                </div>
                                <div className="heading-in-table-8">
                                  <div className="label-23">4TX</div>
                                </div>
                              </div>
                              <div className="inputs-11">
                                <div className="input-fields-9">
                                  <div className="frame-20">
                                    <div className="placeholder-text-26">-</div>
                                    <IconCtaCaretOpen className="ATOMS-ICON-8" />
                                  </div>
                                  <div className="divider-37" />
                                </div>
                              </div>
                              <div className="input-fields-10">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-37" />
                              </div>
                              <div className="input-fields-11">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-37" />
                              </div>
                              <div className="input-fields-12">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-37" />
                              </div>
                              <div className="input-fields-13">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-37" />
                              </div>
                              <div className="input-fields-14">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-37" />
                              </div>
                              <div className="input-fields-15">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-37" />
                              </div>
                              <div className="inputs-12">
                                <div className="input-fields-9">
                                  <div className="frame-20">
                                    <div className="placeholder-text-26">-</div>
                                    <IconCtaCaretOpen className="ATOMS-ICON-8" />
                                  </div>
                                  <div className="divider-38" />
                                </div>
                              </div>
                              <div className="input-fields-16">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-38" />
                              </div>
                              <div className="input-fields-17">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-38" />
                              </div>
                              <div className="input-fields-18">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-38" />
                              </div>
                              <div className="input-fields-19">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-38" />
                              </div>
                              <div className="input-fields-20">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-38" />
                              </div>
                              <div className="input-fields-21">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-38" />
                              </div>
                              <div className="inputs-13">
                                <div className="input-fields-9">
                                  <div className="frame-20">
                                    <div className="placeholder-text-26">-</div>
                                    <IconCtaCaretOpen className="ATOMS-ICON-8" />
                                  </div>
                                  <div className="divider-38" />
                                </div>
                              </div>
                              <div className="input-fields-22">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-38" />
                              </div>
                              <div className="input-fields-23">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-38" />
                              </div>
                              <div className="input-fields-24">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-38" />
                              </div>
                              <div className="input-fields-25">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-38" />
                              </div>
                              <div className="input-fields-26">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-38" />
                              </div>
                              <div className="input-fields-27">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-38" />
                              </div>
                              <div className="inputs-14">
                                <div className="input-fields-9">
                                  <div className="frame-20">
                                    <div className="placeholder-text-26">-</div>
                                    <IconCtaCaretOpen className="ATOMS-ICON-8" />
                                  </div>
                                  <div className="divider-38" />
                                </div>
                              </div>
                              <div className="input-fields-28">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-38" />
                              </div>
                              <div className="input-fields-29">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-38" />
                              </div>
                              <div className="input-fields-30">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-38" />
                              </div>
                              <div className="input-fields-31">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-38" />
                              </div>
                              <div className="input-fields-32">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-38" />
                              </div>
                              <div className="input-fields-33">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-38" />
                              </div>
                              <div className="inputs-15">
                                <div className="input-fields-9">
                                  <div className="frame-20">
                                    <div className="placeholder-text-26">-</div>
                                    <IconCtaCaretOpen className="ATOMS-ICON-8" />
                                  </div>
                                  <div className="divider-37" />
                                </div>
                              </div>
                              <div className="input-fields-34">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-37" />
                              </div>
                              <div className="input-fields-35">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-37" />
                              </div>
                              <div className="input-fields-36">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-37" />
                              </div>
                              <div className="input-fields-37">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-37" />
                              </div>
                              <div className="input-fields-38">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-37" />
                              </div>
                              <div className="input-fields-39">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-37" />
                              </div>
                              <div className="inputs-16">
                                <div className="input-fields-9">
                                  <div className="frame-20">
                                    <div className="placeholder-text-26">-</div>
                                    <IconCtaCaretOpen className="ATOMS-ICON-8" />
                                  </div>
                                  <div className="divider-39" />
                                </div>
                              </div>
                              <div className="input-fields-40">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-39" />
                              </div>
                              <div className="input-fields-41">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-39" />
                              </div>
                              <div className="input-fields-42">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-39" />
                              </div>
                              <div className="input-fields-43">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-39" />
                              </div>
                              <div className="input-fields-44">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-39" />
                              </div>
                              <div className="input-fields-45">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-39" />
                              </div>
                              <div className="inputs-17">
                                <div className="input-fields-9">
                                  <div className="frame-20">
                                    <div className="placeholder-text-22">10</div>
                                    <IconCtaCaretOpen className="ATOMS-ICON-8" />
                                  </div>
                                  <div className="divider-39" />
                                </div>
                              </div>
                              <div className="input-fields-46">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-39" />
                              </div>
                              <div className="input-fields-47">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-39" />
                              </div>
                              <div className="input-fields-48">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-39" />
                              </div>
                              <div className="input-fields-49">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-39" />
                              </div>
                              <div className="input-fields-50">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-39" />
                              </div>
                              <div className="inputs-18">
                                <div className="input-fields-9">
                                  <div className="frame-20">
                                    <div className="placeholder-text-26">-</div>
                                    <IconCtaCaretOpen className="ATOMS-ICON-8" />
                                  </div>
                                  <div className="divider-37" />
                                </div>
                              </div>
                              <div className="input-fields-51">
                                <div className="frame-20">
                                  <div className="placeholder-text-22">Lorem Ipsum</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-37" />
                              </div>
                              <div className="input-fields-52">
                                <div className="frame-20">
                                  <div className="placeholder-text-22">Lorem Ipsum</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-37" />
                              </div>
                              <div className="input-fields-53">
                                <div className="frame-20">
                                  <div className="placeholder-text-22">Lorem Ipsum</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-37" />
                              </div>
                              <div className="input-fields-54">
                                <div className="frame-20">
                                  <div className="placeholder-text-22">Lorem Ipsum</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-37" />
                              </div>
                              <div className="input-fields-55">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-37" />
                              </div>
                              <div className="input-fields-56">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-37" />
                              </div>
                              <div className="input-fields-57">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-37" />
                              </div>
                              <div className="input-fields-58">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-37" />
                              </div>
                              <div className="input-fields-59">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-37" />
                              </div>
                              <div className="inputs-19">
                                <div className="input-fields-9">
                                  <div className="frame-20">
                                    <div className="placeholder-text-26">-</div>
                                    <IconCtaCaretOpen className="ATOMS-ICON-8" />
                                  </div>
                                  <div className="divider-38" />
                                </div>
                              </div>
                              <div className="input-fields-60">
                                <div className="frame-20">
                                  <div className="placeholder-text-22">Lorem</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-38" />
                              </div>
                              <div className="input-fields-61">
                                <div className="frame-20">
                                  <div className="placeholder-text-22">Lorem</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-38" />
                              </div>
                              <div className="input-fields-62">
                                <div className="frame-20">
                                  <div className="placeholder-text-22">Lorem</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-38" />
                              </div>
                              <div className="input-fields-63">
                                <div className="frame-20">
                                  <div className="placeholder-text-22">Lorem</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-38" />
                              </div>
                              <div className="input-fields-64">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-38" />
                              </div>
                              <div className="input-fields-65">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-38" />
                              </div>
                              <div className="input-fields-66">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-38" />
                              </div>
                              <div className="input-fields-67">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-38" />
                              </div>
                              <div className="input-fields-68">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-38" />
                              </div>
                              <div className="inputs-20">
                                <div className="input-fields-9">
                                  <div className="frame-20">
                                    <div className="placeholder-text-26">-</div>
                                    <IconCtaCaretOpen className="ATOMS-ICON-8" />
                                  </div>
                                  <div className="divider-38" />
                                </div>
                              </div>
                              <div className="input-fields-69">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-38" />
                              </div>
                              <div className="input-fields-70">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-38" />
                              </div>
                              <div className="input-fields-71">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-38" />
                              </div>
                              <div className="input-fields-72">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-38" />
                              </div>
                              <div className="input-fields-73">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-38" />
                              </div>
                              <div className="input-fields-74">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-38" />
                              </div>
                              <div className="input-fields-75">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-38" />
                              </div>
                              <div className="input-fields-76">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-38" />
                              </div>
                              <div className="input-fields-77">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-38" />
                              </div>
                              <div className="inputs-21">
                                <div className="input-fields-9">
                                  <div className="frame-20">
                                    <div className="placeholder-text-26">-</div>
                                    <IconCtaCaretOpen className="ATOMS-ICON-8" />
                                  </div>
                                  <div className="divider-38" />
                                </div>
                              </div>
                              <div className="input-fields-78">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-38" />
                              </div>
                              <div className="input-fields-79">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-38" />
                              </div>
                              <div className="input-fields-80">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-38" />
                              </div>
                              <div className="input-fields-81">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-38" />
                              </div>
                              <div className="input-fields-82">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-38" />
                              </div>
                              <div className="input-fields-83">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-38" />
                              </div>
                              <div className="input-fields-84">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-38" />
                              </div>
                              <div className="input-fields-85">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-38" />
                              </div>
                              <div className="input-fields-86">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-38" />
                              </div>
                              <div className="inputs-22">
                                <div className="input-fields-9">
                                  <div className="frame-20">
                                    <div className="placeholder-text-26">-</div>
                                    <IconCtaCaretOpen className="ATOMS-ICON-8" />
                                  </div>
                                  <div className="divider-37" />
                                </div>
                              </div>
                              <div className="input-fields-87">
                                <div className="frame-20">
                                  <div className="placeholder-text-22">Lorem Ipsum</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-37" />
                              </div>
                              <div className="input-fields-88">
                                <div className="frame-20">
                                  <div className="placeholder-text-22">Lorem Ipsum</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-37" />
                              </div>
                              <div className="input-fields-89">
                                <div className="frame-20">
                                  <div className="placeholder-text-22">Lorem Ipsum</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-37" />
                              </div>
                              <div className="input-fields-90">
                                <div className="frame-20">
                                  <div className="placeholder-text-22">Lorem Ipsum</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-37" />
                              </div>
                              <div className="input-fields-91">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-37" />
                              </div>
                              <div className="input-fields-92">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-37" />
                              </div>
                              <div className="input-fields-93">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-37" />
                              </div>
                              <div className="input-fields-94">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-37" />
                              </div>
                              <div className="input-fields-95">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-37" />
                              </div>
                              <div className="inputs-23">
                                <div className="input-fields-9">
                                  <div className="frame-20">
                                    <div className="placeholder-text-26">-</div>
                                    <IconCtaCaretOpen className="ATOMS-ICON-8" />
                                  </div>
                                  <div className="divider-39" />
                                </div>
                              </div>
                              <div className="input-fields-96">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-39" />
                              </div>
                              <div className="input-fields-97">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-39" />
                              </div>
                              <div className="input-fields-98">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-39" />
                              </div>
                              <div className="input-fields-99">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-39" />
                              </div>
                              <div className="input-fields-100">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-39" />
                              </div>
                              <div className="input-fields-101">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-39" />
                              </div>
                              <div className="input-fields-102">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-39" />
                              </div>
                              <div className="input-fields-103">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-39" />
                              </div>
                              <div className="input-fields-104">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-39" />
                              </div>
                              <div className="inputs-24">
                                <div className="input-fields-9">
                                  <div className="frame-20">
                                    <div className="placeholder-text-26">-</div>
                                    <IconCtaCaretOpen className="ATOMS-ICON-8" />
                                  </div>
                                  <div className="divider-39" />
                                </div>
                              </div>
                              <div className="input-fields-105">
                                <div className="frame-20">
                                  <div className="placeholder-text-22">20</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-39" />
                              </div>
                              <div className="input-fields-106">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-39" />
                              </div>
                              <div className="input-fields-107">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-39" />
                              </div>
                              <div className="input-fields-108">
                                <div className="frame-20">
                                  <div className="placeholder-text-22">10</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-39" />
                              </div>
                              <div className="input-fields-109">
                                <div className="frame-20">
                                  <div className="placeholder-text-22">10</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-39" />
                              </div>
                              <div className="input-fields-110">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-39" />
                              </div>
                              <div className="input-fields-111">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-39" />
                              </div>
                              <div className="input-fields-112">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-39" />
                              </div>
                              <div className="input-fields-113">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-39" />
                              </div>
                              <div className="input-fields-114">
                                <div className="frame-20">
                                  <div className="placeholder-text-26">-</div>
                                  <AtomsIcon2019Close94 className="ATOMS-ICON-8" color="black" />
                                </div>
                                <div className="divider-39" />
                              </div>
                              <Divider className="divider-40" type="one-PX-grey" />
                            </div>
                          </div>
                          <Scrollbar alignment="horizontal" className="scrollbar-3" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="navigation-action-3">
                    <div className="overlap-11">
                      <Line className="line-3" />
                      <Line className="line-4" />
                      <div className="label-24">Show All</div>
                      <div className="label-25"><Link to="/Cbpm-14" style={{color:'inherit', textDecoration:'none'}}>Show Next</Link></div>
                      <div className="label-26">Save</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group-21">
            <div className="group-22">
              <div className="overlap-group-6">
                <Click5 className="click-5" />
                <div className="text-wrapper-11">CLICK</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
