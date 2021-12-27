import React from "react";
import styled from "styled-components";

export default function Sidebar() {
  return (
    <SidebarContainer>
      <Categories>
        <Category>
          <i className="material-icons"> home </i>
          <Span> Home </Span>
        </Category>
        <Category>
          <i className="material-icons"> local_fire_department </i>
          <Span> Trending </Span>
        </Category>
        <Category>
          <i className="material-icons"> subscriptions </i>
          <Span> Subscriptions </Span>
        </Category>
      </Categories>
      <Hr />
      <Categories>
        <Category>
          <i className="material-icons"> library_add_check </i>
          <Span> Library </Span>
        </Category>
        <Category>
          <i className="material-icons"> history </i>
          <Span> history </Span>
        </Category>
        <Category>
          <i className="material-icons"> play_arrow </i>
          <Span> Your Video </Span>
        </Category>
        <Category>
          <i className="material-icons"> watch_later </i>
          <Span> Watch Later </Span>
        </Category>
        <Category>
          <i className="material-icons"> thumb_up </i>
          <Span> Liked Videos </Span>
        </Category>
      </Categories>
      <Hr />
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  height: 100%;
  width: 230px;
  background-color: white;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Categories = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Category = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 25px;

  &:hover {
    background: #e5e5e5;
    cursor: pointer;
  }
`;

const Span = styled.span`
  margin-left: 15px;
`;

const Hr = styled.hr`
  height: 1px;
  background: #e5e5e5;
  border: none;
`;
