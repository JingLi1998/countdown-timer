import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  height: 4rem;
  background-color: ${(props) => props.theme.black};
  display: flex;
  align-items: center;
  padding: 0 2rem;
  /* color: ${(props) => props.theme.yellow}; */
  color: white;
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
