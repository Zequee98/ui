import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  height: 100px;
  margin: 40px;
  cursor: ${props => props.urlClick ? 'pointer' : 'auto'}

  @media (max-width: 768px) {
    margin: 30px 30px;
  }

  @media (max-width: 576px) {
    height: 80px;
    margin: 20px 20px;
  }
`;

const ImageUrl = styled.img`
  height: 100px;
  cursor: ${props => props.urlClick ? 'pointer' : 'auto'}

  @media (max-width: 576px) {
    height: 80px;
  }
`;

const Alink = styled.a`
  height: 100px;
  margin: 40px;
  cursor: ${props => props.urlClick ? 'pointer' : 'auto'}

  @media (max-width: 768px) {
    margin: 30px 30px;
  }

  @media (max-width: 576px) {
    height: 80px;
    margin: 20px 20px;
  }
`;

const ImageMargin = styled.img`
  height: 100px;
  margin: 40px;

  @media (max-width: 768px) {
    margin: 30px 30px;
  }

  @media (max-width: 576px) {
    height: 80px;
    margin: 20px 20px;
  }
`;

const ImagesWork = ({ image, margin, alt, url }) => {
  if (margin) return <ImageMargin alt={alt} src={image} />
  if (url) return <Alink href={url}><ImageUrl alt={alt} src={image} urlClick={url} /></Alink>
  return (
    <Image alt={alt} src={image} urlClick={url} />
  );
};

export default ImagesWork;
