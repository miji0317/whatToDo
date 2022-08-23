import React from "react";
import styled from "styled-components";
import TodoHeader from "./TodoHeader";
import TodoBody from "./TodoBody";
import TodoCreate from "./TodoCreate";

export default function TodoBox() {
  return (
    <Container>
      <TodoHeader />
      <TodoBody />
      <TodoCreate />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 512px;
  height: 90vh;
  background: white;
  border-radius: 20px;
  box-shadow: 5px 5px 10px -1px #dedede;
`;