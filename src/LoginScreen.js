import React, { Component } from 'react';
import styled from 'styled-components';
import mobile from './mobile';

import Body from './Body';
import Field from './Field';
import SubmitButton from './SubmitButton';
import CheckBox from './CheckBox';
import SocialMedia from './SocialMedia';
import RotatingIcon from './RotatingIcon';

import IconLoading from './assets/IconLoading';

const LoginFields = styled.div`
  position: relative;
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  overflow: visible;

  ${mobile`
    width: 90%;
    position: absolute;
    top: -90px;
  `}
`;

const Error = styled.div`
  color: #FF0051;
  font-size: 15px;
  text-align: center;
`;

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      username: '',
      password: '',
      invalid: '',
      remember: false
    }
  }

  handleFieldChange = field => e => {
    this.setState({ [field]: e.target.value, invalid: '' });
  }

  validateInput = input => {
    return input.length >= 8 && input.length <= 24;
  }

  handleSubmit = () => {
    const okUsername = this.validateInput(this.state.username);
    const okPassword = this.validateInput(this.state.password);
    const { login } = this.props;

    if (!okUsername && !okPassword) {
      this.setState({ invalid: 'username and password' });
    } else if (!okUsername) {
      this.setState({ invalid: 'username' });
    } else if (!okPassword) {
      this.setState({ invalid: 'password' });
    } else {
      this.setState({ loading: true });
      setTimeout(() => {
        this.setState({ loading: false });
        login();
      }, 2000);
    }
  }

  handleCheck = () => {
    this.setState({ remember: !this.state.remember });
  }

  render() {
    const { loading, username, password, invalid, remember } = this.state;

    return (
      <Body>
        <LoginFields invalid={invalid}>
          <div style={{ boxShadow: '0px 0px 50px -30px rgba(0, 0, 0, 0.7)' }}>
            <Field 
              placeholder="username"
              style={{
                borderRadius: '5px 5px 0px 0px',
                borderBottom: !invalid && '1px solid #F4ECFF'
              }}
              value={username}
              onChange={this.handleFieldChange('username')}
              isInvalid={invalid.indexOf('username') !== -1}
            />
            <Field 
              placeholder="password" 
              type="password"
              value={password}
              onChange={this.handleFieldChange('password')}
              isInvalid={invalid.indexOf('password') !== -1}
            />
            <SubmitButton onClick={this.handleSubmit}>
              {loading ? 
              <RotatingIcon><IconLoading /></RotatingIcon> :
              'login'}
            </SubmitButton>
          </div>
          {invalid &&
            <Error>{invalid} must be between 8 and 24 characters</Error>
          }
        </LoginFields>
        <CheckBox checked={remember} toggle={this.handleCheck} />
        <SocialMedia />
      </Body>
    );
  }
}
