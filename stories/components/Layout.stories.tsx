import { ComponentStory } from "@storybook/react";
import Layout from "../../components/Layout";

export default {
  title: "Components/Layout",
  component: Layout,
};

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;
export const Default = Template.bind({});

Default.args = {};
