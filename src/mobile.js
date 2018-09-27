import { css } from 'styled-components';

const mobile = (...args) => (
  css`
    @media (max-width: 600px) {
      ${css(...args)}
    }
  `
);

export default mobile;