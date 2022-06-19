import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import IamseriousImage from "../public/Iamserious.png";
import tw, { styled } from "twin.macro";

const Footer = styled.footer(() => [tw`text-center h-10 p-3`]);

const MainFooter: NextPage = () => {
  return (
    <Footer>
      <a tw="text-4xl">
        Powered by{" "}
        <span>
          <Image
            src={IamseriousImage}
            alt="Your company Logo"
            width={32}
            height={32}
          />
        </span>{" "}
        Peter Bang
      </a>
    </Footer>
  );
};

export default MainFooter;
