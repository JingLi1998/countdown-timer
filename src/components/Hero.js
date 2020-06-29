import React from "react";
import styled from "styled-components";

const StyledHero = styled.section`
  height: 600px;
  width: 100%;
  background-color: ${(props) => props.theme.black};
`;

const Svg = styled.svg`
  position: absolute;
  height: 5vw;
  width: 100%;
  top: calc(600px + 4rem - 5vw);
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
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
