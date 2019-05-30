import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import logoNav from "../../../images/header/logo.jpg";

const Brand = styled.div`
  height: 100%;
`;

const Logo = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
  .imgLogo {
    margin: 0;
    width: 165px;
  }
`;

export default ({ data }) => (
  <Brand>
    <Logo to="./">
      <img className="imgLogo" src={logoNav} alt="imagem do logo" />
    </Logo>
  </Brand>
);
