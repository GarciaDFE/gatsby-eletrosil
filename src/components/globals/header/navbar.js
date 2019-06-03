import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import "../../../styles/globalStyles.scss";

const NavList = styled.nav`
  box-sizing: border-box;
  display: flex;
  font-size: 1em;
  background-color: white;
`;

const NavItem = styled.li`
  display: flex;
  margin: 0;
  background-color: yellow;
  &:not(:last-child) {
    margin-right: 60px;
  }
  /* > .item {
    &:not(:last-child) {
      /* a partir de 600px */
  /*@media all and (min-width: 600px) {
        border-bottom: 1px solid white;
      }
    }
    .action {
      font-size: 20px;
      line-height: 60px;
      text-decoration: none;
      text-align: left;
      list-style: none;
      text-decoration: none;
      cursor: pointer;
      padding-left: 10px;
      /* até 599px */
  /*@media all and (max-width: 599px) {
        color: orange;
      }
      /* a partir de 600px */
  /*@media all and (min-width: 600px) {
        color: white;
      }
      &:hover {
        /* a partir de 600px */
  /*@media all and (min-width: 600px) {
          color: orange;
        }
      }
    }
  } */
`;

const Action = styled(Link)`
  position: relative;
  font-family: ${props => props.theme.font.primary};
  color: ${props => props.theme.color.primaryMedium};
  list-style: none;
  text-decoration: none;
  cursor: pointer;
  &:after {
    /* a partir de 600px */
    @media all and (min-width: 600px) {
      content: "";
      height: 3px;
      width: 100%;
      background-color: orange;
      position: absolute;
      bottom: -5px;
      left: 0;
      transform: scaleX(0);
      transition: transform 200ms linear;
      transform-origin: center;
    }
  }
  &:hover {
    /* a partir de 600px */
    @media all and (min-width: 600px) {
      color: ${props => props.theme.color.secondyDark};
    }
  }
  &:hover:after {
    transform: scale(1);
  }
`;

const activeAction = {
  color: "red" //${props => props.theme.color.secondyDark};
};

export default () => (
  <NavList>
    <NavItem>
      <Action to="./" activeStyle={activeAction}>
        Home
      </Action>
    </NavItem>
    <NavItem>
      <Action to="/page2" activeStyle={activeAction}>
        Empresa
      </Action>
    </NavItem>
    <NavItem>
      <Action to="/page3" activeStyle={activeAction}>
        Produtos e Serviços
      </Action>
    </NavItem>
    <NavItem>
      <Action to="/page4" activeStyle={activeAction}>
        Representantes
      </Action>
    </NavItem>
    <NavItem>
      <Action to="/page5" activeStyle={activeAction}>
        Contatos
      </Action>
    </NavItem>
  </NavList>
);
