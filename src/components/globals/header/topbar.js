import React from "react";
import styled from "styled-components";
import iconTelefone from "../../../images/header/iconPhoneNegativo.svg";
import iconEnvelope from "../../../images/header/iconEnvelopeNegativo.svg";
import iconRelogio from "../../../images/header/iconClockNegativo.svg";
import iconCalendario from "../../../images/header/iconCalenderNegativo.svg";
import iconLinguas from "../../../images/header/linguas.png";

const Topbar = styled.div`
  width: 100%;
  background-color: ${props => props.theme.color.primaryDark};
  color: ${props => props.theme.color.tertiaryLight};
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 0.7em;
  font-weight: bold;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 5px 0;
`;

const Column = styled.div`
  width: 100%;
  text-align: center;
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
    font-size: 0.9em;
    padding: 0 20px;
    cursor: pointer;
  }
`;

export default ({ data }) => (
  <Topbar>
    <Row>
      <Column className="telephone col-sm-12 col-md-12 col-lg-2">
        +55 (11) 2671-7088
      </Column>
      <Column className="emailvendas col-sm-12 col-md-12 col-lg-3">
        vendas@eletrosil.com.br
      </Column>
      <Column className="horarioatend col-sm-12 col-md-12 col-lg-3">
        Seg a Sex: 7h às 17h
      </Column>
      <Column className="atendferiado col-sm-12 col-md-12 col-lg-3">
        Feriado: Fechamos Qui e Sex
      </Column>
      <Column className="linguas col-sm-12 col-md-12 col-lg-1">
        <a href="./">Português Espanhol Inglês</a>
      </Column>
    </Row>
  </Topbar>
);
