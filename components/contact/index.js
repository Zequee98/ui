import React from 'react';
import styled from 'styled-components';

import Title from '../commons/Title';
import Text from '../commons/Text';
import Form from './form';

const Container = styled.div`
  display: flex;
  flex: 1 1 0%;
  text-align: center;
  flex-direction: column;
  margin-bottom: 50px;
    
  @media (max-width: 768px) {
    padding: 0px 10px 70px;
    margin-bottom: 0;
  }
`;

const Content = styled.div`
  display: flex;
  padding: 0px 80px;
  flex: 1 1 0%;
  flex-direction: row;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 768px) {
    padding: 0px 20px;
  }
  @media (max-width: 576px) {
    padding: 0;
  }
`;

const ContentText = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  flex: 1 1 0%;

  @media (max-width: 992px) {
    padding: 5px;
  }
  
  @media (max-width: 768px) {
    display: block
  }

`;

const Contact = () => {
  return (
    <Container>
      <Title title="Contacto" />
      <Content>
        <ContentText>
          <Text>
            No dudes en contactarnos, dejanos tu mensaje y a la brevedad nos contactaremos contigo.
          </Text>
        </ContentText>
        <Form />
      </Content>
    </Container>
  );
}

export default Contact;
