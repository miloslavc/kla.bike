import React from "react";
import styled from "@emotion/styled";

import { light, darktext, mq } from "../utilities";

import Security from "../assets/icons/security.svg";
import Weather from "../assets/icons/weather.svg";

function ProductDetails() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Content>
          <img src={Security} alt="" />
          <TextContent>
            <h2>Flex Resistance</h2>
            <p>
              Our handlebars load threshold amounts to 800 kg of tensile
              strength. This means that you can enjoy your ride and not worry at
              all about structural integrity and yield points of oak/walnut.
            </p>
          </TextContent>
        </Content>
        <Content>
          <img src={Weather} alt="" />
          <TextContent>
            <h2>Weather Resistent</h2>
            <p>
              We coated our wooden handlebars with a special weather-resistant
              varnish that lets your handlebar looks great even when exposed to
              the sun over longer periods of time and protects from a reasonable
              amount of rain.
            </p>
          </TextContent>
        </Content>
      </ContentWrapper>
    </Wrapper>
  );
}

export default ProductDetails;

const Wrapper = styled.section`
  background: ${light};
  display: grid;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-gap: 2em;
  margin: 4em auto;
  align-items: start;
  max-width: 90%;
  grid-auto-rows: 1fr 1fr;

  ${mq[1]} {
    grid-template-columns: 1fr 1fr;
    grid-gap: 4em;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-gap: 1em;
  align-items: start;
  justify-items: center;
  img {
    max-width: 70px;
    align-self: start;
  }
  ${mq[2]} {
    max-width: 450px;
  }
`;

const TextContent = styled.div`
  color: ${darktext};
  text-align: center;
  p {
    line-height: 1.5;
    font-size: 1em;
  }
`;
