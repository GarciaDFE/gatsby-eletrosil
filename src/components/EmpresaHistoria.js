import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import imgHistory from "../images/empresa/imgBreveHistoria.jpg";

const CompanyHistory = styled(Row)`
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
    margin: 0 -100px 0 0;
    padding: 0;
    img {
      width: 90%;
      margin: 0;
    }
  }
`;

const History = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${props => props.theme.color.tertiaryLight};
  margin: 0 20px;
  padding: 30px;
  @media (min-width: 768px) {
    margin: 40px 25px;
    padding: 30px;
  }
`;

const Title = styled.h3`
  font-family: ${props => props.theme.font.primary};
  font-size: 1.2em;
  font-weight: bold;
  color: ${props => props.theme.color.tertiaryMedium};
  text-align: left;
  margin-bottom: 20px;
  &::after {
    content: "";
    display: block;
    width: 50px;
    height: 4px;
    background: ${props => props.theme.color.secondyDark};
    margin: 10px 0;
  }
`

const Paragraph = styled.p`
  font-family: ${props => props.theme.font.primary};
  color: ${props => props.theme.color.tertiaryMedium};
  font-size: 0.8em;
  margin-bottom: 1em;
  @media (min-width: 768px) {
    width: 100%;
    font-size: 0.9em;
    line-height: 1.5em;
  }
`;

export default props => (
  <CompanyHistory>
    <Img>
      <img src={imgHistory} alt="Imagem da fachada da empresa" />
    </Img>
    <History>
      <Title>Breve história</Title>
      <Paragraph>
        A Eletrosil, fundada no ano de 1966, iniciou suas atividades nacionalizando contatos elétricos, isoladores, chaves elétricas e peças eletromecânicas em geral, tornando-se um dos lideres de mercado neste segmento.
      </Paragraph>
    </History>
  </CompanyHistory>
);
