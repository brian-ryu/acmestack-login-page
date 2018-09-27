import React from 'react';
import styled from 'styled-components';
import mobile from './mobile';

import LogoAcmeStack from './assets/LogoAcmeStack';

const Container = styled.div`
  position: absolute;
  right: 0;
  width: 50%;
  height: 100%;
  background-color: #7E24FA;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 50px;
  align-items: center;
  

  ${mobile`
    width: 100%;
    height: 50%;
    top: 0;
    justify-content: center;
    padding-top: 0px;
    padding-bottom: 90px;
    box-sizing: border-box;
  `}
`;

const CompanyName = styled.div`
  font-family: sans-serif;
  color: #F4ECFF;
  font-size: 20px;
  font-weight: bold;
  margin: 30px;

  ${mobile`
    margin: 10px;
  `}
`;

const IconContainer = styled.div`
  position: relative;
  min-width: 45px;
  min-height: 45px;
  padding: 5px;
  background-image: linear-gradient(to top right, #7E24FA, #CAAEF2);
  border-radius: 5px;
`;

const IconBackground = styled.div`
  position: absolute;
  top: 2px;
  bottom: 2px;
  right: 2px;
  left: 2px;
  border-radius: 5px;
  background-color: #F4ECFF;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default () => {
  return (
    <Container>
      <CompanyName>AcmeStack</CompanyName>
      <IconContainer>
        <IconBackground>
          <LogoAcmeStack width="65%" height="65%" />
        </IconBackground>
      </IconContainer>
    </Container>
  );
};
