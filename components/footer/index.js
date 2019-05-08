import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1 1 0%;
  background-color: rgb(29, 30, 28);
  padding: 10px 20px;
  
  @media (max-width: 576px) {
    height: 70px;
  }
  `;
  
const Text = styled.p`
  color: white;

  @media (max-width: 576px) {
    font-size: 16px;
    flex: 1;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Text>
        Boson Bits - @copyright 2017
      </Text>
    </Container>
  );
}

export default Footer;
