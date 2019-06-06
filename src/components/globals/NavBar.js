import React from "react";
import styled from "styled-components";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "gatsby";
import logoNav from "../../images/header/logo.jpg";

const NBContainer = styled(Container)`
  background-color: red; //${props => props.theme.color.tertiaryMedium};
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
`;

const NBLogo = styled(Link)`
  .imgLogo {
    margin: 0;
    padding: 0;
    width: 165px;
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
          <Nav.Link href="#home">Início</Nav.Link>
          <Nav.Link href="#empresa">Empresa</Nav.Link>
          <NavDropdown title="Produtos e Serviços" id="basic-nav-dropdown">
            <NavDropdown.Item href="#produtos">
              Nossos Produtos
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#servicos">
              Nossos Serviços
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#representantes">Representantes</Nav.Link>
          <Nav.Link href="#contatos">Contatos</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </NBNavbar>
  </NBContainer>
);
