import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

import Layout from "../components/Layout";
import TitlePage from "../objects/TitlePage";
import ProdCategorias from "../components/ProdCategorias"

const WrapProdutos = styled(Container)`
  background-color: ${props => props.theme.color.bgcBlue};
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

const Produtos = () => (
  <Layout>
    <WrapProdutos fluid>
      <Title title={"Categorias dos Nossos Produtos"} />
      <ProdCategorias />
    </WrapProdutos>
  </Layout>
);

export default Produtos;
