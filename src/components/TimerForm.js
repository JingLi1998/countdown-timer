import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import Card from "./Card";
import { datePattern, timePattern } from "../utils/regex";
import breakpoints from "../utils/breakpoints";

const StyledCard = styled(Card)`
  @media ${breakpoints.md} {
    margin-top: 1rem;
    max-width: 50%;
  }

  @media ${breakpoints.xl} {
    margin-top: 0;
    max-width: 40%;
  }
`;

const StyledForm = styled.form`
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: space-evenly; */
  /* height: 75%; */
`;

const Heading = styled.h1`
  color: ${(props) => props.theme.black};
  font-weight: 700;
  font-size: 1rem;
  margin: 1rem 0;

  @media ${breakpoints.sm} {
    font-size: 1.25rem;
  }

  @media ${breakpoints.md} {
    font-size: 1.5rem;
  }

  @media ${breakpoints.lg} {
    font-size: 2rem;
  }
`;

const Label = styled.label`
  font-weight: 700;
  font-size: 1rem;
`;

const Input = styled.input`
  height: 2rem;
  font-size: 1rem;
  /* display: block; */
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.black};
  width: 100%;
  padding: 0 0.5rem;
  box-sizing: border-box;
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.black};
  border: none;
  color: white;
  padding: 1rem 0rem;
  text-transform: uppercase;
  width: 100%;
  cursor: pointer;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const StyledError = styled.div`
  color: red;
  height: 0.25rem;
  margin-bottom: 1.5rem;
  font-size: 0.75rem;
`;

const TimerForm = ({ onAddTimer }) => {
  const { register, handleSubmit, errors, reset, clearError } = useForm({
    reValidateMode: "onBlur",
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    onAddTimer({ ...data, complete: false });
    reset();
    clearError();
  };

  return (
    <StyledCard>
      <Heading>Excited for something? Add a countdown timer for it!</Heading>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Label>Event Name</Label>
        <Input
          name="name"
          placeholder="My Birthday"
          ref={register({ required: "This field is required" })}
        />
        <StyledError>
          {errors.name && <span>{errors.name.message}</span>}
        </StyledError>
        <Label>Event Time</Label>
        <Input
          name="time"
          placeholder="24:00"
          ref={register({
            pattern: {
              value: timePattern,
              message: "Please use 24:00 hour format",
            },
            required: "This field is required",
          })}
        />
        <StyledError>
          {errors.time && <span>{errors.time.message}</span>}
        </StyledError>
        <Label>Event Date</Label>
        <Input
          name="date"
          placeholder="01/01/2020"
          ref={register({
            pattern: {
              value: datePattern,
              message: "Please use 01/01/2020 date format",
            },
            required: "This field is required",
          })}
        />
        <StyledError>
          {errors.date && <span>{errors.date.message}</span>}
        </StyledError>
        <Button type="submit">Add Timer</Button>
      </StyledForm>
    </StyledCard>
  );
};

export default TimerForm;
