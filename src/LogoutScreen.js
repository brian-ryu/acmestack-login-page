import React from 'react';
import styled from 'styled-components';
import mobile from './mobile';

import Body from './Body';
import LogoutButton from './LogoutButton';

const Text = styled.div`
  text-align: center;
  color: white;
  z-index: 2;

  ${mobile`
    position: absolute;
    top: -90px;
  `}
`;

export default ({ logout }) => {
  return (
    <Body loggedIn>
      <Text>
        <div style={{ fontSize: 20 }}>Congratuations</div>
        <div>You have successfully logged in.</div>
      </Text>
      <LogoutButton onClick={logout}>sign out</LogoutButton>
    </Body>
  );
}