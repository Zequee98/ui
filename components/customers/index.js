import React from 'react';
import styled from 'styled-components';

import Title from '../commons/Title';
import ImagesWork from '../commons/imagesWork';

import AccessLogo from './images/access.png';
import SisemLogo from './images/sisem.png';

const Container = styled.div`
  display: flex;
  flex: 1 1 0%;
  place-content: center;
  flex-direction: column;
  background-color: rgb(244, 244, 244);
`;

const Content = styled.div`
  padding: 0px 80px;
  @media (max-width: 768px) {
    padding: 0px 50px;
  }
  @media (max-width: 576px) {
    padding: 0 15px;
  }
`;

const ContentImages = styled.div`
  margin-top: 30px;
  display: flex;
  flex: 1 1 0%;
  flex-wrap: wrap;
  justify-content: center;
`;

const AboutUs = () => {
  return (
    <Container>
      <Title title="Nuestros clientes" />
      <ContentImages>
        <ImagesWork alt="Sisem" image={SisemLogo} url="http://www.sisem.net/" />
        <ImagesWork alt="Access" image={AccessLogo} url="http://www.mlmanager.com.ar/" />
      </ContentImages>
    </Container>
  );
}

export default AboutUs;
