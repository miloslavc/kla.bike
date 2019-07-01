import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { reviews as DATA } from "../assets";
import { white, black, gray, darkgray, mq } from "../utilities";

import QuotesIcon from "../assets/icons/QuotesIcon";

const INTERVAL = 3000;

function Testimonial() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (value === DATA.length - 1) {
        setValue(0);
      } else {
        setValue(prev => prev + 1);
      }
    }, INTERVAL);
    return () => clearInterval(timer);
  }, [value]);

  const handleClick = index => {
    setValue(index);
  };

  return (
    <Wrapper>
      <ContentWrapper>
        <QuotesIcon />
        {DATA.length > 0 && (
          <Content key={DATA[value].name}>
            <p>{DATA[value].desc}</p>
            <h1>{DATA[value].name}</h1>
          </Content>
        )}
      </ContentWrapper>
      <DotWrapper>
        {DATA.map((key, index) => (
          <Dot
            key={key.name}
            onClick={() => handleClick(index)}
            color={value === index ? gray : darkgray}
          />
        ))}
      </DotWrapper>
    </Wrapper>
  );
}

export default Testimonial;

const Wrapper = styled.section`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 0.5fr;
  background: ${black};
  padding: 2em;
  ${mq[1]} {
    padding: 5em;
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  align-items: center;
  place-items: center;
  max-width: 450px;
  margin: 0 auto;
  min-height: 100%;
  position: relative;
  svg {
    position: absolute;
    max-width: 350px;
    pointer-events: none;
    max-height: 100%;
  }
`;
const Content = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  line-height: 1.2;
  color: ${white};
  z-index: 2;
  height: 100%;
  ${mq[1]} {
    width: 100%;
  }
  h1 {
    font-size: 1.5em;
    margin-bottom: 0.5rem;
  }
  p {
    margin-bottom: 3em;
    line-height: 1.25;
  }
`;

const DotWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${DATA.length}, 1fr);
  align-items: center;
  justify-items: center;
  width: 10em;
  margin: 0 auto;
`;

const Dot = styled.span`
  height: 1rem;
  width: 1rem;
  background: ${({ color }) => color};
  border-radius: 50%;
  cursor: pointer;
`;
