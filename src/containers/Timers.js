import React, { useState, useEffect, useCallback } from "react";
import moment from "moment";

import Navbar from "../components/Navbar";
import Clock from "../components/Clock";
import Hero from "../components/Hero";
import Container from "../components/Container";
import TimerForm from "../components/TimerForm";
import TimerList from "../components/TimerList";

const Timers = () => {
  const [timers, setTimers] = useState([]);

  const [currentDateTime, setCurrentDateTime] = useState(moment());

  useEffect(() => {
    const storedTimers = JSON.parse(localStorage.getItem("timers"));
    if (storedTimers) setTimers(storedTimers);
    const interval = setInterval(() => {
      setCurrentDateTime(moment());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("timers", JSON.stringify(timers));
  }, [timers]);

  const addTimerHandler = useCallback(
    (timer) => {
      setTimers(timers.concat(timer));
    },
    [timers]
  );

  const removeTimerHandler = useCallback(
    (removeIndex) => {
      setTimers(timers.filter((_, index) => index !== removeIndex));
    },
    [timers]
  );

  return (
    <div>
      <Navbar />
      <Hero>
        <Clock currentDateTime={currentDateTime} />
        <TimerForm onAddTimer={addTimerHandler} />
      </Hero>
      <Container>
        <TimerList
          currentDateTime={currentDateTime}
          timers={timers}
          onRemoveTimer={removeTimerHandler}
        />
      </Container>
    </div>
  );
};

export default Timers;
