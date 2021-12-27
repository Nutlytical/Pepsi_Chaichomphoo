import React from "react";
import styled from "styled-components";

export default function Right() {
  return (
    <div>
      <Icon appears>
        <i className="material-icons">search</i>
      </Icon>
      <Icon>
        <i className="material-icons"> videocam </i>
      </Icon>
      <Icon>
        <i className="material-icons"> apps </i>
      </Icon>
      <Icon>
        <i className="material-icons"> notifications </i>
      </Icon>
      <Icon appears>
        <i className="material-icons"> account_circle </i>
      </Icon>
    </div>
  );
}

const Icon = styled.i`
  padding: 0px 7px;
  cursor: pointer;

  @media (max-width: 425px) {
    display: ${(props) => (props.appears ? "inline" : "none")};
  }
`;
