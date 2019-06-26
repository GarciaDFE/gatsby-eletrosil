import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

import Layout from "../components/Layout";
import TitlePage from "../objects/TitlePage";

const ContactContainer = styled(Container)`
  background-color: ${props => props.theme.color.bgcGray};
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

const Contatos = () => (
  <Layout>
    <ContactContainer fluid>
      <Title title={"Contatos"} />
    </ContactContainer>
  </Layout>
);

export default Contatos;
