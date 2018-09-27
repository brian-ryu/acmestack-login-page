import styled from 'styled-components';

const Field = styled.input`
  position: relative;
  width: 100%;
  height: 45px;

  font-family: Arial, san-serif;
  font-size: 17px;
  font-weight: bold;
  color: #7E24FA;

  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  outline: none;
  border: 0;
  box-sizing: border-box;

  z-index: 2;

  ${({ isInvalid }) => isInvalid && `
    color: #FF0051;
    border: 2px solid #FF0051;
  `}
`;

export default Field;