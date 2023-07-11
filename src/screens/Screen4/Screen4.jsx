import React from "react";
import { Divider } from "../../components/Divider";
import { GlobalHeader } from "../../components/GlobalHeader";
import { SearchInput } from "../../components/SearchInput";
import { AtomsIcon2019Close2 } from "../../icons/AtomsIcon2019Close2";
import { Checkbox1 } from "../../icons/Checkbox1";
import { IconClose50 } from "../../icons/IconClose50";
import { IconCtaCaretClose27 } from "../../icons/IconCtaCaretClose27";
import { IconDownload } from "../../icons/IconDownload";
import { IconFilterOff } from "../../icons/IconFilterOff";
import { IconPlusLarge3 } from "../../icons/IconPlusLarge3";
import { IconUpload } from "../../icons/IconUpload";
import { Line } from "../../icons/Line";
import "./style.css";
import {Link} from "react-router-dom";

export const Screen4 = () => {
  return (
    <Link to="/Cbpm-07">
    <div className="screen-4">
      <div className="CBPM-4">
        <div className="group-23">
          <div className="overlap-12">
            <div className="group-24">
              <div className="group-23">
                <div className="template-create-bulk-wrapper">
                  <div className="template-create-bulk">
                    <div className="group-25">
                      <div className="group-26">
                        <div className="frame-24">
                          <div className="global-header-wrapper">
                            <div className="global-header-13">
                              <GlobalHeader
                                ATOMSAvatarDefaultClassName="global-header-15"
                                ATOMSIconWrapperGroupClassName="global-header-14"
                                searchInputIcon={<AtomsIcon2019Close2 className="atoms-icon-2019-close" />}
                                type="primary"
                              />
                              <GlobalHeader
                                tab="Home"
                                tab1="selected"
                                tab2="default"
                                tab3="Create/Upload Bulk Solutions"
                                tab4="Solution Manager"
                                tabClassNameOverride="global-header-16"
                                tabVisible1={false}
                                tabVisible2={false}
                                tabVisible3={false}
                                tabVisible5={false}
                                type="secondary"
                              />
                            </div>
                          </div>
                          <div className="local-swimlane-wrapper">
                            <div className="local-swimlane">
                              <div className="swimlane-4">
                                <Divider className="divider-41" type="one-PX-black" />
                                <div className="names-4">
                                  <div className="div-14">
                                    <div className="step-name-9">Solution Sites</div>
                                  </div>
                                  <IconCtaCaretClose27 className="icon-cta-caret-close-28" />
                                  <div className="div-14">
                                    <div className="step-name-10">Solution Details</div>
                                  </div>
                                  <IconCtaCaretClose27 className="icon-cta-caret-close-28" />
                                  <div className="div-14">
                                    <div className="step-name-10">Project Details</div>
                                  </div>
                                </div>
                                <Divider className="divider-42" type="one-PX-black" />
                              </div>
                            </div>
                          </div>
                          <div className="local-CBP-new-build">
                            <div className="group-27">
                              <div className="overlap-13">
                                <Divider className="divider-43" type="one-PX-grey" />
                                <div className="navigation-window-4">
                                  <div className="overlap-14">
                                    <div className="override-wrapper">
                                      <div className="override">
                                        <div className="text-wrapper-12">Override this</div>
                                      </div>
                                    </div>
                                    <div className="navigation-action-4">
                                      <div className="overlap-group-7">
                                        <Line className="line-5" />
                                        <Line className="line-6" />
                                        <div className="label-27">Show All</div>
                                        <div className="label-28">Show Next</div>
                                        <div className="label-29">Save</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="local-table-with-no">
                                  <div className="group-28">
                                    <div className="action-bar-2">
                                      <div className="overlap-group-8">
                                        <div className="frame-25">
                                          <div className="div-14">
                                            <div className="div-15">
                                              <IconPlusLarge3 className="icon-instance-node-5" />
                                              <div className="action">Add Record</div>
                                            </div>
                                            <div className="div-15">
                                              <IconUpload className="icon-instance-node-5" />
                                              <div className="action">Upload Solution</div>
                                            </div>
                                            <div className="div-15">
                                              <IconDownload className="icon-instance-node-5" />
                                              <div className="action">Download Bulk Solution Template</div>
                                            </div>
                                          </div>
                                          <div className="setting">
                                            <SearchInput
                                              className="search-input-3"
                                              frameClassNameOverride="search-input-2"
                                              state="disabled"
                                            />
                                            <IconFilterOff className="icon-instance-node-5" />
                                            <IconFilterOff className="icon-instance-node-5" />
                                          </div>
                                        </div>
                                        <div className="ATOMS-DIVIDERS-LINE" />
                                      </div>
                                    </div>
                                    <div className="group-29">
                                      <div className="click-here-to-upload-wrapper">
                                        <p className="click-here-to-upload">
                                          <span className="text-wrapper-13">Click here to </span>
                                          <span className="text-wrapper-14">upload</span>
                                          <span className="text-wrapper-13"> or </span>
                                          <span className="text-wrapper-14">download</span>
                                          <span className="text-wrapper-13">
                                            {" "}
                                            the bulk solution template. You can also add data by clicking on{" "}
                                          </span>
                                          <span className="text-wrapper-14">add record</span>
                                          <span className="text-wrapper-13"> from the table option</span>
                                        </p>
                                      </div>
                                    </div>
                                    <div className="table-row">
                                      <div className="frame-26">
                                        <div className="inputs-25">
                                          <Checkbox1 className="checkbox-1" />
                                          <div className="frame-27">
                                            <div className="table-item-2">
                                              <div className="label-30">
                                                Error/
                                                <br />
                                                Warnings
                                              </div>
                                            </div>
                                            <div className="table-item-2">
                                              <div className="label-31">Latitude</div>
                                            </div>
                                            <div className="table-item-2">
                                              <div className="label-32">Longtitude</div>
                                            </div>
                                            <div className="table-item-2">
                                              <div className="label-33">SR Name</div>
                                            </div>
                                            <div className="table-item-2">
                                              <div className="label-31">PS Name</div>
                                            </div>
                                            <div className="table-item-2">
                                              <div className="label-30">SR Radius</div>
                                            </div>
                                            <div className="table-item-2">
                                              <div className="label-30">Center Line</div>
                                            </div>
                                            <div className="table-item-2">
                                              <div className="label-30">Sector Count</div>
                                            </div>
                                            <div className="table-item-2">
                                              <div className="label-30">No. of RRH’s</div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="ATOMS-DIVIDERS-LINE-2" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="local-select">
                                  <div className="group-30">
                                    <div className="group-31">
                                      <div className="group-32">
                                        <div className="radio-button-2">
                                          <div className="ellipse-2" />
                                          <div className="placeholder-text-27">New Build</div>
                                        </div>
                                        <div className="radio-button-3">
                                          <div className="checkbox-1">
                                            <div className="ellipse-wrapper">
                                              <div className="ellipse-3" />
                                            </div>
                                          </div>
                                          <div className="placeholder-text-28">Modification</div>
                                        </div>
                                        <div className="lable">
                                          <div className="label-34">Solution Type</div>
                                        </div>
                                      </div>
                                      <div className="heading-6">
                                        <div className="placeholder-text-29">Solution&nbsp;&nbsp;Sites</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <Divider className="divider-44" type="one-PX-grey" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rectangle-4" />
            <div className="local-popup-upload">
              <div className="content-container-wrapper">
                <div className="content-container">
                  <div className="modal-items">
                    <div className="button-5">
                      <div className="div-15">
                        <div className="text-7">Cancel</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-items-2">
                    <div className="frame-28">
                      <h1 className="dialog-title">Upload Solution</h1>
                      <IconClose50 className="icon-instance-node-5" />
                    </div>
                    <Divider className="ASSET-LINE-THICK" type="one-PX-grey" />
                  </div>
                  <div className="inputs-26">
                    <div className="label-35">
                      <div className="label-36">Upload Solution</div>
                      <div className="required-4" />
                    </div>
                    <div className="input-fields-115">
                      <div className="elements-18">
                        <div className="frame-29">
                          <div className="placeholder-text-30">Upload document</div>
                          <div className="button-6">
                            <div className="div-15">
                              <div className="text-8">Upload</div>
                            </div>
                          </div>
                        </div>
                        <div className="divider-45" />
                      </div>
                    </div>
                  </div>
                  <div className="button-wrapper">
                    <div className="button-7">
                      <div className="div-15">
                        <div className="text-9">Download Bulk Edit Template</div>
                      </div>
                    </div>
                  </div>
                  <div className="local-upload-status">
                    <div className="group-33">
                      <div className="text-wrapper-15">Upload Status</div>
                    </div>
                    <div className="loader">
                      <div className="loader-bar">
                        <div className="color-area" />
                      </div>
                      <div className="text-wrapper-16">100%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};
