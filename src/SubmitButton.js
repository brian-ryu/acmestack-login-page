import styled from 'styled-components';

const SubmitButton = styled.div`
  width: 100%;
  height: 25px;

  background-color: #7E24FA;

  color: white;
  line-height: 25px;
  text-align: center;

  padding-top: 10px;
  padding-bottom: 10px;

  border-radius: 0px 0px 5px 5px;

  cursor: pointer;
  user-select: none;

  z-index: 2;

  :hover {
    opacity: 0.9;
  }
  :active {
    opacity: 0.8;
  }
`;

export default SubmitButton;