import React from "react";
import styled from "styled-components";

export default function Center() {
  return (
    <NavCenter>
      <Form>
        <Input type="text" placeholder="Search..." />
        <Button type="submit">
          <Icon>
            <i className="material-icons"> search </i>
          </Icon>
        </Button>
      </Form>
    </NavCenter>
  );
}

const NavCenter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 16px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Form = styled.form`
  border: 1px solid #ddd;
  height: 35px;
  margin: 0;
  padding: 0;
  display: flex;
`;

const Input = styled.input`
  width: 500px;
  padding: 10px;
  margin: 0;
  border-radius: 0;
  border: none;

  @media (max-width: 928px) {
    width: 300px;
  }
`;

const Button = styled.button`
  padding: 0;
  margin: 0;
  height: 100%;
  border: none;
  border-radius: 0;
`;

const Icon = styled.i`
  padding: 0px 7px;
  cursor: pointer;
`;
