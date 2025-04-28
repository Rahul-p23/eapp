import React from "react";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children, isLoggedIn }) => {
  const isMainComponent = children?.type?.name === "Main";

  return (
    <>
      {!isMainComponent && <Navbar isLoggedIn={isLoggedIn} />}
      <main>{children}</main>
    </>
  );
};

export default Layout;
