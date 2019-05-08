import React, { Component } from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';

import BosonLogo from './images/logoBosonBits.png';

import ScrollNavBar from '../commons/ScrollNavBar';
import MenuDialog from '../commons/MenuDialog';

const Container = styled.div`
  position: fixed;
  width: 100%;
  background-color: white;
  box-shadow: rgba(2, 3, 3, 0.1) 0px 1px 4px;
  z-index: 999;
  display: flex;
  flex: 1 1 0%;
  justify-content: space-between;
`;

const Logo = styled.img`
  height: 65px;
  margin-left: 20px;

  @media (max-width: 768px) {
    height: 50px;
    padding: 10px
    margin-left: 0px;
  };
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  margin-right: 20px;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  };

  @media (max-width: 900px) {
    display: none;
  }
`;

const ContentMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    margin-right: 30px;
  };

  @media (max-width: 900px) {
    display: flex;
    margin-right: 10px;
  }
`;

const MenuIcon = styled(Menu)`
  font-size: 35px !important;
  @media (max-width: 768px) {
    font-size: 35px !important;
  };  
`
;


class NavBar extends Component {
  state = { open: false }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render () {
    return (
      <Container>
        <Logo src={BosonLogo} alt="logo" />
        <Content>
          <ScrollNavBar text="¿Quíenes somos?" to="aboutUs" />
          <ScrollNavBar text="Servicios" to="services" />
          <ScrollNavBar text="Tecnologías" to="weWork" />
          <ScrollNavBar text="Clientes" to="customers" />
          <ScrollNavBar text="Contacto" to="contact" />
        </Content>
        <ContentMenu>
          <IconButton onClick={this.handleClickOpen} style={{ backgroundColor: 'white' }} disableRipple>
            <MenuIcon />
          </IconButton>
        </ContentMenu>
        <MenuDialog state={this.state.open} handleClose={this.handleClose}>
          <ScrollNavBar text="¿Quíenes somos?" to="aboutUs" handleClose={this.handleClose} />
          <ScrollNavBar text="Servicios" to="services" handleClose={this.handleClose} />
          <ScrollNavBar text="Tecnologías" to="weWork" handleClose={this.handleClose} />
          <ScrollNavBar text="Clientes" to="customers" handleClose={this.handleClose} />
          <ScrollNavBar text="Contacto" to="contact" handleClose={this.handleClose} />
        </MenuDialog>
      </Container>
    );
  }
}

export default NavBar;
