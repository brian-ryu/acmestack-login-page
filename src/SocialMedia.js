import React, { Component } from 'react';
import styled from 'styled-components';

import LogoFacebook from './assets/LogoFacebook';
import LogoGoogle from './assets/LogoGoogle';
import LogoTwitter from './assets/LogoTwitter';

const Container = styled.div`
  font-style: italic;
  font-size: 14px;
  color: #6624D2;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 30px;
`;

const Logos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LogoContainer = styled.a`
  width: 40px;
  height: 40px;
  margin: 10px;
  border-radius: 50%;
  background-color: #CAAEF2;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    opacity: 0.9;
  }
`;

export default class SocialMedia extends Component {
  render() {
    return (
      <Container>
        or login with
        <Logos>
          <LogoContainer><LogoGoogle width="45%" height="45%" /></LogoContainer>
          <LogoContainer><LogoFacebook width="45%" height="45%" /></LogoContainer>
          <LogoContainer><LogoTwitter width="45%" height="45%" /></LogoContainer>
        </Logos>
      </Container>
    );
  }
}