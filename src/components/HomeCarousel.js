import React from "react";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import img1 from "../images/carousel/img1Carousel.jpg";
import img2 from "../images/carousel/img2Carousel.jpg";
import img3 from "../images/carousel/img3Carousel.jpg";

const Hero = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background: ${props => props.theme.gradient.secondy};
`

const Title = styled.h3`
  width: 90%;
  color: ${props => props.theme.color.tertiaryLight};
  font-family: ${props => props.theme.font.primary};
  font-size: 1.3rem;
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
`;

const SubTitle = styled.h5`
  width: 90%;
  color: ${props => props.theme.color.secondyMedium};
  font-family: ${props => props.theme.font.secondy};
  text-transform: uppercase;
  font-size: 0.9em;
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
`;

const Text = styled.p`
  width: 70%;
  color: ${props => props.theme.color.tertiaryLight};
  font-family: ${props => props.theme.font.secondy};
  font-size: 0.8em;
  line-height: 1.1em;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 0.9em;
    line-height: 1.2em;
  }
  @media (min-width: 992px) {
    font-size: 1em;
    line-height: 1.3em;
  }
`;

const Img = styled.img`
  max-height: 724px;
  margin: 0 auto;
`;


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
    @media (max-width: 576px) {
      display: none;
    }
  }
`;


export default ({ data }) => (
  <HomeCarousel interval={3000}>
    <Carousel.Item>
      <Hero>
        <Title>Bem-vindo à Eletrosil!</Title>
        <SubTitle>Mais de 50 anos de tradição em qualidade</SubTitle>
        <Text className="d-none d-sm-block">
          Soluções em equipamentos eletromecânicos e painéis elétricos de baixa tensão e especializada no fornecimento de soluções sob encomenda para empresas e consultores dos setores de siderurgia, mineração, papel e celulose, ferrovias e engenharia.
        </Text>
      </Hero>
      <Img className="d-block w-100" src={img1} alt="First slide" />
    </Carousel.Item>
    <Carousel.Item>
      <Hero className="-variation">
        <Title>Lançamento da Nova Chave Elétrica</Title>
        <SubTitle>
          A mais moderna do mercado e com o dobro da durabilidade
        </SubTitle>
        <Text className="d-none d-sm-block">
          Chave de emergência ideal para trabalhar em transportadores de correia de alta densidade em ambientes com grande concentração de pós e também em atmosfera marinha ou corrosiva.
        </Text>
      </Hero>
      <Img className="d-block w-100" src={img2} alt="Third slide" />
    </Carousel.Item>
    <Carousel.Item>
      <Hero>
        <Title>
          Soluções Completas de Automação e Controle de Pontes Rolantes
        </Title>
        <Text className="d-none d-sm-block">
          Em parceria com empresas multinacionais de tecnologias consagradas
          fornecemos soluções completas em sistemas de automação e controle de movimentação de cargas.
        </Text>
      </Hero>
      <Img className="d-block w-100" src={img3} alt="Third slide" />
    </Carousel.Item>
  </HomeCarousel>
);
