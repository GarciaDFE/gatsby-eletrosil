import React from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";
import BtnSaibaMais from "./BtnSaibaMais";

const CardCol = styled(Col)`
  margin: 0;
  padding: 0;
`;

const Card = styled.dl`
  box-sizing: border-box;
  width: 90%;
  background-image: ${props => props.theme.gradient.primary};
  border: 1px solid ${props => props.theme.color.primaryDark};
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.5);
  text-align: center;
  margin: 10px auto;
  padding: 20px 15px;
  @media (min-width: 768px) {
    width: 200px;
  }
`;

const Icon = styled.dd`
  width: 100%;
  margin: 0 0 20px 0;
  img {
    margin: 0;
  }
`;

const Title = styled.dt`
  font-family: ${props => props.theme.font.primary};
  color: ${props => props.theme.color.tertiaryLight};
  font-size: 0.8em;
  font-weight: 700;
  line-height: 1.2em;
  text-transform: uppercase;
  margin: 0 0 10px 0;
`;

const Description = styled.dd`
  font-family: ${props => props.theme.font.secondy};
  color: ${props => props.theme.color.tertiaryLight};
  font-size: 0.75em;
  line-height: 1.2em;
  margin: 0 0 20px 0;
`;

export default ({ icon, title, description, altText }) => (
  <CardCol sm={6} md={4} lg={2}>
    <Card>
      <Icon>
        <img src={icon} alt={altText} />
      </Icon>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <BtnSaibaMais />
    </Card>
  </CardCol>
);
