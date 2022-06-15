import React from "react";
import { Button, ButtonProps } from "@mui/material";
import tw, { css, styled } from "twin.macro";

const MyButton = styled(Button)((props: ButtonProps) => [
  tw`
    text-blue-400
    border-purple-500
    text-5xl
    shadow-md
    rounded-xl
`,
]);

export default MyButton;
