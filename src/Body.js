import styled from 'styled-components';
import mobile from './mobile';

const Body = styled.div`
  position: absolute;
  left: 0;
  width: 50%;
  height: 100%;
  background-color: ${({ loggedIn }) => loggedIn ? '#7E24FA' : '#F4ECFF'};

  font-family: Arial, san-serif;
  font-size: 17px;
  font-weight: bold;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  ${mobile`
    width: 100%;
    height: 50%;
    bottom: 0;
    justify-content: ${({ loggedIn }) => loggedIn ? 'center' : 'flex-end'};
  `}
`;

export default Body;