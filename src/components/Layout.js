import React from "react";
import { ThemeProvider } from "styled-components";

import "typeface-source-sans-pro";
import "typeface-ubuntu";
import "../styles/globalStyles.scss";
import theme from "../styles/projectStyles";
import Header from "../components/globals/header/mainHeader";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Header />
        {children}
      </>
    </ThemeProvider>
  );
};

export default Layout;
