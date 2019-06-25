import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

import Layout from "../components/Layout";
import TitlePage from "../components/TitlePage";
import TitleSection from "../components/TitleSection";
import EmpresaHistoria from "../components/EmpresaHistoria";

const CompanyContainer = styled(Container)`
  background-color: ${props => props.theme.color.bgcGray};
  padding: 30px 0;
  @media (min-width: 768px) {
    padding: 50px 0;
  }
`;

const SedeContainer = styled(Container)`
  background-color: ${props => props.theme.color.bgcBlue};
  padding: 30px 0;
  @media (min-width: 768px) {
    padding: 50px 0;
  }
`;

const PolQualityContainer = styled(Container)`
  background-color: ${props => props.theme.color.tertiaryLight};
  padding: 30px 0;
  @media (min-width: 768px) {
    padding: 50px 0;
  }
`;

const Empresa = () => (
  <Layout>
    <CompanyContainer fluid>
      <TitlePage title={"Empresa"} />
      <EmpresaHistoria />
    </CompanyContainer>
    <SedeContainer fluid>
      <TitleSection variationClass={"-smallCenter"} title={"Estrutura da nossa sede"} />
    </SedeContainer>
    <PolQualityContainer fluid>
      <TitleSection variationClass={"-smallCenter"} title={"Política de Qualidade"} />
    </PolQualityContainer>
  </Layout>
);

export default Empresa;
