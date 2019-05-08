import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-scroll'

const P = styled.p`
  color: #646464;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 80px;
  };

  @media (max-width: 900px) {
    font-size: 25px;
  }
`;

const Container = styled.div`
  margin-right: 40px;
`;

const styles = {
  container: {
    marginRight: 40,
  },
  text: {
    color: "#646464",
    cursor: 'pointer'
  }
}

const ScrollNavBar = ({ text, to, handleClose }) => {
  return (
    <Container>
      <Link activeClass="active" to={to} spy={true} smooth={true} duration={1500} onClick={handleClose} delay={200}>
        <P>{text}</P>
      </Link>
    </Container>
  );
}

export default ScrollNavBar;
