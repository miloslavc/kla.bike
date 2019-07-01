import React from "react";
import styled from "@emotion/styled";
import { Link } from "@reach/router";
import { PrimaryButtonNav } from "../elements";

import { white, black, mq } from "../utilities";

import Home_Bike from "../images/home-bike-side.png";

function CTA() {
  return (
    <Wrapper>
      <Content>
        <h1>More Fun. More Secure. More Nature.</h1>
        <Link className="nav" to="order">
          Order Now
        </Link>
      </Content>
      <ImageWrapper>
        <img src={Home_Bike} alt="Kla Wooden Handlebar" />
      </ImageWrapper>
    </Wrapper>
  );
}

export default CTA;

const Wrapper = styled.section`
  background: ${black};
  display: grid;
  align-items: center;
  justify-items: center;
  position: relative;
  padding: 10em 0;
  ${mq[1]} {
    padding: 0;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  grid-column: 1;
  grid-row: 2;
  ${mq[1]} {
    grid-row: 1;
  }
  img {
    max-width: 100%;
  }
`;

const Content = styled.div`
  height: 100%;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-column: 1;
  grid-row: 1;
  text-align: center;
  z-index: 5;

  ${mq[1]} {
    width: 100%;
  }
  h1 {
    color: ${white};
    text-transform: uppercase;
  }
  .nav {
    ${PrimaryButtonNav}
  }
`;
