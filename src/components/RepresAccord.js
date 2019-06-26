import React from "react";
import styled from "styled-components";
import { Row, Col, Accordion, Card } from "react-bootstrap";

const WrapRepres = styled(Row)`
  width: 100%;
  max-width: 1200px;
  padding: 20px 0;
  margin: 0 auto;
`;


const RepresRegion = styled(Row)`
  width: 100%;
  max-width: 1000px;
  margin: 10px auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Region = styled(Col)`
     display: flex;
     flex-direction: column;
     justify-content: center;
     text-transform: uppercase;
     text-align: center;
     font-weight: bold;
     margin-bottom: 20px;
     @media (min-width: 768px) {
          text-align: left;
          margin: 0;
     }
`

const Title = styled.h3`
     font-family: ${props => props.theme.font.secondy};
     font-size: 1.6em;
     margin: 0;
`

const Subtitle = styled.h3`
     font-family: ${props => props.theme.font.secondy};
     font-size: 1.2em;
     margin-bottom: 5px;
`

const Representantes = styled(Col)`
     display: flex;
     flex-direction: column;
     justify-content: center;
`

const RepAccordion = styled(Accordion)`
     font-family: ${props => props.theme.font.secondy};
     font-weight: normal;
     color: ${props => props.theme.color.tertiaryMedium};

     .card-header {
          text-transform: uppercase;
          color: ${props => props.theme.color.primaryMedium};
          border: 2px solid ${props => props.theme.color.primaryMedium};
          cursor: pointer;
     }
     .card-body {

          > .title {
               font-weight: bold;
               margin: 0;
          }
          > .text {
               margin: 0;
          }
     }
`

export default props => (
  <WrapRepres>
     <RepresRegion md={10}>
          <Region md={4}>
               <Subtitle>Estado</Subtitle>
               <Title>São Paulo</Title>
          </Region>
          <Representantes>
               <RepAccordion defaultActiveKey="0">
                    <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                    Região da Baixada Santista
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                         <Card.Body>
                              <p className="title">Empresa:</p>
                              <p className="text">CRC Soluções em Eletricidade e Automação Industrial</p>
                              <p className="text">Rua Bernardino Fanganiello, 360 – Casa Verde</p>
                              <p className="text">CEP 02512-000 – São Paulo-SP</p>
                              <p className="text">Tels: +55 (11) 3441-1485 / 3857-4402</p>
                              <p></p>
                              <p className="title">Contato:</p>
                              <p className="text">Sr. Cláudio Ramos de Camargo</p>
                              <p className="text">Tels: +55 (11) 98406-1835 / 99955-3477</p>
                              <p className="text">claudio@crcsolucoes.com.br</p>   
                         </Card.Body>
                    </Accordion.Collapse>
                    </Card>
                    <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                         Demais Regiões
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                         <Card.Body>Empresa:
Eletrosil Indústria Metalúrgica Ltda.
Rua Tenente Chantre, 337 – Vila Invernada
CEP 03351-080 – São Paulo-SP
Tels: +55 (11) 2671-7088 / (11) 2671-2557

Contatos:
Setor Comercial:
Tel: +55 (11) 99999-9999
e-mail: vendas@eletrosil.com.br
Setor Técnico:
Tel: +55 (11) 99999-9999
e-mail: depto.tecnico@eletrosil.com.br</Card.Body>
                    </Accordion.Collapse>
                    </Card>
               </RepAccordion>
          </Representantes>
     </RepresRegion>

     <RepresRegion md={10}>
          <Region md={4}>
               <Subtitle>Estado</Subtitle>
               <Title>Minas Gerais</Title>
          </Region>
          <Representantes>
          <RepAccordion md={6} defaultActiveKey="0">
               <Card>
               <Accordion.Toggle as={Card.Header} eventKey="0">
                    Click me!
               </Accordion.Toggle>
               <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
               </Accordion.Collapse>
               </Card>
               <Card>
               <Accordion.Toggle as={Card.Header} eventKey="1">
                    {props.title}
               </Accordion.Toggle>
               <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
               </Accordion.Collapse>
               </Card>
          </RepAccordion>
          </Representantes>
     </RepresRegion>
  </WrapRepres>
);
