import React from "react";
import { ThemeProvider } from "styled-components";

import "typeface-source-sans-pro";
import "typeface-ubuntu";
import "../styles/globalStyles.scss";
import theme from "../styles/projectStyles";
import TopBar from "../components/globals/TopBar";
import NavBar from "../components/globals/NavBar";
import Carousel from "../components/Carousel";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <TopBar />
        <NavBar />
        <Carousel />
        {children}
      </>
    </ThemeProvider>
  );
};

export default Layout;
