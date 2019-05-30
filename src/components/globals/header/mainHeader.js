import React from "react";
import styled from "styled-components";

import Topbar from "./topbar";
import Brand from "./brand";
import Navbar from "./navbar";
import Social from "./social";

const Header = styled.header`
  width: 100%;
  height: auto;
  position: relative;
  margin: 0 auto;
  background-color: violet;
`;

const MainNavigation = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 5px 20px;
  background-color: rgba(255, 255, 255, 0.5);
`;

export default () => (
  <Header>
    <Topbar />
    <MainNavigation>
      <Brand />
      <Navbar />
      <Social />
    </MainNavigation>
  </Header>
);
