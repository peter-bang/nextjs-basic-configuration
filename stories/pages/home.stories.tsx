import { ComponentStory } from "@storybook/react";
import Home, { getServerSideProps } from "../../pages/index";

export default {
  title: "Pages/Home",
  component: Home,
};

export const HomePage: ComponentStory<typeof Home> = (
  args,
  { loaded: { name } }
) => {
  const getLayout = Home.getLayout ?? ((page) => page);
  return getLayout(<Home {...args} name={name} />);
};

HomePage.args = { name: "John Doe" }; //default args
HomePage.loaders = [
  async () => {
    let data = await getServerSideProps();
    return data.props;
  },
];
