import React from "react";
import styled from "styled-components";

import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import TitleSection from "../components/TitleSection";
import HomeCompany from "../components/HomeCompany";

const CarouselSection = styled.section`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
`;

const CompanySection = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const IndexPage = () => (
  <Layout>
    <CarouselSection>
      <Carousel />
    </CarouselSection>
    <CompanySection>
      <TitleSection subtitle={"Um Pouco"} title={"Sobre Nossa Empresa"} />
      <HomeCompany />
    </CompanySection>
  </Layout>
);

export default IndexPage;
