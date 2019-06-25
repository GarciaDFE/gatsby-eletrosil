import React from "react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";

const FTContainer = styled(Container)`
  background-color: ${props => props.theme.color.primaryDark};
`;

const FTRow = styled(Row)`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 0;
  font-family: ${props => props.theme.font.secondy};
  font-size: 1em;
  font-weight: normal;
  color: ${props => props.theme.color.tertiaryLight};
  text-align: center;
`;

export default () => (
  <FTContainer fluid>
    <FTRow>
      Eletrosil Indústria Metalúrgica Ltda. © 2019 Todos os direitos reservados.
    </FTRow>
  </FTContainer>
);
