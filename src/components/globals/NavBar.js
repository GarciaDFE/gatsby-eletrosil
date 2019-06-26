import React from "react";
import styled from "styled-components";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "gatsby";
import logoNav from "../../images/header/logo.jpg";

const NBContainer = styled(Container)`
  background-color: ${props => props.theme.color.tertiaryLight};
  color: ${props => props.theme.color.primaryDark};
  padding: 0;
`;

const NBNavbar = styled(Navbar)`
  font-family: ${props => props.theme.font.primary};
  font-size: 0.9em;
  font-weight: normal;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  background-color: ${props => props.theme.color.tertiaryLight};
  padding: 0 5px;
  .navbar-toggler {
    border: none;
  }
  @media (max-width: 991px) {
    .navbar-collapse {
      border-top: 1px solid ${props => props.theme.color.tertiaryMedium};
    }
  }
`;

const NBLogo = styled(Link)`
  .imgLogo {
    margin: 0;
    padding: 0;
    width: 165px;
  }
`;

const NBLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${props => props.theme.color.tertiaryMedium};
  margin: 10px 20px;
  &:hover {
    text-decoration: none;
    color: ${props => props.theme.color.secondyDark};
  }
`;

const NBDrop = styled(NavDropdown)`
  margin: 10px 20px;
  &.nav-item > .nav-link {
    color: ${props => props.theme.color.tertiaryMedium};
    &:hover {
      color: ${props => props.theme.color.secondyDark};
    }
  }
  > .dropdown-menu > .dropdown-item {
    font-size: 0.8em;
    color: ${props => props.theme.color.tertiaryMedium};
    &:hover {
      background-color: transparent;
      color: ${props => props.theme.color.secondyDark};
    }
  }
`;

export default ({ data }) => (
  <NBContainer fluid>
    <NBNavbar expand="lg">
      <Navbar.Brand href="#home">
        <NBLogo to="/">
          <img className="imgLogo" src={logoNav} alt="imagem do logo" />
        </NBLogo>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NBLink to="/">Início</NBLink>
          <NBLink to="/empresa">Empresa</NBLink>
          <NBDrop title="Produtos e Serviços" id="basic-nav-dropdown">
            <NavDropdown.Item href="#produtos">
              Nossos Produtos
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#servicos">
              Nossos Serviços
            </NavDropdown.Item>
          </NBDrop>
          <NBLink to="/representantes">Representantes</NBLink>
          <NBLink to="/contatos">Contatos</NBLink>
        </Nav>
      </Navbar.Collapse>
    </NBNavbar>
  </NBContainer>
);
