import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const BtnSaibaMais = styled(Link)`
  display: inline-block;
  margin: 0 auto;
  background-color: ${props => props.theme.color.secondyDark};
  color: ${props => props.theme.color.tertiaryLight};
  height: 40px;
  padding: 0 20px;
  border-radius: 5px;
  border: none;
  text-transform: uppercase;
  font-family: ${props => props.theme.font.secondy};
  font-size: 0.9em;
  text-align: center;
  font-weight: bold;
  line-height: 40px;
  text-decoration: none;
  cursor: pointer;
  transition: all 300ms linear;
  opacity: 0.9;
  box-shadow: 0 0 10px ${props => props.theme.color.tertiaryMedium};
  &:hover {
    transition: all 300ms linear;
    text-decoration: inherit;
    color: ${props => props.theme.color.tertiaryLight};
    opacity: 1;
  }
  @media (min-width: 768px) {
    margin: 0 auto 0 0;
  }
`;

export default props => <BtnSaibaMais {...props}></BtnSaibaMais>;
