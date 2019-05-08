import React from 'react';
import styled from 'styled-components'

const PText = styled.p`
  color: #646464;

  @media (min-device-width: 576px) and (max-device-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 576px) {
    font-size: 20px;
  }
`;

const Text = ({ children }) => (
  <PText>
    {children}
  </PText>
);

export default Text;
