import React from 'react';
import styled from 'styled-components'

const TitleText = styled.h1`
  text-align: center;
  margin-bottom: 10px;
  color: rgb(88, 88, 88);

  @media (min-device-width: 576px) and (max-device-width: 768px) {
    font-size: 45px;
  }

  @media (max-width: 576px) and (max-device-width: 576px) {
    font-size: 32px;
  }
`;

const Title = ({ title }) => (
  <TitleText>
    {title}
  </TitleText>
);

export default Title;
