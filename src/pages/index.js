import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import TitleSection from "../components/TitleSection";
import HomeCompany from "../components/HomeCompany";
import HomeProdServ from "../components/CardProdServ";

const CompanyContainer = styled(Container)`
  padding: 30px 0;
  @media (min-width: 768px) {
    padding: 50px 0;
  }
`;

const ProdServContainer = styled(Container)`
  padding: 30px 0;
  background-color: yellow;
  @media (min-width: 768px) {
    padding: 50px 0;
  }
`;

const IndexPage = () => (
  <Layout>
    <Container fluid>
      <Carousel />
    </Container>
    <CompanyContainer fluid>
      <TitleSection subtitle={"Um Pouco"} title={"Sobre Nossa Empresa"} />
      <HomeCompany />
    </CompanyContainer>
    <ProdServContainer fluid>
      <TitleSection
        className="-inverse"
        subtitle={"Nossa Linha de"}
        title={"Produtos e Serviços"}
      />
      <HomeProdServ />
    </ProdServContainer>
  </Layout>
);

export default IndexPage;
