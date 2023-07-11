import React from "react";
import { Divider } from "../../components/Divider";
import { GlobalHeader } from "../../components/GlobalHeader";
import { IconSearchWrapper } from "../../components/IconSearchWrapper";
import { SearchInput } from "../../components/SearchInput";
import { AtomsIcon2019Close68 } from "../../icons/AtomsIcon2019Close68";
import { AtomsIcon2019Close71 } from "../../icons/AtomsIcon2019Close71";
import { AtomsIcon2019Close94 } from "../../icons/AtomsIcon2019Close94";
import { Checkbox } from "../../icons/Checkbox";
import { Icon3 } from "../../icons/Icon3";
import { IconCtaCaretClose27 } from "../../icons/IconCtaCaretClose27";
import { Line } from "../../icons/Line";
import { Shape99 } from "../../icons/Shape99";
import "./style.css";
import {Link} from "react-router-dom";

export const Screen13 = () => {
  return (
    <div className="screen-13">
      <div className="CBPM-13">
        <div className="overlap-39">
          <div className="template-create-bulk-9">
            <div className="div-39">
              <GlobalHeader
                ATOMSAvatarDefaultClassName="global-header-45"
                ATOMSIconWrapperGroupClassName="global-header-44"
                searchInputIcon={<IconSearchWrapper />}
                type="primary"
              />
              <GlobalHeader
                tab="Home"
                tab1="selected"
                tab2="default"
                tab3="Create/Upload Bulk Solutions"
                tab4="Solution Manager"
                tabClassNameOverride="global-header-46"
                tabVisible1={false}
                tabVisible2={false}
                tabVisible3={false}
                tabVisible5={false}
                type="secondary"
              />
            </div>
            <div className="div-40">
              <div className="swimlane-12">
                <Divider className="divider-94" type="one-PX-black" />
                <div className="names-12">
                  <div className="div-41">
                    <div className="step-name-26">Solution Sites</div>
                  </div>
                  <IconCtaCaretClose27 className="icon-right-3" />
                  <div className="div-41">
                    <div className="step-name-27">Solution Details</div>
                  </div>
                  <IconCtaCaretClose27 className="icon-right-3" />
                  <div className="div-41">
                    <div className="step-name-27">Project Details</div>
                  </div>
                </div>
                <Divider className="divider-95" type="one-PX-black" />
              </div>
            </div>
            <div className="div-40">
              <div className="navigation-window-12">
                <div className="overlap-40">
                  <div className="body-7">
                    <div className="table-with-4">
                      <div className="local-select-9">
                        <div className="heading-14">
                          <div className="placeholder-text-80">Solution&nbsp;&nbsp;Sites</div>
                        </div>
                        <div className="fields-6">
                          <div className="lable-9">
                            <div className="label-109">Solution Type</div>
                          </div>
                          <div className="radio-button-14">
                            <div className="ellipse-19" />
                            <div className="placeholder-text-82">New Build</div>
                          </div>
                          <div className="radio-button-14">
                            <div className="checkbox-5">
                              <div className="overlap-group-33">
                                <div className="ellipse-18" />
                              </div>
                            </div>
                            <div className="placeholder-text-81">Modification</div>
                          </div>
                          
                        </div>
                      </div>
                      <div className="local-cards-4">
                        <div className="title-and-icon-4">
                          <div className="text-wrapper-48">Validation Status</div>
                          <img className="ATOMS-ICON-13" alt="Icon" src="/img/icon-94.svg" />
                        </div>
                        <div className="status-cards-4">
                          <div className="local-status-card-4">
                            <h1 className="text-wrapper-49">500</h1>
                            <div className="div-42">
                              <div className="text-wrapper-50">Total Projects</div>
                            </div>
                          </div>
                          <div className="local-status-card-4">
                            <div className="text-wrapper-49">490</div>
                            <div className="div-42">
                              <div className="status-icon-small-13">
                                <img className="path-12" alt="Path" src="/img/path-393.svg" />
                              </div>
                              <div className="text-wrapper-51">Valid Projects</div>
                            </div>
                          </div>
                          <div className="local-status-card-4">
                            <div className="text-wrapper-49">10</div>
                            <div className="icon-with-label-4">
                              <div className="status-icon-small-14">
                                <div className="overlap-group-34">
                                  <img className="path-copy-4" alt="Path copy" src="/img/path-4-copy-3.svg" />
                                </div>
                              </div>
                              <div className="text-wrapper-51">InValid Projects</div>
                            </div>
                          </div>
                          <div className="local-status-card-4">
                            <div className="text-wrapper-49">327</div>
                            <div className="div-42">
                              <div className="status-icon-small-15">
                                <img className="path-14" alt="Path" src="/img/path-394.svg" />
                                <div className="rectangle-17" />
                              </div>
                              <div className="text-wrapper-51">Errors</div>
                            </div>
                          </div>
                          <div className="local-status-card-4">
                            <div className="text-wrapper-49">237</div>
                            <div className="div-42">
                              <div className="LOCAL-WARNING-ICON-8">
                                <div className="group-119">
                                  <div className="ebene-8">
                                    <div className="group-120">
                                      <img className="path-15" alt="Path" src="/img/path-395.svg" />
                                      <div className="rectangle-18" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="text-wrapper-51">Warnings</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-65">
                        <div className="local-create-bulk-4">
                          <div className="table-new-4">
                            <div className="action-bar-9">
                              <div className="overlap-group-35">
                                <div className="action-bar-items-5">
                                  <div className="div-41">
                                    <Link to="/Cbpm-10">
                                    <div className="div-43">
                                      <img className="img-5" alt="Icon edit" src="/img/icon-edit.svg" />
                                      <div className="action-8">Edit</div>
                                    </div>
                                    </Link>
                                  </div>
                                  <div className="setting-8">
                                    <SearchInput icon={<IconSearchWrapper />} state="default" />
                                    <Shape99 className="img-5" />
                                    <img className="img-5" alt="Icon filter clear" src="/img/icon-filter-clear.svg" />
                                  </div>
                                </div>
                                <Divider className="divider-96" type="one-PX-black" />
                              </div>
                            </div>
                            <div className="div-44">
                              <div className="inputs-35">
                                <div className="div-42">
                                  <Checkbox className="checkbox-5" color="black" stroke="black" />
                                </div>
                                <div className="row-data-7">
                                  <div className="column-header-6">
                                    <div className="text-25">
                                      <div className="label-110">
                                        Error/
                                        <br />
                                        Warnings
                                      </div>
                                    </div>
                                    <Icon3 className="descending-2" />
                                  </div>
                                  <div className="column-header-6">
                                    <div className="text-26">
                                      <div className="label-111">Latitude</div>
                                    </div>
                                  </div>
                                  <div className="column-header-6">
                                    <div className="text-26">
                                      <div className="text-wrapper-50">Longtitude</div>
                                    </div>
                                  </div>
                                  <div className="column-header-6">
                                    <div className="text-26">
                                      <div className="label-112">SR Name</div>
                                    </div>
                                  </div>
                                  <div className="column-header-6">
                                    <div className="text-26">
                                      <div className="label-111">PS Name</div>
                                    </div>
                                  </div>
                                  <div className="column-header-6">
                                    <div className="text-26">
                                      <div className="label-113">SR Radius (miles)</div>
                                    </div>
                                  </div>
                                  <div className="column-header-6">
                                    <div className="text-26">
                                      <div className="label-114">
                                        Center Line <br />
                                        (miles)
                                      </div>
                                    </div>
                                  </div>
                                  <div className="column-header-6">
                                    <div className="text-26">
                                      <div className="label-113">Sector Count</div>
                                    </div>
                                  </div>
                                  <div className="column-header-6">
                                    <div className="text-26">
                                      <div className="label-115">No. of RRH’s</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-97" type="three-PX-black" />
                            </div>
                            <div className="div-44">
                              <div className="inputs-36">
                                <div className="div-42">
                                  <Checkbox className="checkbox-5" color="black" stroke="black" />
                                </div>
                                <div className="row-data-7">
                                  <div className="error-warning-option-13">
                                    <div className="div-45">
                                      <div className="div-46">
                                        <div className="status-icon-small-16">
                                          <img className="path-14" alt="Path" src="/img/path-396.svg" />
                                          <div className="rectangle-17" />
                                        </div>
                                        <div className="label-116">130</div>
                                      </div>
                                      <div className="div-47">
                                        <div className="label-116">97</div>
                                        <div className="LOCAL-WARNING-ICON-9">
                                          <div className="group-119">
                                            <div className="ebene-8">
                                              <div className="group-121">
                                                <img className="path-15" alt="Path" src="/img/path-397.svg" />
                                                <div className="rectangle-18" />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-117">47.2042</div>
                                    </div>
                                  </div>
                                  <div className="table-4">
                                    <div className="text-icon-6">
                                      <img
                                        className="img-6"
                                        alt="Status icon small"
                                        src="/img/status-icon-small-36.svg"
                                      />
                                      <div className="label-118">-12.9822</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-119">Lorem</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-117">Lorem Ipsum</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-120">1</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-120">12</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-120">3</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-120">5</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-98" type="one-PX-grey" />
                            </div>
                            <div className="div-44">
                              <div className="inputs-36">
                                <div className="div-42">
                                  <Checkbox className="checkbox-5" color="black" stroke="black" />
                                </div>
                                <div className="row-data-7">
                                  <div className="error-warning-option-13">
                                    <div className="div-45">
                                      <div className="group-122">
                                        <div className="status-icon-small-16">
                                          <img className="path-14" alt="Path" src="/img/path-396.svg" />
                                          <div className="rectangle-17" />
                                        </div>
                                        <div className="label-121">34</div>
                                      </div>
                                      <div className="div-47">
                                        <div className="label-116">27</div>
                                        <div className="LOCAL-WARNING-ICON-9">
                                          <div className="group-119">
                                            <div className="ebene-8">
                                              <div className="group-121">
                                                <img className="path-15" alt="Path" src="/img/path-397.svg" />
                                                <div className="rectangle-18" />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="table-4">
                                    <div className="text-icon-6">
                                      <img
                                        className="img-6"
                                        alt="Status icon small"
                                        src="/img/status-icon-small-37.svg"
                                      />
                                      <div className="label-118">47.2042</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-117">-12.9822</div>
                                    </div>
                                  </div>
                                  <div className="table-4">
                                    <div className="text-icon-6">
                                      <img className="img-6" alt="Milestones" src="/img/milestones-6.svg" />
                                      <div className="label-118">Borem</div>
                                    </div>
                                  </div>
                                  <div className="table-4">
                                    <div className="text-icon-7">
                                      <div className="LOCAL-WARNING-ICON-10">
                                        <div className="group-123">
                                          <div className="ebene-9">
                                            <div className="group-124">
                                              <img className="path-16" alt="Path" src="/img/path-797.svg" />
                                              <div className="rectangle-19" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="label-118">Lorem Ipsum</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-120">1</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-120">12</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-120">3</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-120">5</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-98" type="one-PX-grey" />
                            </div>
                            <div className="div-44">
                              <div className="inputs-36">
                                <div className="div-42">
                                  <Checkbox className="checkbox-5" color="black" stroke="black" />
                                </div>
                                <div className="row-data-7">
                                  <div className="error-warning-option-13">
                                    <div className="div-45">
                                      <div className="div-46">
                                        <div className="status-icon-small-16">
                                          <img className="path-14" alt="Path" src="/img/path-396.svg" />
                                          <div className="rectangle-17" />
                                        </div>
                                        <div className="label-116">14</div>
                                      </div>
                                      <div className="div-47">
                                        <div className="label-116">23</div>
                                        <div className="LOCAL-WARNING-ICON-9">
                                          <div className="group-119">
                                            <div className="ebene-8">
                                              <div className="group-121">
                                                <img className="path-15" alt="Path" src="/img/path-397.svg" />
                                                <div className="rectangle-18" />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="table-4">
                                    <div className="text-icon-6">
                                      <img
                                        className="img-6"
                                        alt="Status icon small"
                                        src="/img/status-icon-small-37.svg"
                                      />
                                      <div className="label-118">47.2042</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-117">-12.9822</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-117">Lorem</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-117">Lorem Ipsum</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-120">1</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-120">12</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-120">3</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-120">5</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-98" type="one-PX-grey" />
                            </div>
                            <div className="div-44">
                              <div className="inputs-36">
                                <div className="div-42">
                                  <Checkbox className="checkbox-5" color="black" stroke="black" />
                                </div>
                                <div className="row-data-7">
                                  <div className="error-warning-option-14">
                                    <div className="group-125">
                                      <div className="group-126">
                                        <div className="status-icon-small-16">
                                          <img className="path-14" alt="Path" src="/img/path-396.svg" />
                                          <div className="rectangle-17" />
                                        </div>
                                        <div className="label-116">09</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-117">47.2042</div>
                                    </div>
                                  </div>
                                  <div className="table-4">
                                    <div className="text-icon-6">
                                      <img
                                        className="img-6"
                                        alt="Status icon small"
                                        src="/img/status-icon-small-36.svg"
                                      />
                                      <div className="label-118">-12.9822</div>
                                    </div>
                                  </div>
                                  <div className="table-4">
                                    <div className="text-icon-6">
                                      <img className="img-6" alt="Status icon small" src="/img/milestones-6.svg" />
                                      <div className="label-118">Lorem</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-117">Lorem Ipsum</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-120">1</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-120">12</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-120">3</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-120">5</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-98" type="one-PX-grey" />
                            </div>
                            <div className="div-44">
                              <div className="inputs-36">
                                <div className="div-42">
                                  <Checkbox className="checkbox-5" color="black" stroke="black" />
                                </div>
                                <div className="row-data-7">
                                  <div className="error-warning-option-15">
                                    <div className="group-125">
                                      <div className="group-126">
                                        <div className="status-icon-small-16">
                                          <img className="path-14" alt="Path" src="/img/path-402.svg" />
                                          <div className="rectangle-17" />
                                        </div>
                                        <div className="label-116">08</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-117">47.2042</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-117">-12.9822</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-117">Lorem</div>
                                    </div>
                                  </div>
                                  <div className="table-4">
                                    <div className="text-icon-8">
                                      <img
                                        className="img-6"
                                        alt="Status icon small"
                                        src="/img/status-icon-small-37.svg"
                                      />
                                      <div className="label-118">Lorem Ipsum</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-120">1</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-120">12</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-120">3</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-120">5</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-98" type="one-PX-grey" />
                            </div>
                            <div className="div-44">
                              <div className="inputs-36">
                                <div className="div-42">
                                  <Checkbox className="checkbox-5" color="black" stroke="black" />
                                </div>
                                <div className="row-data-7">
                                  <div className="error-warning-option-14">
                                    <div className="group-125">
                                      <div className="group-126">
                                        <div className="label-116">03</div>
                                        <div className="LOCAL-WARNING-ICON-9">
                                          <div className="group-119">
                                            <div className="ebene-8">
                                              <div className="group-121">
                                                <img className="path-15" alt="Path" src="/img/path-397.svg" />
                                                <div className="rectangle-18" />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-117">47.2042</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-117">-12.9822</div>
                                    </div>
                                  </div>
                                  <div className="table-4">
                                    <div className="text-icon-9">
                                      <div className="LOCAL-WARNING-ICON-10">
                                        <div className="group-123">
                                          <div className="ebene-9">
                                            <div className="group-127">
                                              <img className="path-16" alt="Path" src="/img/path-803.svg" />
                                              <div className="rectangle-19" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="label-118">Lorem</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-117">Lorem Ipsum</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-120">1</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-120">12</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-120">3</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-120">5</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-98" type="one-PX-grey" />
                            </div>
                            <div className="div-44">
                              <div className="inputs-36">
                                <div className="div-42">
                                  <Checkbox className="checkbox-5" color="black" stroke="black" />
                                </div>
                                <div className="row-data-7">
                                  <div className="error-warning-option-15">
                                    <div className="group-125">
                                      <div className="group-126">
                                        <div className="label-116">01</div>
                                        <div className="LOCAL-WARNING-ICON-9">
                                          <div className="group-119">
                                            <div className="ebene-8">
                                              <div className="group-128">
                                                <img className="path-15" alt="Path" src="/img/path-404.svg" />
                                                <div className="rectangle-18" />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-117">47.2042</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-117">-12.9822</div>
                                    </div>
                                  </div>
                                  <div className="table-4">
                                    <div className="text-icon-9">
                                      <div className="LOCAL-WARNING-ICON-10">
                                        <div className="group-123">
                                          <div className="ebene-9">
                                            <div className="group-127">
                                              <img className="path-16" alt="Path" src="/img/path-803.svg" />
                                              <div className="rectangle-19" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="label-118">Lorem</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-117">Lorem Ipsum</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-120">1</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-120">12</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-120">3</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-120">5</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-98" type="one-PX-grey" />
                            </div>
                            <div className="div-44">
                              <div className="inputs-36">
                                <div className="div-42">
                                  <Checkbox className="checkbox-5" color="black" stroke="black" />
                                </div>
                                <div className="row-data-7">
                                  <div className="error-warning-option-16">
                                    <div className="group-129">
                                      <div className="group-130">
                                        <div className="status-icon-small-17">
                                          <img className="path-12" alt="Path" src="/img/path-806.svg" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-117">47.2042</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-117">-12.9822</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-117">Lorem</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-117">Lorem Ipsum</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-120">1</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-120">12</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-120">3</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-120">5</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-98" type="one-PX-grey" />
                            </div>
                            <div className="div-44">
                              <div className="inputs-36">
                                <div className="div-42">
                                  <Checkbox className="checkbox-5" color="black" stroke="black" />
                                </div>
                                <div className="row-data-7">
                                  <div className="error-warning-option-17">
                                    <div className="group-129">
                                      <div className="group-130">
                                        <div className="status-icon-small-17">
                                          <img className="path-12" alt="Path" src="/img/path-807.svg" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-117">47.2042</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-117">12.9822</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-117">Lorem</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-117">Lorem Ipsum</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-120">1</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-120">12</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-120">3</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-7">
                                    <div className="text-icon-5">
                                      <div className="label-120">5</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-98" type="one-PX-grey" />
                            </div>
                            <div className="scrollbar-8">
                              <div className="scroller-8" />
                            </div>
                            <div className="pagination-6">
                              <div className="div-42">
                                <div className="div-39">
                                  <div className="input-fields-132">
                                    <div className="elements-32">
                                      <div className="frame-66">
                                        <div className="placeholder-text-83">10</div>
                                        <AtomsIcon2019Close94 className="ATOMS-ICON-13" color="black" />
                                      </div>
                                      <Divider className="divider-99" type="one-PX-grey" />
                                    </div>
                                  </div>
                                </div>
                                <p className="displaying-of-6">Displaying 10 of 30 Rows</p>
                              </div>
                              <div className="page-5">
                                <div className="pages-6">
                                  <div className="arrow-6">
                                    <AtomsIcon2019Close68 className="ATOMS-ICON-13" />
                                    <Divider className="divider-100" type="one-PX-grey" />
                                    <img
                                      className="ATOMS-ICON-13"
                                      alt="Atoms ICON"
                                      src="/img/atoms-icon-2019-close-406.svg"
                                    />
                                  </div>
                                  <div className="page-number-16">
                                    <div className="placeholder-text-84">1</div>
                                  </div>
                                  <div className="page-number-17">
                                    <div className="placeholder-text-85">2</div>
                                  </div>
                                  <div className="page-number-17">
                                    <div className="placeholder-text-85">3</div>
                                  </div>
                                  <div className="page-number-17">
                                    <div className="placeholder-text-85">4</div>
                                  </div>
                                  <div className="page-number-17">
                                    <div className="placeholder-text-85">5</div>
                                  </div>
                                  <div className="page-number-17">
                                    <div className="placeholder-text-86">6</div>
                                  </div>
                                  <div className="page-number-17">
                                    <div className="placeholder-text-85">7</div>
                                  </div>
                                  <div className="page-number-17">
                                    <div className="placeholder-text-86">8</div>
                                  </div>
                                  <div className="page-number-17">
                                    <div className="placeholder-text-86">9</div>
                                  </div>
                                  <div className="page-number-17">
                                    <div className="placeholder-text-87">10</div>
                                  </div>
                                  <div className="arrow-6">
                                    <img
                                      className="ATOMS-ICON-13"
                                      alt="Atoms ICON"
                                      src="/img/atoms-icon-2019-close-407.svg"
                                    />
                                    <Divider className="divider-100" type="one-PX-grey" />
                                    <AtomsIcon2019Close71 className="ATOMS-ICON-13" />
                                  </div>
                                </div>
                              </div>
                              <div className="div-42">
                                <div className="input-fields-133">
                                  <div className="page-number-18">
                                    <div className="placeholder-text-88">2</div>
                                  </div>
                                  <Divider className="divider-101" type="one-PX-grey" />
                                </div>
                                <div className="text-wrapper-52">/ 20</div>
                              </div>
                              <div className="button-17">
                                <div className="div-43">
                                  <div className="text-27">Export</div>
                                </div>
                                <div className="dropdown-6">
                                  <div className="rectangle-20" />
                                  <img
                                    className="icon-CTA-caret-open-5"
                                    alt="Icon CTA caret open"
                                    src="/img/icon-cta-caret-open-108.svg"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <Divider className="divider-102" type="one-PX-grey" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="navigation-action-12">
                    <div className="overlap-41">
                      <Line className="line-21" />
                      <Line className="line-22" />
                      <div className="label-122">Show All</div>
                      <div className="label-123">Show Next</div>
                      <div className="label-124">Save</div>
                    </div>
                  </div>
                </div>
              </div>
              <Divider className="divider-103" type="one-PX-grey" />
            </div>
          </div>
          <div className="user-interaction-10">
            <div className="group-131">
              <div className="group-132">
                <div className="overlap-group-36">
                  <div className="text-wrapper-53">CLICK</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
