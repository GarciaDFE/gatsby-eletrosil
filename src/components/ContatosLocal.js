import React from "react";
import styled from "styled-components";
import { Row } from "react-bootstrap";
// import GoogleMapReact from "google-map-react";

import TitleSection from "../objects/TitleSection";


const WrapLocal = styled(Row)`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: ${props => props.theme.font.secondy};
  color: ${props => props.theme.color.tertiaryMedium};
  @media (min-width: 768px) {
    align-items: flex-start;
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

const GoogleMap = styled.iframe`
  /* padding: 0; */
  margin: 0;
  border: none;
`

// const defaultProps = {
//   center: {
//     lat: 59.95,
//     lng: 30.33,
//   },
//   zoom: 11,
// }

// const AnyReactComponent = ({ text }) => <div>{text}</div>

const ContatosLocal = () => (
    <WrapLocal xs={12} md={6}>
      <Title className="-smallCenter" title={"Nossa Localização"} />
      <GoogleMap src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.9954280684533!2d-46.56595898482863!3d-23.568607684679378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5c2f70ba59e3%3A0x1ede2498bc0445e9!2sR.+Ten.+Chantr%C3%A9%2C+337+-+Vila+Diva+(Zona+Leste)%2C+S%C3%A3o+Paulo+-+SP%2C+03351-080!5e0!3m2!1spt-BR!2sbr!4v1561760900824!5m2!1spt-BR!2sbr"} width={"1200"} height={"300"} frameborder={"0"} allowfullscreen></GoogleMap>
      {/* <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
        bootstrapURLKeys={{ key: 'AlzaSyBmoLAJR2oWhUWjsEETeLRjjPtTlcOsJmXo' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
      </div> */}
    </WrapLocal>
);

export default ContatosLocal;
