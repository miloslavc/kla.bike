import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { primary, white, darktext } from "../utilities";

export const PrimaryButton = styled.div`
  background: ${primary};
  width: 15em;
  align-self: center;
  justify-self: center;
  padding: 1em;
  text-align: center;
  font-size: 1em;
  border-radius: 50px;
  color: ${white};
  margin-top: 1em;
  &:hover {
    cursor: pointer;
  }
`;

export const SecondaryButton = styled.div`
  border: 2px solid ${primary};
  background: ${white};
  width: 15em;
  align-self: center;
  justify-self: center;
  padding: 1em;
  text-align: center;
  font-size: 1em;
  border-radius: 50px;
  color: ${darktext};
  margin-top: 1em;
  &:hover {
    cursor: pointer;
  }
`;
export const SecondaryButtonNav = css`
  border: 2px solid ${primary};
  background: ${white};
  width: 15em;
  padding: 1em;
  text-align: center;
  font-size: 1em;
  border-radius: 50px;
  color: ${darktext};
  margin-top: 1em;
  &:hover {
    cursor: pointer;
  }
`;

export const PrimaryButtonNav = css`
  background: ${primary};
  width: 15em;
  align-self: center;
  justify-self: center;
  padding: 1em;
  text-align: center;
  font-size: 1em;
  border-radius: 50px;
  color: ${white};
  margin-top: 1em;
  &:hover {
    cursor: pointer;
  }
`;

export const PrimaryButtonNavSmall = css`
  background: ${primary};
  width: 10em;
  align-self: center;
  justify-self: center;
  text-align: center;
  border-radius: 50px;
  color: ${white};
  display: block;
  height: 100%;
  display: inline-flex;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;

export const CartButton = styled.button`
  font-size: 1.25em;
  font-weight: 700;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  padding: 0.2em 0.8em;
  &:active {
    transform: scale(1.1);
    transform-origin: center;
  }
`;
