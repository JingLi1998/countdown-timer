import React from "react";
import styled from "styled-components";

import Card from "./Card";
import Timer from "./Timer";
import breakpoints from "../utils/breakpoints";

const StyledCard = styled(Card)`
  /* width: 100%; */
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;

  @media ${breakpoints.md} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${breakpoints.lg} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media ${breakpoints.xl} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const TimerList = ({
  timers,
  currentDateTime,
  onRemoveTimer,
  onCompleteTimer,
}) => {
  return (
    <Grid>
      {timers.length ? (
        timers.map((timer, index) => (
          <Timer
            key={timer.name}
            {...timer}
            index={index}
            currentDateTime={currentDateTime}
            onRemoveTimer={onRemoveTimer}
            onCompleteTimer={onCompleteTimer}
          />
        ))
      ) : (
        <StyledCard>No timers added</StyledCard>
      )}
    </Grid>
  );
};

export default TimerList;
