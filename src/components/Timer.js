import React, { useState, useEffect } from "react";
import styled from "styled-components";
import moment from "moment";

import Card from "./Card";
import { prependZero } from "../utils/time";
import breakpoints from "../utils/breakpoints";

const StyledCard = styled(Card)``;

const Heading = styled.h1`
  font-weight: 700;
  font-size: 2rem;
  margin: 0;
  color: ${(props) => props.theme.black};
`;

const SubHeading = styled.h2`
  font-size: 1rem;
  margin: 0;
  color: ${(props) => props.theme.black};

  @media ${breakpoints.md} {
    font-size: 1.25rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1rem;
  margin: 0;
  color: ${(props) => props.theme.black};
  @media ${breakpoints.md} {
    font-size: 1.25rem;
  }
`;

const Button = styled.button`
  margin-top: 1rem;
  font-size: 1rem;
  padding: 0.5rem;
  color: white;
  background: #a10303;
  border: none;
`;

const Span = styled.span`
  color: green;
`;

const Timer = ({
  currentDateTime,
  name,
  date,
  time,
  complete,
  index,
  onRemoveTimer,
  onCompleteTimer,
}) => {
  const [timeRemaining, setTimeRemaining] = useState("00:00:00:00");

  useEffect(() => {
    if (!complete) {
      const [day, month, year] = date.split("/");
      const [hour, minute] = time.split(":");
      const finishDateTime = moment({
        year: Number(year),
        month: Number(month) - 1,
        day: Number(day),
        hour: Number(hour),
        minute: Number(minute),
      });
      const timeDiff = moment.duration(finishDateTime.diff(currentDateTime));
      if (timeDiff.milliseconds() >= 0) {
        const timeDiffString = `
        ${prependZero(Math.floor(timeDiff.asDays()))}:${prependZero(
          timeDiff.hours()
        )}:${prependZero(timeDiff.minutes())}:${prependZero(timeDiff.seconds())}
      `;
        setTimeRemaining(timeDiffString);
      } else {
        setTimeRemaining("00:00:00:00");
        onCompleteTimer(index);
        alert(`Timer for ${name} completed!`);
      }
    }
  }, [date, time, name, currentDateTime, complete, onCompleteTimer, index]);

  return (
    <StyledCard>
      <div>
        <Heading>
          {name}
          {complete && (
            <span>
              - <Span>Complete</Span>
            </span>
          )}
        </Heading>
        <SubHeading>Finish Date: {date}</SubHeading>
        <SubHeading>Finish Time: {time}</SubHeading>
        <Paragraph>Time Remaining: {timeRemaining}</Paragraph>
        <Button onClick={onRemoveTimer.bind(this, index)}>Remove</Button>
      </div>
    </StyledCard>
  );
};

export default Timer;
