import React from "react";
import styled from "styled-components";
import { Row, Col, Accordion, Card } from "react-bootstrap";

const WrapRepres = styled(Row)`
  width: 100%;
  margin: 0 auto;
`;

const WrapRegion = styled(Row)`
  width: 100%;
  margin: 0 auto;
  padding: 30px 0;
  @media (min-width: 768px) {
     padding: 50px 0;
  }
  &.-variation {
     background-color: ${props => props.theme.color.tertiaryLight};
  }
`;

const RepresRegion = styled(Row)`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
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
     margin-bottom: 20px;
     @media (min-width: 768px) {
          text-align: left;
          margin: 0;
     }
`

const Title = styled.h3`
     font-family: ${props => props.theme.font.secondy};
     font-size: 1.3em;
     font-weight: bold;
     margin: 0;
`

const Subtitle = styled.h3`
     font-family: ${props => props.theme.font.secondy};
     font-size: 1em;
     margin-bottom: 5px;
     font-weight: normal;
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
     border: 1px solid ${props => props.theme.color.primaryMedium};

     .card:not(:first-child) {
          border-top: 1px solid ${props => props.theme.color.primaryMedium};     
     }

     .card-header {
          font-size: 0.9em;
          text-transform: uppercase;
          color: ${props => props.theme.color.primaryMedium};
          cursor: pointer;
          background-color: ${props => props.theme.color.tertiaryLight};
          .-variation {
               text-transform: capitalize;
          }
     }

     .card-body {
          font-size: 0.9em;
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
       <WrapRegion>
          <RepresRegion md={10}>
               <Region md={4}>
                    <Subtitle>Estado de</Subtitle>
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
                                   <Card.Body>
                                   <p className="title">Empresa:</p>
                                        <p className="text">Eletrosil Indústria Metalúrgica Ltda.</p>
                                        <p className="text">Rua Tenente Chantre, 337 – Vila Invernada</p>
                                        <p className="text">CEP 03351-080 – São Paulo-SP</p>
                                        <p className="text">Tels: +55 (11) 2671-7088 / (11) 2671-2557</p>
                                        <p></p>
                                        <p className="title">Contatos:</p>
                                        <p className="text">Setor Comercial:</p>
                                        <p className="text">Tel: +55 (11) 99999-9999</p>
                                        <p className="text">e-mail: vendas@eletrosil.com.br</p>
                                        <p className="text">Setor Técnico:</p>
                                        <p className="text">Tel: +55 (11) 99999-9999</p>
                                        <p className="text">e-mail: depto.tecnico@eletrosil.com.br</p>
                                   </Card.Body>
                              </Accordion.Collapse>
                         </Card>
                    </RepAccordion>
               </Representantes>
          </RepresRegion>
     </WrapRegion>
     <WrapRegion className="-variation">
          <RepresRegion md={10}>
               <Region md={4}>
                    <Subtitle>Estado do</Subtitle>
                    <Title>Rio de Janeiro</Title>
               </Region>
               <Representantes>
                    <RepAccordion defaultActiveKey="0">
                         <Card>
                              <Accordion.Toggle as={Card.Header} eventKey="0">
                                   Região do Médio Vale do Paraíba - <span className="-variation">Volta Redonda - Barra Mansa - Resende</span>
                              </Accordion.Toggle>
                              <Accordion.Collapse eventKey="0">
                                   <Card.Body>
                                        <p className="title">Empresa:</p>
                                        <p className="text">Eletrosil Indústria Metalúrgica Ltda.</p>
                                        <p className="text">Rua Tenente Chantre, 337 – Vila Invernada</p>
                                        <p className="text">CEP 03351-080 – São Paulo-SP</p>
                                        <p className="text">Tels: +55 (11) 2671-7088 / (11) 2671-2557</p>
                                        <p></p>
                                        <p className="title">Contatos:</p>
                                        <p className="text">Setor Comercial:</p>
                                        <p className="text">Tel: +55 (11) 99999-9999</p>
                                        <p className="text">e-mail: vendas@eletrosil.com.br</p>
                                        <p className="text">Setor Técnico:</p>
                                        <p className="text">Tel: +55 (11) 99999-9999</p>
                                        <p className="text">e-mail: depto.tecnico@eletrosil.com.br</p>
                                   </Card.Body>
                              </Accordion.Collapse>
                         </Card>
                         <Card>
                              <Accordion.Toggle as={Card.Header} eventKey="1">
                                   Região da Costa Verde - <span className="-variation">Mangaratiba - Itaguaí</span>
                              </Accordion.Toggle>
                              <Accordion.Collapse eventKey="1">
                                   <Card.Body>
                                        <p className="title">Empresa:</p>
                                        <p className="text">Eletrosil Indústria Metalúrgica Ltda.</p>
                                        <p className="text">Rua Tenente Chantre, 337 – Vila Invernada</p>
                                        <p className="text">CEP 03351-080 – São Paulo-SP</p>
                                        <p className="text">Tels: +55 (11) 2671-7088 / (11) 2671-2557</p>
                                        <p></p>
                                        <p className="title">Contatos:</p>
                                        <p className="text">Setor Comercial:</p>
                                        <p className="text">Tel: +55 (11) 99999-9999</p>
                                        <p className="text">e-mail: vendas@eletrosil.com.br</p>
                                        <p className="text">Setor Técnico:</p>
                                        <p className="text">Tel: +55 (11) 99999-9999</p>
                                        <p className="text">e-mail: depto.tecnico@eletrosil.com.br</p>
                                   </Card.Body>
                              </Accordion.Collapse>
                         </Card>
                         <Card>
                              <Accordion.Toggle as={Card.Header} eventKey="2">
                                   Região Metropolitana do Rio de Janeiro - <span className="-variation">Santa Cruz (Zona Oeste)</span>
                              </Accordion.Toggle>
                              <Accordion.Collapse eventKey="2">
                                   <Card.Body>
                                        <p className="title">Empresa:</p>
                                        <p className="text">Eletrosil Indústria Metalúrgica Ltda.</p>
                                        <p className="text">Rua Tenente Chantre, 337 – Vila Invernada</p>
                                        <p className="text">CEP 03351-080 – São Paulo-SP</p>
                                        <p className="text">Tels: +55 (11) 2671-7088 / (11) 2671-2557</p>
                                        <p></p>
                                        <p className="title">Contatos:</p>
                                        <p className="text">Setor Comercial:</p>
                                        <p className="text">Tel: +55 (11) 99999-9999</p>
                                        <p className="text">e-mail: vendas@eletrosil.com.br</p>
                                        <p className="text">Setor Técnico:</p>
                                        <p className="text">Tel: +55 (11) 99999-9999</p>
                                        <p className="text">e-mail: depto.tecnico@eletrosil.com.br</p>
                                   </Card.Body>
                              </Accordion.Collapse>
                         </Card>
                         <Card>
                              <Accordion.Toggle as={Card.Header} eventKey="3">
                                   Demais Regiões
                              </Accordion.Toggle>
                              <Accordion.Collapse eventKey="3">
                                   <Card.Body>
                                   <p className="title">Empresa:</p>
                                        <p className="text">ARMS Comércio de Materiais Elétricos e Serviços Ltda.</p>
                                        <p className="text">Rua Afrodite, 20 – Quadra A – Lote 9 – Pq. Leopoldina – Bangu</p>
                                        <p className="text">CEP 21815-520 – Rio de Janeiro-RJ</p>
                                        <p></p>
                                        <p className="title">Contatos:</p>
                                        <p className="text">Sr. Adelino da Silva Marques</p>
                                        <p className="text">Tels: +55 (21) 2401-0529 / 9606-4569 / 9172-6655</p>
                                        <p className="text">e-mails: arms.comercio@terra.com.br / servicos.arms@terra.com.br</p>
                                   </Card.Body>
                              </Accordion.Collapse>
                         </Card>
                    </RepAccordion>
               </Representantes>
          </RepresRegion>
     </WrapRegion>
     <WrapRegion>
          <RepresRegion md={10}>
               <Region md={4}>
                    <Subtitle>Estado de</Subtitle>
                    <Title>Minas Gerais</Title>
               </Region>
               <Representantes>
                    <RepAccordion defaultActiveKey="0">
                         <Card>
                              <Accordion.Toggle as={Card.Header} eventKey="0">
                                   Todas as Regiões
                              </Accordion.Toggle>
                              <Accordion.Collapse eventKey="0">
                                   <Card.Body>
                                        <p className="title">Representante 1</p>
                                        <p></p>
                                        <p className="title">Contato:</p>
                                        <p className="text">Sr. Pio Penna</p>
                                        <p className="text">Tel: +55 (31) 99292-7478</p>
                                        <p className="text">e-mail: pio@eletrosil.com.br</p>   
                                        <p></p>

                                        <p className="title">Representante 2</p>
                                        <p></p>
                                        <p className="title">Empresa:</p>
                                        <p className="text">Pointer Comércio e Representações Ltda.</p>
                                        <p className="text">Rua Francisco Bressane, 47B – Floresta</p>
                                        <p className="text">CEP 31015-170 – Belo Horizonte-MG</p>
                                        <p className="text">Tels: +55 (11) 3441-1485 / 3857-4402</p>
                                        <p className="text">e-mail: pointer@uai.com.br</p>   
                                        <p></p>
                                        <p className="title">Contato:</p>
                                        <p className="text">Sr. Cléver Benfica</p>
                                        <p className="text">Tels: +55 (31) 3466-3270 / 3466-1355 / 99984-632</p>
                                        <p className="text">e-mail: cbenfica@uaigiga.com.br</p>   
                                   </Card.Body>
                              </Accordion.Collapse>
                         </Card>
                    </RepAccordion>
               </Representantes>
          </RepresRegion>
     </WrapRegion>
     <WrapRegion className="-variation">
          <RepresRegion md={10}>
               <Region md={4}>
                    <Subtitle>Estado do</Subtitle>
                    <Title>Paraná</Title>
               </Region>
               <Representantes>
                    <RepAccordion defaultActiveKey="0">
                         <Card>
                              <Accordion.Toggle as={Card.Header} eventKey="0">
                                   Todas as Regiões
                              </Accordion.Toggle>
                              <Accordion.Collapse eventKey="0">
                                   <Card.Body>
                                        <p className="title">Empresa:</p>
                                        <p className="text">A.C.L. Representações Comerciais Ltda.</p>
                                        <p className="text">Rua Lamenha Lins, 1243 – Apto 4 – Rebouças</p>
                                        <p className="text">CEP 80250-020 – Curitiba-PR</p>
                                        <p></p>
                                        <p className="title">Contato:</p>
                                        <p className="text">Sr. Aroldo</p>
                                        <p className="text">Tels: +55 (41) 3333-4333 / 3333-3423 / 99981-2307</p>
                                   </Card.Body>
                              </Accordion.Collapse>
                         </Card>
                    </RepAccordion>
               </Representantes>
          </RepresRegion>
     </WrapRegion>
     <WrapRegion>
          <RepresRegion md={10}>
               <Region md={4}>
                    <Subtitle>Estado de</Subtitle>
                    <Title>Santa Catarina e Rio Grande do Sul</Title>
               </Region>
               <Representantes>
                    <RepAccordion defaultActiveKey="0">
                         <Card>
                              <Accordion.Toggle as={Card.Header} eventKey="0">
                                   Todas as Regiões
                              </Accordion.Toggle>
                              <Accordion.Collapse eventKey="0">
                                   <Card.Body>
                                        <p className="title">Empresa:</p>
                                        <p className="text">Carbotécnica Comércio e Representações Ltda.</p>
                                        <p className="text">Rua Aristides Stumpf, 249 – Centro</p>
                                        <p className="text">CEP 93265-310 – Esteio-RS</p>
                                        <p></p>
                                        <p className="title">Contato:</p>
                                        <p className="text">Sr. Jorge</p>
                                        <p className="text">Tels: +55 (51) 3473-0044 / 3473-0173 / 98151-5154</p>
                                        <p className="text">e-mail: carbotecnica@carbotecnica.com.br</p>   
                                   </Card.Body>
                              </Accordion.Collapse>
                         </Card>
                    </RepAccordion>
               </Representantes>
          </RepresRegion>
     </WrapRegion>
     <WrapRegion className="-variation">
          <RepresRegion md={10}>
               <Region md={4}>
                    <Title>Demais Estados</Title>
                    <Subtitle>não listados acima</Subtitle>
               </Region>
               <Representantes>
                    <RepAccordion defaultActiveKey="0">
                         <Card>
                              <Accordion.Toggle as={Card.Header} eventKey="0">
                                   Todas as Regiões
                              </Accordion.Toggle>
                              <Accordion.Collapse eventKey="0">
                                   <Card.Body>
                                        <p className="title">Empresa:</p>
                                        <p className="text">Eletrosil Indústria Metalúrgica Ltda.</p>
                                        <p className="text">Rua Tenente Chantre, 337 – Vila Invernada</p>
                                        <p className="text">CEP 03351-080 – São Paulo-SP</p>
                                        <p className="text">Tels: +55 (11) 2671-7088 / (11) 2671-2557</p>
                                        <p></p>
                                        <p className="title">Contatos:</p>
                                        <p className="text">Setor Comercial:</p>
                                        <p className="text">Tel: +55 (11) 99999-9999</p>
                                        <p className="text">e-mail: vendas@eletrosil.com.br</p>
                                        <p className="text">Setor Técnico:</p>
                                        <p className="text">Tel: +55 (11) 99999-9999</p>
                                        <p className="text">e-mail: depto.tecnico@eletrosil.com.br</p>
                                   </Card.Body>
                              </Accordion.Collapse>
                         </Card>
                    </RepAccordion>
               </Representantes>
          </RepresRegion>
     </WrapRegion>
  </WrapRepres>
);
