import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import Recaptcha from 'react-google-invisible-recaptcha';

import { sendContact } from '../../actions/contact';

import { renderTextFieldComponent } from '../commons/formComponents';

import './form.css'

const styles = {
  recaptcha: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 50,
  },
}

const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  padding: 0px 40px 40px;

  @media (max-width: 576px) {
    padding: 15px;
  }
`;

const StyledButton = styled(({ ...other }) => (
  <Button {...other} />
))`
  width: 150px;

  @media (max-width: 576px) {
    width: 250px;
    height: 50px;
    font-size: 15px !important;
    margin-top: 0px;
  };

  @media (max-device-width: 768px) {
    width: 300px;
    height: 50px;
    font-size: 20px !important;
    margin-top: 0px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex: 1 1 0%;
  justify-content: center;
  align-items: center;
  color: rgb(88, 88, 88);
  font-size: 12px;
  margin-top: 15px;

  @media (max-width: 576px) {
    font-size: 10px;
  };

`;

const validate = (values) => {
  const error = {};
  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  error.name = '';
  error.from = '';
  error.subject = '';
  error.message = '';
  error['g-recaptcha-response'] = '';

  const { name, from, subject, message } = values;

  if (!validateEmail(from) && from) {
    error.from = 'Dirección de correo invalida';
  }

  if (!name) {
    error.name = 'Campo requerido';
  }
  if (!from) {
    error.from = 'Campo requerido';
  }
  if (!subject) {
    error.subject = 'Campo requerido';
  }
  if (!message) {
    error.message = 'Campo requerido';
  }

  return error;
};

class Form extends Component {
  state = { text: '', recaptchaInstance: '' }

  handleSubmitForm = (response) => {
    const { formValues, sendContact } = this.props;

    if (response && formValues.values) {
      const obj = { ...formValues.values, ['g-recaptcha-response']: response };

      return sendContact({ ...formValues.values, ['g-recaptcha-response']: response })
        .then(() => this.setState({ text: 'Su consulta fue enviada correctamente.' }))
        .catch(() => this.setState({ text: 'Vaya, algo ha salido mal. intenta de nuevo más tarde.' }))
    };

    this.setState({ text: 'Vaya, algo ha salido mal. intenta de nuevo más tarde.' });
  };

  executeCaptcha = () => {
    this.state.recaptchaInstance.execute();
  }


  changeState = (e) => {
    if (!this.state.recaptchaInstance) {
      this.setState({ recaptchaInstance: e })
    }
  }

  render () {
    const { handleSubmit, invalid } = this.props;
    return (
      <Container>
        <form onSubmit={handleSubmit(this.executeCaptcha)} style={{ width: '100%' }}>
          <Field
            name="name"
            component={renderTextFieldComponent}
            label="Nombre y apellido"
            type="text"
            margin="dense"
            fullWidth
          />
          <Field
            name="from"
            component={renderTextFieldComponent}
            label="Correo"
            type="text"
            margin="dense"
            fullWidth
          />
          <Field
            name="subject"
            component={renderTextFieldComponent}
            label="Motivo del contacto"
            type="text"
            margin="dense"
            fullWidth
          />
          <Field
            name="message"
            component={renderTextFieldComponent}
            label="Descripción"
            type="text"
            margin="dense"
            fullWidth
            multiline
            multi
            rows="4"
          />

          {
            this.state.text ? 
              <TextContainer>
                <h1>{this.state.text}</h1>
              </TextContainer>
              :
              <div>
                <div style={styles.recaptcha}>
                  <Recaptcha
                    ref={e => this.changeState(e)}
                    sitekey="6Lc9-3IUAAAAAB487dPqm7YtxC2QANMMBAEkj9KP"
                    onResolved={response => this.handleSubmitForm(response)}
                  />
                </div>
                <StyledButton
                  variant="outlined"
                  type="submit"
                  color="primary"
                  disabled={invalid}
                >
                  Enviar
                </StyledButton>
              </div>
            }

        </form>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ sendContact }, dispatch);
};

const mapStateToProps = (state) => {
  return {
    formValues: state.form.contact,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'contact', validate })(Form));
