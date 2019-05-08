import React from 'react';
import styled from 'styled-components';

import Text from '../commons/Text';

const Container = styled.div`
  flex: 1 1 0%;
  margin: 10px;
  min-width: 250px;
  max-width: 500px;
  padding: 20px;

  @media (max-device-width: 768px) {
    min-width: unset;
    max-width: unset;
    padding: 20px 50px;
  }

  @media (max-width: 576px) {
    padding: 0;
  }
`;

const Icon = styled.div`
  font-size: 70px;
  text-align: center;
  color: rgb(0, 0, 128);

  @media (max-device-width: 768px) {
    font-size: 8em;
  }
  @media (max-width: 576px) {
    font-size: 6em;
  }
`;

const Title = styled.div`
  height: 60px;
  color: rgb(88, 88, 88);
  
  @media (max-device-width: 768px) {
    font-size: 30px;
    height: unset;
  }

  @media (max-width: 768px) {
    height: unset;
  }
  
  @media (max-width: 576px) {
    height: unset;
    font-size: 20px;
  }
`;

const Content = styled.div`
  text-align: center;
`;

const Services = ({ title, text, icon}) => (
  <Container>
    <Icon><i className={icon} /></Icon>
    <Content>
      <Title><h3>{title}</h3></Title>
      <div><Text>{text}</Text></div>
    </Content>
  </Container>
);

export default Services;
