import React from "react";
import { Link } from "react-router-dom";
import { Divider } from "../../components/Divider";
import { GlobalHeader } from "../../components/GlobalHeader";
import { SearchInput } from "../../components/SearchInput";
import { AtomsIcon2019Close2 } from "../../icons/AtomsIcon2019Close2";
import { Checkbox1 } from "../../icons/Checkbox1";
import { IconCtaCaretClose27 } from "../../icons/IconCtaCaretClose27";
import { IconDownload } from "../../icons/IconDownload";
import { IconFilterOff } from "../../icons/IconFilterOff";
import { IconPlusLarge3 } from "../../icons/IconPlusLarge3";
import { IconUpload } from "../../icons/IconUpload";
import { Line } from "../../icons/Line";
import "./style.css";

export const Screen7 = () => {
  return (
    <div className="screen-7">
      <div className="CBPM-7">
        <div className="overlap-19">
          <div className="template-create-bulk-3">
            <div className="group-39">
              <div className="group-40">
                <div className="frame-32">
                  <div className="frame-33">
                    <div className="global-header-25">
                      <GlobalHeader
                        ATOMSAvatarDefaultClassName="global-header-27"
                        ATOMSIconWrapperGroupClassName="global-header-26"
                        searchInputIcon={<AtomsIcon2019Close2 className="atoms-icon-2019-close-2-instance" />}
                        type="primary"
                      />
                      <GlobalHeader
                        tab="Home"
                        tab1="selected"
                        tab2="default"
                        tab3="Create/Upload Bulk Solutions"
                        tab4="Solution Manager"
                        tabClassNameOverride="global-header-28"
                        tabVisible1={false}
                        tabVisible2={false}
                        tabVisible3={false}
                        tabVisible5={false}
                        type="secondary"
                      />
                    </div>
                  </div>
                  <div className="group-41">
                    <div className="local-swimlane-3">
                      <div className="swimlane-6">
                        <Divider className="divider-50" type="one-PX-black" />
                        <div className="names-6">
                          <div className="div-16">
                            <div className="step-name-14">Solution Sites</div>
                          </div>
                          <IconCtaCaretClose27 className="icon-cta-caret-close-27-instance" />
                          <div className="div-16">
                            <div className="step-name-15">Solution Details</div>
                          </div>
                          <IconCtaCaretClose27 className="icon-cta-caret-close-27-instance" />
                          <div className="div-16">
                            <div className="step-name-15">Project Details</div>
                          </div>
                        </div>
                        <Divider className="divider-51" type="one-PX-black" />
                      </div>
                    </div>
                  </div>
                  <div className="local-CBP-new-build-3">
                    <div className="group-42">
                      <div className="overlap-20">
                        <Divider className="divider-52" type="one-PX-grey" />
                        <div className="navigation-window-6">
                          <div className="overlap-21">
                            <div className="body-2">
                              <div className="override-2">
                                <div className="text-wrapper-18">Override this</div>
                              </div>
                            </div>
                            <div className="navigation-action-6">
                              <div className="overlap-group-11">
                                <Line className="line-9" />
                                <Line className="line-10" />
                                <div className="label-41">Show All</div>
                                <div className="label-42">Show Next</div>
                                <div className="label-43">Save</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="local-table-with-no-2">
                          <div className="group-43">
                            <div className="action-bar-3">
                              <div className="overlap-group-12">
                                <div className="frame-34">
                                  <div className="div-16">
                                    <div className="table-action">
                                      <IconPlusLarge3 className="icon-instance-node-7" />
                                      <div className="action-2">Add Record</div>
                                    </div>
                                    <Link className="table-action" to="/cbpm-4">
                                      <IconUpload className="icon-instance-node-7" />
                                      <div className="action-2">Upload Solution</div>
                                    </Link>
                                    <div className="table-action">
                                      <IconDownload className="icon-instance-node-7" />
                                      <div className="action-2">Download Bulk Solution Template</div>
                                    </div>
                                  </div>
                                  <div className="setting-2">
                                    <SearchInput
                                      className="search-input-4"
                                      frameClassNameOverride="search-input-5"
                                      state="disabled"
                                    />
                                    <IconFilterOff className="icon-instance-node-7" />
                                    <IconFilterOff className="icon-instance-node-7" />
                                  </div>
                                </div>
                                <div className="ATOMS-DIVIDERS-LINE-3" />
                              </div>
                            </div>
                            <div className="group-44">
                              <div className="p-wrapper">
                                <p className="click-here-to-upload-2">
                                  <span className="text-wrapper-19">Click here to </span>
                                  <span className="text-wrapper-20">upload</span>
                                  <span className="text-wrapper-19"> or </span>
                                  <span className="text-wrapper-20">download</span>
                                  <span className="text-wrapper-19">
                                    {" "}
                                    the bulk solution template. You can also add data by clicking on{" "}
                                  </span>
                                  <span className="text-wrapper-20">add record</span>
                                  <span className="text-wrapper-19"> from the table option</span>
                                </p>
                              </div>
                            </div>
                            <div className="table-row-2">
                              <div className="frame-35">
                                <div className="inputs-27">
                                  <Checkbox1 className="checkbox-1-instance" />
                                  <div className="frame-36">
                                    <div className="table-item-3">
                                      <div className="label-44">
                                        Error/
                                        <br />
                                        Warnings
                                      </div>
                                    </div>
                                    <div className="table-item-3">
                                      <div className="label-45">Latitude</div>
                                    </div>
                                    <div className="table-item-3">
                                      <div className="label-46">Longtitude</div>
                                    </div>
                                    <div className="table-item-3">
                                      <div className="label-47">SR Name</div>
                                    </div>
                                    <div className="table-item-3">
                                      <div className="label-45">PS Name</div>
                                    </div>
                                    <div className="table-item-3">
                                      <div className="label-44">SR Radius</div>
                                    </div>
                                    <div className="table-item-3">
                                      <div className="label-44">Center Line</div>
                                    </div>
                                    <div className="table-item-3">
                                      <div className="label-44">Sector Count</div>
                                    </div>
                                    <div className="table-item-3">
                                      <div className="label-44">No. of RRH’s</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="ATOMS-DIVIDERS-LINE-4" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="local-select-3">
                          <div className="group-45">
                            <div className="group-46">
                              <div className="group-47">
                                <div className="radio-button-5">
                                  <div className="ellipse-6" />
                                  <div className="placeholder-text-34">New Build</div>
                                </div>
                                <div className="radio-button-6">
                                  <div className="checkbox-1-instance">
                                    <div className="overlap-group-13">
                                      <div className="ellipse-7" />
                                    </div>
                                  </div>
                                  <div className="placeholder-text-35">Modification</div>
                                </div>
                                <div className="lable-3">
                                  <div className="label-48">Solution Type</div>
                                </div>
                              </div>
                              <div className="heading-8">
                                <div className="placeholder-text-36">Solution&nbsp;&nbsp;Sites</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Divider className="divider-53" type="one-PX-grey" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="user-interaction-5">
            <div className="group-48">
              <div className="group-49">
                <div className="overlap-group-14">
                  <div className="text-wrapper-21">CLICK</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
