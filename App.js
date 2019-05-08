import React, { Component } from 'react';
import { Element } from 'react-scroll';
import styled from 'styled-components';

import AboutUs from './components/aboutUs';
import NavBar from './components/navBar';
import Services from './components/services';
import Customers from './components/customers';
import WeWork from './components/weWork';
import Contact from './components/contact';
import Footer from './components/footer';
import Parallax from './components/parallax';

import './App.css'

const ContentElement = styled(Element)`
  margin-bottom: 80px;

  @media (max-width: 576px) {
    margin-bottom: ${props => props.margin || "0px"};
  }
  @media (max-width: 768px) {
    margin-bottom: ${props => props.margin || "0px"};
  }
`;

const Content = styled.div`
  margin-bottom: ${props => props.margin};

  @media (max-width: 768px) {
    margin-bottom: 0px;
  }

  @media (max-width: 576px) {
    margin-bottom: 0px;
  }
`;

class App extends Component {
  render() {
    return (
      <div className="content">
        <NavBar />
        <Parallax />
        <ContentElement name="aboutUs" margin="0px" />
        <div style={{ marginBottom: 55 }} />
        <Content margin="80px">
          <AboutUs />
        </Content>

        <ContentElement name="services" margin="25px" />
        <Content margin="40px">
          <Services />
        </Content>

        <ContentElement name="weWork" margin="55px" />
        <Content margin="0px">
          <WeWork />
        </Content>

        <ContentElement name="customers" />
        <div style={{ marginBottom: 100 }} />
        <Content margin="80px">
          <Customers />
        </Content>

        <ContentElement name="contact" margin="55px" />
        <Content margin="80px">
          <Contact />
        </Content>

        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
