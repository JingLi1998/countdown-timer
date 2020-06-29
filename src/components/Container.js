import React from "react";
import styled from "styled-components";

const ContainerWrapper = styled.div`
  padding: 4rem 10rem;
  background-color: ${(props) => props.theme.pink};
`;

const Container = (props) => {
  return <ContainerWrapper>{props.children}</ContainerWrapper>;
};

export default Container;
