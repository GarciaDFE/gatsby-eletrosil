import React from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";
import BtnSaibaMais from "./BtnSaibaMais";

const Card = styled.dl`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  margin: 10px auto;
  width: 100%;
  /* background-image: var(--color-bgDarkGradient); */
  background-color: gray;
  border: 1px solid white;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
  padding: 30px 0;
  text-align: center;
`;

const Icon = styled.dd`
  width: 100%;
  margin-bottom: 20px;
`;

const Title = styled.dt`
  width: 85%;
  margin: 10px auto;
  font-family: ${props => props.theme.font.secondy};
  letter-spacing: 0.05em;
  color: ${props => props.theme.color.tertiaryLight};
  font-size: 1em;
  font-weight: 700;
  line-height: 1.2em;
  text-transform: uppercase;
`;

const Description = styled.dd`
  width: 85%;
  margin: 10px auto;
  font-family: ${props => props.theme.font.secondy};
  letter-spacing: 0.05em;
  color: ${props => props.theme.color.tertiaryLight};
  font-size: 0.8em;
  line-height: 1.5em;
`;

export default ({ icon, title, description, altText }) => (
  <Col col sm={6} md={4} lg={2}>
    <Card>
      <Icon>
        <img src={icon} alt={altText} />
      </Icon>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <BtnSaibaMais />
    </Card>
  </Col>
);
