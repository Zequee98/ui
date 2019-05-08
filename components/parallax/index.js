import React from 'react';
import { Parallax } from 'react-parallax';
import styled from 'styled-components';

const DivParallax = styled.div`
  height: 1000px;

  @media (max-width: 768px) {
    height: 1200px;
  }
`;

import image from './bosonbitsParallax.jpg';

const styles = {
  content: {
  },
  logo: {
    width: '100%'
  }
}

const ParallaxComponent = () => {
  return (
    <div style={styles.content}>
      <Parallax
        bgImage={image}
        strength={500}
      >
      <DivParallax />
      </Parallax>
    </div>
  );
}

export default ParallaxComponent;
