import React from "react";
import styled from "@emotion/styled";
import { Link } from "@reach/router";

import { white, black, mq } from "../utilities";

function Footer() {
  return (
    <Wrapper>
      <Content>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/about">Company</Link>
          <Link to="/help">Support</Link>
          <Link to="/order">Order</Link>
        </Nav>
        <Email>
          <input type="email" placeholder="Email" />
          <button>Subscribe</button>
          <p>Stay up to date with kla deals</p>
        </Email>
      </Content>
      <Copyright>
        <p> &copy; {new Date().getFullYear()}. All rights received.</p>
        <Link to="/terms-and-conditions">Terms Condition</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
      </Copyright>
      <Developer
        href="https://miloslavc.com "
        rel="noopener noreferrer"
        target="_blank"
      >
        by miloslavc.com
      </Developer>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.footer`
  background: ${black};
  height: 100%;
`;

const Content = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  width: 80%;
  padding: 2em 0;
  margin: 0 auto;
  border-bottom: 1px solid ${white};
  grid-auto-rows: auto;
  ${mq[2]} {
    grid-template-columns: 1fr 1fr;
    align-items: baseline;
    justify-items: start;
    padding-bottom: 6em;
  }
`;

const Nav = styled.div`
  padding: 2em 0;
  a {
    color: ${white};
    margin-right: 1em;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1em;
    &:last-of-type {
      margin-right: 0;
    }
    ${mq[1]} {
      margin-right: 3em;
    }
  }
`;

const Email = styled.form`
  justify-self: center;
  ${mq[2]} {
    justify-self: end;
  }

  input {
    background: ${black};
    border: 2px solid ${white};
    padding: 0.5em 0.3em;
    max-width: 60%;
    ${mq[1]} {
      max-width: 100%;
    }
  }
  p,
  input {
    color: ${white};
  }
  p,
  button,
  input {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1em;
  }
  button {
    padding: 0.5em 0.5em;
    background: ${white};
    border: 2px solid ${white};
  }
  p {
    text-align: center;
  }
`;

const Copyright = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  p,
  a {
    font-size: 0.7em;
    color: ${white};
  }

  p {
    margin-right: auto;
  }
  a {
    &:first-of-type {
      margin-right: 1em;
    }
  }
`;

const Developer = styled.a`
  text-align: center;
  font-size: 0.7em;
  color: #303030;
  display: block;
  padding-bottom: 1em;
`;
