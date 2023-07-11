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

export const Screen12 = () => {
  return (
    <div className="screen-12">
      <div className="CBPM-12">
        <div className="overlap-36">
          <div className="template-create-bulk-8">
            <div className="div-33">
              <GlobalHeader
                ATOMSAvatarDefaultClassName="global-header-42"
                ATOMSIconWrapperGroupClassName="global-header-41"
                searchInputIcon={<IconSearchWrapper />}
                type="primary"
              />
              <GlobalHeader
                tab="Home"
                tab1="selected"
                tab2="default"
                tab3="Create/Upload Bulk Solutions"
                tab4="Solution Manager"
                tabClassNameOverride="global-header-43"
                tabVisible1={false}
                tabVisible2={false}
                tabVisible3={false}
                tabVisible5={false}
                type="secondary"
              />
            </div>
            <div className="div-34">
              <div className="swimlane-11">
                <Divider className="divider-84" type="one-PX-black" />
                <div className="names-11">
                  <div className="div-35">
                    <div className="step-name-24">Solution Sites</div>
                  </div>
                  <IconCtaCaretClose27 className="icon-right-2" />
                  <div className="div-35">
                    <div className="step-name-25">Solution Details</div>
                  </div>
                  <IconCtaCaretClose27 className="icon-right-2" />
                  <div className="div-35">
                    <div className="step-name-25">Project Details</div>
                  </div>
                </div>
                <Divider className="divider-85" type="one-PX-black" />
              </div>
            </div>
            <div className="div-34">
              <div className="navigation-window-11">
                <div className="overlap-37">
                  <div className="body-6">
                    <div className="table-with-3">
                      <div className="local-select-8">
                        <div className="heading-13">
                          <div className="placeholder-text-67">Solution&nbsp;&nbsp;Sites</div>
                        </div>
                        <div className="fields-5">
                          <div className="lable-8">
                            <div className="label-97">Solution Type</div>
                          </div>
                          <div className="radio-button-13">
                            <div className="ellipse-17" />
                            <div className="placeholder-text-69">New Build</div>
                          </div>
                          <div className="radio-button-13">
                            <div className="checkbox-12-instance">
                              <div className="overlap-group-29">
                                <div className="ellipse-16" />
                              </div>
                            </div>
                            <div className="placeholder-text-68">Modification</div>
                          </div>
                          
                        </div>
                      </div>
                      <div className="local-cards-3">
                        <div className="title-and-icon-3">
                          <div className="text-wrapper-42">Validation Status</div>
                          <img className="ATOMS-ICON-12" alt="Icon" src="/img/icon-94.svg" />
                        </div>
                        <div className="status-cards-3">
                          <div className="local-status-card-3">
                            <h1 className="text-wrapper-43">500</h1>
                            <div className="div-36">
                              <div className="text-wrapper-44">Total Projects</div>
                            </div>
                          </div>
                          <div className="local-status-card-3">
                            <div className="text-wrapper-43">490</div>
                            <div className="div-36">
                              <div className="status-icon-small-8">
                                <img className="path-9" alt="Path" src="/img/path-393.svg" />
                              </div>
                              <div className="text-wrapper-45">Valid Projects</div>
                            </div>
                          </div>
                          <div className="local-status-card-3">
                            <div className="text-wrapper-43">10</div>
                            <div className="icon-with-label-3">
                              <div className="status-icon-small-9">
                                <div className="overlap-group-30">
                                  <img className="path-copy-3" alt="Path copy" src="/img/path-4-copy-3.svg" />
                                </div>
                              </div>
                              <div className="text-wrapper-45">InValid Projects</div>
                            </div>
                          </div>
                          <div className="local-status-card-3">
                            <div className="text-wrapper-43">327</div>
                            <div className="div-36">
                              <div className="status-icon-small-10">
                                <img className="path-10" alt="Path" src="/img/path-394.svg" />
                                <div className="rectangle-14" />
                              </div>
                              <div className="text-wrapper-45">Errors</div>
                            </div>
                          </div>
                          <div className="local-status-card-3">
                            <div className="text-wrapper-43">237</div>
                            <div className="div-36">
                              <div className="LOCAL-WARNING-ICON-6">
                                <div className="group-105">
                                  <div className="ebene-7">
                                    <div className="group-106">
                                      <img className="path-11" alt="Path" src="/img/path-395.svg" />
                                      <div className="rectangle-15" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="text-wrapper-45">Warnings</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-60">
                        <div className="local-create-bulk-3">
                          <div className="table-new-3">
                            <div className="action-bar-8">
                              <div className="overlap-group-31">
                                <div className="action-bar-items-4">
                                  <div className="div-35">
                                    <div className="div-37">
                                      <img className="img-4" alt="Icon save floppy" src="/img/icon-save-floppy.svg" />
                                      <div className="action-7">Save</div>
                                    </div>
                                  </div>
                                  <div className="setting-7">
                                    <SearchInput icon={<IconSearchWrapper />} state="default" />
                                    <Shape99 className="img-4" />
                                    <img className="img-4" alt="Icon filter clear" src="/img/icon-filter-clear.svg" />
                                  </div>
                                </div>
                                <Divider className="divider-86" type="one-PX-black" />
                              </div>
                            </div>
                            <div className="div-38">
                              <div className="inputs-34">
                                <div className="div-36">
                                  <Checkbox className="checkbox-12-instance" color="white" stroke="#D8DADA" />
                                </div>
                                <div className="row-data-6">
                                  <div className="column-header-5">
                                    <div className="text-22">
                                      <div className="label-98">
                                        Error/
                                        <br />
                                        Warnings
                                      </div>
                                    </div>
                                    <Icon3 className="icon-3-instance" />
                                  </div>
                                  <div className="column-header-5">
                                    <div className="text-23">
                                      <div className="label-99">Latitude</div>
                                    </div>
                                  </div>
                                  <div className="column-header-5">
                                    <div className="text-23">
                                      <div className="text-wrapper-44">Longtitude</div>
                                    </div>
                                  </div>
                                  <div className="column-header-5">
                                    <div className="text-23">
                                      <div className="label-100">SR Name</div>
                                    </div>
                                  </div>
                                  <div className="column-header-5">
                                    <div className="text-23">
                                      <div className="label-99">PS Name</div>
                                    </div>
                                  </div>
                                  <div className="column-header-5">
                                    <div className="text-23">
                                      <div className="label-101">SR Radius (miles)</div>
                                    </div>
                                  </div>
                                  <div className="column-header-5">
                                    <div className="text-23">
                                      <div className="label-102">
                                        Center Line <br />
                                        (miles)
                                      </div>
                                    </div>
                                  </div>
                                  <div className="column-header-5">
                                    <div className="text-23">
                                      <div className="label-101">Sector Count</div>
                                    </div>
                                  </div>
                                  <div className="column-header-5">
                                    <div className="text-23">
                                      <div className="label-103">No. of RRH’s</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-87" type="three-PX-black" />
                            </div>
                            <div className="div-38">
                              <div className="inputs-34">
                                <div className="div-36">
                                  <Checkbox className="checkbox-12-instance" color="white" stroke="#D8DADA" />
                                </div>
                                <div className="row-data-6">
                                  <div className="error-warning-option-8">
                                    <div className="group-107">
                                      <div className="group-108">
                                        <div className="status-icon-small-11">
                                          <img className="path-10" alt="Path" src="/img/path-396.svg" />
                                          <div className="rectangle-14" />
                                        </div>
                                        <div className="label-104">99</div>
                                      </div>
                                      <div className="group-109">
                                        <div className="label-104">17</div>
                                        <div className="LOCAL-WARNING-ICON-7">
                                          <div className="group-105">
                                            <div className="ebene-7">
                                              <div className="group-110">
                                                <img className="path-11" alt="Path" src="/img/path-397.svg" />
                                                <div className="rectangle-15" />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-62">
                                        <div className="placeholder-text-70">47.2042</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-127">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-70">-12.982</div>
                                      </div>
                                      <IconClose50 className="atoms-icon-2019-close-17" />
                                    </div>
                                    <div className="elements-28" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-70">Lorem</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-70">Lorem</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-71">1</div>
                                      </div>
                                      <IconClose50 className="atoms-icon-2019-close-17" />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-72">12</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-73">3</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-73">5</div>
                                      </div>
                                      <IconClose50 className="atoms-icon-2019-close-17" />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-88" type="one-PX-grey" />
                            </div>
                            <div className="div-38">
                              <div className="inputs-34">
                                <div className="div-36">
                                  <Checkbox className="checkbox-12-instance" color="white" stroke="#D8DADA" />
                                </div>
                                <div className="row-data-6">
                                  <div className="error-warning-option-8">
                                    <div className="group-107">
                                      <div className="group-111">
                                        <div className="status-icon-small-11">
                                          <img className="path-10" alt="Path" src="/img/path-396.svg" />
                                          <div className="rectangle-14" />
                                        </div>
                                        <div className="label-105">99</div>
                                      </div>
                                      <div className="group-109">
                                        <div className="label-104">17</div>
                                        <div className="LOCAL-WARNING-ICON-7">
                                          <div className="group-105">
                                            <div className="ebene-7">
                                              <div className="group-110">
                                                <img className="path-11" alt="Path" src="/img/path-397.svg" />
                                                <div className="rectangle-15" />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="input-fields-127">
                                    <div className="frame-61">
                                      <div className="frame-62">
                                        <div className="placeholder-text-70">47.2042</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-28" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-70">-12.982</div>
                                      </div>
                                      <IconClose50 className="atoms-icon-2019-close-17" />
                                    </div>
                                    <div className="elements-27" />
                                  </div>

                                  <Link to="/Cbpm-11">
                                  <div className="input-fields-127">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-70">Borem</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-28" />
                                  </div>
                                  </Link>

                                  <div className="input-fields-127">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-70">Lorem</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-29" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-71">1</div>
                                      </div>
                                      <IconClose50 className="atoms-icon-2019-close-17" />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-72">12</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-73">3</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-128">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-73">5</div>
                                      </div>
                                      <IconClose50 className="atoms-icon-2019-close-17" />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-88" type="one-PX-grey" />
                            </div>
                            <div className="div-38">
                              <div className="inputs-34">
                                <div className="div-36">
                                  <Checkbox className="checkbox-12-instance" color="white" stroke="#D8DADA" />
                                </div>
                                <div className="row-data-6">
                                  <div className="error-warning-option-8">
                                    <div className="group-107">
                                      <div className="group-108">
                                        <div className="status-icon-small-11">
                                          <img className="path-10" alt="Path" src="/img/path-396.svg" />
                                          <div className="rectangle-14" />
                                        </div>
                                        <div className="label-104">99</div>
                                      </div>
                                      <div className="group-109">
                                        <div className="label-104">17</div>
                                        <div className="LOCAL-WARNING-ICON-7">
                                          <div className="group-105">
                                            <div className="ebene-7">
                                              <div className="group-110">
                                                <img className="path-11" alt="Path" src="/img/path-397.svg" />
                                                <div className="rectangle-15" />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="input-fields-129">
                                    <div className="frame-61">
                                      <div className="frame-62">
                                        <div className="placeholder-text-70">47.2042</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-30" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-70">-12.982</div>
                                      </div>
                                      <IconClose50 className="atoms-icon-2019-close-17" />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-70">Lorem</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-70">Lorem</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-71">1</div>
                                      </div>
                                      <IconClose50 className="atoms-icon-2019-close-17" />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-72">12</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-73">3</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-73">5</div>
                                      </div>
                                      <IconClose50 className="atoms-icon-2019-close-17" />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-88" type="one-PX-grey" />
                            </div>
                            <div className="div-38">
                              <div className="inputs-34">
                                <div className="div-36">
                                  <Checkbox className="checkbox-12-instance" color="white" stroke="#D8DADA" />
                                </div>
                                <div className="row-data-6">
                                  <div className="error-warning-option-9">
                                    <div className="group-112">
                                      <div className="group-113">
                                        <div className="status-icon-small-11">
                                          <img className="path-10" alt="Path" src="/img/path-402.svg" />
                                          <div className="rectangle-14" />
                                        </div>
                                        <div className="label-104">099</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-62">
                                        <div className="placeholder-text-70">47.2042</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-127">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-70">-12.982</div>
                                      </div>
                                      <IconClose50 className="atoms-icon-2019-close-17" />
                                    </div>
                                    <div className="elements-28" />
                                  </div>
                                  <div className="input-fields-127">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-70">Lorem</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-28" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-70">Lorem</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-71">1</div>
                                      </div>
                                      <IconClose50 className="atoms-icon-2019-close-17" />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-72">12</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-73">3</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-73">5</div>
                                      </div>
                                      <IconClose50 className="atoms-icon-2019-close-17" />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-88" type="one-PX-grey" />
                            </div>
                            <div className="div-38">
                              <div className="inputs-34">
                                <div className="div-36">
                                  <Checkbox className="checkbox-12-instance" color="white" stroke="#D8DADA" />
                                </div>
                                <div className="row-data-6">
                                  <div className="error-warning-option-10">
                                    <div className="group-112">
                                      <div className="group-113">
                                        <div className="status-icon-small-11">
                                          <img className="path-10" alt="Path" src="/img/path-396.svg" />
                                          <div className="rectangle-14" />
                                        </div>
                                        <div className="label-104">099</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-62">
                                        <div className="placeholder-text-70">47.2042</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-70">-12.982</div>
                                      </div>
                                      <IconClose50 className="atoms-icon-2019-close-17" />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-70">Lorem</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-127">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-70">Lorem</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-28" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-71">1</div>
                                      </div>
                                      <IconClose50 className="atoms-icon-2019-close-17" />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-72">12</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-73">3</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-73">5</div>
                                      </div>
                                      <IconClose50 className="atoms-icon-2019-close-17" />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-88" type="one-PX-grey" />
                            </div>
                            <div className="div-38">
                              <div className="inputs-34">
                                <div className="div-36">
                                  <Checkbox className="checkbox-12-instance" color="white" stroke="#D8DADA" />
                                </div>
                                <div className="row-data-6">
                                  <div className="error-warning-option-9">
                                    <div className="group-112">
                                      <div className="group-113">
                                        <div className="label-104">099</div>
                                        <div className="LOCAL-WARNING-ICON-7">
                                          <div className="group-105">
                                            <div className="ebene-7">
                                              <div className="group-114">
                                                <img className="path-11" alt="Path" src="/img/path-404.svg" />
                                                <div className="rectangle-15" />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-62">
                                        <div className="placeholder-text-70">47.2042</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-70">-12.982</div>
                                      </div>
                                      <IconClose50 className="atoms-icon-2019-close-17" />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-127">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-70">Lorem</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-29" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-70">Lorem</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-71">1</div>
                                      </div>
                                      <IconClose50 className="atoms-icon-2019-close-17" />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-72">12</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-73">3</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-73">5</div>
                                      </div>
                                      <IconClose50 className="atoms-icon-2019-close-17" />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-88" type="one-PX-grey" />
                            </div>
                            <div className="div-38">
                              <div className="inputs-34">
                                <div className="div-36">
                                  <Checkbox className="checkbox-12-instance" color="white" stroke="#D8DADA" />
                                </div>
                                <div className="row-data-6">
                                  <div className="error-warning-option-10">
                                    <div className="group-112">
                                      <div className="group-113">
                                        <div className="label-104">099</div>
                                        <div className="LOCAL-WARNING-ICON-7">
                                          <div className="group-105">
                                            <div className="ebene-7">
                                              <div className="group-110">
                                                <img className="path-11" alt="Path" src="/img/path-397.svg" />
                                                <div className="rectangle-15" />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-62">
                                        <div className="placeholder-text-70">47.2042</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-70">-12.982</div>
                                      </div>
                                      <IconClose50 className="atoms-icon-2019-close-17" />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-127">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-70">Lorem</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-29" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-70">Lorem</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-71">1</div>
                                      </div>
                                      <IconClose50 className="atoms-icon-2019-close-17" />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-72">12</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-73">3</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-73">5</div>
                                      </div>
                                      <IconClose50 className="atoms-icon-2019-close-17" />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-88" type="one-PX-grey" />
                            </div>
                            <div className="div-38">
                              <div className="inputs-34">
                                <div className="div-36">
                                  <Checkbox className="checkbox-12-instance" color="white" stroke="#D8DADA" />
                                </div>
                                <div className="row-data-6">
                                  <div className="error-warning-option-11">
                                    <div className="group-115">
                                      <div className="group-116">
                                        <div className="status-icon-small-12">
                                          <img className="path-9" alt="Path" src="/img/path-806.svg" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-62">
                                        <div className="placeholder-text-70">47.2042</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-70">-12.982</div>
                                      </div>
                                      <IconClose50 className="atoms-icon-2019-close-17" />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-70">Lorem</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-70">Lorem</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-71">1</div>
                                      </div>
                                      <IconClose50 className="atoms-icon-2019-close-17" />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-72">12</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-73">3</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-73">5</div>
                                      </div>
                                      <IconClose50 className="atoms-icon-2019-close-17" />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-88" type="one-PX-grey" />
                            </div>
                            <div className="div-38">
                              <div className="inputs-34">
                                <div className="div-36">
                                  <Checkbox className="checkbox-12-instance" color="white" stroke="#D8DADA" />
                                </div>
                                <div className="row-data-6">
                                  <div className="error-warning-option-12">
                                    <div className="group-115">
                                      <div className="group-116">
                                        <div className="status-icon-small-12">
                                          <img className="path-9" alt="Path" src="/img/path-807.svg" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-62">
                                        <div className="placeholder-text-70">47.2042</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-70">-12.982</div>
                                      </div>
                                      <IconClose50 className="atoms-icon-2019-close-17" />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-70">Lorem</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-70">Lorem</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-71">1</div>
                                      </div>
                                      <IconClose50 className="atoms-icon-2019-close-17" />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-72">12</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-73">3</div>
                                      </div>
                                      <IconClose />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                  <div className="input-fields-126">
                                    <div className="frame-61">
                                      <div className="frame-63">
                                        <div className="placeholder-text-73">5</div>
                                      </div>
                                      <IconClose50 className="atoms-icon-2019-close-17" />
                                    </div>
                                    <div className="elements-27" />
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-88" type="one-PX-grey" />
                            </div>
                            <div className="scrollbar-7">
                              <div className="scroller-7" />
                            </div>
                            <div className="pagination-5">
                              <div className="div-36">
                                <div className="div-33">
                                  <div className="input-fields-130">
                                    <div className="elements-31">
                                      <div className="frame-64">
                                        <div className="placeholder-text-74">10</div>
                                        <AtomsIcon2019Close94 className="ATOMS-ICON-12" color="black" />
                                      </div>
                                      <Divider className="divider-89" type="one-PX-grey" />
                                    </div>
                                  </div>
                                </div>
                                <p className="displaying-of-5">Displaying 10 of 30 Rows</p>
                              </div>
                              <div className="page-4">
                                <div className="pages-5">
                                  <div className="arrow-5">
                                    <AtomsIcon2019Close68 className="ATOMS-ICON-12" />
                                    <Divider className="divider-90" type="one-PX-grey" />
                                    <img
                                      className="ATOMS-ICON-12"
                                      alt="Atoms ICON"
                                      src="/img/atoms-icon-2019-close-406.svg"
                                    />
                                  </div>
                                  <div className="page-number-13">
                                    <div className="placeholder-text-75">1</div>
                                  </div>
                                  <div className="page-number-14">
                                    <div className="placeholder-text-76">2</div>
                                  </div>
                                  <div className="page-number-14">
                                    <div className="placeholder-text-76">3</div>
                                  </div>
                                  <div className="page-number-14">
                                    <div className="placeholder-text-76">4</div>
                                  </div>
                                  <div className="page-number-14">
                                    <div className="placeholder-text-76">5</div>
                                  </div>
                                  <div className="page-number-14">
                                    <div className="placeholder-text-77">6</div>
                                  </div>
                                  <div className="page-number-14">
                                    <div className="placeholder-text-76">7</div>
                                  </div>
                                  <div className="page-number-14">
                                    <div className="placeholder-text-77">8</div>
                                  </div>
                                  <div className="page-number-14">
                                    <div className="placeholder-text-77">9</div>
                                  </div>
                                  <div className="page-number-14">
                                    <div className="placeholder-text-78">10</div>
                                  </div>
                                  <div className="arrow-5">
                                    <img
                                      className="ATOMS-ICON-12"
                                      alt="Atoms ICON"
                                      src="/img/atoms-icon-2019-close-407.svg"
                                    />
                                    <Divider className="divider-90" type="one-PX-grey" />
                                    <AtomsIcon2019Close71 className="ATOMS-ICON-12" />
                                  </div>
                                </div>
                              </div>
                              <div className="div-36">
                                <div className="input-fields-131">
                                  <div className="page-number-15">
                                    <div className="placeholder-text-79">2</div>
                                  </div>
                                  <Divider className="divider-91" type="one-PX-grey" />
                                </div>
                                <div className="text-wrapper-46">/ 20</div>
                              </div>
                              <div className="button-16">
                                <div className="div-37">
                                  <div className="text-24">Export</div>
                                </div>
                                <div className="dropdown-5">
                                  <div className="rectangle-16" />
                                  <img
                                    className="icon-CTA-caret-open-4"
                                    alt="Icon CTA caret open"
                                    src="/img/icon-cta-caret-open-108.svg"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <Divider className="divider-92" type="one-PX-grey" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="navigation-action-11">
                    <div className="overlap-38">
                      <Line className="line-19" />
                      <Line className="line-20" />
                      <div className="label-106">Show All</div>
                      <div className="label-107">Show Next</div>
                      <div className="label-108">Save</div>
                    </div>
                  </div>
                </div>
              </div>
              <Divider className="divider-93" type="one-PX-grey" />
            </div>
          </div>
          <div className="user-interaction-9">
            <div className="group-117">
              <div className="group-118">
                <div className="overlap-group-32">
                  <div className="text-wrapper-47">CLICK</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
