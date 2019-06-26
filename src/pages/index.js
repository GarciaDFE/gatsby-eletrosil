import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

import Layout from "../components/Layout";
import HomeCarousel from "../components/HomeCarousel";
import HomeCompany from "../components/HomeCompany";
import HomeProdServ from "../components/HomeProdServ";
import HomeContact from "../components/HomeContact";

const CarouselContainer = styled(Container)`
  padding: 0;
`;

const CompanyContainer = styled(Container)`
  padding: 30px 0;
  @media (min-width: 768px) {
    padding: 50px 0;
  }
`;

const ProdServContainer = styled(Container)`
  padding: 30px 0;
  background-color: ${props => props.theme.color.primaryDark};
  @media (min-width: 768px) {
    padding: 50px 0;
  }
`;

const ContactContainer = styled(Container)`
  padding: 30px 0 0 0;
  @media (min-width: 768px) {
    padding: 50px 0;
  }
`;

const IndexPage = () => (
  <Layout>
    <CarouselContainer fluid>
      <HomeCarousel />
    </CarouselContainer>
    <CompanyContainer fluid>
      <HomeCompany />
    </CompanyContainer>
    <ProdServContainer fluid>
      <HomeProdServ />
    </ProdServContainer>
    <ContactContainer fluid>
      <HomeContact />
    </ContactContainer>
  </Layout>
);

export default IndexPage;
