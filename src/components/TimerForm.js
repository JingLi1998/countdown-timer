import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import Card from "./Card";
import { datePattern, timePattern } from "../utils/regex";

const StyledCard = styled(Card)`
  height: 450px;
  width: 600px;
  margin-top: 2rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 75%;
`;

const Input = styled.input`
  height: 2.5rem;
  font-size: 1.5rem;
  display: block;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.black};
  margin-bottom: 0rem;
  padding: 0 0.5rem;
`;

const Button = styled.button`
  margin-top: 2rem;
  background-color: ${(props) => props.theme.black};
  border: none;
  color: white;
  padding: 1rem 0rem;
  text-transform: uppercase;
  width: 100%;
  cursor: pointer;
  font-weight: 700;
`;

const Heading = styled.h1`
  color: ${(props) => props.theme.black};
  font-weight: 700;
  font-size: 1.5rem;
  text-transform: uppercase;
`;

const StyledError = styled.div`
  color: red;
  height: 0.25rem;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-weight: 700;
  font-size: 1rem;
  margin-top: 0.5rem;
`;

const TimerForm = ({ onAddTimer }) => {
  const { register, handleSubmit, errors, reset, clearError } = useForm({
    reValidateMode: "onBlur",
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    onAddTimer(data);
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
          {errors.name && <small>{errors.name.message}</small>}
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
          {errors.time && <small>{errors.time.message}</small>}
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
          {errors.date && <small>{errors.date.message}</small>}
        </StyledError>
        <Button type="submit">Add Timer</Button>
      </StyledForm>
    </StyledCard>
  );
};

export default TimerForm;
