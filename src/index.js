import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Banner from './Banner';
import LoginScreen from './LoginScreen';
import LogoutScreen from './LogoutScreen';

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: hidden;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { loggedIn: false };
  }

  login = () => {
    this.setState({ loggedIn: true });
  }

  logout = () => {
    this.setState({ loggedIn: false });
  }

  render() {
    const { loggedIn } = this.state;

    return (
      <Container>
        {loggedIn ? 
          <LogoutScreen logout={this.logout} /> : 
          <LoginScreen login={this.login} />
        }
        <Banner />
      </Container>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
