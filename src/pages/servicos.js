import React from "react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";

import Layout from "../components/Layout";
import TitlePage from "../objects/TitlePage";
import TitleSection from "../objects/TitleSection";

const WrapServicos = styled(Container)`
  background-color: ${props => props.theme.color.bgcGray};
  padding: 30px 0;
  @media (min-width: 768px) {
    padding: 50px 0;
  }
`;

const Title = styled(TitlePage)`
  &:last-child {
    margin-bottom: 40px;
  }
`
const SubTitle = styled(TitleSection)`
  max-width: 1000px;
  margin: 0 10px;
  text-align: center;
  font-family: ${props => props.theme.font.secondy};
  color: ${props => props.theme.color.tertiaryMedium};
  margin-bottom: 40px;
  @media (min-width: 576px) {
    text-align: left;
  }
  &::after {
    display: none;
  }
`

const WrapListService = styled(Row)`
  max-width: 1000px;
  margin: 0 auto;
  background-color: ${props => props.theme.color.bgcGray};
`

const ListService = styled.ul`
  width: 100%;
  font-family: ${props => props.theme.font.secondy};
  color: ${props => props.theme.color.tertiaryMedium};
  font-size: 0.9em;
`

const Servicos = () => (
  <Layout>
    <WrapServicos fluid>
      <Title title={"Nossos Serviços"} />
      <WrapListService>
        <SubTitle subtitle={"Somos especializados nos sguintes serviços de recuperação:"} />
        <ListService>
          <li>Chaves fins de curso para serviços pesados;</li>
          <li>Chaves combinadoras “manetes”;</li>
          <li>Contatos elétricos em geral (incluindo contatos para disjutores a ar ou magnéticos);</li>
          <li>Contatores para corrente continua;</li>
          <li>Contatores sobrebarra;</li>
          <li>Painéis elétricos de corrente continua ou Alternada;</li>
          <li>Recuperação de pantógrafos coletores de energia.</li>
        </ListService>
        </WrapListService>
    </WrapServicos>
  </Layout>
);

export default Servicos;
