import React from "react";
import { Divider } from "../../components/Divider";
import { GlobalHeader } from "../../components/GlobalHeader";
import { SearchInput } from "../../components/SearchInput";
import { AtomsIcon2019Close2 } from "../../icons/AtomsIcon2019Close2";
import { AtomsIcon2019Close578 } from "../../icons/AtomsIcon2019Close578";
import { AtomsIcon2019Close579 } from "../../icons/AtomsIcon2019Close579";
import { AtomsIcon2019Close68 } from "../../icons/AtomsIcon2019Close68";
import { AtomsIcon2019Close71 } from "../../icons/AtomsIcon2019Close71";
import { AtomsIcon2019Close94 } from "../../icons/AtomsIcon2019Close94";
import { Checkbox } from "../../icons/Checkbox";
import { Icon3 } from "../../icons/Icon3";
import { IconCtaCaretClose27 } from "../../icons/IconCtaCaretClose27";
import { IconPlusLarge3 } from "../../icons/IconPlusLarge3";
import { Line } from "../../icons/Line";
import { Shape578 } from "../../icons/Shape578";
import { Shape99 } from "../../icons/Shape99";
import "./style.css";
import {Link} from "react-router-dom";

export const Screen10 = () => {
  return (
    <div className="screen-10">
      <div className="CBPM-10">
        <div className="overlap-30">
          <div className="template-create-bulk-6">
            <div className="div-21">
              <GlobalHeader
                ATOMSAvatarDefaultClassName="global-header-38"
                ATOMSIconWrapperGroupClassName="global-header-37"
                searchInputIcon={<AtomsIcon2019Close2 className="ATOMS-ICON-9" />}
                type="primary"
              />
              <GlobalHeader
                tab="Home"
                tab1="selected"
                tab2="default"
                tab3="Create/Upload Bulk Solutions"
                tab4="Solution Manager"
                tabClassNameOverride="global-header-39"
                tabVisible1={false}
                tabVisible2={false}
                tabVisible3={false}
                tabVisible5={false}
                type="secondary"
              />
            </div>
            <div className="div-22">
              <div className="swimlane-9">
                <Divider className="divider-64" type="one-PX-black" />
                <div className="names-9">
                  <div className="div-23">
                    <div className="step-name-20">Solution Sites</div>
                  </div>
                  <IconCtaCaretClose27 className="icon-cta-caret-close-28-instance" />
                  <div className="div-23">
                    <div className="step-name-21">Solution Details</div>
                  </div>
                  <IconCtaCaretClose27 className="icon-cta-caret-close-28-instance" />
                  <div className="div-23">
                    <div className="step-name-21">Project Details</div>
                  </div>
                </div>
                <Divider className="divider-65" type="one-PX-black" />
              </div>
            </div>
            <div className="div-22">
              <div className="navigation-window-9">
                <div className="overlap-31">
                  <div className="table-with-wrapper">
                    <div className="table-with">
                      <div className="local-select-6">
                        <div className="heading-11">
                          <div className="placeholder-text-45">Solution&nbsp;&nbsp;Sites</div>
                        </div>
                        <div className="fields-3">
                          <div className="lable-6">
                            <div className="label-70">Solution Type</div>
                          </div>
                          <div className="radio-button-11">
                            <div className="ellipse-13" />
                            <div className="placeholder-text-47">New Build</div>
                          </div>
                          <div className="radio-button-11">
                            <div className="checkbox-instance">
                              <div className="overlap-group-22">
                                <div className="ellipse-12" />
                              </div>
                            </div>
                            <div className="placeholder-text-46">Modification</div>
                          </div>
                          
                        </div>
                      </div>
                      <div className="local-cards">
                        <div className="title-and-icon">
                          <div className="text-wrapper-31">Validation Status</div>
                          <img className="ATOMS-ICON-10" alt="Icon" src="/img/icon-94.svg" />
                        </div>
                        <div className="status-cards">
                          <div className="local-status-card">
                            <h1 className="element">500</h1>
                            <div className="div-24">
                              <div className="text-wrapper-32">Total Projects</div>
                            </div>
                          </div>
                          <div className="local-status-card">
                            <div className="element">500</div>
                            <div className="div-24">
                              <div className="status-icon-small">
                                <img className="img" alt="Path" src="/img/path-807.svg" />
                              </div>
                              <div className="text-wrapper-33">Valid Projects</div>
                            </div>
                          </div>
                          <div className="local-status-card">
                            <div className="element">0</div>
                            <div className="icon-with-label">
                              <div className="status-icon-small-2">
                                <div className="path-copy-wrapper">
                                  <img className="path-copy" alt="Path copy" src="/img/path-4-copy-3-10.svg" />
                                </div>
                              </div>
                              <div className="text-wrapper-33">InValid Projects</div>
                            </div>
                          </div>
                          <div className="local-status-card">
                            <div className="element">0</div>
                            <div className="div-24">
                              <div className="status-icon-small-3">
                                <img className="path-2" alt="Path" src="/img/path-394.svg" />
                                <div className="rectangle-7" />
                              </div>
                              <div className="text-wrapper-33">Errors</div>
                            </div>
                          </div>
                          <div className="local-status-card">
                            <div className="element">09</div>
                            <div className="div-24">
                              <div className="LOCAL-WARNING-ICON">
                                <div className="group-80">
                                  <div className="ebene-4">
                                    <div className="group-81">
                                      <img className="path-3" alt="Path" src="/img/path-395.svg" />
                                      <div className="rectangle-8" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="text-wrapper-33">Warnings</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="local-create-bulk-wrapper">
                        <div className="local-create-bulk">
                          <div className="table-new">
                            <div className="action-bar-6">
                              <div className="overlap-group-23">
                                <div className="action-bar-items-2">
                                  <div className="div-23">
                                    <div className="div-25">
                                      <IconPlusLarge3 className="img-2" />
                                      <div className="action-5">Add Record</div>
                                    </div>
                                    <div className="div-25">
                                      <img className="img-2" alt="Icon upload" src="/img/icon-upload-11.svg" />
                                      <div className="action-5">Upload Solution</div>
                                    </div>
                                    <div className="div-25">
                                      <img className="img-2" alt="Icon download" src="/img/icon-download-11.svg" />
                                      <div className="action-5">Download Solution Template</div>
                                    </div>
                                  </div>
                                  <div className="setting-5">
                                    <SearchInput icon={<Shape578 className="ATOMS-ICON-9" />} state="default" />
                                    <Shape99 className="img-2" />
                                    <img className="img-2" alt="Icon filter clear" src="/img/icon-filter-clear.svg" />
                                  </div>
                                </div>
                                <Divider className="divider-66" type="one-PX-black" />
                              </div>
                            </div>
                            <div className="div-26">
                              <div className="inputs-32">
                                <Checkbox className="checkbox-instance" color="white" stroke="black" />
                                <div className="row-data-4">
                                  <div className="column-header-3">
                                    <div className="text-16">
                                      <div className="label-71">
                                        Error/
                                        <br />
                                        Warnings
                                      </div>
                                    </div>
                                    <Icon3 className="descending" />
                                  </div>
                                  <div className="column-header-3">
                                    <div className="text-17">
                                      <div className="label-72">Latitude</div>
                                    </div>
                                  </div>
                                  <div className="column-header-3">
                                    <div className="text-17">
                                      <div className="text-wrapper-32">Longtitude</div>
                                    </div>
                                  </div>
                                  <div className="column-header-3">
                                    <div className="text-17">
                                      <div className="label-73">SR Name</div>
                                    </div>
                                  </div>
                                  <div className="column-header-3">
                                    <div className="text-17">
                                      <div className="label-72">PS Name</div>
                                    </div>
                                  </div>
                                  <div className="column-header-3">
                                    <div className="text-17">
                                      <div className="label-74">SR Radius (miles)</div>
                                    </div>
                                  </div>
                                  <div className="column-header-3">
                                    <div className="text-17">
                                      <div className="label-75">
                                        Center Line <br />
                                        (miles)
                                      </div>
                                    </div>
                                  </div>
                                  <div className="column-header-3">
                                    <div className="text-17">
                                      <div className="label-74">Sector Count</div>
                                    </div>
                                  </div>
                                  <div className="column-header-3">
                                    <div className="text-17">
                                      <div className="label-76">No. of RRH’s</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-67" type="three-PX-black" />
                            </div>
                            <div className="div-26">
                              <div className="inputs-32">
                                <Checkbox className="checkbox-instance" color="white" stroke="black" />
                                <div className="row-data-4">
                                  <div className="group-wrapper-2">
                                    <div className="group-82">
                                      <div className="group-83">
                                        <div className="path-wrapper">
                                          <img className="img" alt="Path" src="/img/path-807.svg" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-77">47.2042</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-77">-12.9822</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-78">Lorem</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-77">Lorem Ipsum</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-79">1</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-79">12</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-79">3</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-79">5</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-68" type="one-PX-grey" />
                            </div>
                            <div className="div-26">
                              <div className="inputs-32">
                                <Checkbox className="checkbox-instance" color="white" stroke="black" />
                                <div className="row-data-4">
                                  <div className="group-wrapper-2">
                                    <div className="group-82">
                                      <div className="group-83">
                                        <div className="path-wrapper">
                                          <img className="img" alt="Path" src="/img/path-807.svg" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-77">47.2042</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-77">-12.9822</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-77">Lorem</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-77">Lorem Ipsum</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-79">1</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-79">12</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-79">3</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-79">5</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-68" type="one-PX-grey" />
                            </div>
                            <div className="div-26">
                              <div className="inputs-32">
                                <Checkbox className="checkbox-instance" color="white" stroke="black" />
                                <div className="row-data-4">
                                  <div className="group-wrapper-2">
                                    <div className="group-82">
                                      <div className="group-83">
                                        <div className="path-wrapper">
                                          <img className="img" alt="Path" src="/img/path-807.svg" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-77">47.2042</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-77">-12.9822</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-77">Lorem</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-77">Lorem Ipsum</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-79">1</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-79">12</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-79">3</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-79">5</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-68" type="one-PX-grey" />
                            </div>
                            <div className="div-26">
                              <div className="inputs-32">
                                <Checkbox className="checkbox-instance" color="white" stroke="black" />
                                <div className="row-data-4">
                                  <div className="group-wrapper-2">
                                    <div className="group-82">
                                      <div className="group-83">
                                        <div className="path-wrapper">
                                          <img className="img" alt="Path" src="/img/path-807.svg" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-77">47.2042</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-77">-12.9822</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-77">Lorem</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-77">Lorem Ipsum</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-79">1</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-79">12</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-79">3</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-79">5</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-68" type="one-PX-grey" />
                            </div>
                            <div className="div-26">
                              <div className="inputs-32">
                                <Checkbox className="checkbox-instance" color="white" stroke="black" />
                                <div className="row-data-4">
                                  <div className="cell-text-6">
                                    <div className="group-82">
                                      <div className="group-83">
                                        <div className="path-wrapper">
                                          <img className="img" alt="Path" src="/img/path-806.svg" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-77">47.2042</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-77">-12.9822</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-77">Lorem</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-77">Lorem Ipsum</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-79">1</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-79">12</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-79">3</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-79">5</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-68" type="one-PX-grey" />
                            </div>
                            <div className="div-26">
                              <div className="inputs-32">
                                <Checkbox className="checkbox-instance" color="white" stroke="black" />
                                <div className="row-data-4">
                                  <div className="group-wrapper-2">
                                    <div className="group-82">
                                      <div className="group-83">
                                        <div className="path-wrapper">
                                          <img className="img" alt="Path" src="/img/path-807.svg" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-77">47.2042</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-77">-12.9822</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-77">Lorem</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-77">Lorem Ipsum</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-79">1</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-79">12</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-79">3</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-79">5</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-68" type="one-PX-grey" />
                            </div>
                            <div className="div-26">
                              <div className="inputs-32">
                                <Checkbox className="checkbox-instance" color="white" stroke="black" />
                                <div className="row-data-4">
                                  <div className="error-warning-option">
                                    <div className="group-84">
                                      <div className="group-85">
                                        <div className="label-80">01</div>
                                        <div className="LOCAL-WARNING-ICON-2">
                                          <div className="group-80">
                                            <div className="ebene-4">
                                              <div className="group-86">
                                                <img className="path-3" alt="Path" src="/img/path-404.svg" />
                                                <div className="rectangle-8" />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-77">47.2042</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-77">-12.9822</div>
                                    </div>
                                  </div>
                                  <div className="text-icon-wrapper">
                                    <div className="text-icon-4">
                                      <div className="LOCAL-WARNING-ICON-3">
                                        <div className="group-87">
                                          <div className="ebene-5">
                                            <div className="group-88">
                                              <img className="path-4" alt="Path" src="/img/path-803.svg" />
                                              <div className="rectangle-9" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="label-81">Lorem</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-77">Lorem Ipsum</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-79">1</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-79">12</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-79">3</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-79">5</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-68" type="one-PX-grey" />
                            </div>
                            <div className="div-26">
                              <div className="inputs-32">
                                <Checkbox className="checkbox-instance" color="white" stroke="black" />
                                <div className="row-data-4">
                                  <div className="error-warning-option-2">
                                    <div className="group-82">
                                      <div className="group-83">
                                        <div className="path-wrapper">
                                          <img className="img" alt="Path" src="/img/path-806.svg" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-77">47.2042</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-77">-12.9822</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-77">Lorem</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-77">Lorem Ipsum</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-79">1</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-79">12</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-79">3</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-79">5</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-68" type="one-PX-grey" />
                            </div>
                            <div className="div-26">
                              <div className="inputs-32">
                                <Checkbox className="checkbox-instance" color="white" stroke="black" />
                                <div className="row-data-4">
                                  <div className="group-wrapper-2">
                                    <div className="group-82">
                                      <div className="group-83">
                                        <div className="path-wrapper">
                                          <img className="img" alt="Path" src="/img/path-807.svg" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-77">47.2042</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-77">12.9822</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-77">Lorem</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-77">Lorem Ipsum</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-79">1</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-79">12</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-79">3</div>
                                    </div>
                                  </div>
                                  <div className="cell-text-5">
                                    <div className="text-icon-3">
                                      <div className="label-79">5</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Divider className="divider-68" type="one-PX-grey" />
                            </div>
                            <div className="scrollbar-5">
                              <div className="scroller-5" />
                            </div>
                            <div className="pagination-3">
                              <div className="div-24">
                                <div className="div-21">
                                  <div className="input-fields-118">
                                    <div className="elements-21">
                                      <div className="frame-54">
                                        <div className="placeholder-text-48">10</div>
                                        <AtomsIcon2019Close94 className="ATOMS-ICON-10" color="black" />
                                      </div>
                                      <Divider className="divider-69" type="one-PX-grey" />
                                    </div>
                                  </div>
                                </div>
                                <p className="displaying-of-3">Displaying 10 of 30 Rows</p>
                              </div>
                              <div className="page-2">
                                <div className="pages-3">
                                  <div className="arrow-3">
                                    <AtomsIcon2019Close68 className="ATOMS-ICON-10" />
                                    <Divider className="divider-70" type="one-PX-grey" />
                                    <AtomsIcon2019Close578 className="ATOMS-ICON-10" />
                                  </div>
                                  <div className="page-number-7">
                                    <div className="placeholder-text-49">1</div>
                                  </div>
                                  <div className="page-number-8">
                                    <div className="placeholder-text-50">2</div>
                                  </div>
                                  <div className="page-number-8">
                                    <div className="placeholder-text-50">3</div>
                                  </div>
                                  <div className="page-number-8">
                                    <div className="placeholder-text-50">4</div>
                                  </div>
                                  <div className="page-number-8">
                                    <div className="placeholder-text-50">5</div>
                                  </div>
                                  <div className="page-number-8">
                                    <div className="placeholder-text-51">6</div>
                                  </div>
                                  <div className="page-number-8">
                                    <div className="placeholder-text-50">7</div>
                                  </div>
                                  <div className="page-number-8">
                                    <div className="placeholder-text-51">8</div>
                                  </div>
                                  <div className="page-number-8">
                                    <div className="placeholder-text-51">9</div>
                                  </div>
                                  <div className="page-number-8">
                                    <div className="placeholder-text-52">10</div>
                                  </div>
                                  <div className="arrow-3">
                                    <AtomsIcon2019Close579 className="ATOMS-ICON-10" />
                                    <Divider className="divider-70" type="one-PX-grey" />
                                    <AtomsIcon2019Close71 className="ATOMS-ICON-10" />
                                  </div>
                                </div>
                              </div>
                              <div className="div-24">
                                <div className="input-fields-119">
                                  <div className="page-number-9">
                                    <div className="placeholder-text-53">2</div>
                                  </div>
                                  <Divider className="divider-71" type="one-PX-grey" />
                                </div>
                                <div className="text-wrapper-34">/ 20</div>
                              </div>
                              <div className="button-14">
                                <div className="div-25">
                                  <div className="text-18">Export</div>
                                </div>
                                <div className="dropdown-3">
                                  <div className="rectangle-10" />
                                  <img
                                    className="icon-CTA-caret-open-2"
                                    alt="Icon CTA caret open"
                                    src="/img/icon-cta-caret-open-112.svg"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <Divider className="divider-72" type="one-PX-grey" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="navigation-action-9">
                    <div className="overlap-32">
                      <Line className="line-15" />
                      <Line className="line-16" />
                      <div className="label-82">Show All</div>
                      <div className="label-83"><Link to="/Cbpm-13" style={{color:'inherit', textDecoration:'none' }}>Show Next</Link></div>
                      <div className="label-84">Save</div>
                    </div>
                  </div>
                </div>
              </div>
              <Divider className="divider-73" type="one-PX-grey" />
            </div>
          </div>
          <div className="user-interaction-7">
            <div className="group-89">
              <div className="group-90">
                <div className="overlap-group-24">
                  <div className="text-wrapper-35">CLICK</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
