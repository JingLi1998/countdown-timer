import React, { useState, useEffect } from "react";
import styled from "styled-components";
import moment from "moment";

import Card from "./Card";
import { prependZero } from "../utils/time";

const StyledCard = styled(Card)`
  margin-bottom: 1rem;
  height: 150px;
  display: flex;
  align-items: center;
`;

const Heading = styled.h1`
  font-weight: 700;
  font-size: 2.5rem;
  margin: 0;
  color: ${(props) => props.theme.black};
`;

const SubHeading = styled.h2`
  font-weight: 500;
  font-size: 1.5rem;
  margin: 0;
  color: ${(props) => props.theme.black};
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  margin: 0;
  color: ${(props) => props.theme.black};
`;

const Button = styled.button`
  margin-top: 1rem;
  font-size: 1rem;
  padding: 0.5rem;
  color: white;
  background: #a10303;
  border: none;
`;

const Timer = ({ currentDateTime, name, date, time, index, onRemoveTimer }) => {
  const [timeRemaining, setTimeRemaining] = useState("00:00:00:00");

  useEffect(() => {
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
    const timeDiffString = `
      ${prependZero(Math.floor(timeDiff.asDays()))}:${prependZero(
      timeDiff.hours()
    )}:${prependZero(timeDiff.minutes())}:${prependZero(timeDiff.seconds())}
      `;
    setTimeRemaining(timeDiffString);
  }, [date, time, currentDateTime]);

  return (
    <StyledCard>
      <div>
        <Heading>{name}</Heading>
        <SubHeading>Date: {date}</SubHeading>
        <SubHeading>Time: {time}</SubHeading>
        <Paragraph>Remaining: {timeRemaining}</Paragraph>
        <Button onClick={onRemoveTimer.bind(this, index)}>Remove</Button>
      </div>
    </StyledCard>
  );
};

export default Timer;
