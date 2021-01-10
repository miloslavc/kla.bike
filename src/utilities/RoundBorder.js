import { css } from '@emotion/react';
import { darkgray } from './Colors';

export const RoundBorder = css`
  content: '';
  position: absolute;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid ${darkgray};
`;
