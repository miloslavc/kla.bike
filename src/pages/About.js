import React from "react";
import styled from "@emotion/styled";
import { Link } from "@reach/router";

import Footer from "../layouts/Footer";

import Craftsmanship from "../images/about-wood-craftsmanship.jpg";
import Metal from "../images/about-metal.jpg";
import Design from "../images/about-design.jpg";

import { darktext, mq } from "../utilities";
import { SecondaryButtonNav, H3, P } from "../elements";

function About() {
  return (
    <>
      <Wrapper>
        <Title>
          <h1>About kla</h1>
          <P>
            The kla project was born in 2017, with a simple mission: to break
            the barriers and stereotypes and to bring fun and joy to each ride.
            we pride ourselves on craftsmanship, attention to details and
            quality. Our goal is to add uniqueness and combine that with
            elegance and innovation, with a contemporary twist and reflects the
            aesthetic lines of today's world, with an eye to tradition.
          </P>
        </Title>
        <Image>
          <img src={Craftsmanship} alt="Wood craftsmanship" />
        </Image>
        <Side>
          <H3>Unique</H3>
          <P>Bring a unique and timeless look to your bike.</P>
        </Side>
        <Image className="metal">
          <img src={Metal} alt="Wood craftsmanship" />
        </Image>
        <Side className="metal-text">
          <H3>Uncompromising</H3>
          <P>Ride without worry.</P>
        </Side>
        <Image>
          <img src={Design} alt="Wood craftsmanship" />
        </Image>
        <Side>
          <H3>Handmade</H3>
          <P>Handmade quality and minimal design.</P>
        </Side>
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

export default About;

const Wrapper = styled.section`
  min-height: 93vh;
  display: grid;
  align-items: center;
  justify-items: center;
  max-width: 90%;
  margin: 0 auto;
  grid-gap: 0.5em;
  ${mq[0]} {
    grid-template-columns: 1fr 1fr;
    grid-gap: 4em;
    max-width: 75%;
    .metal {
      grid-column: 2;
    }
    .metal-text {
      grid-column: 1;
      grid-row: 3;
    }
  }
  ${mq[1]} {
    max-width: 60%;
  }
`;

const Title = styled.div`
  grid-column: 1/-1;
  text-align: center;
  color: ${darktext};
  padding: 4rem 0;
  h1 {
    font-size: 4em;
  }
`;
const Image = styled.div`
  img {
    max-width: 100%;
  }
`;

const Side = styled.div`
  color: ${darktext};
  justify-self: start;
`;

const CTA = styled.div`
  padding: 3em 0;
  grid-column: 1/-1;
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
