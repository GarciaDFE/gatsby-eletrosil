import React from "react";
import styled from "styled-components";
import { Row } from "react-bootstrap";

import Card from "./CardProdServ";
import icon1 from "../images/produtos-servicos/imgProdServ1.png";
import icon2 from "../images/produtos-servicos/imgProdServ2.png";
import icon3 from "../images/produtos-servicos/imgProdServ3.jpg";
import icon4 from "../images/produtos-servicos/imgProdServ4.png";

const ProdCategorias = styled(Row)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`;

export default () => (
    <ProdCategorias>
      <Card
        icon={icon1}
        alt={"ícone de chave elétrica"}
        title={"Chaves Elétricas"}
        description={
          "Clique no botão de edição para alterar esse texto. Lorem ipsum dolor sit amet, consectetur adifcg."
        }
        label={"+ Detalhes"}
      />
      <Card
        icon={icon2}
        alt={"ícone de contator"}
        title={"Contatores e Relés"}
        description={
          "Clique no botão de edição para alterar esse texto. Lorem ipsum dolor sit amet, consectetur adifcg."
        }
        label={"+ Detalhes"}
      />
      <Card
        icon={icon3}
        alt={"ícone de conector"}
        title={"Conectores e Tomadas Industriais"}
        description={
          "Clique no botão de edição para alterar esse texto. Lorem ipsum dolor sit amet, consectetur adifcg."
        }
        label={"+ Detalhes"}
      />
      <Card
        icon={icon4}
        alt={"ícone de painel elétrico"}
        title={"Painéis Elétricos"}
        description={
          "Clique no botão de edição para alterar esse texto. Lorem ipsum dolor sit amet, consectetur adifcg."
        }
        label={"+ Detalhes"}
      />
      <Card
        icon={icon1}
        alt={"ícone de produtos diversos"}
        title={"Produtos Diversos"}
        description={
          "Clique no botão de edição para alterar esse texto. Lorem ipsum dolor sit amet, consectetur adifcg."
        }
        label={"+ Detalhes"}
      />
  </ProdCategorias>
);
