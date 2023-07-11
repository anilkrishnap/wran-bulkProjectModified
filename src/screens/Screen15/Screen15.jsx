import React from "react";
import { Divider } from "../../components/Divider";
import { GlobalHeader } from "../../components/GlobalHeader";
import { IconSearchWrapper } from "../../components/IconSearchWrapper";
import { SearchInput } from "../../components/SearchInput";
import { AtomsIcon2019Close2 } from "../../icons/AtomsIcon2019Close2";
import { Checkbox } from "../../icons/Checkbox";
import { Icon3 } from "../../icons/Icon3";
import { IconCtaCaretClose27 } from "../../icons/IconCtaCaretClose27";
import { IconPlusLarge3 } from "../../icons/IconPlusLarge3";
import { Line } from "../../icons/Line";
import { Shape99 } from "../../icons/Shape99";
import "./style.css";
import {Link} from "react-router-dom";

export const Screen15 = () => {
  return (
    <div className="screen-15">
      <div className="CBPM-15">
        <div className="overlap-46">
          <div className="template-create-bulk-11">
            <div className="div-57">
              <GlobalHeader
                ATOMSAvatarDefaultClassName="global-header-51"
                ATOMSIconWrapperGroupClassName="global-header-50"
                searchInputIcon={<AtomsIcon2019Close2 className="img-9" />}
                type="primary"
              />
              <GlobalHeader
                tab="Home"
                tab1="selected"
                tab2="default"
                tab3="Create/Upload Bulk Solutions"
                tab4="Solution Manager"
                tabClassNameOverride="global-header-52"
                tabVisible1={false}
                tabVisible2={false}
                tabVisible3={false}
                tabVisible5={false}
                type="secondary"
              />
            </div>
            <div className="div-58">
              <div className="swimlane-14">
                <Divider className="divider-114" type="one-PX-black" />
                <div className="names-14">
                  <div className="div-59">
                    <div className="step-name-30">Solution Sites</div>
                  </div>
                  <IconCtaCaretClose27 className="icon-right-5" />
                  <div className="div-59">
                    <div className="step-name-31">Solution Details</div>
                  </div>
                  <IconCtaCaretClose27 className="icon-right-5" />
                  <div className="div-59">
                    <div className="step-name-31">Project Details</div>
                  </div>
                </div>
                <Divider className="divider-115" type="one-PX-black" />
              </div>
            </div>
            <div className="div-58">
              <div className="navigation-window-14">
                <div className="overlap-47">
                  <div className="body-9">
                    <div className="table-with-6">
                      <div className="local-select-11">
                        <div className="heading-16">
                          <div className="placeholder-text-98">Solution&nbsp;&nbsp;Sites</div>
                        </div>
                        <div className="fields-8">
                          <div className="lable-11">
                            <div className="label-141">Solution Type</div>
                          </div>
                          <div className="radio-button-16">
                            <div className="ellipse-23" />
                            <div className="placeholder-text-100">New Build</div>
                          </div>
                          <div className="radio-button-16">
                            <div className="checkbox-7">
                              <div className="overlap-group-41">
                                <div className="ellipse-22" />
                              </div>
                            </div>
                            <div className="placeholder-text-99">Modification</div>
                          </div>
                         
                        </div>
                      </div>
                      <div className="local-cards-6">
                        <div className="title-and-icon-6">
                          <div className="text-wrapper-61">Validation Status</div>
                          <img className="img-10" alt="Icon" src="/img/icon-94.svg" />
                        </div>
                        <div className="status-cards-6">
                          <div className="local-status-card-6">
                            <h1 className="text-wrapper-62">500</h1>
                            <div className="div-60">
                              <div className="text-wrapper-63">Total Projects</div>
                            </div>
                          </div>
                          <div className="local-status-card-6">
                            <div className="text-wrapper-62">490</div>
                            <div className="div-60">
                              <div className="status-icon-small-23">
                                <img className="path-21" alt="Path" src="/img/path-393.svg" />
                              </div>
                              <div className="text-wrapper-64">Valid Projects</div>
                            </div>
                          </div>
                          <div className="local-status-card-6">
                            <div className="text-wrapper-62">10</div>
                            <div className="icon-with-label-6">
                              <div className="status-icon-small-24">
                                <div className="overlap-group-42">
                                  <img className="path-copy-6" alt="Path copy" src="/img/path-4-copy-3-5.svg" />
                                </div>
                              </div>
                              <div className="text-wrapper-64">InValid Projects</div>
                            </div>
                          </div>
                          <div className="local-status-card-6">
                            <div className="text-wrapper-62">327</div>
                            <div className="div-60">
                              <div className="status-icon-small-25">
                                <img className="path-22" alt="Path" src="/img/path-394.svg" />
                                <div className="rectangle-25" />
                              </div>
                              <div className="text-wrapper-64">Errors</div>
                            </div>
                          </div>
                          <div className="local-status-card-6">
                            <div className="text-wrapper-62">237</div>
                            <div className="div-60">
                              <div className="LOCAL-WARNING-ICON-14">
                                <div className="group-147">
                                  <div className="ebene-12">
                                    <div className="group-148">
                                      <img className="path-23" alt="Path" src="/img/path-768.svg" />
                                      <div className="rectangle-26" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="text-wrapper-64">Warnings</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-69">
                        <div className="local-create-bulk-6">
                          <div className="table-new-6">
                            <div className="action-bar-11">
                              <div className="overlap-group-43">
                                <div className="action-bar-items-7">
                                  <div className="div-59">
                                    <div className="div-61">
                                      <IconPlusLarge3 className="img-11" />
                                      <div className="action-10">Add Record</div>
                                    </div>
                                    <div className="div-61">
                                      <img className="img-11" alt="Icon upload" src="/img/icon-upload-11.svg" />
                                      <div className="action-10">Upload Solution</div>
                                    </div>
                                    <div className="div-61">
                                      <img className="img-11" alt="Icon download" src="/img/icon-download-11.svg" />
                                      <div className="action-10">Download Solution Template</div>
                                    </div>
                                  </div>
                                  <div className="setting-10">
                                    <SearchInput icon={<IconSearchWrapper />} state="default" />
                                    <Shape99 className="img-11" />
                                    <img className="img-11" alt="Icon filter clear" src="/img/icon-filter-clear.svg" />
                                  </div>
                                </div>
                                <Divider className="divider-116" type="one-PX-black" />
                              </div>
                            </div>
                            <div className="div-62">
                              <div className="inputs-38">
                                <Checkbox className="checkbox-7" color="white" stroke="black" />
                                <div className="row-data-9">
                                  <div className="column-header-8">
                                    <div className="text-31">
                                      <div className="label-142">
                                        Error/
                                        <br />
                                        Warnings
                                      </div>
                                    </div>
                                    <Icon3 className="descending-4" />
                                  </div>
                                  <div className="column-header-8">
                                    <div className="text-32">
                                      <div className="label-143">Latitude</div>
                                    </div>
                                  </div>
                                  <div className="column-header-8">
                                    <div className="text-32">
                                      <div className="text-wrapper-63">Longtitude</div>
                                    </div>
                                  </div>
                                  <div className="column-header-8">
                                    <div className="text-32">
                                      <div className="label-144">SR Name</div>
                                    </div>
                                  </div>
                                  <div className="column-header-8">
                                    <div className="text-32">
                                      <div className="label-143">PS Name</div>
                                    </div>
                                  </div>
                                  <div className="column-header-8">
                                    <div className="text-32">
                                      <div className="label-145">SR Radius (miles)</div>
                                    </div>
                                  </div>
                                  <div className="column-header-8">
                                    <div className="text-32">
                                      <div className="label-146">
                                        Center Line <br />
                                        (miles)
                                      </div>
                                    </div>
                                  </div>
                                  <div className="column-header-8">
                                    <div className="text-32">
                                      <div className="label-145">Sector Count</div>
                                    </div>
                                  </div>
                                  <div className="column-header-8">
                                    <div className="text-32">
                                      <div className="label-147">No. of RRH’s</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-117" type="three-PX-black" />
                            </div>
                            <div className="div-62">
                              <div className="inputs-38">
                                <Checkbox className="checkbox-7" color="white" stroke="black" />
                                <div className="row-data-9">
                                  <div className="error-warning-option-23">
                                    <div className="div-63">
                                      <div className="div-64">
                                        <div className="status-icon-small-26">
                                          <img className="path-22" alt="Path" src="/img/path-396.svg" />
                                          <div className="rectangle-25" />
                                        </div>
                                        <div className="label-148">130</div>
                                      </div>
                                      <div className="div-65">
                                        <div className="label-148">97</div>
                                        <div className="LOCAL-WARNING-ICON-15">
                                          <div className="group-147">
                                            <div className="ebene-12">
                                              <div className="group-149">
                                                <img className="path-23" alt="Path" src="/img/path-770.svg" />
                                                <div className="rectangle-26" />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-149">47.2042</div>
                                    </div>
                                  </div>
                                  <div className="table-6">
                                    
                                    <div className="text-icon-16">
                                      <img
                                        className="img-9"
                                        alt="Status icon small"
                                        src="/img/status-icon-small-24.svg"
                                      />
                                      <div className="label-150">-12.9822</div>
                                    </div>
                                    
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-151">Lorem</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-149">Lorem Ipsum</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-152">1</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-152">12</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-152">3</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-152">5</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-118" type="one-PX-grey" />
                            </div>
                            <div className="div-62">
                              <div className="inputs-38">
                                <Checkbox className="checkbox-7" color="white" stroke="black" />
                                <div className="row-data-9">
                                  <div className="error-warning-option-23">
                                    <div className="div-63">
                                      <div className="group-150">
                                        <div className="status-icon-small-26">
                                          <img className="path-22" alt="Path" src="/img/path-396.svg" />
                                          <div className="rectangle-25" />
                                        </div>
                                        <div className="label-153">34</div>
                                      </div>
                                      <div className="div-65">
                                        <div className="label-148">27</div>
                                        <div className="LOCAL-WARNING-ICON-15">
                                          <div className="group-147">
                                            <div className="ebene-12">
                                              <div className="group-149">
                                                <img className="path-23" alt="Path" src="/img/path-770.svg" />
                                                <div className="rectangle-26" />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="table-6">
                                    <div className="text-icon-16">
                                      <img
                                        className="img-9"
                                        alt="Status icon small"
                                        src="/img/status-icon-small-25.svg"
                                      />
                                      <div className="label-150">47.2042</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-149">-12.9822</div>
                                    </div>
                                  </div>
                                  <Link to="/Cbpm-08">
                                  <div className="table-6">
                                    <div className="text-icon-16">
                                      <img className="img-9" alt="Milestones" src="/img/milestones-4.svg" />
                                      <div className="label-150">Borem</div>
                                    </div>
                                  </div>
                                  </Link>
                                  <div className="table-6">
                                    <div className="text-icon-17">
                                      <div className="LOCAL-WARNING-ICON-16">
                                        <div className="group-151">
                                          <div className="ebene-13">
                                            <div className="group-152">
                                              <img className="path-24" alt="Path" src="/img/path-773.svg" />
                                              <div className="rectangle-27" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="label-150">Lorem Ipsum</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-152">1</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-152">12</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-152">3</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-152">5</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-118" type="one-PX-grey" />
                            </div>
                            <div className="div-62">
                              <div className="inputs-38">
                                <Checkbox className="checkbox-7" color="white" stroke="black" />
                                <div className="row-data-9">
                                  <div className="error-warning-option-23">
                                    <div className="div-63">
                                      <div className="div-64">
                                        <div className="status-icon-small-26">
                                          <img className="path-22" alt="Path" src="/img/path-396.svg" />
                                          <div className="rectangle-25" />
                                        </div>
                                        <div className="label-148">14</div>
                                      </div>
                                      <div className="div-65">
                                        <div className="label-148">23</div>
                                        <div className="LOCAL-WARNING-ICON-15">
                                          <div className="group-147">
                                            <div className="ebene-12">
                                              <div className="group-149">
                                                <img className="path-23" alt="Path" src="/img/path-770.svg" />
                                                <div className="rectangle-26" />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="table-6">
                                    <div className="text-icon-16">
                                      <img
                                        className="img-9"
                                        alt="Status icon small"
                                        src="/img/status-icon-small-25.svg"
                                      />
                                      <div className="label-150">47.2042</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-149">-12.9822</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-149">Lorem</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-149">Lorem Ipsum</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-152">1</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-152">12</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-152">3</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-152">5</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-118" type="one-PX-grey" />
                            </div>
                            <div className="div-62">
                              <div className="inputs-38">
                                <Checkbox className="checkbox-7" color="white" stroke="black" />
                                <div className="row-data-9">
                                  <div className="error-warning-option-24">
                                    <div className="group-153">
                                      <div className="group-154">
                                        <div className="status-icon-small-26">
                                          <img className="path-22" alt="Path" src="/img/path-396.svg" />
                                          <div className="rectangle-25" />
                                        </div>
                                        <div className="label-148">09</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-149">47.2042</div>
                                    </div>
                                  </div>
                                  <div className="table-6">
                                    <div className="text-icon-16">
                                      <img
                                        className="img-9"
                                        alt="Status icon small"
                                        src="/img/status-icon-small-24.svg"
                                      />
                                      <div className="label-150">-12.9822</div>
                                    </div>
                                  </div>
                                  <div className="table-6">
                                    <div className="text-icon-16">
                                      <img className="img-9" alt="Status icon small" src="/img/milestones-4.svg" />
                                      <div className="label-150">Lorem</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-149">Lorem Ipsum</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-152">1</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-152">12</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-152">3</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-152">5</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-118" type="one-PX-grey" />
                            </div>
                            <div className="div-62">
                              <div className="inputs-38">
                                <Checkbox className="checkbox-7" color="white" stroke="black" />
                                <div className="row-data-9">
                                  <div className="error-warning-option-25">
                                    <div className="group-153">
                                      <div className="group-154">
                                        <div className="status-icon-small-26">
                                          <img className="path-22" alt="Path" src="/img/path-402.svg" />
                                          <div className="rectangle-25" />
                                        </div>
                                        <div className="label-148">08</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-149">47.2042</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-149">-12.9822</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-149">Lorem</div>
                                    </div>
                                  </div>
                                  <div className="table-6">
                                    <div className="text-icon-18">
                                      <img
                                        className="img-9"
                                        alt="Status icon small"
                                        src="/img/status-icon-small-25.svg"
                                      />
                                      <div className="label-150">Lorem Ipsum</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-152">1</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-152">12</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-152">3</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-152">5</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-118" type="one-PX-grey" />
                            </div>
                            <div className="div-62">
                              <div className="inputs-38">
                                <Checkbox className="checkbox-7" color="white" stroke="black" />
                                <div className="row-data-9">
                                  <div className="error-warning-option-24">
                                    <div className="group-153">
                                      <div className="group-154">
                                        <div className="label-148">03</div>
                                        <div className="LOCAL-WARNING-ICON-15">
                                          <div className="group-147">
                                            <div className="ebene-12">
                                              <div className="group-149">
                                                <img className="path-23" alt="Path" src="/img/path-770.svg" />
                                                <div className="rectangle-26" />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-149">47.2042</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-149">-12.9822</div>
                                    </div>
                                  </div>
                                  <div className="table-6">
                                    <div className="text-icon-19">
                                      <div className="LOCAL-WARNING-ICON-16">
                                        <div className="group-151">
                                          <div className="ebene-13">
                                            <div className="group-155">
                                              <img className="path-24" alt="Path" src="/img/path-779.svg" />
                                              <div className="rectangle-27" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="label-150">Lorem</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-149">Lorem Ipsum</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-152">1</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-152">12</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-152">3</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-152">5</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-118" type="one-PX-grey" />
                            </div>
                            <div className="div-62">
                              <div className="inputs-38">
                                <Checkbox className="checkbox-7" color="white" stroke="black" />
                                <div className="row-data-9">
                                  <div className="error-warning-option-25">
                                    <div className="group-153">
                                      <div className="group-154">
                                        <div className="label-148">01</div>
                                        <div className="LOCAL-WARNING-ICON-15">
                                          <div className="group-147">
                                            <div className="ebene-12">
                                              <div className="group-156">
                                                <img className="path-23" alt="Path" src="/img/path-780.svg" />
                                                <div className="rectangle-26" />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-149">47.2042</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-149">-12.9822</div>
                                    </div>
                                  </div>
                                  <div className="table-6">
                                    <div className="text-icon-19">
                                      <div className="LOCAL-WARNING-ICON-16">
                                        <div className="group-151">
                                          <div className="ebene-13">
                                            <div className="group-155">
                                              <img className="path-24" alt="Path" src="/img/path-779.svg" />
                                              <div className="rectangle-27" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="label-150">Lorem</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-149">Lorem Ipsum</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-152">1</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-152">12</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-152">3</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-152">5</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-118" type="one-PX-grey" />
                            </div>
                            <div className="div-62">
                              <div className="inputs-38">
                                <Checkbox className="checkbox-7" color="white" stroke="black" />
                                <div className="row-data-9">
                                  <div className="error-warning-option-26">
                                    <div className="group-157">
                                      <div className="group-158">
                                        <div className="status-icon-small-27">
                                          <img className="path-21" alt="Path" src="/img/path-406.svg" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-149">47.2042</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-149">-12.9822</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-149">Lorem</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-149">Lorem Ipsum</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-152">1</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-152">12</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-152">3</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-152">5</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-118" type="one-PX-grey" />
                            </div>
                            <div className="div-62">
                              <div className="inputs-38">
                                <Checkbox className="checkbox-7" color="white" stroke="black" />
                                <div className="row-data-9">
                                  <div className="error-warning-option-27">
                                    <div className="group-157">
                                      <div className="group-158">
                                        <div className="status-icon-small-27">
                                          <img className="path-21" alt="Path" src="/img/path-393.svg" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-149">47.2042</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-149">12.9822</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-149">Lorem</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-149">Lorem Ipsum</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-152">1</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-152">12</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-152">3</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-9">
                                    <div className="text-icon-15">
                                      <div className="label-152">5</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-118" type="one-PX-grey" />
                            </div>
                            <div className="scrollbar-10">
                              <div className="scroller-10" />
                            </div>
                            <div className="pagination-8">
                              <div className="div-60">
                                <div className="div-57">
                                  <div className="input-fields-136">
                                    <div className="elements-34">
                                      <div className="frame-70">
                                        <div className="placeholder-text-101">10</div>
                                        <img
                                          className="img-10"
                                          alt="Atoms ICON"
                                          src="/img/atoms-icon-2019-close-387.svg"
                                        />
                                      </div>
                                      <Divider className="divider-119" type="one-PX-grey" />
                                    </div>
                                  </div>
                                </div>
                                <p className="displaying-of-8">Displaying 10 of 30 Rows</p>
                              </div>
                              <div className="page-7">
                                <div className="pages-8">
                                  <div className="arrow-8">
                                    <img className="img-10" alt="Atoms ICON" src="/img/atoms-icon-2019-close-61.svg" />
                                    <Divider className="divider-120" type="one-PX-grey" />
                                    <img className="img-10" alt="Atoms ICON" src="/img/atoms-icon-2019-close-389.svg" />
                                  </div>
                                  <div className="page-number-22">
                                    <div className="placeholder-text-102">1</div>
                                  </div>
                                  <div className="page-number-23">
                                    <div className="placeholder-text-103">2</div>
                                  </div>
                                  <div className="page-number-23">
                                    <div className="placeholder-text-103">3</div>
                                  </div>
                                  <div className="page-number-23">
                                    <div className="placeholder-text-103">4</div>
                                  </div>
                                  <div className="page-number-23">
                                    <div className="placeholder-text-103">5</div>
                                  </div>
                                  <div className="page-number-23">
                                    <div className="placeholder-text-104">6</div>
                                  </div>
                                  <div className="page-number-23">
                                    <div className="placeholder-text-103">7</div>
                                  </div>
                                  <div className="page-number-23">
                                    <div className="placeholder-text-104">8</div>
                                  </div>
                                  <div className="page-number-23">
                                    <div className="placeholder-text-104">9</div>
                                  </div>
                                  <div className="page-number-23">
                                    <div className="placeholder-text-105">10</div>
                                  </div>
                                  <div className="arrow-8">
                                    <img className="img-10" alt="Atoms ICON" src="/img/atoms-icon-2019-close-390.svg" />
                                    <Divider className="divider-120" type="one-PX-grey" />
                                    <img className="img-10" alt="Atoms ICON" src="/img/atoms-icon-2019-close-64.svg" />
                                  </div>
                                </div>
                              </div>
                              <div className="div-60">
                                <div className="input-fields-137">
                                  <div className="page-number-24">
                                    <div className="placeholder-text-106">2</div>
                                  </div>
                                  <Divider className="divider-121" type="one-PX-grey" />
                                </div>
                                <div className="text-wrapper-65">/ 20</div>
                              </div>
                              <div className="button-19">
                                <div className="div-61">
                                  <div className="text-33">Export</div>
                                </div>
                                <div className="dropdown-8">
                                  <div className="rectangle-28" />
                                  <img
                                    className="icon-CTA-caret-open-7"
                                    alt="Icon CTA caret open"
                                    src="/img/icon-cta-caret-open-90.svg"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <Divider className="divider-122" type="one-PX-grey" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="navigation-action-14">
                    <div className="overlap-48">
                      <Line className="line-25" />
                      <Line className="line-26" />
                      <div className="label-154">Show All</div>
                      <div className="label-155">Show Next</div>
                      <div className="label-156">Save</div>
                    </div>
                  </div>
                </div>
              </div>
              <Divider className="divider-123" type="one-PX-grey" />
            </div>
          </div>
          <div className="user-interaction-12">
            <div className="group-159">
              <div className="group-160">
                <div className="overlap-group-44">
                  {/* <div className="text-wrapper-66">CLICK</div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
