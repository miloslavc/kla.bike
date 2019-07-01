import React from "react";
import styled from "@emotion/styled";
import { Link } from "@reach/router";

import homeHero from "../images/home-hero.png";

import { white, darktext, mq } from "../utilities";

import { SecondaryButton, PrimaryButtonNav } from "../elements";

function Hero({ handleScroll }) {
  return (
    <Wrapper>
      <Content>
        <Heading>
          <span />
          More Fun. More Nature.
        </Heading>
        <Desc>
          Premium grade wooden handlebars. Designed by cyclists for cyclists.
        </Desc>
        <Link className="nav" to="/order">
          Order
        </Link>
        <SecondaryButton className="button" onClick={handleScroll}>
          See Details
        </SecondaryButton>
      </Content>
      <Image>
        <img src={homeHero} alt="Kla Wooden Handlebar" />
      </Image>
    </Wrapper>
  );
}

export default Hero;

const Wrapper = styled.section`
  min-height: 93vh;
  background: ${white};
  display: grid;
  align-items: center;
  justify-items: center;
  max-width: 90%;
  margin: 0 auto;
  grid-template-rows: 1fr;
  ${mq[3]} {
    grid-template-columns: 1fr 1fr;
  }
`;

const Content = styled.div`
  display: grid;
  align-items: center;
  text-align: center;
  padding: 2em 0;
  .nav {
    ${PrimaryButtonNav}
  }
  ${mq[3]} {
    justify-items: start;
    text-align: left;
    .button,
    .nav {
      justify-self: start;
    }
  }
`;

const Heading = styled.h1`
  color: ${darktext};
  line-height: 1;
  position: relative;
  text-transform: uppercase;
  margin: 0 0 1rem;
  font-size: 12vw;
  ${mq[1]} {
    font-size: 8vw;
  }
  ${mq[2]} {
    font-size: 5.375vw;
  }
`;

const Desc = styled.p`
  color: ${darktext};
  font-size: 1em;
  position: relative;
  margin-bottom: 1rem;
`;

const Image = styled.div`
  align-self: end;
  max-width: 90%;
  ${mq[1]} {
    max-width: 70%;
  }
  ${mq[3]} {
    max-width: 100%;
  }
  img {
    width: 100%;
    object-fit: cover;
  }
`;
