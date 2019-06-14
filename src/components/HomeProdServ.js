import React from "react";
import styled from "styled-components";
import { Row } from "react-bootstrap";

//import icon1 from "../images/imgProdServ1.jpg";
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
s;

export default () => (
  <HomeProdServ>
    <Card>
      <Icon src={icon1} alt={"imagem da chave elétrica eletrosil"} />
      <Title title={"Chaves Elétricas"} />
      <Description
        description={
          "Clique no botão de edição para alterar esse texto. Lorem ipsum dolor sit amet, consectetur adifcg."
        }
      />
    </Card>
  </HomeProdServ>
);
