import styled from 'styled-components';

const RotatingIcon = styled.div`
  height: 100%;
  animation-duration: 5s;
  animation-name: rotate;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;

export default RotatingIcon;