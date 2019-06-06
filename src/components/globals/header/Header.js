import React, { Component } from "react";
import styled from "styled-components";

import NavbarBrand from "./navbarBrand";
import NavbarLinks from "./navbarLinks";

const WrapHeader = styled.header`
  background-color: green;
`;

const WrapNavbar = styled.nav`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    background-color: rgba(255, 255, 255, 0.5);
    margin: 0 auto;
    padding: 0;
  }
`;

export default class Navbar extends Component {
  state = {
    navbarOpen: false
  };

  handleNavabar = () => {
    this.setState(() => {
      return { navbarOpen: !this.state.navbarOpen };
    });
  };

  render() {
    return (
      <WrapHeader>
        <WrapNavbar>
          <NavbarBrand />
          <NavbarLinks navbarOpen={this.state.navbarOpen} />
        </WrapNavbar>
      </WrapHeader>
    );
  }
}
