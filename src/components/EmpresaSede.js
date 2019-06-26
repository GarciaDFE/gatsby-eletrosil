import React from "react";
import styled from "styled-components";
import { Row, Carousel } from "react-bootstrap";

import TitleSection from "../components/TitleSection";
import img1 from "../images/empresa/imgEstrutura-almoxarifado.jpg";
import img2 from "../images/empresa/imgEstrutura-escritorio.jpg";
import img3 from "../images/empresa/imgEstrutura-montagem.jpg";
import img4 from "../images/empresa/imgEstrutura-ferramentaria.jpg";


const CompanySede = styled(Row)`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 30px;
`;

const Paragraph = styled.p`
  font-family: ${props => props.theme.font.secondy};
  color: ${props => props.theme.color.tertiaryMedium};
  font-size: 0.9em;
  margin: 0 15px 30px;
  @media (min-width: 768px) {
    width: 100%;
    font-size: 1em;
    line-height: 1.5em;
    margin: 0 100px 50px;
  }
`;

const Title = styled(TitleSection)`
  &:last-child {
    margin-bottom: 30px;
  }
`

const SedeCarousel = styled(Carousel)`
  width: 300px;
  margin: 0 auto;

  .carousel-indicators {
    margin-bottom: -30px;
    height: 1.5em;
    li {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: ${props => props.theme.color.secondyDark};
      @media (min-width: 576px) {
        width: 12px;
        height: 12px;
        margin-bottom: 15px;
      }
    }
  }

  .carousel-control-prev,
  .carousel-control-next {
    filter: invert(100%);
    width: 20px;
    @media (max-width: 576px) {
      display: none;
    }
  }

  .carousel-item {
    width: 220px;
    height: 170px;
    margin-left: 40px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    &.img1 {
      background-image: url(${img1});
    }
    &.img2 {
      background-image: url(${img2});
    }
    &.img3 {
      background-image: url(${img3});
    }
    &.img4 {
      background-image: url(${img4});
    }
  }
`;

export default ({data}) => (
  <CompanySede>
    <Title className={"-smallCenter"} title={"Estrutura da nossa sede"} />
    <Paragraph>
        Nossa unidade fabril situada no município de São Paulo, capital do estado, possui uma área construída de 1.812m² onde aloja seus escritórios, suas áreas de usinagem, fundição e montagem da nossa vasta linha de produtos.
    </Paragraph>
    <SedeCarousel interval={3000}>
      <Carousel.Item className="img1" />
      <Carousel.Item className="img2" />
      <Carousel.Item className="img3" />
      <Carousel.Item className="img4" />
    </SedeCarousel>
  </CompanySede>
);
