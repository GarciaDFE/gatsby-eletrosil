import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import iconTelefone from "../../images/header/iconPhoneNegativo.svg";
import iconEnvelope from "../../images/header/iconEnvelopeNegativo.svg";
import iconRelogio from "../../images/header/iconClockNegativo.svg";
import iconCalendario from "../../images/header/iconCalenderNegativo.svg";
import iconLinguas from "../../images/header/linguas.png";

const TBContainer = styled(Container)`
  background-color: ${props => props.theme.color.primaryDark};
  color: ${props => props.theme.color.tertiaryLight};
  padding: 0;
`;

const TBRow = styled(Row)`
  font-size: 0.7em;
  font-weight: bold;
  max-width: 1200px;
  margin: 0 auto;
`;

const TBCol = styled(Col)`
  text-align: center;
  padding: 5px;
  &.telephone::before {
    content: "";
    background: url(${iconTelefone});
    background-repeat: no-repeat;
    font-size: 0.9em;
    padding: 0 10px;
  }
  &.emailvendas::before {
    content: "";
    background: url(${iconEnvelope});
    background-repeat: no-repeat;
    font-size: 0.9em;
    padding: 0 10px;
  }
  &.horarioatend::before {
    content: "";
    background: url(${iconRelogio});
    background-repeat: no-repeat;
    font-size: 0.9em;
    padding: 0 10px;
  }
  &.atendferiado::before {
    content: "";
    background: url(${iconCalendario});
    background-repeat: no-repeat;
    font-size: 0.9em;
    padding: 0 10px;
  }
  &.linguas {
    text-indent: -9999px;
    background-image: url(${iconLinguas});
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
  }
`;

export default ({ data }) => (
  <TBContainer fluid>
    <TBRow>
      <TBCol lg={2} sm={6} className="telephone">
        +55 (11) 2671-7088
      </TBCol>
      <TBCol lg={3} sm={6} className="emailvendas">
        vendas@eletrosil.com.br
      </TBCol>
      <TBCol lg={3} sm={6} className="horarioatend">
        Seg a Sex: 7h às 17h
      </TBCol>
      <TBCol lg={3} sm={6} className="atendferiado">
        Feriado: Fechamos Qui e Sex
      </TBCol>
      <TBCol lg={1} xs={12} className="linguas">
        <a href="./">Português Espanhol Inglês</a>
      </TBCol>
    </TBRow>
  </TBContainer>
);
