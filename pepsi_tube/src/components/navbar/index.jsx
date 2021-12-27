import React from "react";
import styled from "styled-components";

import Center from "./Center";
import Left from "./Left";
import Right from "./Right";

export default function Navbar() {
  return (
    <Nav>
      <Left />
      <Center />
      <Right />
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 16px;
`;
