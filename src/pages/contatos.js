import React from "react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";

import Layout from "../components/Layout";
import TitlePage from "../objects/TitlePage";
import ContatosContact from "../components/ContatosContact"
import ContatosForm from "../components/ContatosForm"
import ContatosLocal from "../components/ContatosLocal"

const ContactContainer = styled(Container)`
  background-color: ${props => props.theme.color.bgcGray};
  padding: 30px 0 0;
  @media (min-width: 768px) {
    padding: 50px 0 0;
  }
`;

const Title = styled(TitlePage)`
  &:last-child {
    margin-bottom: 40px;
  }
`

const WrapFormContact = styled(Row)`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  padding: 0;
  @media (min-width: 768px) {
    justify-content: space-around;
  }
`;

const WrapLocalContact = styled(Row)`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0;
`;

const Contatos = () => (
  <Layout>
    <ContactContainer fluid>
      <Title title={"Contatos"} />
      <WrapFormContact>
        <ContatosForm xs={12} md={6} />
        <ContatosContact xs={12} md={6} />
      </WrapFormContact>
      <WrapLocalContact fluid>
        <ContatosLocal />
      </WrapLocalContact>
    </ContactContainer>
  </Layout>
);

export default Contatos;
