import React from 'react';
import styled from 'styled-components';

import Title from '../commons/Title';
import ImagesWork from '../commons/imagesWork';

import javascript from './images/javascript.png';
import amazon from './images/amazon.png';
import azure from './images/azure.png';
import mongodb from './images/mongodb-icon.png';
import net from './images/net.png';
import nodejs from './images/nodejs.png';
import react from './images/react.png';
import redux from './images/redux.png';
import SQLserver from './images/SQLserver.png';
import firebaseLogo from './images/firebaseLogo.png';

const Container = styled.div`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  padding: 0px 50px;
  
  @media (max-width: 768px) {
    padding: 0px 30px;
  }

  @media (max-width: 576px) {
    padding: 0 3px;
    margin-bottom: 0px;
  }
`;

const ContentImages = styled.div`
  margin-top: 30px;
  display: flex;
  flex: 1 1 0%;
  flex-wrap: wrap;
  justify-content: center;
`;

const WeWork = () => {
  return (
    <Container>
      <Title title="Técnologías con las que trabajamos" />

      <ContentImages>
        <ImagesWork alt="javascript" image={javascript} margin />
        <ImagesWork alt="react" image={react} margin />
        <ImagesWork alt="redux" image={redux} />
        <ImagesWork alt="nodejs" image={nodejs} />
        <ImagesWork alt="mongodb" image={mongodb} margin />
        <ImagesWork alt="SQLserver" image={SQLserver} />
        <ImagesWork alt="net" image={net} />
        <ImagesWork alt="azure" image={azure} />
        <ImagesWork alt="firebase" image={firebaseLogo} />
        <ImagesWork alt="amazon" image={amazon} />
      </ContentImages>
    </Container>
  );
}

export default WeWork;
