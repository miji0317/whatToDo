import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

export default function TodoBody({ todo }) {
  return (
    todo && (
      <Body>
        {todo.length === 0 ? (
          <div>등록된 할 일이 없습니다.</div>
        ) : (
          todo.map((item) => (
            <TodoItem key={item.id} text={item.text} done={item.done} />
          ))
        )}
      </Body>
    )
  );
}

const Body = styled.div`
  flex: 1;
  overflow-x: auto;
  padding: 20px 30px;
`;
