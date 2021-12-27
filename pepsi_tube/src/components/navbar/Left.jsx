import React from "react";
import styled from "styled-components";

export default function Left() {
  return (
    <NavLeft>
      <Icon>
        <i className="material-icons"> menu </i>
      </Icon>
      <H1>PepsiTube</H1>
    </NavLeft>
  );
}

const NavLeft = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  width: 100px;
  margin-left: 15px;
  color: red;
`;

const Icon = styled.i`
  padding: 0px 7px;
  cursor: pointer;
`;
