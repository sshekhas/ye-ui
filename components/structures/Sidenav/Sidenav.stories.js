import React from "react";
import { AiOutlineBulb, AiOutlineHome } from "react-icons/ai";
import { getStoryName } from "../../../utils/storybook";
import Anchor from "../../atoms/content/Anchor/Anchor";
import Sidenav from "./Sidenav";
import SidenavGroup from "./SidenavGroup";

const metadata = {
  title: getStoryName(__dirname),
  component: Sidenav,
  subcomponents: { SidenavGroup, Anchor },
};

export default metadata;

const Template = (args) => (
  <Sidenav {...args}>
    <SidenavGroup>
      <Anchor
        variant="nav-item"
        iconBefore={<AiOutlineHome />}
        label="Home"
        href="/"
      />
      <Anchor
        variant="nav-item"
        iconBefore={<AiOutlineBulb />}
        label="Menu Item"
        href="/"
      />
    </SidenavGroup>
    <SidenavGroup title="Menu Group">
      <Anchor variant="nav-item" label="Menu Item" href="/" />
      <Anchor variant="nav-item" label="Menu Item" href="/" />
    </SidenavGroup>
  </Sidenav>
);

export const Basic = Template.bind({});
Basic.args = {};
