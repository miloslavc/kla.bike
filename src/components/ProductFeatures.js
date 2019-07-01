import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

import { details as DATA } from "../assets";
import { black, gray, darktext, primary, mq } from "../utilities";
import { H1, H2, P } from "../elements";

const INTERVAL = 3000;

function ProductFeatures() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex === DATA.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(prev => prev + 1);
      }
    }, INTERVAL);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleClick = key => {
    setCurrentIndex(key);
  };

  return (
    <Wrapper>
      <Details>
        <Content>
          <H2>{DATA[currentIndex].title}</H2>
          <H1>{DATA[currentIndex].sub}</H1>
          <P>{DATA[currentIndex].desc}</P>
        </Content>
        <Progress>
          {DATA.map((key, index) => (
            <ProgressBar
              key={key.title}
              onClick={() => handleClick(index)}
              value={DATA[currentIndex].title === key.title ? 100 : 0}
            >
              <div>
                <span />
              </div>
              <p>{key.title}</p>
            </ProgressBar>
          ))}
        </Progress>
      </Details>
      <Image>
        <img src={DATA[currentIndex].image} alt="Kla Wooden Handlebar" />
      </Image>
    </Wrapper>
  );
}

export default ProductFeatures;

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  grid-gap: 1em;
  max-width: 90%;
  margin: 0 auto;
  width: 100%;
  align-items: center;
  justify-items: center;
  grid-auto-rows: 1fr 1fr;

  ${mq[2]} {
    grid-template-columns: 1fr 1fr;
  }
`;

const Details = styled.div`
  max-width: 400px;
  color: ${black};
  display: grid;
  grid-auto-rows: 1fr auto;
`;

const Content = styled.div`
  align-self: baseline;
  min-height: 250px;
  color: ${darktext};
  text-align: center;
  ${mq[2]} {
    text-align: left;
  }
`;

const Image = styled.div`
  height: auto;
  width: 100%;
  img {
    max-width: 100%;
  }
`;

const Progress = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: start;
`;

const ProgressBar = styled.div`
  width: 100%;
  cursor: pointer;
  div {
    width: 90%;
    height: 5px;
    background: ${gray};
  }
  span {
    width: ${({ value }) => value}%;
    height: 100%;
    background: ${primary};
    display: ${({ value }) => (value === 100 ? "block" : "hidden")};
    transition: width 3s ease-in-out;
  }
  p {
    color: ${({ value }) => (value === 100 ? primary : gray)};
    font-size: 0.8em;
    font-weight: 500;
  }
`;
