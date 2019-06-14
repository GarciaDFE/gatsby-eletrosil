import React from "react";
import styled from "styled-components";
import { Row } from "react-bootstrap";

import Card from "./CardProdServ";
import icon1 from "../images/imgProdServ1.png";
import icon2 from "../images/imgProdServ2.png";
import icon3 from "../images/imgProdServ3.jpg";
import icon4 from "../images/imgProdServ4.png";
import icon5 from "../images/imgProdServ5.png";

const HomeProdServ = styled(Row)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`;

export default () => (
  <HomeProdServ>
    <Card
      icon={icon1}
      title={"Chaves Elétricas"}
      alt={"ícone de chave elétrica"}
      description={
        "Clique no botão de edição para alterar esse texto. Lorem ipsum dolor sit amet, consectetur adifcg."
      }
    />
    <Card
      icon={icon2}
      title={"Contatores e Relés"}
      alt={"ícone de contator"}
      description={
        "Clique no botão de edição para alterar esse texto. Lorem ipsum dolor sit amet, consectetur adifcg."
      }
    />
    <Card
      icon={icon3}
      title={"Conectores e Tomadas Industriais"}
      alt={"ícone de conector"}
      description={
        "Clique no botão de edição para alterar esse texto. Lorem ipsum dolor sit amet, consectetur adifcg."
      }
    />
    <Card
      icon={icon4}
      title={"Painéis Elétricos"}
      alt={"ícone de painel elétrico"}
      description={
        "Clique no botão de edição para alterar esse texto. Lorem ipsum dolor sit amet, consectetur adifcg."
      }
    />
    <Card
      icon={icon5}
      title={"Serviços de Recuperação"}
      alt={"ícone de manutenção"}
      description={
        "Clique no botão de edição para alterar esse texto. Lorem ipsum dolor sit amet, consectetur adifcg."
      }
    />
  </HomeProdServ>
);
