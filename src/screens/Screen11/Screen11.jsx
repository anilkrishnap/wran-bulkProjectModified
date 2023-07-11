import React from "react";
import { Divider } from "../../components/Divider";
import { GlobalHeader } from "../../components/GlobalHeader";
import { IconClose } from "../../components/IconClose";
import { IconSearchWrapper } from "../../components/IconSearchWrapper";
import { SearchInput } from "../../components/SearchInput";
import { AtomsIcon2019Close68 } from "../../icons/AtomsIcon2019Close68";
import { AtomsIcon2019Close71 } from "../../icons/AtomsIcon2019Close71";
import { AtomsIcon2019Close94 } from "../../icons/AtomsIcon2019Close94";
import { Checkbox } from "../../icons/Checkbox";
import { Icon3 } from "../../icons/Icon3";
import { IconClose50 } from "../../icons/IconClose50";
import { IconCtaCaretClose27 } from "../../icons/IconCtaCaretClose27";
import { Line } from "../../icons/Line";
import { Shape99 } from "../../icons/Shape99";
import "./style.css";
import {Link} from "react-router-dom";

export const Screen11 = () => {
  return (
    <div className="screen-11">
      <div className="CBPM-11">
        <div className="overlap-33">
          <div className="template-create-bulk-7">
            <div className="div-27">
              <GlobalHeader
                ATOMSAvatarDefaultClassName="icon-search-instance-wrapper"
                ATOMSIconWrapperGroupClassName="icon-search-wrapper"
                searchInputIcon={<IconSearchWrapper />}
                type="primary"
              />
              <GlobalHeader
                tab="Home"
                tab1="selected"
                tab2="default"
                tab3="Create/Upload Bulk Solutions"
                tab4="Solution Manager"
                tabClassNameOverride="global-header-40"
                tabVisible1={false}
                tabVisible2={false}
                tabVisible3={false}
                tabVisible5={false}
                type="secondary"
              />
            </div>
            <div className="div-28">
              <div className="swimlane-10">
                <Divider className="divider-74" type="one-PX-black" />
                <div className="names-10">
                  <div className="div-29">
                    <div className="step-name-22">Solution Sites</div>
                  </div>
                  <IconCtaCaretClose27 className="icon-cta-caret-close-8-instance" />
                  <div className="div-29">
                    <div className="step-name-23">Solution Details</div>
                  </div>
                  <IconCtaCaretClose27 className="icon-cta-caret-close-8-instance" />
                  <div className="div-29">
                    <div className="step-name-23">Project Details</div>
                  </div>
                </div>
                <Divider className="divider-75" type="one-PX-black" />
              </div>
            </div>
            <div className="div-28">
              <div className="navigation-window-10">
                <div className="overlap-34">
                  <div className="body-5">
                    <div className="table-with-2">
                      <div className="local-select-7">
                        <div className="heading-12">
                          <div className="placeholder-text-54">Solution&nbsp;&nbsp;Sites</div>
                        </div>
                        <div className="fields-4">
                          <div className="lable-7">
                            <div className="label-85">Solution Type</div>
                          </div>
                          <div className="radio-button-12">
                            <div className="ellipse-15" />
                            <div className="placeholder-text-56">New Build</div>
                          </div>
                          <div className="radio-button-12">
                            <div className="checkbox-4-instance">
                              <div className="overlap-group-25">
                                <div className="ellipse-14" />
                              </div>
                            </div>
                            <div className="placeholder-text-55">Modification</div>
                          </div>
                          
                        </div>
                      </div>
                      <div className="local-cards-2">
                        <div className="title-and-icon-2">
                          <div className="text-wrapper-36">Validation Status</div>
                          <img className="ATOMS-ICON-11" alt="Icon" src="/img/icon-94.svg" />
                        </div>
                        <div className="status-cards-2">
                          <div className="local-status-card-2">
                            <h1 className="text-wrapper-37">500</h1>
                            <div className="div-30">
                              <div className="text-wrapper-38">Total Projects</div>
                            </div>
                          </div>
                          <div className="local-status-card-2">
                            <div className="text-wrapper-37">490</div>
                            <div className="div-30">
                              <div className="img-wrapper">
                                <img className="path-6" alt="Path" src="/img/path-393.svg" />
                              </div>
                              <div className="text-wrapper-39">Valid Projects</div>
                            </div>
                          </div>
                          <div className="local-status-card-2">
                            <div className="text-wrapper-37">10</div>
                            <div className="icon-with-label-2">
                              <div className="status-icon-small-4">
                                <div className="overlap-group-26">
                                  <img className="path-copy-2" alt="Path copy" src="/img/path-4-copy-3.svg" />
                                </div>
                              </div>
                              <div className="text-wrapper-39">InValid Projects</div>
                            </div>
                          </div>
                          <div className="local-status-card-2">
                            <div className="text-wrapper-37">327</div>
                            <div className="div-30">
                              <div className="status-icon-small-5">
                                <img className="path-7" alt="Path" src="/img/path-394.svg" />
                                <div className="rectangle-11" />
                              </div>
                              <div className="text-wrapper-39">Errors</div>
                            </div>
                          </div>
                          <div className="local-status-card-2">
                            <div className="text-wrapper-37">237</div>
                            <div className="div-30">
                              <div className="LOCAL-WARNING-ICON-4">
                                <div className="group-91">
                                  <div className="ebene-6">
                                    <div className="group-92">
                                      <img className="path-8" alt="Path" src="/img/path-395.svg" />
                                      <div className="rectangle-12" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="text-wrapper-39">Warnings</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-55">
                        <div className="local-create-bulk-2">
                          <div className="table-new-2">
                            <div className="action-bar-7">
                              <div className="overlap-group-27">
                                <div className="action-bar-items-3">
                                  <Link to="/Cbpm-12">
                                  <div className="div-29">
                                    <div className="div-31">
                                      <img className="img-3" alt="Icon save floppy" src="/img/icon-save-floppy.svg" />
                                      <div className="action-6">Save</div>
                                    </div>
                                  </div>
                                  </Link>
                                  <div className="setting-6">
                                    <SearchInput icon={<IconSearchWrapper />} state="default" />
                                    <Shape99 className="img-3" />
                                    <img className="img-3" alt="Icon filter clear" src="/img/icon-filter-clear.svg" />
                                  </div>
                                </div>
                                <Divider className="divider-76" type="one-PX-black" />
                              </div>
                            </div>
                            <div className="div-32">
                              <div className="inputs-33">
                                <div className="div-30">
                                  <Checkbox className="checkbox-4-instance" color="white" stroke="#D8DADA" />
                                </div>
                                <div className="row-data-5">
                                  <div className="column-header-4">
                                    <div className="text-19">
                                      <div className="label-86">
                                        Error/
                                        <br />
                                        Warnings
                                      </div>
                                    </div>
                                    <Icon3 className="icon-3" />
                                  </div>
                                  <div className="column-header-4">
                                    <div className="text-20">
                                      <div className="label-87">Latitude</div>
                                    </div>
                                  </div>
                                  <div className="column-header-4">
                                    <div className="text-20">
                                      <div className="text-wrapper-38">Longtitude</div>
                                    </div>
                                  </div>
                                  <div className="column-header-4">
                                    <div className="text-20">
                                      <div className="label-88">SR Name</div>
                                    </div>
                                  </div>
                                  <div className="column-header-4">
                                    <div className="text-20">
                                      <div className="label-87">PS Name</div>
                                    </div>
                                  </div>
                                  <div className="column-header-4">
                                    <div className="text-20">
                                      <div className="label-89">SR Radius (miles)</div>
                                    </div>
                                  </div>
                                  <div className="column-header-4">
                                    <div className="text-20">
                                      <div className="label-90">
                                        Center Line <br />
                                        (miles)
                                      </div>
                                    </div>
                                  </div>
                                  <div className="column-header-4">
                                    <div className="text-20">
                                      <div className="label-89">Sector Count</div>
                                    </div>
                                  </div>
                                  <div className="column-header-4">
                                    <div className="text-20">
                                      <div className="label-91">No. of RRH’s</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-77" type="three-PX-black" />
                            </div>
                            <div className="div-32">
                              <div className="inputs-33">
                                <div className="div-30">
                                  <Checkbox className="checkbox-4-instance" color="white" stroke="#D8DADA" />
                                </div>
                                <div className="row-data-5">
                                  <div className="error-warning-option-3">
                                    <div className="group-93">
                                      <div className="group-94">
                                        <div className="status-icon-small-6">
                                          <img className="path-7" alt="Path" src="/img/path-396.svg" />
                                          <div className="rectangle-11" />
                                        </div>
                                        <div className="label-92">99</div>
                                      </div>
                                      <div className="group-95">
                                        <div className="label-92">17</div>
                                        <div className="LOCAL-WARNING-ICON-5">
                                          <div className="group-91">
                                            <div className="ebene-6">
                                              <div className="group-96">
                                                <img className="path-8" alt="Path" src="/img/path-397.svg" />
                                                <div className="rectangle-12" />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-57">
                                        <div className="placeholder-text-57">47.2042</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-121">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-57">-12.982</div>
                                      </div>
                                      <IconClose50 className="icon-close-28" />
                                    </div>
                                    <div className="elements-23" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-57">Lorem</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-57">Lorem</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-58">1</div>
                                      </div>
                                      <IconClose50 className="icon-close-28" />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-59">12</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-60">3</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-60">5</div>
                                      </div>
                                      <IconClose50 className="icon-close-28" />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-78" type="one-PX-grey" />
                            </div>
                            <div className="div-32">
                              <div className="inputs-33">
                                <div className="div-30">
                                  <Checkbox className="checkbox-4-instance" color="white" stroke="#D8DADA" />
                                </div>
                                <div className="row-data-5">
                                  <div className="error-warning-option-3">
                                    <div className="group-93">
                                      <div className="group-97">
                                        <div className="status-icon-small-6">
                                          <img className="path-7" alt="Path" src="/img/path-396.svg" />
                                          <div className="rectangle-11" />
                                        </div>
                                        <div className="label-93">99</div>
                                      </div>
                                      <div className="group-95">
                                        <div className="label-92">17</div>
                                        <div className="LOCAL-WARNING-ICON-5">
                                          <div className="group-91">
                                            <div className="ebene-6">
                                              <div className="group-96">
                                                <img className="path-8" alt="Path" src="/img/path-397.svg" />
                                                <div className="rectangle-12" />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="input-fields-121">
                                    <div className="frame-56">
                                      <div className="frame-57">
                                        <div className="placeholder-text-57">47.2042</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-23" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-57">-12.982</div>
                                      </div>
                                      <IconClose50 className="icon-close-28" />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-121">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-57">Lorem</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-23" />
                                  </div>
                                  <div className="input-fields-121">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-57">Lorem</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-24" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-58">1</div>
                                      </div>
                                      <IconClose50 className="icon-close-28" />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-59">12</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-60">3</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-122">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-60">5</div>
                                      </div>
                                      <IconClose50 className="icon-close-28" />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-78" type="one-PX-grey" />
                            </div>
                            <div className="div-32">
                              <div className="inputs-33">
                                <div className="div-30">
                                  <Checkbox className="checkbox-4-instance" color="white" stroke="#D8DADA" />
                                </div>
                                <div className="row-data-5">
                                  <div className="error-warning-option-3">
                                    <div className="group-93">
                                      <div className="group-94">
                                        <div className="status-icon-small-6">
                                          <img className="path-7" alt="Path" src="/img/path-396.svg" />
                                          <div className="rectangle-11" />
                                        </div>
                                        <div className="label-92">99</div>
                                      </div>
                                      <div className="group-95">
                                        <div className="label-92">17</div>
                                        <div className="LOCAL-WARNING-ICON-5">
                                          <div className="group-91">
                                            <div className="ebene-6">
                                              <div className="group-96">
                                                <img className="path-8" alt="Path" src="/img/path-397.svg" />
                                                <div className="rectangle-12" />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="input-fields-123">
                                    <div className="frame-56">
                                      <div className="frame-57">
                                        <div className="placeholder-text-57">47.2042</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-25" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-57">-12.982</div>
                                      </div>
                                      <IconClose50 className="icon-close-28" />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-57">Lorem</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-57">Lorem</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-58">1</div>
                                      </div>
                                      <IconClose50 className="icon-close-28" />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-59">12</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-60">3</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-60">5</div>
                                      </div>
                                      <IconClose50 className="icon-close-28" />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-78" type="one-PX-grey" />
                            </div>
                            <div className="div-32">
                              <div className="inputs-33">
                                <div className="div-30">
                                  <Checkbox className="checkbox-4-instance" color="white" stroke="#D8DADA" />
                                </div>
                                <div className="row-data-5">
                                  <div className="error-warning-option-4">
                                    <div className="group-98">
                                      <div className="group-99">
                                        <div className="status-icon-small-6">
                                          <img className="path-7" alt="Path" src="/img/path-402.svg" />
                                          <div className="rectangle-11" />
                                        </div>
                                        <div className="label-92">099</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-57">
                                        <div className="placeholder-text-57">47.2042</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-121">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-57">-12.982</div>
                                      </div>
                                      <IconClose50 className="icon-close-28" />
                                    </div>
                                    <div className="elements-23" />
                                  </div>
                                  <div className="input-fields-121">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-57">Lorem</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-23" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-57">Lorem</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-58">1</div>
                                      </div>
                                      <IconClose50 className="icon-close-28" />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-59">12</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-60">3</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-60">5</div>
                                      </div>
                                      <IconClose50 className="icon-close-28" />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-78" type="one-PX-grey" />
                            </div>
                            <div className="div-32">
                              <div className="inputs-33">
                                <div className="div-30">
                                  <Checkbox className="checkbox-4-instance" color="white" stroke="#D8DADA" />
                                </div>
                                <div className="row-data-5">
                                  <div className="error-warning-option-5">
                                    <div className="group-98">
                                      <div className="group-99">
                                        <div className="status-icon-small-6">
                                          <img className="path-7" alt="Path" src="/img/path-396.svg" />
                                          <div className="rectangle-11" />
                                        </div>
                                        <div className="label-92">099</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-57">
                                        <div className="placeholder-text-57">47.2042</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-57">-12.982</div>
                                      </div>
                                      <IconClose50 className="icon-close-28" />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-57">Lorem</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-121">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-57">Lorem</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-23" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-58">1</div>
                                      </div>
                                      <IconClose50 className="icon-close-28" />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-59">12</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-60">3</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-60">5</div>
                                      </div>
                                      <IconClose50 className="icon-close-28" />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-78" type="one-PX-grey" />
                            </div>
                            <div className="div-32">
                              <div className="inputs-33">
                                <div className="div-30">
                                  <Checkbox className="checkbox-4-instance" color="white" stroke="#D8DADA" />
                                </div>
                                <div className="row-data-5">
                                  <div className="error-warning-option-4">
                                    <div className="group-98">
                                      <div className="group-99">
                                        <div className="label-92">099</div>
                                        <div className="LOCAL-WARNING-ICON-5">
                                          <div className="group-91">
                                            <div className="ebene-6">
                                              <div className="group-100">
                                                <img className="path-8" alt="Path" src="/img/path-404.svg" />
                                                <div className="rectangle-12" />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-57">
                                        <div className="placeholder-text-57">47.2042</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-57">-12.982</div>
                                      </div>
                                      <IconClose50 className="icon-close-28" />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-121">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-57">Lorem</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-24" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-57">Lorem</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-58">1</div>
                                      </div>
                                      <IconClose50 className="icon-close-28" />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-59">12</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-60">3</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-60">5</div>
                                      </div>
                                      <IconClose50 className="icon-close-28" />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-78" type="one-PX-grey" />
                            </div>
                            <div className="div-32">
                              <div className="inputs-33">
                                <div className="div-30">
                                  <Checkbox className="checkbox-4-instance" color="white" stroke="#D8DADA" />
                                </div>
                                <div className="row-data-5">
                                  <div className="error-warning-option-5">
                                    <div className="group-98">
                                      <div className="group-99">
                                        <div className="label-92">099</div>
                                        <div className="LOCAL-WARNING-ICON-5">
                                          <div className="group-91">
                                            <div className="ebene-6">
                                              <div className="group-96">
                                                <img className="path-8" alt="Path" src="/img/path-397.svg" />
                                                <div className="rectangle-12" />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-57">
                                        <div className="placeholder-text-57">47.2042</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-57">-12.982</div>
                                      </div>
                                      <IconClose50 className="icon-close-28" />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-121">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-57">Lorem</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-24" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-57">Lorem</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-58">1</div>
                                      </div>
                                      <IconClose50 className="icon-close-28" />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-59">12</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-60">3</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-60">5</div>
                                      </div>
                                      <IconClose50 className="icon-close-28" />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-78" type="one-PX-grey" />
                            </div>
                            <div className="div-32">
                              <div className="inputs-33">
                                <div className="div-30">
                                  <Checkbox className="checkbox-4-instance" color="white" stroke="#D8DADA" />
                                </div>
                                <div className="row-data-5">
                                  <div className="error-warning-option-6">
                                    <div className="group-101">
                                      <div className="group-102">
                                        <div className="status-icon-small-7">
                                          <img className="path-6" alt="Path" src="/img/path-806.svg" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-57">
                                        <div className="placeholder-text-57">47.2042</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-57">-12.982</div>
                                      </div>
                                      <IconClose50 className="icon-close-28" />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-57">Lorem</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-57">Lorem</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-58">1</div>
                                      </div>
                                      <IconClose50 className="icon-close-28" />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-59">12</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-60">3</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-60">5</div>
                                      </div>
                                      <IconClose50 className="icon-close-28" />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-78" type="one-PX-grey" />
                            </div>
                            <div className="div-32">
                              <div className="inputs-33">
                                <div className="div-30">
                                  <Checkbox className="checkbox-4-instance" color="white" stroke="#D8DADA" />
                                </div>
                                <div className="row-data-5">
                                  <div className="error-warning-option-7">
                                    <div className="group-101">
                                      <div className="group-102">
                                        <div className="status-icon-small-7">
                                          <img className="path-6" alt="Path" src="/img/path-807.svg" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-57">
                                        <div className="placeholder-text-57">47.2042</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-57">-12.982</div>
                                      </div>
                                      <IconClose50 className="icon-close-28" />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-57">Lorem</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-57">Lorem</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-58">1</div>
                                      </div>
                                      <IconClose50 className="icon-close-28" />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-59">12</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-60">3</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                  <div className="input-fields-120">
                                    <div className="frame-56">
                                      <div className="frame-58">
                                        <div className="placeholder-text-60">5</div>
                                      </div>
                                      <IconClose50 className="icon-close-28" />
                                    </div>
                                    <div className="elements-22" />
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-78" type="one-PX-grey" />
                            </div>
                            <div className="scrollbar-6">
                              <div className="scroller-6" />
                            </div>
                            <div className="pagination-4">
                              <div className="div-30">
                                <div className="div-27">
                                  <div className="input-fields-124">
                                    <div className="elements-26">
                                      <div className="frame-59">
                                        <div className="placeholder-text-61">10</div>
                                        <AtomsIcon2019Close94 className="ATOMS-ICON-11" color="black" />
                                      </div>
                                      <Divider className="divider-79" type="one-PX-grey" />
                                    </div>
                                  </div>
                                </div>
                                <p className="displaying-of-4">Displaying 10 of 30 Rows</p>
                              </div>
                              <div className="page-3">
                                <div className="pages-4">
                                  <div className="arrow-4">
                                    <AtomsIcon2019Close68 className="ATOMS-ICON-11" />
                                    <Divider className="divider-80" type="one-PX-grey" />
                                    <img
                                      className="ATOMS-ICON-11"
                                      alt="Atoms ICON"
                                      src="/img/atoms-icon-2019-close-406.svg"
                                    />
                                  </div>
                                  <div className="page-number-10">
                                    <div className="placeholder-text-62">1</div>
                                  </div>
                                  <div className="page-number-11">
                                    <div className="placeholder-text-63">2</div>
                                  </div>
                                  <div className="page-number-11">
                                    <div className="placeholder-text-63">3</div>
                                  </div>
                                  <div className="page-number-11">
                                    <div className="placeholder-text-63">4</div>
                                  </div>
                                  <div className="page-number-11">
                                    <div className="placeholder-text-63">5</div>
                                  </div>
                                  <div className="page-number-11">
                                    <div className="placeholder-text-64">6</div>
                                  </div>
                                  <div className="page-number-11">
                                    <div className="placeholder-text-63">7</div>
                                  </div>
                                  <div className="page-number-11">
                                    <div className="placeholder-text-64">8</div>
                                  </div>
                                  <div className="page-number-11">
                                    <div className="placeholder-text-64">9</div>
                                  </div>
                                  <div className="page-number-11">
                                    <div className="placeholder-text-65">10</div>
                                  </div>
                                  <div className="arrow-4">
                                    <img
                                      className="ATOMS-ICON-11"
                                      alt="Atoms ICON"
                                      src="/img/atoms-icon-2019-close-407.svg"
                                    />
                                    <Divider className="divider-80" type="one-PX-grey" />
                                    <AtomsIcon2019Close71 className="ATOMS-ICON-11" />
                                  </div>
                                </div>
                              </div>
                              <div className="div-30">
                                <div className="input-fields-125">
                                  <div className="page-number-12">
                                    <div className="placeholder-text-66">2</div>
                                  </div>
                                  <Divider className="divider-81" type="one-PX-grey" />
                                </div>
                                <div className="text-wrapper-40">/ 20</div>
                              </div>
                              <div className="button-15">
                                <div className="div-31">
                                  <div className="text-21">Export</div>
                                </div>
                                <div className="dropdown-4">
                                  <div className="rectangle-13" />
                                  <img
                                    className="icon-CTA-caret-open-3"
                                    alt="Icon CTA caret open"
                                    src="/img/icon-cta-caret-open-108.svg"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <Divider className="divider-82" type="one-PX-grey" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="navigation-action-10">
                    <div className="overlap-35">
                      <Line className="line-17" />
                      <Line className="line-18" />
                      <div className="label-94">Show All</div>
                      <div className="label-95">Show Next</div>
                      <div className="label-96">Save</div>
                    </div>
                  </div>
                </div>
              </div>
              <Divider className="divider-83" type="one-PX-grey" />
            </div>
          </div>
          <div className="user-interaction-8">
            <div className="group-103">
              <div className="group-104">
                <div className="overlap-group-28">
                  <div className="text-wrapper-41">CLICK</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
