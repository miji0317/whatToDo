import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

export default function TodoBody() {
  return (
    <Body>
      <TodoItem text="산책하기🚶🏻‍♀️" done={true} />
      <TodoItem text="뽀삐 밥 주기🐶" done={true} />
      <TodoItem text="영양제 챙겨 먹기💊" done={false} />
      <TodoItem text="전공 서적 사기📔" done={false} />
    </Body>
  );
}

const Body = styled.div`
  flex: 1;
  overflow-x: auto;
  padding: 20px 30px;
`;
