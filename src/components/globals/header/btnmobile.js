import React from "react";
import styled from "styled-components";
import "../../../styles/globalStyles.scss";

const BtnMobile = styled.div`
  cursor: pointer;
  background-color: aqua;
  padding: 10px;
  .bar1,
  .bar2,
  .bar3 {
    width: 30px;
    height: 4px;
    background-color: #333;
    margin: 6px 0;
    transition: 1s;
    cursor: pointer;
  }
  &.change .bar1 {
    -webkit-transform: rotate(-45deg) translate(-8px, 6px);
    transform: rotate(-45deg) translate(-8px, 6px);
  }

  &.change .bar2 {
    opacity: 0;
  }

  &.change .bar3 {
    -webkit-transform: rotate(45deg) translate(-8px, -6px);
    transform: rotate(45deg) translate(-8px, -6px);
  }
`;

export default () => (
  <BtnMobile className="">
    <div className="bar1" />
    <div className="bar2" />
    <div className="bar3" />
  </BtnMobile>
);
