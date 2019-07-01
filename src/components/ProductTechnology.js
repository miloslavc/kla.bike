import React from "react";
import styled from "@emotion/styled";

import { white, mq } from "../utilities";
import { H1, H2, P } from "../elements";
import HomeCore from "../images/home-core.png";

function ProductTechnology() {
  return (
    <Wrapper>
      <Content>
        <H2>Secure</H2>
        <H1>Aluminium Core</H1>
        <P>
          We want our riders to enjoy each and every ride. That is why we made
          sure to ensure the robustness of our handlebar by adding aluminium
          core for additional strength and security.
        </P>
      </Content>
      <Image>
        <img src={HomeCore} alt="Kla Wooden Handlebar" />
      </Image>
    </Wrapper>
  );
}

export default ProductTechnology;

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  max-width: 90%;
  margin: 0 auto;
  grid-gap: 1em;
  width: 100%;
  align-items: center;
  justify-items: center;
  background: ${white};
  grid-auto-rows: 1fr 1fr;
  ${mq[2]} {
    grid-template-columns: 1fr 1fr;
  }
`;

const Content = styled.div`
  max-width: 400px;
  min-height: 250px;
  text-align: center;
  align-self: start;
  ${mq[2]} {
    text-align: start;
    align-self: center;
  }
`;

const Image = styled.div`
  grid-row: 1;
  height: auto;
  ${mq[1]} {
    padding: 2em 0;
  }
  img {
    max-width: 100%;
  }
`;
