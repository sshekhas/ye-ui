import path from "node:path";
import {
  AiFillLeftCircle,
  AiFillRightCircle,
  AiOutlineEye,
  AiOutlineSearch,
} from "react-icons/ai";
import { getStoryName } from "../../../../utils/storybook";
import TextInput from "./TextInput";

const iconMap = {
  AiFillLeftCircle,
  AiFillRightCircle,
  AiOutlineSearch,
  AiOutlineEye,
};

const metadata = {
  title: getStoryName(path.dirname(import.meta.url)),
  component: TextInput,
  argTypes: {
    icon: { control: { type: "select", options: Object.keys(iconMap) } },
  },
};

export default metadata;

const Template = ({ width, iconBefore, iconAfter, ...args }) => {
  const IconBefore = iconMap[iconBefore];
  const IconAfter = iconMap[iconAfter];
  return (
    <TextInput
      iconBefore={IconBefore ? <IconBefore /> : null}
      iconAfter={IconAfter ? <IconAfter /> : null}
      style={{ width }}
      {...args}
    />
  );
};

export const Basic = Template.bind({});
Basic.args = {
  placeholder: "Enter your text",
  width: 240,
};
Basic.parameters = {
  jest: ["TextInput.test.js"],
};

export const Outlined = Template.bind({});
Outlined.args = {
  ...Basic.args,
  variant: "outlined",
};

export const Dashed = Template.bind({});
Dashed.args = {
  ...Basic.args,
  variant: "dashed",
};

export const Borderless = Template.bind({});
Borderless.args = {
  ...Basic.args,
  variant: "borderless",
};

export const withIcon = Template.bind({});
withIcon.args = {
  ...Basic.args,
  iconBefore: "AiOutlineSearch",
  iconAfter: "AiOutlineEye",
};
