import React from "react";
import styled from "styled-components";

import breakpoints from "../utils/breakpoints";

const StyledCard = styled.div`
  box-shadow: 4px 4px 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 1rem;
  background-color: white;
  z-index: 1;

  @media ${breakpoints.lg} {
    padding: 2rem;
  }
`;

const Card = ({ className, children }) => {
  return <StyledCard className={className}>{children}</StyledCard>;
};

export default Card;
