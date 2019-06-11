import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import imgEmpresa from "../images/imgHomeEmpresa.jpg";
import BtnSaibaMais from "./BtnSaibaMais";

const HomeCompany = styled(Row)`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Img = styled(Col)`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 0;
    padding: 0;
    img {
      width: 100%;
      margin: 0;
    }
  }
`;

const History = styled(Col)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
`;

const Paragraph = styled.p`
  font-family: ${props => props.theme.font.primary};
  color: ${props => props.theme.color.tertiaryMedium};
  font-size: 0.8em;
  margin-bottom: 1em;
  @media (min-width: 768px) {
    width: 90%;
    font-size: 0.9em;
    line-height: 1.5em;
    margin-bottom: 1em;
  }
`;

export default () => (
  <HomeCompany>
    <Img>
      <img src={imgEmpresa} alt="Imagem das instalações internas da empresa" />
    </Img>
    <History>
      <Paragraph>
        A Eletrosil Indústria Metalúrgica Ltda. é uma empresa dedicada à
        fabricação, manutenção, reparo e recuperação de equipamentos
        eletromecânicos e painéis elétricos de baixa tensão em geral.
      </Paragraph>
      <Paragraph>
        Especializada no fornecimento de soluções sob encomenda, possui mais de
        45 anos de tradição na execução de serviços com elevado nível de
        qualidade, precisão e em prazos que atendam as necessidades dos
        clientes.
      </Paragraph>
      <Paragraph>
        Em parceria com empresas multinacionais de tecnologias consagradas
        fornece soluções completas em sistemas de automação e controle de
        movimentação de cargas (pontes rolantes).
      </Paragraph>
      <BtnSaibaMais />
    </History>
  </HomeCompany>
);
