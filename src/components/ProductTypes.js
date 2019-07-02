import React, { useState } from "react";
import styled from "@emotion/styled";

import { primary, white, mq } from "../utilities";
import TypeAImage from "../images/home-type-a.png";
import TypeBImage from "../images/home-type-b.png";

// forwardRef for scrollIntoView
const ProductTypes = React.forwardRef((props, ref) => {
  const [typeA, setTypeA] = useState(true);
  const [typeB, setTypeB] = useState(true);

  const handleLeftMouseEnter = () => {
    setTypeA(!typeA);
  };

  const handleRightMouseEnter = () => {
    setTypeB(!typeB);
  };

  const handleLeave = () => {
    setTypeA(true);
    setTypeB(true);
  };

  return (
    <Wrapper ref={ref}>
      <ContentWrapper>
        <Content
          typeA={typeA}
          onMouseEnter={handleLeftMouseEnter}
          onMouseLeave={handleLeave}
        >
          {typeA && (
            <ContentText>
              <p>type A</p>
              <h1>Oak</h1>
            </ContentText>
          )}

          <img src={TypeAImage} alt="Oak" />
        </Content>
        <Content
          typeB={typeB}
          onMouseEnter={handleRightMouseEnter}
          onMouseLeave={handleLeave}
        >
          {typeB && (
            <ContentTextRight>
              <p>type B</p>
              <h1>Walnut</h1>
            </ContentTextRight>
          )}
          <img src={TypeBImage} alt="Oak" />
        </Content>
      </ContentWrapper>
    </Wrapper>
  );
});

export default ProductTypes;

const Wrapper = styled.section`
  width: 80%;
  margin: 2rem auto;
  display: grid;
  align-items: center;
  justify-items: center;
  ${mq[1]} {
    margin: 0 auto;
  }
`;
const ContentWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-gap: 2em;
  ${mq[1]} {
    grid-auto-rows: 1fr;
    grid-gap: 2em;
    grid-template-columns: 1fr 1fr;
    min-height: 100vh;
  }
  ${mq[2]} {
    grid-gap: 10em;
  }
`;

const Content = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  width: 100%;
  img {
    max-width: 100%;
    grid-column: 1;
    grid-row: 1;
  }
`;

const ContentText = styled.div`
  max-width: 200px;
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  padding: 1em;
  color: ${white};
  grid-column: 1;
  grid-row: 1;
  z-index: 99;
  background: ${primary};
  p,
  h1 {
    margin: 0;
    text-transform: capitalize;
  }
  h1 {
    font-size: 2.5em;
  }
  &:hover {
    cursor: pointer;
  }
`;

const ContentTextRight = styled(ContentText)`
  background: ${white};
  color: ${primary};
`;
