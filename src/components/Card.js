import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  box-shadow: 4px 4px 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 3rem;
  background-color: white;
  z-index: 1;
`;

const Card = ({ className, children }) => {
  return <StyledCard className={className}>{children}</StyledCard>;
};

export default Card;
