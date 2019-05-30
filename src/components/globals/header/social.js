import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Social = styled.div`
  color: red;
  font-size: 20px;
  font-weight: bold;
  background-color: yellowgreen;
`;

export default () => (
  <Social>
    NAVBAR SOCIAL<Link to="https://github.com/GarciaDFE">My GitHub</Link>
  </Social>
);
