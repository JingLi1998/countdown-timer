import React from "react";
import styled from "styled-components";

import breakpoints from "../utils/breakpoints";

const StyledClock = styled.div`
  padding-bottom: 1rem;
  margin-right: 1rem;
`;

const DisplayTime = styled.div`
  font-weight: 700;
  font-size: 4rem;
  color: white;

  @media ${breakpoints.lg} {
    font-size: 5rem;
  }

  @media ${breakpoints.xl} {
    font-size: 6rem;
  }
`;

const DisplayDate = styled.div`
  font-weight: 700;
  font-size: 2rem;
  /* margin-bottom: 8rem; */
  margin-left: 0.5rem;
  color: white;

  @media ${breakpoints.lg} {
    font-size: 2.5rem;
  }

  @media ${breakpoints.xl} {
    font-size: 3rem;
  }
`;

const Clock = ({ currentDateTime }) => {
  return (
    <StyledClock>
      <DisplayTime>{currentDateTime.format("kk:mm:ss")}</DisplayTime>
      <DisplayDate>{currentDateTime.format("DD/MM/YYYY")}</DisplayDate>
    </StyledClock>
  );
};

export default Clock;
