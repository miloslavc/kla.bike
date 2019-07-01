import React, { useReducer } from "react";
import { Router } from "@reach/router";

//pages
import Header from "./layouts/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Help from "./pages/Help";
import Order from "./pages/Order";
import Cart from "./pages/Cart";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

//data
import { products } from "./api";
import { CartContext } from "./hooks/CartContext";
import { reducer, ADD_PRODUCT, REMOVE_PRODUCT, CLEAR } from "./hooks/reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, { cart: [] });

  //add product
  const addProductToCart = product => {
    dispatch({ type: ADD_PRODUCT, product });
    console.log(product);
  };

  //remove instance
  const removeProductFromCart = productId => {
    dispatch({ type: REMOVE_PRODUCT, productId });
  };

  //clear cart
  const clearProductFromCart = productId => {
    dispatch({ type: CLEAR, productId });
  };

  return (
    <CartContext.Provider
      value={{
        state,
        products,
        addProductToCart,
        removeProductFromCart,
        clearProductFromCart
      }}
    >
      <Header />
      <Router primary={false}>
        <Home path="/" />
        <About path="/about" />
        <Help path="/help" />
        <Order path="/order" />
        <Cart path="/checkout" />
        <PrivacyPolicy path="/privacy-policy" />
        <TermsAndConditions path="/terms-and-conditions" />
      </Router>
    </CartContext.Provider>
  );
}

export default App;
