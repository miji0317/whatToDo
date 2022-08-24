import { React, useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { HiCheckCircle, HiOutlineCheckCircle } from "react-icons/hi";
import { MdDelete } from "react-icons/md";

export default function TodoBody({ todo, getTodo }) {
  // 할 일 완료 여부 체크
  async function doneTodo(id, done) {
    try {
      const response = await axios.patch(`http://localhost:3333/todo/${id}`, {
        done: !done,
      });
      getTodo();
    } catch (error) {
      console.log(error);
    }
  }

  // 할 일 삭제
  async function deleteTodo(id) {
    try {
      const response = await axios.delete(`http://localhost:3333/todo/${id}`);
      getTodo();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    todo && (
      <Body>
        {todo.length === 0 ? (
          <div>등록된 할 일이 없습니다.</div>
        ) : (
          todo.map((item) => (
            <TodoItem key={item.id}>
              <div
                id={item.id}
                done={item.done}
                onClick={(e) => doneTodo(item.id, item.done)}
              >
                {item.done ? (
                  <HiCheckCircle
                    color="#FFB3B3"
                    size={"20px"}
                    cursor={"pointer"}
                  />
                ) : (
                  <HiOutlineCheckCircle
                    color="#d4d4d4"
                    size={"20px"}
                    cursor={"pointer"}
                  />
                )}
              </div>

              <Text done={item.done}>{item.text}</Text>

              <MdDelete
                id={item.id}
                className="delBtn"
                size={"20px"}
                onClick={(e) => deleteTodo(item.id)}
              />
            </TodoItem>
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

const TodoItem = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;

  & .delBtn {
    color: #d4d4d4;
    cursor: pointer;
    &:hover {
      color: #ff6b6b;
    }
  }
`;

const Text = styled.div`
  flex: 1;
  font-size: 14px;
  font-family: "EarlyFontDiary";
  color: #495057;
  margin: 0 10px;
  ${({ done }) =>
    done &&
    `
    text-decoration: line-through;
    color: #d4d4d4;
  `}
`;
