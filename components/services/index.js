import React from 'react';
import styled from 'styled-components';

import Title from '../commons/Title';
import Service from '../commons/Service';

const Container = styled.div`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  padding: 0px 50px;
  margin-top: 30px;
  margin-bottom: 50px;
  background-color: rgb(244, 244, 244);

  @media (max-width: 768px) {
    padding: 0px 10px;
  }

  @media (max-width: 576px) {
    padding: 0;
    margin-bottom: 0px;
  }
`;

const ContentService = styled.div`
  display: flex;
  flex: 1 1 0%;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 0 10px;
  }
`;

const Services = () => {
  return (
    <Container>
      <Title title="Nuestros Servicios" />
      <ContentService>
        <Service
          title="Desarrollo de aplicaciones para IOS y Android:"
          text="Desarrollo de aplicaciones Nativas para IOS e Android, utilizando React Native, la plataforma utilizada por Facebook para desarrollar sus productos móviles."
          icon="fas fa-mobile-alt"
        />
        <Service
          title="Desarrollo de aplicaciones Web:"
          text="Contamos con más de 10 años de experiencia desarrollando aplicaciones web empresariales de alto rendimiento, proveyendo soluciones escalables orientadas a la nube para grandes y medianas empresas."
          icon="fas fa-laptop"
        />
        <Service
          title="Consultoría en Desarrollo y Arquitectura de Software para Equipos de Desarrollo:"
          text="Acompañamos a nuestros clientes en la construcción de la arquitectura y frameworks necesarios para comenzar a desarrollar sin tropiezos, brindando una base sólida con la cual construir su producto desde un inicio."
          icon="fas fa-project-diagram"
        />
      </ContentService>
    </Container>
  );
}

export default Services;
