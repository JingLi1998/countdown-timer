import React from "react";
import styled from "styled-components";

import breakpoints from "../utils/breakpoints";

const ContainerWrapper = styled.div`
  padding: 2rem 1rem;

  @media ${breakpoints.md} {
    padding: 4rem 2rem;
  }
`;

const Container = (props) => {
  return <ContainerWrapper>{props.children}</ContainerWrapper>;
};

export default Container;
