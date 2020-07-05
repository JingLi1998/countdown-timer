import React from "react";
import styled from "styled-components";

import breakpoints from "../utils/breakpoints";

const StyledHero = styled.section`
  height: 600px;
  width: 100%;
  background-color: ${(props) => props.theme.black};

  @media ${breakpoints.md} {
    height: 450px;
  }

  @media ${breakpoints.lg} {
    height: 500px;
  }
`;

const Svg = styled.svg`
  position: absolute;
  height: 15vw;
  width: 100%;
  top: calc(600px + 3rem - 15vw);

  @media ${breakpoints.sm} {
    height: 10vw;
    top: calc(600px + 3rem - 10vw);
  }

  @media ${breakpoints.md} {
    height: 5vw;
    top: calc(450px + 3rem - 5vw);
  }

  @media ${breakpoints.lg} {
    height: 5vw;
    top: calc(500px + 3rem - 5vw);
  }
`;

const Div = styled.div`
  padding: 1rem;
  display: flex;
  width: 100%;
  flex-direction: column;

  @media ${breakpoints.md} {
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
`;

const Hero = (props) => {
  return (
    <StyledHero>
      <Div>{props.children}</Div>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon fill="#FDECF4" points="0,100 100,0 100,100" />
      </Svg>
    </StyledHero>
  );
};

export default Hero;
