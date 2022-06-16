import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import vercelImg from "../public/vercel.svg";
import tw, { styled } from "twin.macro";

const Footer = styled.footer(() => [tw`text-center h-10 p-3`]);

const MainFooter: NextPage = () => {
  return (
    <Footer>
      <a>
        Powered by{" "}
        <span>
          <Image src={vercelImg} alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </Footer>
  );
};

export default MainFooter;
