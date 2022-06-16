import { ComponentStory } from "@storybook/react";
import MainAppBar from "../../components/MainAppBar";

export default {
  title: "Components/AppBar",
  component: MainAppBar,
};

const Template: ComponentStory<typeof MainAppBar> = (args) => (
  <MainAppBar {...args} />
);
export const Default = Template.bind({});
Default.args = {};
