import React from "react";
import styled from "styled-components";
import { Row } from "react-bootstrap";

import icon1 from "../images/imgProdServ1.jpg";
// import icon2 from "../images/imgProdServ2.jpg";
// import icon3 from "../images/imgProdServ3.jpg";
// import icon4 from "../images/imgProdServ4.jpg";
// import icon5 from "../images/imgProdServ5.jpg";
import Card from "CardProdServ";

const HomeProdServ = styled(Row)`
  width: 100%;
  max-width: 1200px;
  background-color: blue;
  margin: 0 auto;
`;

export default () => (
  <HomeProdServ>
    <Card
      col
      icon={icon1}
      title={"Chaves Elétricas"}
      description={
        "Clique no botão de edição para alterar esse texto. Lorem ipsum dolor sit amet, consectetur adifcg."
      }
      altText={"imagem da chave elétrica eletrosil"}
    />
    {/* <Card
      col
      icon={icon2}
      title={"Contatores e Relés"}
      description={
        "Clique no botão de edição para alterar esse texto. Lorem ipsum dolor sit amet, consectetur adifcg."
      }
      altText={"imagem de contatores e relés eletrosil"}
    />
    <Card
      col
      icon={icon3}
      title={"Conectores e Tomadas Industriais"}
      description={
        "Clique no botão de edição para alterar esse texto. Lorem ipsum dolor sit amet, consectetur adifcg."
      }
      altText={"imagem de conectores e tomadas eletrosil"}
    />
    <Card
      col
      icon={icon4}
      title={"Painéis Elétricos"}
      description={
        "Clique no botão de edição para alterar esse texto. Lorem ipsum dolor sit amet, consectetur adifcg."
      }
      altText={"imagem de painéis elétricos eletrosil"}
    />
    <Card
      col
      icon={icon5}
      title={"Serviços de Recuperação"}
      description={
        "Clique no botão de edição para alterar esse texto. Lorem ipsum dolor sit amet, consectetur adifcg."
      }
      altText={"imagem de manutenção eletrosil"}
    /> */}
  </HomeProdServ>
);
