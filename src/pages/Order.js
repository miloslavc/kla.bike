import React, { useState, useContext } from "react";
import styled from "@emotion/styled";
import { Link } from "@reach/router";
import { CartContext } from "../hooks/CartContext";

import {
  white,
  light,
  darkgray,
  shadow,
  Margins,
  RoundBorder,
  CardSection,
  mq
} from "../utilities";
import { PrimaryButtonNav, SecondaryButton } from "../elements";
import WeightIcon from "../assets/icons/weightIcon";

function Order() {
  const { state, products, addProductToCart } = useContext(CartContext);
  const [value, setValue] = useState(0);
  const [id, setID] = useState();

  const handleClick = (value, id) => {
    setValue(value);
    setID(id);
    // console.log(state);
  };

  return (
    <Wrapper>
      <Content>
        <Images>
          {value === 0 ? (
            <img src={products[0].orderImage} alt="Kla" />
          ) : (
            <img src={products[1].orderImage} alt="Kla" />
          )}
        </Images>
        <Checkout>
          <MaterialSection>
            {products.map((product, index) => (
              <Type
                onClick={() => handleClick(index, product.id)}
                key={product.title}
                border={id === product.id ? darkgray : "transparent"}
              >
                <div>
                  <img src={product.sampleImage} alt={product.title} />
                </div>
                <h4>{product.title}</h4>
              </Type>
            ))}
          </MaterialSection>
          <SizeSection>
            <div />
            <h4>{products[value].profile}</h4>
            <p>{products[value].diameter}</p>
          </SizeSection>
          <WeightSection>
            <WeightIcon />
            <p>{products[value].weight}</p>
          </WeightSection>
          {id && (
            <PriceSection>
              <div>
                <p>Delivery</p>
                <h4>{products[value].delivery}</h4>
              </div>
              <h2>{products[value].price}€</h2>
            </PriceSection>
          )}
          <SecondaryButton onClick={() => addProductToCart(products[value])}>
            {id ? "Add to Cart" : "Select Type"}
          </SecondaryButton>
          {state.cart.length > 0 && (
            <Link className="nav" to="/checkout">
              Continue to checkout
            </Link>
          )}
        </Checkout>
      </Content>
    </Wrapper>
  );
}

export default Order;

const Wrapper = styled.section`
  background: ${light};
  min-height: 93vh;
  display: grid;
`;

const Content = styled.div`
  margin: 0 auto;
  display: grid;
  justify-items: center;
  align-items: center;
  max-width: 90%;
  ${mq[1]} {
    grid-template-columns: 2fr 1fr;
  }
`;

const Images = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  img {
    max-width: 100%;
  }
`;

const Checkout = styled.div`
  max-width: 400px;
  min-width: 300px;
  width: 100%;
  display: grid;
  grid-gap: 2px;
  margin-bottom: 2em;
  ${mq[1]} {
    margin: 0;
  }
  .nav {
    ${PrimaryButtonNav}
  }
`;

const MaterialSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin-bottom: 8px;
  ${Margins};
  ${shadow}
`;

const Type = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${white};
  padding: 1em;
  border-radius: 5px;
  cursor: pointer;
  ${shadow}
  border: 1px solid ${({ border }) => border};
  div {
    position: relative;
    height: 50px;
    width: 50px;
    margin: 0.5em;
    &::after {
      ${RoundBorder}
    }
    img {
      border-radius: 50%;
      max-width: 50px;
    }
  }
`;

const SizeSection = styled.div`
  ${CardSection};
  ${Margins};
  ${shadow}
  flex-direction: column;
  div {
    position: relative;
    height: 50px;
    width: 50px;
    background: ${darkgray};
    border-radius: 50%;
    margin: 0.5em;
    &::after {
      ${RoundBorder}
    }
  }
`;
const WeightSection = styled.div`
  ${CardSection};
  ${Margins};
  ${shadow}
  flex-direction: column;
  p {
    margin-top: 0.5em;
  }
`;

const PriceSection = styled.div`
  ${CardSection};
  ${Margins};
  ${shadow}
  div {
    margin-right: auto;
  }
`;
