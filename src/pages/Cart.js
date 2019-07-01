import React, { useContext } from "react";
import styled from "@emotion/styled";
import { Link } from "@reach/router";

import {
  light,
  darkgray,
  gray,
  white,
  darktext,
  primary,
  calculateTotalPrice,
  mq
} from "../utilities";
import { CartButton, PrimaryButtonNav } from "../elements";
// import { CheckoutForm } from "../components/CheckoutForm";
import { CartContext } from "../hooks/CartContext";

//stripe
// import { Elements, StripeProvider } from "react-stripe-elements";

function Cart() {
  const {
    state,
    addProductToCart,
    removeProductFromCart,
    clearProductFromCart
  } = useContext(CartContext);

  return (
    <Wrapper>
      <ShoppingCard>
        <PageTitle>Shopping Cart</PageTitle>
        {state.cart.length > 0 ? (
          <BasketContent>
            {state.cart.map(item => (
              <BasketContentList key={item.id}>
                <ItemWrapper>
                  <img src={item.orderImage} alt="" />
                </ItemWrapper>
                <Type>
                  <h4>{item.title}</h4>
                  <p>{item.id}</p>
                </Type>
                <Quantity>
                  <CartButton onClick={() => removeProductFromCart(item.id)}>
                    -
                  </CartButton>
                  <p>{item.quantity}</p>
                  <CartButton onClick={() => addProductToCart(item)}>
                    +
                  </CartButton>
                </Quantity>
                <ItemWrapper>
                  <h3>{item.price}&euro;</h3>
                </ItemWrapper>
                <ItemWrapper>
                  <CartButton onClick={() => clearProductFromCart(item.id)}>
                    x
                  </CartButton>
                </ItemWrapper>
              </BasketContentList>
            ))}
          </BasketContent>
        ) : (
          <p>Your cart is empty.</p>
        )}
        <BasketSum>
          <Link className="nav" to="/order">
            &#10229; Continue Shopping
          </Link>
        </BasketSum>
      </ShoppingCard>
      {/* stripe down */}
      {/* <StripeProvider apiKey="pk_test_m1ZCziEn5X5W5xjRVEAKmRMt00RYGfD6Y3">
        <Elements>
          <CheckoutForm totalCost={2} />
        </Elements>
      </StripeProvider> */}
      {/* stripe down  */}

      <Checkout>
        <TotalCount>
          <span>Total :</span>
          <h3>{calculateTotalPrice(state.cart)} &euro; </h3>
        </TotalCount>
        <Link className="nav-checkout" to="/order">
          Continue to Checkout
        </Link>
      </Checkout>
    </Wrapper>
  );
}

export default Cart;

const Wrapper = styled.section`
  min-height: 93vh;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-gap: 2em;
  grid-auto-rows: auto;
  ${mq[2]} {
    grid-template-columns: 1.8fr 1fr;
  }
`;
const PageTitle = styled.h1`
  text-align: left;
  text-transform: uppercase;
  color: ${darktext};
  font-size: 1.5em;
  padding-top: 4rem;
`;

const ShoppingCard = styled.div`
  padding: 0 1.5em;
  background: ${light};
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  ${mq[2]} {
    padding: 0 8em;
  }
`;

const BasketContent = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0;
`;

const BasketContentList = styled.li`
  width: 100%;
  display: grid;
  grid-template-columns: auto 1.5fr repeat(2, 1fr) auto;
  align-items: center;
  justify-items: center;
  grid-gap: 0.2em;
  padding: 1em 0;
  border-bottom: 2px solid ${white};
  img {
    max-width: 100px;

    ${mq[0]} {
      max-width: 200px;
    }
  }
`;

const ItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: ${darktext};
`;

const Quantity = styled(ItemWrapper)`
  p {
    padding: 0.2em 0.8em;
    border-radius: 2px;
    border: 1px solid ${gray};
    color: ${darktext};
    font-weight: 500;
  }
`;

const Type = styled(ItemWrapper)`
  padding-left: 1em;
  flex-direction: column;
  align-items: flex-start;
  p,
  h4 {
    margin: 0;
  }
  p {
    font-size: 0.8em;
  }
`;

const BasketSum = styled.div`
  padding-bottom: 4rem;

  .nav {
    color: ${primary};
    font-weight: 600;
  }
  ${mq[2]} {
    padding-bottom: 8rem;
  }
`;

const TotalCount = styled(ItemWrapper)`
  width: auto;
  height: auto;
  span {
    font-weight: 500;
    padding-right: 0.5em;
    color: ${darkgray};
    font-size: 1.125em;
  }
  h3 {
    color: ${darktext};
    font-size: 1.5em;
  }
`;

const Checkout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .nav-checkout {
    ${PrimaryButtonNav}
    margin-top:0
  }
`;
