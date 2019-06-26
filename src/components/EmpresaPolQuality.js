import React from "react";
import styled from "styled-components";
import { Row } from "react-bootstrap";

import TitleSection from "../objects/TitleSection";
import Button from "../objects/Button";

const CompanyPolQuality = styled(Row)`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(TitleSection)`
  &:last-child {
    margin-bottom: 30px;
  }
`

const Paragraph = styled.p`
  font-family: ${props => props.theme.font.secondy};
  color: ${props => props.theme.color.tertiaryMedium};
  font-size: 0.9em;
  margin: 0 15px 30px;
  &.-centered {
     text-align: center;
  }
  @media (min-width: 768px) {
    width: 100%;
    font-size: 1em;
    line-height: 1.5em;
    margin: 0 100px 50px;
  }
`;

const BtnQuality = styled(Button)`
  width: 90%;
  font-size: 0.9em;
  letter-spacing: 0;
  margin: 0 auto;
  @media (min-width: 576px) {
    font-size: 1em;
    width: auto;
    padding: 0 20px;
  }
`

export default () => (
  <CompanyPolQuality>
    <Title className={"-smallCenter"} title={"Política de Qualidade"} />
    <Paragraph>
          O principal objetivo da Eletrosil é oferecer aos nossos clientes produtos que atendam até o mais rigoroso padrão de qualidade.
          Através de toda a experiência que acumulamos ao longo desses anos, garantimos a qualidade e a segurança de todos os nossos produtos através de rigorosos procedimentos e testes, realizados em nossa fábrica com o objetivo de assegurar as características necessárias para as diversas finalidades às quais se destinam.
    </Paragraph>
    <Paragraph className="-centered">
    O download de nossa política de qualidade em formato PDF está disponível no link abaixo: 
    </Paragraph>
    <BtnQuality>Download da Política de Qualidade</BtnQuality>
  </CompanyPolQuality>
);
