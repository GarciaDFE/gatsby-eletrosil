import React from "react";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";

import img1 from "../images/carousel/img1Carousel.jpg";
import img2 from "../images/carousel/img2Carousel.jpg";
import img3 from "../images/carousel/img3Carousel.jpg";
import Button from "../objects/Button"

const CarouselOverlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background: ${props => props.theme.gradient.secondy};
`

const Title = styled.h2`
  color: ${props => props.theme.color.tertiaryLight};
  font-family: ${props => props.theme.font.primary};
  font-size: 1.3rem;
  font-weight: normal;
  margin-bottom: 0.1rem;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 1.5em;
    margin-bottom: 0.2em;
    &.slide2 {
      text-align: left;
    }
  }
  @media (min-width: 992px) {
    font-size: 2em;
  }
  &-destaque {
    font-weight: bold;    
  }
`;

const SubTitle = styled.h3`
  color: ${props => props.theme.color.secondyMedium};
  font-family: ${props => props.theme.font.secondy};
  text-transform: uppercase;
  font-size: 0.9em;
  font-weight: normal;
  margin-bottom: 0.2em;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 1em;
    margin-bottom: 0.4em;
    &.slide2 {
      text-align: left;
      width: 60%;
    }
  }
  @media (min-width: 992px) {
    font-size: 1.1em;
  }
  &-destaque {
    font-weight: bold;    
  }
`;

const Text = styled.p`
  color: ${props => props.theme.color.tertiaryLight};
  font-family: ${props => props.theme.font.secondy};
  font-size: 0.8em;
  line-height: 1.1em;
  text-align: center;
  margin-bottom: 1em;
  @media (min-width: 768px) {
    font-size: 0.9em;
    line-height: 1.2em;
    &.slide2 {
      width: 60%;
      text-align: left;
    }
  }
  @media (min-width: 992px) {
    font-size: 1em;
    line-height: 1.3em;
  }
`;

const Btn = styled(Button)`
  box-shadow: 0 0 10px ${props => props.theme.color.tertiaryLight};
  @media (min-width: 768px) {
    &.slide2 {
      float: left;
    }
  }
`

const HomeCarousel = styled(Carousel)`
  .carousel-indicators {
    margin-bottom: 0;
    height: 1.6em;
    @media (min-width: 768px) {
      height: 2em;
      }
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
    width: 10%;
    @media (max-width: 576px) {
      display: none;
    }
  }

  .carousel-caption {
    top: 50%;
    bottom: auto;
    transform: translateY(-50%);
    left: 15%;
    right: 15%;
  }

  .carousel-item {
    height: 100%;
    min-height: 300px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    &.slide1 {
      background-image: url(${img1});
    }
    &.slide2 {
      background-image: url(${img2});
    }
    &.slide3 {
      background-image: url(${img3});
    }
  }
`;


export default ({ data }) => (
  <HomeCarousel interval={6000}>

    <Carousel.Item className="slide1">
      <CarouselOverlay />
        <Carousel.Caption>
        <Title>Bem-vindo à <strong className="-destaque">Eletrosil!</strong></Title>
        <SubTitle>Mais de <strong className="-destaque">50 anos</strong> de tradição em qualidade</SubTitle>
        <Text className="d-block">
          Soluções em equipamentos eletromecânicos e painéis elétricos de baixa tensão e especializada no fornecimento de soluções sob encomenda para empresas e consultores dos setores de siderurgia, mineração, papel e celulose, ferrovias e engenharia.
        </Text>
        <Btn>Saiba mais</Btn>
      </Carousel.Caption>}
    </Carousel.Item>

    <Carousel.Item className="slide2">
      <CarouselOverlay />
      <Carousel.Caption>
        <Title className="slide2">Lançamento da Nova Chave Elétrica</Title>
        <SubTitle className="slide2">
          A mais moderna do mercado e com o dobro da durabilidade
        </SubTitle>
        <Text className="d-block slide2">
          Chave de emergência ideal para trabalhar em transportadores de correia de alta densidade em ambientes com grande concentração de pós e também em atmosfera marinha ou corrosiva.
        </Text>
        <Btn className="slide2">Saiba mais</Btn>
      </Carousel.Caption>}
    </Carousel.Item>

    <Carousel.Item className="slide3">
      <CarouselOverlay />
      <Carousel.Caption>
        <Title>
          Soluções Completas de Automação e Controle de Pontes Rolantes
        </Title>
        <Text className="d-block">
          Em parceria com empresas multinacionais de tecnologias consagradas
          fornecemos soluções completas em sistemas de automação e controle de movimentação de cargas.
        </Text>
        <Btn>Saiba mais</Btn>
      </Carousel.Caption>
    </Carousel.Item>
    
  </HomeCarousel>
);
