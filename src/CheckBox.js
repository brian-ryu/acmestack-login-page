import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-size: 14px;
  color: #6624D2;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  margin: 20px;
`;

const Outer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background-color: transparent;
  border: 2px solid #6624D2;
  border-radius: 5px;
  margin: 5px;
`;

const Inner = styled.div`
  width: 16px;
  height: 16px;
  background-color: #6624D2;
  border-radius: 3px;

  ${({ checked }) => !checked && `
    width: 0px;
    height: 0px;
  `}

  transition: width 0.1s ease-in-out, height 0.1s ease-in-out;
`;

export default class CheckBox extends Component {
  render() {
    const { checked, toggle } = this.props;

    return (
      <Container onClick={toggle}>
        <Outer>
          <Inner checked={checked} />
        </Outer>
        remember me
      </Container>
    )
  }
}