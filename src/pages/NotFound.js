import React from "react";
import styled from "@emotion/styled";
import { Link } from "@reach/router";

import BullBack from "../images/bull-back.png";
import { light, primary } from "../utilities";

function NotFound() {
  return (
    <Wrapper>
      <img src={BullBack} alt="Page Not Found" />
      <h1>Oops! I think you took a wrong turn there.</h1>
      <Link className="nav" to="/order">
        &#10229; Get back on the main road
      </Link>
    </Wrapper>
  );
}

export default NotFound;

const Wrapper = styled.section`
  min-height: 93vh;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-auto-rows: auto;
  /* max-width: 90%; */
  /* margin: 0 auto; */
  background: ${light};
  img {
    max-width: 100%;
  }
  .nav {
    color: ${primary};
    font-weight: 600;
    margin-bottom: 6rem;
  }
  h1 {
    text-align: center;
  }
`;
