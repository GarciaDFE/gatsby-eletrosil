import React from "react";
import styled from "styled-components";
import linguas from "../../../images/header/linguas.png";

const Topbar = styled.div`
  height: 30px;
  width: 100%;
  margin: 0 auto;
  background-color: ${props => props.theme.color.primaryDark};
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 1200px;
  color: gray;
  margin: 0 auto;
  .col {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 1px solid orange;
  }
  .imgLinguas {
       display: flex;
       margin: 0;
  }
`

export default ({ data }) => (
  <Topbar>
    <Row>
    <div className="col-lg-3 col-sm-1">TELEFONE</div>
    <div className="col-lg-3 col-sm-1">EMAIL</div>
    <div className="col-lg-3 col-sm-1">EXPEDIENTE</div>
    <div className="col-lg-3 col-sm-1">FECHADO</div>
    <div className="col-lg-1 col-sm-1">
       <img className="imgLinguas" src={linguas} alt="imagem das línguas" />
    </div>
    </Row>
  </Topbar>
);
