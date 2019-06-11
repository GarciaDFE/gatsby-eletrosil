import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const BtnSaibaMais = styled(Link)`
  display: inline-block;
  margin: 0 auto;
  background-color: ${props => props.theme.color.secondyDark};
  color: ${props => props.theme.color.tertiaryLight};
  width: 100px;
  height: 30px;
  padding: 0 5px;
  border-radius: 5px;
  border: none;
  text-transform: uppercase;
  font-family: ${props => props.theme.font.secondy};
  font-size: 12px;
  text-align: center;
  font-weight: bold;
  line-height: 30px;
  letter-spacing: 0.05em;
  text-decoration: none;
  cursor: pointer;
  transition: all 300ms linear;
  &:hover {
    background-color: ${props => props.theme.color.primaryDark};
    transition: all 300ms linear;
    text-decoration: inherit;
    color: ${props => props.theme.color.tertiaryLight};
  }
  @media (min-width: 768px) {
    margin: 0 auto 0 0;
  }
`;

export default () => <BtnSaibaMais>Saiba Mais</BtnSaibaMais>;
