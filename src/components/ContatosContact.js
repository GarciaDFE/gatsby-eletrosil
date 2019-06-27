import React from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";

import TitleSection from "../objects/TitleSection";


const Contacts = styled(Col)`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: ${props => props.theme.font.secondy};
  color: ${props => props.theme.color.tertiaryMedium};
  margin-bottom: 20px;
  @media (min-width: 768px) {
    align-items: flex-start;
    padding: 20px 0;
  }
`;

const Title = styled(TitleSection)`
  &:last-child {
    text-transform: uppercase;
    margin-bottom: 40px;
    &:after {
         display: none;
    }
  }
`
const WrapListContacts = styled.div`
  @media (min-width: 768px) {
    padding-left: 40px;
    border-left: 0.5px solid ${props => props.theme.color.tertiaryMedium};
  }
`

const ListContacts = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;
  font-size: 0.9em;
  font-weight: normal;
  line-height: 1.5em;
  margin-bottom: 1em;
  @media (min-width: 768px) {
    text-align: left;
  }
  &:last-child {
    margin-bottom: 0;
  }
  & li {
    margin: 0;
  }
`;

const Name = styled.li`
  width: 100%;
  font-size: 1.2em;
  line-height: 1.2em;
  text-transform: uppercase;
  font-weight: bold;
  padding-bottom: 5px;
`;

const Local = styled.li`
  line-height: 1.2em;
`;

const Phone = styled.li`
  font-weight: bold;
  padding: 5px 0 10px 0;
`;

const Contatos = () => (
     <Contacts xs={12} md={6}>
          <Title className="-smallCenter" title={"Entre em contato"} />
          <WrapListContacts>
            <ListContacts>
                <Name>Eletrosil Indústria Metalúrgica</Name>
                <Local>
                      Rua Tenente Chantré, nº 337 – Vila Invernada
                      <br />
                      São Paulo-SP — CEP 03351-080
                </Local>
                <Phone>+55 (11) 2671-7088 — (11) 2671-2557</Phone>
            </ListContacts>
            <ListContacts>
                <li>Setor Comercial:</li>
                <li>vendas@eletrosil.com.br</li>
                <li>+55 (11) 99999-9999</li>
            </ListContacts>
            <ListContacts>
                <li>Setor Técnico:</li>
                <li>depto.tecnico@eletrosil.com.br</li>
                <li>+55 (11) 99999-9999</li>
            </ListContacts>
            <ListContacts>
                <li>Setor Financeiro:</li>
                <li>financeiro@eletrosil.com.br</li>
                <li>+55 (11) 99999-9999</li>
            </ListContacts>
            <ListContacts>
                <li>Setor de Recursos Humanos:</li>
                <li>rh@eletrosil.com.br</li>
                <li>+55 (11) 99999-9999</li>
            </ListContacts>
          </WrapListContacts>
     </Contacts>
);

export default Contatos;
