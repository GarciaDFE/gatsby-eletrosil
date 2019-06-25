import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import imgHistory from "../images/empresa/imgBreveHistoria.jpg";
import TitleSection from "./TitleSection"

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
  background-color: ${props => props.theme.color.tertiaryLight};
  margin: 40px 25px;
  padding: 30px;
`;

const TTHistory = styled(TitleSection)`
    color: blue;
    background-color: yellow;
    margin-bottom: 0;
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
      <TTHistory title={"Breve história"} />
      <Paragraph>
        A Eletrosil, fundada no ano de 1966, iniciou suas atividades nacionalizando contatos elétricos, isoladores, chaves elétricas e peças eletromecânicas em geral, tornando-se um dos lideres de mercado neste segmento.
      </Paragraph>
    </History>
  </CompanyHistory>
);
