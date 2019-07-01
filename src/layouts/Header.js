import React, { useContext } from "react";
import styled from "@emotion/styled";
import { Link } from "@reach/router";

import { PrimaryButtonNavSmall } from "../elements";
import { white, darkgray, primary, mq } from "../utilities";
import { CartContext } from "../hooks/CartContext";

function Header() {
  const { state } = useContext(CartContext);
  return (
    <Wrapper>
      <nav>
        <Link className="nav" to="/">
          Kla.
        </Link>
        <Link className="nav" to="/about">
          About Us
        </Link>
        <Link className="nav" to="/help">
          Help Center
        </Link>
        <Cart>
          {state.cart.length > 0 ? (
            <Link className="cart" to="/checkout">
              {state.cart.length}
            </Link>
          ) : (
            <Link className="order" to="/order">
              Order
            </Link>
          )}
        </Cart>
      </nav>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.header`
  background: ${white};
  min-height: 7vh;
  height: 100%;
  filter: drop-shadow(0 2px 2px rgba(56, 56, 56, 0.05));
  nav {
    max-width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em;
    .nav {
      text-decoration: none;
      color: ${darkgray};
      margin-right: 2em;
      font-size: 0.9em;
      font-weight: 500;
      text-transform: uppercase;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        height: 100%;
        border-bottom: 2px solid ${primary};
        width: 0;
        bottom: -2px;
      }
      &:hover {
        &::before {
          width: 100%;
        }
      }
      &:first-of-type {
        font-weight: 700;
        font-size: 1.1em;
      }
    }
  }
`;

const Cart = styled.div`
  margin-right: 0;
  margin-left: auto;
  height: 35px;
  .cart,
  .order {
    font-size: 0.9em;
    font-weight: 500;
    text-transform: uppercase;
    transition: width 0.2s ease-in-out;
    ${PrimaryButtonNavSmall};
  }
  .cart {
    width: 35px;
  }

  .order {
    width: 5em;
    ${mq[0]} {
      width: 10em;
    }
  }
`;
