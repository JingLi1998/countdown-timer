import React from "react";
import styled from "styled-components";

import breakpoints from "../utils/breakpoints";

const Nav = styled.nav`
  height: 3rem;
  background-color: ${(props) => props.theme.black};
  display: flex;
  align-items: center;
  padding: 0 1rem;
  color: white;
  width: 100%;

  @media ${breakpoints.md} {
    padding: 0 2rem;
  }
`;

const NavLink = styled.a`
  font-weight: 700;
  text-transform: uppercase;
`;

const Navbar = () => {
  return (
    <Nav>
      <NavLink>Countdown Timer</NavLink>
    </Nav>
  );
};

export default Navbar;
