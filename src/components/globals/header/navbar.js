import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import "../../../styles/globalStyles.scss";

const NavList = styled.nav`
  box-sizing: border-box;
  display: flex;
  font-size: 20px;
  background-color: yellow;
  > .menu {
    text-align: right;
  }
`;

const NavItem = styled.li`
  position: relative;
  display: flex;
  margin: 0 10px;
  padding: 0 20px;
  > .item {
    &:not(:last-child) {
      /* a partir de 600px */
      @media all and (min-width: 600px) {
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
      @media all and (max-width: 599px) {
        color: orange;
      }
      /* a partir de 600px */
      @media all and (min-width: 600px) {
        color: white;
      }
      &:hover {
        /* a partir de 600px */
        @media all and (min-width: 600px) {
          color: orange;
        }
      }
    }
  }
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
      height: 4px;
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
      color: orange;
    }
  }
  &:hover:after {
    transform: scale(1);
  }
`;

const activeAction = {
  marginBottom: "-5px",
  borderBottom: "4px solid orange"
};

export default () => (
  <NavList>
    <NavItem>
      <Action to="/" activeStyle={activeAction}>
        Home
      </Action>
    </NavItem>
    <NavItem>
      <Action to="/page2" activeStyle={activeAction}>
        Link2
      </Action>
    </NavItem>
    <NavItem>
      <Action to="/page3" activeStyle={activeAction}>
        Link3
      </Action>
    </NavItem>
    <NavItem>
      <Action to="/page4" activeStyle={activeAction}>
        Link4
      </Action>
    </NavItem>
  </NavList>
);
