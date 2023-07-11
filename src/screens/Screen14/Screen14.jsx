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
import { IconPlusLarge3 } from "../../icons/IconPlusLarge3";
import { Line } from "../../icons/Line";
import { Shape99 } from "../../icons/Shape99";
import "./style.css";
import {Link} from "react-router-dom";

export const Screen14 = () => {
  return (
    <div className="screen-14">
      <div className="CBPM-14">
        <div className="overlap-42">
          <div className="template-create-bulk-10">
            <div className="div-48">
              <GlobalHeader
                ATOMSAvatarDefaultClassName="global-header-48"
                ATOMSIconWrapperGroupClassName="global-header-47"
                searchInputIcon={<IconSearchWrapper />}
                type="primary"
              />
              <GlobalHeader
                tab="Home"
                tab1="selected"
                tab2="default"
                tab3="Create/Upload Bulk Solutions"
                tab4="Solution Manager"
                tabClassNameOverride="global-header-49"
                tabVisible1={false}
                tabVisible2={false}
                tabVisible3={false}
                tabVisible5={false}
                type="secondary"
              />
            </div>
            <div className="div-49">
              <div className="swimlane-13">
                <Divider className="divider-104" type="one-PX-black" />
                <div className="names-13">
                  <div className="div-50">
                    <div className="step-name-28">Solution Sites</div>
                  </div>
                  <IconCtaCaretClose27 className="icon-right-4" />
                  <div className="div-50">
                    <div className="step-name-29">Solution Details</div>
                  </div>
                  <IconCtaCaretClose27 className="icon-right-4" />
                  <div className="div-50">
                    <div className="step-name-29">Project Details</div>
                  </div>
                </div>
                <Divider className="divider-105" type="one-PX-black" />
              </div>
            </div>
            <div className="div-49">
              <div className="navigation-window-13">
                <div className="overlap-43">
                  <div className="body-8">
                    <div className="table-with-5">
                      <div className="local-select-10">
                        <div className="heading-15">
                          <div className="placeholder-text-89">Solution&nbsp;&nbsp;Sites</div>
                        </div>
                        <div className="fields-7">
                          <div className="lable-10">
                            <div className="label-125">Solution Type</div>
                          </div>
                          <div className="radio-button-15">
                            <div className="ellipse-21" />
                            <div className="placeholder-text-91">New Build</div>
                          </div>
                          <div className="radio-button-15">
                            
                            <div className="checkbox-6">
                              <div className="overlap-group-37">
                                <div className="ellipse-20" />
                              </div>
                            </div>
                            
                            <div className="placeholder-text-90">Modification</div>
                          </div>
                          
                        </div>
                      </div>
                      <div className="local-cards-5">
                        <div className="title-and-icon-5">
                          <div className="text-wrapper-54">Validation Status</div>
                          <img className="ATOMS-ICON-14" alt="Icon" src="/img/icon-94.svg" />
                        </div>
                        <div className="status-cards-5">
                          <div className="local-status-card-5">
                            <h1 className="text-wrapper-55">500</h1>
                            <div className="div-51">
                              <div className="text-wrapper-56">Total Projects</div>
                            </div>
                          </div>
                          <div className="local-status-card-5">
                            <div className="text-wrapper-55">490</div>
                            <div className="div-51">
                              <div className="status-icon-small-18">
                                <img className="path-17" alt="Path" src="/img/path-393.svg" />
                              </div>
                              <div className="text-wrapper-57">Valid Projects</div>
                            </div>
                          </div>
                          <div className="local-status-card-5">
                            <div className="text-wrapper-55">10</div>
                            <div className="icon-with-label-5">
                              <div className="status-icon-small-19">
                                <div className="overlap-group-38">
                                  <img className="path-copy-5" alt="Path copy" src="/img/path-4-copy-3.svg" />
                                </div>
                              </div>
                              <div className="text-wrapper-57">InValid Projects</div>
                            </div>
                          </div>
                          <div className="local-status-card-5">
                            <div className="text-wrapper-55">327</div>
                            <div className="div-51">
                              <div className="status-icon-small-20">
                                <img className="path-18" alt="Path" src="/img/path-394.svg" />
                                <div className="rectangle-21" />
                              </div>
                              <div className="text-wrapper-57">Errors</div>
                            </div>
                          </div>
                          <div className="local-status-card-5">
                            <div className="text-wrapper-55">237</div>
                            <div className="div-51">
                              <div className="LOCAL-WARNING-ICON-11">
                                <div className="group-133">
                                  <div className="ebene-10">
                                    <div className="group-134">
                                      <img className="path-19" alt="Path" src="/img/path-395.svg" />
                                      <div className="rectangle-22" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="text-wrapper-57">Warnings</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-67">
                        <div className="local-create-bulk-5">
                          <div className="table-new-5">
                            <div className="action-bar-10">
                              <div className="overlap-group-39">
                                <div className="action-bar-items-6">
                                  <div className="div-50">
                                    <div className="div-52">
                                      <IconPlusLarge3 className="img-7" />
                                      <div className="action-9">Add Record</div>
                                    </div>
                                    <div className="div-52">
                                      <img className="img-7" alt="Icon upload" src="/img/icon-upload-11.svg" />
                                      <div className="action-9">Upload Solution</div>
                                    </div>
                                    <div className="div-52">
                                      <img className="img-7" alt="Icon download" src="/img/icon-download-11.svg" />
                                      <div className="action-9">Download Solution Template</div>
                                    </div>
                                  </div>
                                  <div className="setting-9">
                                    <SearchInput icon={<IconSearchWrapper />} state="default" />
                                    <Shape99 className="img-7" />
                                    <img className="img-7" alt="Icon filter clear" src="/img/icon-filter-clear.svg" />
                                  </div>
                                </div>
                                <Divider className="divider-106" type="one-PX-black" />
                              </div>
                            </div>
                            <div className="div-53">
                              <div className="inputs-37">
                                <Link to="/Cbpm-09"><Checkbox className="checkbox-6" color="white" stroke="black" /></Link>
                                <div className="row-data-8">
                                  <div className="column-header-7">
                                    <div className="text-28">
                                      <div className="label-126">
                                        Error/
                                        <br />
                                        Warnings
                                      </div>
                                    </div>
                                    <Icon3 className="descending-3" />
                                  </div>
                                  <div className="column-header-7">
                                    <div className="text-29">
                                      <div className="label-127">Latitude</div>
                                    </div>
                                  </div>
                                  <div className="column-header-7">
                                    <div className="text-29">
                                      <div className="text-wrapper-56">Longtitude</div>
                                    </div>
                                  </div>
                                  <div className="column-header-7">
                                    <div className="text-29">
                                      <div className="label-128">SR Name</div>
                                    </div>
                                  </div>
                                  <div className="column-header-7">
                                    <div className="text-29">
                                      <div className="label-127">PS Name</div>
                                    </div>
                                  </div>
                                  <div className="column-header-7">
                                    <div className="text-29">
                                      <div className="label-129">SR Radius (miles)</div>
                                    </div>
                                  </div>
                                  <div className="column-header-7">
                                    <div className="text-29">
                                      <div className="label-130">
                                        Center Line <br />
                                        (miles)
                                      </div>
                                    </div>
                                  </div>
                                  <div className="column-header-7">
                                    <div className="text-29">
                                      <div className="label-129">Sector Count</div>
                                    </div>
                                  </div>
                                  <div className="column-header-7">
                                    <div className="text-29">
                                      <div className="label-131">No. of RRH’s</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-107" type="three-PX-black" />
                            </div>
                            <div className="div-53">
                              <div className="inputs-37">
                                <Checkbox className="checkbox-6" color="white" stroke="black" />
                                <div className="row-data-8">
                                  <div className="error-warning-option-18">
                                    <div className="div-54">
                                      <div className="div-55">
                                        <div className="status-icon-small-21">
                                          <img className="path-18" alt="Path" src="/img/path-396.svg" />
                                          <div className="rectangle-21" />
                                        </div>
                                        <div className="label-132">130</div>
                                      </div>
                                      <div className="div-56">
                                        <div className="label-132">97</div>
                                        <div className="LOCAL-WARNING-ICON-12">
                                          <div className="group-133">
                                            <div className="ebene-10">
                                              <div className="group-135">
                                                <img className="path-19" alt="Path" src="/img/path-397.svg" />
                                                <div className="rectangle-22" />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-133">47.2042</div>
                                    </div>
                                  </div>
                                  <div className="table-5">
                                    <div className="text-icon-11">
                                      <img
                                        className="img-8"
                                        alt="Status icon small"
                                        src="/img/status-icon-small-36.svg"
                                      />
                                      <div className="label-134">-12.9822</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-135">Lorem</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-133">Lorem Ipsum</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-136">1</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-136">12</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-136">3</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-136">5</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-108" type="one-PX-grey" />
                            </div>
                            <div className="div-53">
                              <div className="inputs-37">
                                <Checkbox className="checkbox-6" color="white" stroke="black" />
                                <div className="row-data-8">
                                  <div className="error-warning-option-18">
                                    <div className="div-54">
                                      <div className="group-136">
                                        <div className="status-icon-small-21">
                                          <img className="path-18" alt="Path" src="/img/path-396.svg" />
                                          <div className="rectangle-21" />
                                        </div>
                                        <div className="label-137">34</div>
                                      </div>
                                      <div className="div-56">
                                        <div className="label-132">27</div>
                                        <div className="LOCAL-WARNING-ICON-12">
                                          <div className="group-133">
                                            <div className="ebene-10">
                                              <div className="group-135">
                                                <img className="path-19" alt="Path" src="/img/path-397.svg" />
                                                <div className="rectangle-22" />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="table-5">
                                    <div className="text-icon-11">
                                      <img
                                        className="img-8"
                                        alt="Status icon small"
                                        src="/img/status-icon-small-37.svg"
                                      />
                                      <div className="label-134">47.2042</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-133">-12.9822</div>
                                    </div>
                                  </div>
                                  <div className="table-5">
                                    <div className="text-icon-11">
                                      <img className="img-8" alt="Milestones" src="/img/milestones-6.svg" />
                                      <div className="label-134">Borem</div>
                                    </div>
                                  </div>
                                  <div className="table-5">
                                    <div className="text-icon-12">
                                      <div className="LOCAL-WARNING-ICON-13">
                                        <div className="group-137">
                                          <div className="ebene-11">
                                            <div className="group-138">
                                              <img className="path-20" alt="Path" src="/img/path-797.svg" />
                                              <div className="rectangle-23" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="label-134">Lorem Ipsum</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-136">1</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-136">12</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-136">3</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-136">5</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-108" type="one-PX-grey" />
                            </div>
                            <div className="div-53">
                              <div className="inputs-37">
                                <Checkbox className="checkbox-6" color="white" stroke="black" />
                                <div className="row-data-8">
                                  <div className="error-warning-option-18">
                                    <div className="div-54">
                                      <div className="div-55">
                                        <div className="status-icon-small-21">
                                          <img className="path-18" alt="Path" src="/img/path-396.svg" />
                                          <div className="rectangle-21" />
                                        </div>
                                        <div className="label-132">14</div>
                                      </div>
                                      <div className="div-56">
                                        <div className="label-132">23</div>
                                        <div className="LOCAL-WARNING-ICON-12">
                                          <div className="group-133">
                                            <div className="ebene-10">
                                              <div className="group-135">
                                                <img className="path-19" alt="Path" src="/img/path-397.svg" />
                                                <div className="rectangle-22" />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="table-5">
                                    <div className="text-icon-11">
                                      <img
                                        className="img-8"
                                        alt="Status icon small"
                                        src="/img/status-icon-small-37.svg"
                                      />
                                      <div className="label-134">47.2042</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-133">-12.9822</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-133">Lorem</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-133">Lorem Ipsum</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-136">1</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-136">12</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-136">3</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-136">5</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-108" type="one-PX-grey" />
                            </div>
                            <div className="div-53">
                              <div className="inputs-37">
                                <Checkbox className="checkbox-6" color="white" stroke="black" />
                                <div className="row-data-8">
                                  <div className="error-warning-option-19">
                                    <div className="group-139">
                                      <div className="group-140">
                                        <div className="status-icon-small-21">
                                          <img className="path-18" alt="Path" src="/img/path-396.svg" />
                                          <div className="rectangle-21" />
                                        </div>
                                        <div className="label-132">09</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-133">47.2042</div>
                                    </div>
                                  </div>
                                  <div className="table-5">
                                    <div className="text-icon-11">
                                      <img
                                        className="img-8"
                                        alt="Status icon small"
                                        src="/img/status-icon-small-36.svg"
                                      />
                                      <div className="label-134">-12.9822</div>
                                    </div>
                                  </div>
                                  <div className="table-5">
                                    <div className="text-icon-11">
                                      <img className="img-8" alt="Status icon small" src="/img/milestones-6.svg" />
                                      <div className="label-134">Lorem</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-133">Lorem Ipsum</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-136">1</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-136">12</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-136">3</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-136">5</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-108" type="one-PX-grey" />
                            </div>
                            <div className="div-53">
                              <div className="inputs-37">
                                <Checkbox className="checkbox-6" color="white" stroke="black" />
                                <div className="row-data-8">
                                  <div className="error-warning-option-20">
                                    <div className="group-139">
                                      <div className="group-140">
                                        <div className="status-icon-small-21">
                                          <img className="path-18" alt="Path" src="/img/path-402.svg" />
                                          <div className="rectangle-21" />
                                        </div>
                                        <div className="label-132">08</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-133">47.2042</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-133">-12.9822</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-133">Lorem</div>
                                    </div>
                                  </div>
                                  <div className="table-5">
                                    <div className="text-icon-13">
                                      <img
                                        className="img-8"
                                        alt="Status icon small"
                                        src="/img/status-icon-small-37.svg"
                                      />
                                      <div className="label-134">Lorem Ipsum</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-136">1</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-136">12</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-136">3</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-136">5</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-108" type="one-PX-grey" />
                            </div>
                            <div className="div-53">
                              <div className="inputs-37">
                                <Checkbox className="checkbox-6" color="white" stroke="black" />
                                <div className="row-data-8">
                                  <div className="error-warning-option-19">
                                    <div className="group-139">
                                      <div className="group-140">
                                        <div className="label-132">03</div>
                                        <div className="LOCAL-WARNING-ICON-12">
                                          <div className="group-133">
                                            <div className="ebene-10">
                                              <div className="group-135">
                                                <img className="path-19" alt="Path" src="/img/path-397.svg" />
                                                <div className="rectangle-22" />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-133">47.2042</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-133">-12.9822</div>
                                    </div>
                                  </div>
                                  <div className="table-5">
                                    <div className="text-icon-14">
                                      <div className="LOCAL-WARNING-ICON-13">
                                        <div className="group-137">
                                          <div className="ebene-11">
                                            <div className="group-141">
                                              <img className="path-20" alt="Path" src="/img/path-803.svg" />
                                              <div className="rectangle-23" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="label-134">Lorem</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-133">Lorem Ipsum</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-136">1</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-136">12</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-136">3</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-136">5</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-108" type="one-PX-grey" />
                            </div>
                            <div className="div-53">
                              <div className="inputs-37">
                                <Checkbox className="checkbox-6" color="white" stroke="black" />
                                <div className="row-data-8">
                                  <div className="error-warning-option-20">
                                    <div className="group-139">
                                      <div className="group-140">
                                        <div className="label-132">01</div>
                                        <div className="LOCAL-WARNING-ICON-12">
                                          <div className="group-133">
                                            <div className="ebene-10">
                                              <div className="group-142">
                                                <img className="path-19" alt="Path" src="/img/path-404.svg" />
                                                <div className="rectangle-22" />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-133">47.2042</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-133">-12.9822</div>
                                    </div>
                                  </div>
                                  <div className="table-5">
                                    <div className="text-icon-14">
                                      <div className="LOCAL-WARNING-ICON-13">
                                        <div className="group-137">
                                          <div className="ebene-11">
                                            <div className="group-141">
                                              <img className="path-20" alt="Path" src="/img/path-803.svg" />
                                              <div className="rectangle-23" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="label-134">Lorem</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-133">Lorem Ipsum</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-136">1</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-136">12</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-136">3</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-136">5</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-108" type="one-PX-grey" />
                            </div>
                            <div className="div-53">
                              <div className="inputs-37">
                                <Checkbox className="checkbox-6" color="white" stroke="black" />
                                <div className="row-data-8">
                                  <div className="error-warning-option-21">
                                    <div className="group-143">
                                      <div className="group-144">
                                        <div className="status-icon-small-22">
                                          <img className="path-17" alt="Path" src="/img/path-806.svg" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-133">47.2042</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-133">-12.9822</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-133">Lorem</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-133">Lorem Ipsum</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-136">1</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-136">12</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-136">3</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-136">5</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-108" type="one-PX-grey" />
                            </div>
                            <div className="div-53">
                              <div className="inputs-37">
                                <Checkbox className="checkbox-6" color="white" stroke="black" />
                                <div className="row-data-8">
                                  <div className="error-warning-option-22">
                                    <div className="group-143">
                                      <div className="group-144">
                                        <div className="status-icon-small-22">
                                          <img className="path-17" alt="Path" src="/img/path-807.svg" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-133">47.2042</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-133">12.9822</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-133">Lorem</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-133">Lorem Ipsum</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-136">1</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-136">12</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-136">3</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-8">
                                    <div className="text-icon-10">
                                      <div className="label-136">5</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-108" type="one-PX-grey" />
                            </div>
                            <div className="scrollbar-9">
                              <div className="scroller-9" />
                            </div>
                            <div className="pagination-7">
                              <div className="div-51">
                                <div className="div-48">
                                  <div className="input-fields-134">
                                    <div className="elements-33">
                                      <div className="frame-68">
                                        <div className="placeholder-text-92">10</div>
                                        <AtomsIcon2019Close94 className="ATOMS-ICON-14" color="black" />
                                      </div>
                                      <Divider className="divider-109" type="one-PX-grey" />
                                    </div>
                                  </div>
                                </div>
                                <p className="displaying-of-7">Displaying 10 of 30 Rows</p>
                              </div>
                              <div className="page-6">
                                <div className="pages-7">
                                  <div className="arrow-7">
                                    <AtomsIcon2019Close68 className="ATOMS-ICON-14" />
                                    <Divider className="divider-110" type="one-PX-grey" />
                                    <img
                                      className="ATOMS-ICON-14"
                                      alt="Atoms ICON"
                                      src="/img/atoms-icon-2019-close-406.svg"
                                    />
                                  </div>
                                  <div className="page-number-19">
                                    <div className="placeholder-text-93">1</div>
                                  </div>
                                  <div className="page-number-20">
                                    <div className="placeholder-text-94">2</div>
                                  </div>
                                  <div className="page-number-20">
                                    <div className="placeholder-text-94">3</div>
                                  </div>
                                  <div className="page-number-20">
                                    <div className="placeholder-text-94">4</div>
                                  </div>
                                  <div className="page-number-20">
                                    <div className="placeholder-text-94">5</div>
                                  </div>
                                  <div className="page-number-20">
                                    <div className="placeholder-text-95">6</div>
                                  </div>
                                  <div className="page-number-20">
                                    <div className="placeholder-text-94">7</div>
                                  </div>
                                  <div className="page-number-20">
                                    <div className="placeholder-text-95">8</div>
                                  </div>
                                  <div className="page-number-20">
                                    <div className="placeholder-text-95">9</div>
                                  </div>
                                  <div className="page-number-20">
                                    <div className="placeholder-text-96">10</div>
                                  </div>
                                  <div className="arrow-7">
                                    <img
                                      className="ATOMS-ICON-14"
                                      alt="Atoms ICON"
                                      src="/img/atoms-icon-2019-close-407.svg"
                                    />
                                    <Divider className="divider-110" type="one-PX-grey" />
                                    <AtomsIcon2019Close71 className="ATOMS-ICON-14" />
                                  </div>
                                </div>
                              </div>
                              <div className="div-51">
                                <div className="input-fields-135">
                                  <div className="page-number-21">
                                    <div className="placeholder-text-97">2</div>
                                  </div>
                                  <Divider className="divider-111" type="one-PX-grey" />
                                </div>
                                <div className="text-wrapper-58">/ 20</div>
                              </div>
                              <div className="button-18">
                                <div className="div-52">
                                  <div className="text-30">Export</div>
                                </div>
                                <div className="dropdown-7">
                                  <div className="rectangle-24" />
                                  <img
                                    className="icon-CTA-caret-open-6"
                                    alt="Icon CTA caret open"
                                    src="/img/icon-cta-caret-open-108.svg"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <Divider className="divider-112" type="one-PX-grey" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="navigation-action-13">
                    <div className="overlap-44">
                      <Line className="line-23" />
                      <Line className="line-24" />
                      <div className="label-138">Show All</div>
                      <div className="label-139">Show Next</div>
                      <div className="label-140">Save</div>
                    </div>
                  </div>
                </div>
              </div>
              <Divider className="divider-113" type="one-PX-grey" />
            </div>
          </div>
          <div className="error-message">
            <div className="overlap-45">
              <p className="text-wrapper-59">SR name does not match</p>
            </div>
          </div>
          <div className="user-interaction-11">
            <div className="group-145">
              <div className="group-146">
                <div className="overlap-group-40">
                  <div className="text-wrapper-60">CLICK</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
