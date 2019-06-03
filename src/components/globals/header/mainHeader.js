import React from "react";
import styled from "styled-components";

import Topbar from "./topbar";
import Brand from "./brand";
import Navbar from "./navbar";
import BtnMobile from "./btnmobile";

const Header = styled.header`
  width: 100%;
  position: relative;
  margin: 0 auto;
  background-color: rgb(220, 220, 220);
`;

const MainNavigation = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 5px 0;
  background-color: rgba(255, 255, 255, 0.5);
`;

export default () => (
  <Header>
    <Topbar />
    <MainNavigation>
      <Brand />
      <BtnMobile />
      <Navbar />
    </MainNavigation>
  </Header>
);
