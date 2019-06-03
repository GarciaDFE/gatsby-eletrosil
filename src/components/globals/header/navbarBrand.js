import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import logoNav from "../../../images/header/logo.jpg";
import { FaAlignRight } from "react-icons/fa";

const WrapBrand = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Logo = styled(Link)`
  .imgLogo {
    margin: 0;
    padding-top: 5px;
    width: 165px;
  }
`;

export default class NavbarBrand extends Component {
  render() {
    const { handleNavbar } = this.props;
    return (
      <WrapBrand>
        <Logo to="/">
          <img className="imgLogo" src={logoNav} alt="imagem do logo" />
        </Logo>
        <FaAlignRight
          className="toggle-icon"
          onClick={() => {
            handleNavbar();
          }}
        />
      </WrapBrand>
    );
  }
}
