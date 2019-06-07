import React from "react";
import { ThemeProvider } from "styled-components";
import "typeface-source-sans-pro";
import "typeface-ubuntu";
import "../styles/globalStyles.scss";
import theme from "../styles/projectStyles";
import TopBar from "./globals/TopBar";
import NavBar from "./globals/NavBar";
import Footer from "./globals/Footer";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <TopBar />
        <NavBar />
        {children}
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default Layout;
