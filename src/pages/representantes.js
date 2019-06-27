import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

import Layout from "../components/Layout";
import TitlePage from "../objects/TitlePage";
import RepresAccord from "../components/RepresAccord"

const RepresContainer = styled(Container)`
  background-color: ${props => props.theme.color.bgcGray};
  padding: 30px 0;
  @media (min-width: 768px) {
    padding: 50px 0 0;
  }
`;

const Title = styled(TitlePage)`
  &:last-child {
    margin-bottom: 40px;
  }
`

const Representantes = () => (
  <Layout>
    <RepresContainer fluid>
      <Title title={"Nossos Representantes Comerciais por Região"} />
      <RepresAccord />
    </RepresContainer>
  </Layout>
);

export default Representantes;
