import React from "react";
import styled from "styled-components";

const DisplayDate = styled.div`
  font-weight: 700;
  font-size: 3.5rem;
  margin-bottom: 8rem;
  margin-left: 1.5rem;
  color: white;
`;

const DisplayTime = styled.div`
  font-weight: 700;
  font-size: 9rem;
  color: white;
`;

const Clock = ({ currentDateTime }) => {
  return (
    <div>
      <DisplayTime>{currentDateTime.format("kk:mm:ss")}</DisplayTime>
      <DisplayDate>{currentDateTime.format("DD/MM/YYYY")}</DisplayDate>
    </div>
  );
};

export default Clock;
