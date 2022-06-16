import React from "react";
import MainAppBar from "./MainAppBar";
import MainFooter from "./MainFooter";

const Layout: React.FC<any> = ({ children }) => {
  return (
    <>
      <MainAppBar />
      {children}
      <MainFooter />
    </>
  );
};

export default Layout;
