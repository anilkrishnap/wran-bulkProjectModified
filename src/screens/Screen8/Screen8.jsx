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

export const Screen8 = () => {
  return (
    <Link to="/Cbpm-6">
    <div className="screen-8">
      <div className="CBPM-8">
        <div className="group-50">
          <div className="overlap-22">
            <div className="group-51">
              <div className="group-50">
                <div className="frame-37">
                  <div className="template-create-bulk-4">
                    <div className="group-52">
                      <div className="group-53">
                        <div className="frame-38">
                          <div className="frame-39">
                            <div className="global-header-29">
                              <GlobalHeader
                                ATOMSAvatarDefaultClassName="global-header-31"
                                ATOMSIconWrapperGroupClassName="global-header-30"
                                searchInputIcon={<AtomsIcon2019Close2 className="atoms-icon-2019-close-instance" />}
                                type="primary"
                              />
                              <GlobalHeader
                                tab="Home"
                                tab1="selected"
                                tab2="default"
                                tab3="Create/Upload Bulk Solutions"
                                tab4="Solution Manager"
                                tabClassNameOverride="global-header-32"
                                tabVisible1={false}
                                tabVisible2={false}
                                tabVisible3={false}
                                tabVisible5={false}
                                type="secondary"
                              />
                            </div>
                          </div>
                          <div className="group-54">
                            <div className="local-swimlane-4">
                              <div className="swimlane-7">
                                <Divider className="divider-54" type="one-PX-black" />
                                <div className="names-7">
                                  <div className="div-17">
                                    <div className="step-name-16">Solution Sites</div>
                                  </div>
                                  <IconCtaCaretClose27 className="icon-right-directional-arrow-instance" />
                                  <div className="div-17">
                                    <div className="step-name-17">Solution Details</div>
                                  </div>
                                  <IconCtaCaretClose27 className="icon-right-directional-arrow-instance" />
                                  <div className="div-17">
                                    <div className="step-name-17">Project Details</div>
                                  </div>
                                </div>
                                <Divider className="divider-55" type="one-PX-black" />
                              </div>
                            </div>
                          </div>
                          <div className="local-CBP-new-build-4">
                            <div className="group-55">
                              <div className="overlap-23">
                                <Divider className="divider-56" type="one-PX-grey" />
                                <div className="navigation-window-7">
                                  <div className="overlap-24">
                                    <div className="body-3">
                                      <div className="override-3">
                                        <div className="text-wrapper-22">Override this</div>
                                      </div>
                                    </div>
                                    <div className="navigation-action-7">
                                      <div className="overlap-group-15">
                                        <Line className="line-11" />
                                        <Line className="line-12" />
                                        <div className="label-49">Show All</div>
                                        <div className="label-50">Show Next</div>
                                        <div className="label-51">Save</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="local-table-with-no-3">
                                  <div className="group-56">
                                    <div className="action-bar-4">
                                      <div className="overlap-group-16">
                                        <div className="frame-40">
                                          <div className="div-17">
                                            <div className="div-18">
                                              <IconPlusLarge3 className="icon-instance-node-8" />
                                              <div className="action-3">Add Record</div>
                                            </div>
                                            <div className="div-18">
                                              <IconUpload className="icon-instance-node-8" />
                                              <div className="action-3">Upload Solution</div>
                                            </div>
                                            <div className="div-18">
                                              <IconDownload className="icon-instance-node-8" />
                                              <div className="action-3">Download Bulk Solution Template</div>
                                            </div>
                                          </div>
                                          <div className="setting-3">
                                            <SearchInput
                                              className="search-input-6"
                                              frameClassNameOverride="search-input-7"
                                              state="disabled"
                                            />
                                            <IconFilterOff className="icon-instance-node-8" />
                                            <IconFilterOff className="icon-instance-node-8" />
                                          </div>
                                        </div>
                                        <div className="ATOMS-DIVIDERS-LINE-5" />
                                      </div>
                                    </div>
                                    <div className="group-57">
                                      <div className="overlap-25">
                                        <p className="click-here-to-upload-3">
                                          <span className="text-wrapper-23">Click here to </span>
                                          <span className="text-wrapper-24">upload</span>
                                          <span className="text-wrapper-23"> or </span>
                                          <span className="text-wrapper-24">download</span>
                                          <span className="text-wrapper-23">
                                            {" "}
                                            the bulk solution template. You can also add data by clicking on{" "}
                                          </span>
                                          <span className="text-wrapper-24">add record</span>
                                          <span className="text-wrapper-23"> from the table option</span>
                                        </p>
                                      </div>
                                    </div>
                                    <div className="table-row-3">
                                      <div className="frame-41">
                                        <div className="inputs-28">
                                          <Checkbox1 className="group-58" />
                                          <div className="frame-42">
                                            <div className="table-item-4">
                                              <div className="label-52">
                                                Error/
                                                <br />
                                                Warnings
                                              </div>
                                            </div>
                                            <div className="table-item-4">
                                              <div className="label-53">Latitude</div>
                                            </div>
                                            <div className="table-item-4">
                                              <div className="label-54">Longtitude</div>
                                            </div>
                                            <div className="table-item-4">
                                              <div className="label-55">SR Name</div>
                                            </div>
                                            <div className="table-item-4">
                                              <div className="label-53">PS Name</div>
                                            </div>
                                            <div className="table-item-4">
                                              <div className="label-52">SR Radius</div>
                                            </div>
                                            <div className="table-item-4">
                                              <div className="label-52">Center Line</div>
                                            </div>
                                            <div className="table-item-4">
                                              <div className="label-52">Sector Count</div>
                                            </div>
                                            <div className="table-item-4">
                                              <div className="label-52">No. of RRH’s</div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="ATOMS-DIVIDERS-LINE-6" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="local-select-4">
                                  <div className="group-59">
                                    <div className="group-60">
                                      <div className="group-61">
                                        <div className="radio-button-7">
                                          <div className="ellipse-8" />
                                          <div className="placeholder-text-37">New Build</div>
                                        </div>
                                        <div className="radio-button-8">
                                          <div className="group-58">
                                            <div className="overlap-group-17">
                                              <div className="ellipse-9" />
                                            </div>
                                          </div>
                                          <div className="placeholder-text-38">Modification</div>
                                        </div>
                                        <div className="lable-4">
                                          <div className="label-56">Solution Type</div>
                                        </div>
                                      </div>
                                      <div className="heading-9">
                                        <div className="placeholder-text-39">Solution&nbsp;&nbsp;Sites</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <Divider className="divider-57" type="one-PX-grey" />
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
            <div className="rectangle-5" />
            <div className="local-popup-upload-2">
              <div className="group-62">
                <div className="content-container-2">
                  <div className="modal-items-3">
                    <div className="button-8">
                      <div className="div-18">
                        <div className="text-10">Cancel</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-items-4">
                    <div className="frame-43">
                      <h1 className="dialog-title-2">Upload Solution</h1>
                      <IconClose50 className="icon-instance-node-8" />
                    </div>
                    <Divider className="ASSET-LINE-THICK-2" type="one-PX-grey" />
                  </div>
                  <div className="inputs-29">
                    <div className="label-57">
                      <div className="label-58">Upload Solution</div>
                      <div className="required-5" />
                    </div>
                    <div className="input-fields-116">
                      <div className="elements-19">
                        <div className="frame-44">
                          <div className="placeholder-text-40">Upload document</div>
                          <div className="button-9">
                            <div className="div-18">
                              <div className="text-11">Upload</div>
                            </div>
                          </div>
                        </div>
                        <div className="divider-58" />
                      </div>
                    </div>
                  </div>
                  <div className="group-63">
                    <div className="button-10">
                      <div className="div-18">
                        <div className="text-12">Download Bulk Edit Template</div>
                      </div>
                    </div>
                  </div>
                  <div className="local-upload-status-2">
                    <div className="text-wrapper-25">Upload Status</div>
                    <div className="loader-2">
                      <div className="color-area-wrapper">
                        <div className="color-area-2" />
                      </div>
                      <div className="text-wrapper-26">25%</div>
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
