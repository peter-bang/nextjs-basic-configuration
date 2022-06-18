// .storybook/preview.js
import CssBaseline from "@mui/material/CssBaseline";

import * as NextImage from "next/image";

import { setupWorker, rest } from "msw";

if (typeof global.process === "undefined") {
  //checks to make sure that this is not a node process
  const worker = setupWorker(
    //create service worker
    rest.get("http://localhost:3000/api/hello", (req, res, ctx) => {
      //Define the rest api requrest
      return res(ctx.json({ name: "John Doe" })); // and its response
    })
  );
  worker.start(); // worker starts!
}

NextImage.defaultProps = {
  unoptimized: true,
};

export const decorators = [
  (Story) => (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <CssBaseline />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
