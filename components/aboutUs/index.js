import React from 'react';
import styled from 'styled-components';

import Title from '../commons/Title';
import Text from '../commons/Text';

const Container = styled.div`
  display: flex;
  flex: 1 1 0%;
  place-content: center;
  flex-direction: column;
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

const AboutUs = () => {
  return (
    <Container>
      <Title title="¿Quíenes somos?" />
      <Content> 
      <Text>
        Somos una empresa tecnológica, enfocada en la consultoría y desarrollo de software.
        </Text>
        <Text>
        Nos especializamos en el desarrollo de aplicaciones móviles nativas (iOS, Android) y aplicaciones web de alto rendimiento. Tanto para el sector empresarial, como para startups o pequeños emprendedores.
        </Text>
        <Text>
        Utilizando las últimas técnologías del mercado, y con un despliegue en la nube, logramos aplicaciones escalables y con gran mantenibilidad a largo plazo.
        </Text>
        <Text>
        Nuestro equipo está conformado por Arquitectos de Software, Desarrolladores de Software y Especialistas en UX asegurando así software de alta calidad y con gran usabilidad desde el punto de vista del usuario.
        </Text>
        <Text>
        Nos caracterizamos por utilizar metodologías de desarrollo ágiles enfocadas a los resultados, y por mantener una comunicación fluída con nuestros clientes, brindando de esta manera resultados visibles, aún en etapas tempranas de su proyecto.
        </Text>

      </Content>
    </Container>
  );
}

export default AboutUs;
