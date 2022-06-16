import { ComponentStory } from "@storybook/react";
import MainFooter from "../../components/MainFooter";

export default {
  title: "Components/Footer",
  component: MainFooter,
};

const Template: ComponentStory<typeof MainFooter> = (args) => (
  <MainFooter {...args} />
);
export const Default = Template.bind({});
Default.args = {};
