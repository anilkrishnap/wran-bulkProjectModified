import { TreeMenu } from ".";

export default {
  title: "Components/TreeMenu",
  component: TreeMenu,
};

export const Default = {
  args: {
    state: "focused",
    fontSize: "BODY",
    collapsible: "CLOSED",
    line: true,
    level: "two",
    className: {},
    bodyTextLinkClassName: {},
    bodyTextLinkClassNameOverride: {},
    text: "Body Text Link",
    visible: true,
    hasBodyTextLink: true,
  },
};
