import React from "react";
import styled from "styled-components";

const WrapTitlePage = styled.div`
  width: 100%;
  margin: 0 auto 30px;
  @media (min-width: 768px) {
    margin: 0 auto 50px;
  }
`;

const Title = styled.h1`
  font-family: ${props => props.theme.font.primary};
  font-size: 1.6em;
  font-weight: bold;
  color: ${props => props.theme.color.tertiaryMedium};
  text-align: center;
  margin-bottom: 5px;
  @media (min-width: 576px) {
    font-size: 1.8em;
  }
  &::after {
    content: "";
    display: block;
    width: 100px;
    height: 4px;
    background: ${props => props.theme.color.secondyDark};
    margin: 10px auto;
  }
  &.-inverse {
    color: ${props => props.theme.color.tertiaryLight};
    &::after {
      content: "";
      display: block;
      width: 100px;
      height: 4px;
      background: ${props => props.theme.color.tertiaryLight};
      margin: 10px auto;
    }
  }
`;

const Subtitle = styled.h4`
  font-family: ${props => props.theme.font.primary};
  font-size: 0.9em;
  font-weight: bold;
  text-transform: uppercase;
  color: ${props => props.theme.color.secondyDark};
  text-align: center;
  margin-bottom: 5px;
  @media (min-width: 576px) {
    font-size: 1em;
  }
  &.-inverse {
    color: ${props => props.theme.color.tertiaryLight};
    letter-spacing: 0.05em;
  }
`;

export default ({ title, subtitle, inverseClass }) => (
  <WrapTitlePage>
    <Subtitle className={inverseClass}>{subtitle}</Subtitle>
    <Title className={inverseClass}>{title}</Title>
  </WrapTitlePage>
);