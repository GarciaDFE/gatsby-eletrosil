import React from "react";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import img1 from "../images/carousel/img1Carousel.jpg";
import img2 from "../images/carousel/img2Carousel.jpg";
import img3 from "../images/carousel/img3Carousel.jpg";

const Title = styled.h3`
  color: ${props => props.theme.color.tertiaryLight};
  font-family: ${props => props.theme.font.primary};
  font-size: 1.3rem;
  margin-bottom: 0.1rem;
  @media (min-width: 768px) {
    font-size: 1.5em;
    margin-bottom: 0.2em;
  }
`;

const SubTitle = styled.h5`
  color: ${props => props.theme.color.secondyMedium};
  font-family: ${props => props.theme.font.secondy};
  text-transform: uppercase;
  font-size: 0.9em;
  margin-bottom: 0.2em;
  @media (min-width: 768px) {
    font-size: 1em;
    margin-bottom: 0.4em;
  }
`;

const Text = styled.p`
  color: ${props => props.theme.color.tertiaryLight};
  font-family: ${props => props.theme.font.secondy};
  width: 100%;
  font-size: 0.8em;
  line-height: 1.1em;
  @media (min-width: 768px) {
    font-size: 0.9em;
    line-height: 1.2em;
  }
`;

const MyCCpation = styled(Carousel.Caption)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
position: relative;
min-width: 100%;

  margin: 0 auto;
  min-height: 250px;
  max-height: 350px;

`;

const HomeCarousel = styled(Carousel)`
  .carousel-indicators {
    margin-bottom: 0;
    height: 2em;
    li {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: orange;
    }
  }
`;

export default ({ data }) => (
  <HomeCarousel interval={5000}>
    <Carousel.Item>
      <Img className="d-block" src={img1} alt="First slide" />
      <MyCCpation>
        <Title>Bem-vindo à Eletrosil!</Title>
        <SubTitle>Mais de 50 anos de tradição em qualidade</SubTitle>
        <Text>
          Soluções em equipamentos eletromecânicos e painéis elétricos de baixa
          tensão e especializada no fornecimento de soluções sob encomenda para
          empresas e consultores dos setores de siderurgia, mineração, papel e
          celulose, ferrovias e engenharia.
        </Text>
      </MyCCpation>
    </Carousel.Item>
    <Carousel.Item>
      <Img className="d-block img-fluid" src={img2} alt="Third slide" />
      <MyCCpation>
        <Title>Lançamento da Nova Chave Elétrica</Title>
        <SubTitle>
          A mais moderna do mercado e com o dobro da durabilidade
        </SubTitle>
        <Text>
          Chave de emergência ideal para trabalhar em transportadores de correia
          de alta densidade em ambientes com grande concentração de pós e também
          em atmosfera marinha ou corrosiva.
        </Text>
      </MyCCpation>
    </Carousel.Item>
    <Carousel.Item>
      <Img className="d-block img-fluid" src={img3} alt="Third slide" />
      <MyCCpation>
        <Title>
          Soluções Completas de Automação e Controle de Pontes Rolantes
        </Title>
        <Text>
          Em parceria com empresas multinacionais de tecnologias consagradas
          fornecemos soluções completas em sistemas de automação e controle de
          movimentação de cargas.
        </Text>
      </MyCCpation>
    </Carousel.Item>
  </HomeCarousel>
);
