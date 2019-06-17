import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import imgMapa from "../images/imgHomeMapa.jpg";
import iconLocal from "../images/iconMapMarkerPositivo.svg";
import iconPhone from "../images/iconPhonePositivo.svg";
import iconEmail from "../images/iconEnvelopePositivo.svg";
import iconWhats from "../images/iconWhatsappPositivo.svg";

const HomeContact = styled(Row)`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  max-width: 1200px;
  @media (min-width: 992px) {
    flex-direction: row-reverse;
    justify-content: center;
  }
`;

const Img = styled(Col)`
  width: 100%;
  height: cal(width * 0.791);
  margin: 0;
  padding: 0;
  text-align: center;
  @media (min-width: 992px) {
    text-align: right;
  }
`;

const Contacts = styled(Col)`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: ${props => props.theme.font.second};
  color: ${props => props.theme.color.tertiaryMedium};
  margin-bottom: 20px;
  @media (min-width: 992px) {
    align-items: flex-start;
    margin: 20px;
  }
`;

const ListContacts = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;
  font-size: 0.9em;
  font-weight: normal;
  line-height: 1.1em;
  & li {
    margin: 0;
  }
  @media (min-width: 992px) {
    text-align: left;
  }
`;

const Name = styled.li`
  width: 100%;
  font-size: 1.2em;
  line-height: 1.2em;
  text-transform: uppercase;
  font-weight: bold;
  padding-bottom: 5px;
  @media (min-width: 992px) {
    padding-left: -20px;
  }
`;

const Local = styled.li`
  margin: 0;
  @media (min-width: 992px) {
    padding-left: 25px;
  }
  &:before {
    content: "";
    background: url(${iconLocal});
    background-repeat: no-repeat;
    font-size: 0.8em;
    padding-left: 25px;
    @media (min-width: 992px) {
      margin-left: -25px;
    }
  }
`;

const Phone = styled.li`
  font-weight: bold;
  padding: 5px 0 10px 0;
  &:before {
    content: "";
    background: url(${iconPhone});
    background-repeat: no-repeat;
    font-size: 0.8em;
    padding-left: 25px;
  }
`;

const ItemSetor = styled.li`
  font-size: 1em;
  @media (min-width: 992px) {
    padding-left: 25px;
  }
`;
const ItemEmail = styled.li`
  &:before {
    content: "";
    background: url(${iconEmail});
    background-repeat: no-repeat;
    font-size: 0.8em;
    padding-left: 25px;
  }
`;
const ItemWhats = styled.li`
  padding-bottom: 10px;
  &:before {
    content: "";
    background: url(${iconWhats});
    background-repeat: no-repeat;
    font-size: 0.8em;
    padding-left: 25px;
  }
`;

export default () => (
  <HomeContact>
    <Contacts xs={12} md={6}>
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
        <ItemSetor>Setor Comercial:</ItemSetor>
        <ItemEmail>vendas@eletrosil.com.br</ItemEmail>
        <ItemWhats>+55 (11) 99999-9999</ItemWhats>
      </ListContacts>
      <ListContacts>
        <ItemSetor>Setor Técnico:</ItemSetor>
        <ItemEmail>depto.tecnico@eletrosil.com.br</ItemEmail>
        <ItemWhats>+55 (11) 99999-9999</ItemWhats>
      </ListContacts>
      <ListContacts>
        <ItemSetor>Setor Financeiro:</ItemSetor>
        <ItemEmail>financeiro@eletrosil.com.br</ItemEmail>
        <ItemWhats>+55 (11) 99999-9999</ItemWhats>
      </ListContacts>
      <ListContacts>
        <ItemSetor>Setor de Recursos Humanos:</ItemSetor>
        <ItemEmail>rh@eletrosil.com.br</ItemEmail>
        <ItemWhats>+55 (11) 99999-9999</ItemWhats>
      </ListContacts>
    </Contacts>
    <Img xs={12} md={6}>
      <img src={imgMapa} alt="Imagem do mapa de localizção da Eletrosil" />
    </Img>
  </HomeContact>
);
