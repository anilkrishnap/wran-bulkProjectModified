import React from "react";
import { Link } from "react-router-dom";
import { Divider } from "../../components/Divider";
import { GlobalHeader } from "../../components/GlobalHeader";
import { SearchInput } from "../../components/SearchInput";
import { AtomsIcon2019Close2 } from "../../icons/AtomsIcon2019Close2";
import { Checkbox1 } from "../../icons/Checkbox1";
import { IconClose50 } from "../../icons/IconClose50";
import { IconCtaCaretClose27 } from "../../icons/IconCtaCaretClose27";
import { IconDownload } from "../../icons/IconDownload";
import { IconFilterOff } from "../../icons/IconFilterOff";
import { IconInfo } from "../../icons/IconInfo";
import { IconPlusLarge3 } from "../../icons/IconPlusLarge3";
import { IconUpload } from "../../icons/IconUpload";
import { Line } from "../../icons/Line";
import "./style.css";

export const Screen9 = () => {
  return (
    <div className="screen-9">
      <div className="CBPM-9">
        <div className="group-64">
          <div className="overlap-26">
            <div className="group-65">
              <div className="group-64">
                <div className="frame-45">
                  <div className="template-create-bulk-5">
                    <div className="group-66">
                      <div className="group-67">
                        <div className="frame-46">
                          <div className="frame-47">
                            <div className="global-header-33">
                              <GlobalHeader
                                ATOMSAvatarDefaultClassName="global-header-35"
                                ATOMSIconWrapperGroupClassName="global-header-34"
                                searchInputIcon={<AtomsIcon2019Close2 className="atoms-icon-2019-close-58-instance" />}
                                type="primary"
                              />
                              <GlobalHeader
                                tab="Home"
                                tab1="selected"
                                tab2="default"
                                tab3="Create/Upload Bulk Solutions"
                                tab4="Solution Manager"
                                tabClassNameOverride="global-header-36"
                                tabVisible1={false}
                                tabVisible2={false}
                                tabVisible3={false}
                                tabVisible5={false}
                                type="secondary"
                              />
                            </div>
                          </div>
                          <div className="group-68">
                            <div className="local-swimlane-5">
                              <div className="swimlane-8">
                                <Divider className="divider-59" type="one-PX-black" />
                                <div className="names-8">
                                  <div className="div-19">
                                    <div className="step-name-18">Solution Sites</div>
                                  </div>
                                  <IconCtaCaretClose27 className="icon-cta-caret-close-instance" />
                                  <div className="div-19">
                                    <div className="step-name-19">Solution Details</div>
                                  </div>
                                  <IconCtaCaretClose27 className="icon-cta-caret-close-instance" />
                                  <div className="div-19">
                                    <div className="step-name-19">Project Details</div>
                                  </div>
                                </div>
                                <Divider className="divider-60" type="one-PX-black" />
                              </div>
                            </div>
                          </div>
                          <div className="local-CBP-new-build-5">
                            <div className="group-69">
                              <div className="overlap-27">
                                <Divider className="divider-61" type="one-PX-grey" />
                                <div className="navigation-window-8">
                                  <div className="overlap-28">
                                    <div className="body-4">
                                      <div className="override-4">
                                        <div className="text-wrapper-27">Override this</div>
                                      </div>
                                    </div>
                                    <div className="navigation-action-8">
                                      <div className="overlap-group-18">
                                        <Line className="line-13" />
                                        <Line className="line-14" />
                                        <div className="label-59">Show All</div>
                                        <div className="label-60">Show Next</div>
                                        <div className="label-61">Save</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="local-table-with-no-4">
                                  <div className="group-70">
                                    <div className="action-bar-5">
                                      <div className="overlap-group-19">
                                        <div className="frame-48">
                                          <div className="div-19">
                                            <div className="div-20">
                                              <IconPlusLarge3 className="icon-instance-node-9" />
                                              <div className="action-4">Add Record</div>
                                            </div>
                                            <div className="div-20">
                                              <IconUpload className="icon-instance-node-9" />
                                              <div className="action-4">Upload Solution</div>
                                            </div>
                                            <div className="div-20">
                                              <IconDownload className="icon-instance-node-9" />
                                              <div className="action-4">Download Bulk Solution Template</div>
                                            </div>
                                          </div>
                                          <div className="setting-4">
                                            <SearchInput
                                              className="search-input-8"
                                              frameClassNameOverride="search-input-9"
                                              state="disabled"
                                            />
                                            <IconFilterOff className="icon-instance-node-9" />
                                            <IconFilterOff className="icon-instance-node-9" />
                                          </div>
                                        </div>
                                        <div className="ATOMS-DIVIDERS-LINE-7" />
                                      </div>
                                    </div>
                                    <div className="group-71">
                                      <div className="overlap-29">
                                        <p className="click-here-to-upload-4">
                                          <span className="text-wrapper-28">Click here to </span>
                                          <span className="text-wrapper-29">upload</span>
                                          <span className="text-wrapper-28"> or </span>
                                          <span className="text-wrapper-29">download</span>
                                          <span className="text-wrapper-28">
                                            {" "}
                                            the bulk solution template. You can also add data by clicking on{" "}
                                          </span>
                                          <span className="text-wrapper-29">add record</span>
                                          <span className="text-wrapper-28"> from the table option</span>
                                        </p>
                                      </div>
                                    </div>
                                    <div className="table-row-4">
                                      <div className="frame-49">
                                        <div className="inputs-30">
                                          <Checkbox1 className="checkbox-3" />
                                          <div className="frame-50">
                                            <div className="table-item-5">
                                              <div className="label-62">
                                                Error/
                                                <br />
                                                Warnings
                                              </div>
                                            </div>
                                            <div className="table-item-5">
                                              <div className="label-63">Latitude</div>
                                            </div>
                                            <div className="table-item-5">
                                              <div className="label-64">Longtitude</div>
                                            </div>
                                            <div className="table-item-5">
                                              <div className="label-65">SR Name</div>
                                            </div>
                                            <div className="table-item-5">
                                              <div className="label-63">PS Name</div>
                                            </div>
                                            <div className="table-item-5">
                                              <div className="label-62">SR Radius</div>
                                            </div>
                                            <div className="table-item-5">
                                              <div className="label-62">Center Line</div>
                                            </div>
                                            <div className="table-item-5">
                                              <div className="label-62">Sector Count</div>
                                            </div>
                                            <div className="table-item-5">
                                              <div className="label-62">No. of RRH’s</div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="ATOMS-DIVIDERS-LINE-8" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="local-select-5">
                                  <div className="group-72">
                                    <div className="group-73">
                                      <div className="group-74">
                                        <div className="radio-button-9">
                                          <div className="ellipse-10" />
                                          <div className="placeholder-text-41">New Build</div>
                                        </div>
                                        <div className="radio-button-10">
                                          <div className="checkbox-3">
                                            <div className="overlap-group-20">
                                              <div className="ellipse-11" />
                                            </div>
                                          </div>
                                          <div className="placeholder-text-42">Modification</div>
                                        </div>
                                        <div className="lable-5">
                                          <div className="label-66">Solution Type</div>
                                        </div>
                                      </div>
                                      <div className="heading-10">
                                        <div className="placeholder-text-43">Solution&nbsp;&nbsp;Sites</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <Divider className="divider-62" type="one-PX-grey" />
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
            <div className="rectangle-6" />
            <div className="local-popup-upload-3">
              <div className="group-75">
                <div className="content-container-3">
                  <div className="frame-51">
                    <div className="group-76">
                      <IconInfo className="icon-info-2" />
                      <p className="label-67">
                        Only CSV files are allowed maximum XXX solutions are allowed at one time
                      </p>
                    </div>
                  </div>
                  <div className="modal-items-5">
                    <div className="button-11">
                      <div className="div-20">
                        <div className="text-13">Cancel</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-items-6">
                    <div className="frame-52">
                      <h1 className="dialog-title-3">Upload Solution</h1>
                      <IconClose50 className="icon-instance-node-9" />
                    </div>
                    <Divider className="ASSET-LINE-THICK-3" type="one-PX-grey" />
                  </div>
                  <Link className="inputs-31" to="/cbpm-5">
                    <div className="label-68">
                      <div className="label-69">Upload Solution</div>
                      <div className="required-6" />
                    </div>
                    <div className="input-fields-117">
                      <div className="elements-20">
                        <div className="frame-53">
                          <div className="placeholder-text-44">Upload document</div>
                          <div className="button-12">
                            <div className="div-20">
                              <div className="text-14">Upload</div>
                            </div>
                          </div>
                        </div>
                        <div className="divider-63" />
                      </div>
                    </div>
                  </Link>
                  <div className="group-77">
                    <div className="button-13">
                      <div className="div-20">
                        <div className="text-15">Download Bulk Edit Template</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="user-interaction-6">
              <div className="group-78">
                <div className="group-79">
                  <div className="overlap-group-21">
                    <div className="text-wrapper-30">CLICK</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
