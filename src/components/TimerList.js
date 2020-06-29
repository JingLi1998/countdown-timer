import React from "react";
import styled from "styled-components";

import Card from "./Card";
import Timer from "./Timer";

const StyledCard = styled(Card)`
  height: 100px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
`;

const TimerList = ({ timers, currentDateTime, onRemoveTimer }) => {
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
          />
        ))
      ) : (
        <StyledCard>No timers added</StyledCard>
      )}
    </Grid>
  );
};

export default TimerList;
