import React from "react";
import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
export default Layout;
