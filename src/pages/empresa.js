import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

import Layout from "../components/Layout";
import TitlePage from "../components/TitlePage";
import EmpresaHistoria from "../components/EmpresaHistoria";
import EmpresaSede from "../components/EmpresaSede";
import EmpresaPolQuality from "../components/EmpresaPolQuality";

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

const Title = styled(TitlePage)`
  &:last-child {
    margin-bottom: 60px;
  }
`

const Empresa = () => (
  <Layout>
    <CompanyContainer fluid>
      <Title title={"Empresa"} />
      <EmpresaHistoria />
    </CompanyContainer>
    <SedeContainer fluid>
      <EmpresaSede />
    </SedeContainer>
    <PolQualityContainer fluid>
      <EmpresaPolQuality />
    </PolQualityContainer>
  </Layout>
);

export default Empresa;
