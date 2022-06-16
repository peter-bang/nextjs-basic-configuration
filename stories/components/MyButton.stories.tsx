import { ComponentStory } from "@storybook/react";
import MyButton from "../../components/Mybutton";

export default {
  title: "Components/Button",
  component: MyButton,
};

const Template: ComponentStory<typeof MyButton> = (args) => (
  <MyButton {...args} />
);
export const Default = Template.bind({});
Default.args = {
  children: <a>Button</a>,
};

export const Primary = Template.bind({});
