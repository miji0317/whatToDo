import React from "react";
import styled from "styled-components";
import { HiCheckCircle, HiOutlineCheckCircle } from "react-icons/hi";
import { MdDelete } from "react-icons/md";

export default function TodoItem({ id, done, text }) {
  return (
    <TodoList>
      {done ? (
        <HiCheckCircle color="#FFB3B3" size={"20px"} cursor={"pointer"} />
      ) : (
        <HiOutlineCheckCircle
          color="#ced4da"
          size={"20px"}
          cursor={"pointer"}
        />
      )}
      <Text done={done}>{text}</Text>
      <Remove>
        <MdDelete size={"20px"} />
      </Remove>
    </TodoList>
  );
}

const TodoList = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const Text = styled.div`
  flex: 1;
  font-size: 14px;
  font-family: "EarlyFontDiary";
  color: #495057;
  margin-left: 10px;
  ${(props) =>
    props.done &&
    `
      text-decoration: line-through;
      color: #ced4da;
    `}
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;
