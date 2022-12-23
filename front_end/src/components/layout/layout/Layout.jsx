import React from "react";
import Navbar from "../navbar/Header";
import Footer from "../footer/Footer";
import { useTranslation } from "react-i18next";

const Layout = ({ children }) => {
  const { i18n } = useTranslation();
  return (
    <div className={`${i18n.language === "ar" ? "ar" : ""}`}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
