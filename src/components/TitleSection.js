import React from "react";
import styled from "styled-components";

const WrapTitleSection = styled.div`
  width: 100%;
  padding: 50px 0;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-family: ${props => props.theme.font.primary};
  font-size: 1.8em;
  font-weight: bold;
  color: ${props => props.theme.color.tertiaryMedium};
  text-align: center;
  margin-bottom: 5px;
  &.-inverse {
    color: ${props => props.theme.color.tertiaryLight};
    letter-spacing: 0.05em;
  }
  &::after {
    content: "";
    display: block;
    width: 100px;
    height: 4px;
    background: ${props => props.theme.color.secondyDark};
    margin: 10px auto;
    &.-inverse {
      background: ${props => props.theme.color.tertiaryLight};
    }
  }
`;

const Subtitle = styled.h4`
  font-family: ${props => props.theme.font.primary};
  font-size: 1em;
  font-weight: bold;
  text-transform: uppercase;
  color: ${props => props.theme.color.secondyDark};
  text-align: center;
  margin-bottom: 5px;
  &.-inverse {
    color: ${props => props.theme.color.tertiaryLight};
    letter-spacing: 0.05em;
  }
`;

export default ({ title, subtitle }) => (
  <WrapTitleSection>
    <Subtitle>{subtitle}</Subtitle>
    <Title>{title}</Title>
  </WrapTitleSection>
);
