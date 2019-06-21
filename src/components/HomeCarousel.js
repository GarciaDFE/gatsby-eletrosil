import React from "react";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import img1 from "../images/carousel/img1Carousel.jpg";
import img2 from "../images/carousel/img2Carousel.jpg";
import img3 from "../images/carousel/img3Carousel.jpg";
import BtnSaibaMais from "./BtnSaibaMais"

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

// const Content = styled.div`
//   width: 80%;
//   height: 80%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   transform: translateY(50%);
//   &.slide2 {
//     align-items: flex-start;
//   }
//   &.-active {
//     transform: translateY(0);
//     transition: translate 300ms linear;
//   }
// `

const Title = styled.h2`
  color: ${props => props.theme.color.tertiaryLight};
  font-family: ${props => props.theme.font.primary};
  font-size: 1.3rem;
  font-weight: normal;
  margin-bottom: 0.1rem;
  text-align: center;
  @media (min-width: 576px) {
    width: 70%;
  }
  @media (min-width: 768px) {
    font-size: 1.5em;
    margin-bottom: 0.2em;
  }
  @media (min-width: 992px) {
    font-size: 2em;
  }
  &-destaque {
    font-weight: bold;    
  }
  &.slide2 {
    text-align: left;
  }
`;

const SubTitle = styled.h3`
  width: 90%;
  color: ${props => props.theme.color.secondyMedium};
  font-family: ${props => props.theme.font.secondy};
  text-transform: uppercase;
  font-size: 0.9em;
  font-weight: normal;
  margin-bottom: 0.2em;
  text-align: center;
  @media (min-width: 576px) {
    width: 70%;
  }
  @media (min-width: 768px) {
    font-size: 1em;
    margin-bottom: 0.4em;
  }
  @media (min-width: 992px) {
    font-size: 1.1em;
  }
  &-destaque {
    font-weight: bold;    
  }
  &.slide2 {
    text-align: left;
  }
`;

const Text = styled.p`
  width: 70%;
  color: ${props => props.theme.color.tertiaryLight};
  font-family: ${props => props.theme.font.secondy};
  font-size: 0.8em;
  line-height: 1.1em;
  text-align: center;
  margin-bottom: 1em;
  @media (min-width: 768px) {
    font-size: 0.9em;
    line-height: 1.2em;
  }
  @media (min-width: 992px) {
    font-size: 1em;
    line-height: 1.3em;
  }
  &.slide2 {
    width: 50%;
    text-align: left;
  }
`;

const Img = styled.img`
  min-height: 300px;
  max-height: 724px;
  margin: 0 auto;
`;

const Btn = styled(BtnSaibaMais)`
  margin: 0 auto;
  &.slide2 {
    margin: 0;
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
      background-color: orange;
      @media (min-width: 576px) {
        width: 12px;
        height: 12px;
        margin-bottom: 15px;
      }
    }
  }
  .carousel-control-prev,
  .carousel-control-next {
    width: 5%;
    @media (max-width: 576px) {
      display: none;
    }
  }
  .carousel-caption {
    top: 50%;
    bottom: auto;
    transform: translateY(-50%);
  }
    .carousel-item {
    height: 100%;
    min-height: 300px;
    background-image: url(${img2});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export default ({ data }) => (
  <HomeCarousel interval={3000}>
    <Carousel.Item>
      <CarouselOverlay />
      <Img className="d-block" src={img1} alt="First slide" />
      <Carousel.Caption>
        <Title>Bem-vindo à <strong className="-destaque">Eletrosil!</strong></Title>
        <SubTitle>Mais de <strong className="-destaque">50 anos</strong> de tradição em qualidade</SubTitle>
        <Text className="d-none d-sm-block">
          Soluções em equipamentos eletromecânicos e painéis elétricos de baixa tensão e especializada no fornecimento de soluções sob encomenda para empresas e consultores dos setores de siderurgia, mineração, papel e celulose, ferrovias e engenharia.
        </Text>
        <Btn />
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <CarouselOverlay />
      {/* <Img className="d-block" src={img2} alt="Third slide" /> */}
      <Carousel.Caption>
        <Title className="slide2">Lançamento da Nova Chave Elétrica</Title>
        <SubTitle className="slide2">
          A mais moderna do mercado e com o dobro da durabilidade
        </SubTitle>
        <Text className="d-none d-sm-block slide2">
          Chave de emergência ideal para trabalhar em transportadores de correia de alta densidade em ambientes com grande concentração de pós e também em atmosfera marinha ou corrosiva.
        </Text>
        <Btn className="slide2"/>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <CarouselOverlay />
      <Img className="d-block" src={img3} alt="Third slide" />
      <Carousel.Caption>
        <Title>
          Soluções Completas de Automação e Controle de Pontes Rolantes
        </Title>
        <Text className="d-none d-sm-block">
          Em parceria com empresas multinacionais de tecnologias consagradas
          fornecemos soluções completas em sistemas de automação e controle de movimentação de cargas.
        </Text>
        <Btn />
      </Carousel.Caption>
    </Carousel.Item>
  </HomeCarousel>
);
