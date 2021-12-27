import React from "react";
import styled from "styled-components";

import Sidebar from "./Sidebar";
import Videos from "./Videos";

export default function Main() {
  return (
    <MainContainer>
      <Sidebar />
      <Videos />
    </MainContainer>
  );
}

const MainContainer = styled.main`
  height: calc(100vh - 70px);
  display: flex;
  overflow: hidden;
`;
