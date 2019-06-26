import React from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap"

const TitleSection = styled(Col)`
  width: 100%;
  display: block;
  margin: 0;
  padding: 0;
`;

const Title = styled.h2`
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
  &.-smallCenter {
    font-size: 1.2em;
    &::after {
      content: "";
      display: block;
      width: 50px;
      height: 4px;
      background: ${props => props.theme.color.secondyDark};
      margin: 10px auto;
    }
  }
  &.-smallLeft {
    font-size: 1.2em;
    text-align: left;
    &::after {
      content: "";
      display: block;
      width: 50px;
      height: 4px;
      background: ${props => props.theme.color.secondyDark};
      margin: 10px 0;
    }
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

export default props => (
  <TitleSection>
    <Subtitle {...props} >{props.subtitle}</Subtitle>
    <Title {...props} >{props.title}</Title>
  </TitleSection>
);
