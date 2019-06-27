import React from "react";
import styled from "styled-components";
import { Col, Form } from "react-bootstrap";

import TitleSection from "../objects/TitleSection";
import Button from "../objects/Button"


const WrapForm = styled(Col)`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: ${props => props.theme.font.secondy};
  color: ${props => props.theme.color.tertiaryMedium};
  padding: 20px;
  @media (min-width: 768px) {
    align-items: flex-start;
    padding: 20px 40px;
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
const FormContact = styled(Form)`
  width: 100%;
  .form-label {
    margin-bottom: 0;
  }
`

const BtnSubmit = styled(Button)`
  margin-top: 5px;
  @media (max-width: 576px) {
    width: 100%;
  }

`

const ContatosForm = () => (
  <WrapForm xs={12} md={6}>
    <Title className="-smallCenter" title={"Envie sua mensagem"} />
    <FormContact>
      <Form.Group controlId="Input1">
        <Form.Label>Seu nome</Form.Label>
        <Form.Control type="text" placeholder="ex: Jonas Oliveira" />
      </Form.Group>
      <Form.Group controlId="Input2">
        <Form.Label>Seu e-mail</Form.Label>
        <Form.Control type="email" placeholder="ex: seunome@example.com" />
      </Form.Group>
      <Form.Group controlId="Input3">
        <Form.Label>Seu telefone</Form.Label>
        <Form.Control type="phone" placeholder="ex: (99) 99999-9999" />
      </Form.Group>
      <Form.Group controlId="Imput4">
        <Form.Label>Sua mensagem</Form.Label>
        <Form.Control as="textarea" rows="3" />
      </Form.Group>
      <BtnSubmit>Enviar</BtnSubmit>
    </FormContact>
  </WrapForm>
)

export default ContatosForm;