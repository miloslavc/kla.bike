import React from "react";
import styled from "@emotion/styled";
import { Link } from "@reach/router";

import Footer from "../layouts/Footer";

import { darktext, mq, light, white, primary } from "../utilities";
import { SecondaryButtonNav, P, H3 } from "../elements";
import Email from "../assets/icons/email.svg";

function Help() {
  return (
    <>
      <Wrapper>
        <Title>
          <h1>Help Center</h1>
          <P>If you or your kla handlebar have an issue, we're here to help.</P>
        </Title>
        <Content>
          <h1>Get in Touch</h1>
          <div>
            <img src={Email} alt="" />

            <H3>Drop Us a Line</H3>
            <P>
              Have questions you couldn't solve? Send us a message and we'll be
              in touch with you as soon as possible.
            </P>
            <a href="mailto:support@kla.bike" className="nav">
              Send a message &rarr;
            </a>
          </div>
        </Content>

        <CTA>
          <h1>Get your kla now</h1>
          <Link className="nav" to="/order">
            Order Now
          </Link>
        </CTA>
      </Wrapper>
      <Footer />
    </>
  );
}

export default Help;

const Wrapper = styled.section`
  min-height: 93vh;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-gap: 0.5em;
  ${mq[0]} {
    grid-gap: 2em;
  }
`;

const Title = styled.div`
  text-align: center;
  color: ${darktext};
  padding: 4rem 0;
  max-width: 90%;
  margin: 0 auto;
  h1 {
    font-size: 4em;
  }
  p {
    font-size: 1.125em;
    line-height: 1.2;
  }
`;
const Content = styled.div`
  background: ${light};
  height: 100%;
  width: 100%;
  display: grid;
  align-items: center;
  place-items: center;
  padding: 4em;
  div {
    max-width: 300px;
    background: ${white};
    padding: 4em 1em 1em;
    text-align: center;
    p {
      line-height: 1.5;
      margin-bottom: 1em;
    }
    img {
      max-width: 70px;
    }
    .nav {
      color: ${primary};
      font-weight: 600;
      text-transform: uppercase;
    }
  }
`;

const CTA = styled.div`
  padding: 3em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .nav {
    ${SecondaryButtonNav}
  }
  h1 {
    text-transform: uppercase;
  }
`;
